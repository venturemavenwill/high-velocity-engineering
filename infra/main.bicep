// HVE IQ v0 — read-only MCP server on Azure Container Apps.
//
// Deployed in two passes because the registry must exist before an image can be
// built into it. Pass 1 runs with the default placeholder image and creates the
// registry; then `az acr build` produces the real image; pass 2 supplies it.
// Bicep is idempotent, so re-running is safe and the second pass only changes
// the container image.
//
//   az deployment group create -g <rg> --template-file infra/main.bicep
//   az acr build --registry <acr> --image hve-iq:<tag> --file mcp/hve-iq/Dockerfile .
//   az deployment group create -g <rg> --template-file infra/main.bicep \
//        --parameters containerImage='<acr>.azurecr.io/hve-iq:<tag>'

@description('Location for all resources. Defaults to the resource group location.')
param location string = resourceGroup().location

@description('Short name used to derive resource names.')
@minLength(3)
@maxLength(12)
param appName string = 'hveiq'

@description('Container image to run. Left as a public placeholder on the first pass, before the registry exists.')
param containerImage string = 'mcr.microsoft.com/k8se/quickstart:latest'

@description('Shared secret required on /mcp. Empty means the endpoint is open, which is only acceptable while nothing depends on it.')
@secure()
param apiKey string = ''

// Unique but stable across redeployments of the same resource group.
var suffix = uniqueString(resourceGroup().id)
var acrName = toLower('${appName}acr${suffix}')
var tags = {
  application: 'hve-iq'
  purpose: 'read-only MCP server over the FDE/HVE knowledge graph'
  repository: 'high-velocity-engineering'
}

// ---------------------------------------------------------------- observability

resource logs 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: 'log-${appName}-${suffix}'
  location: location
  tags: tags
  properties: {
    sku: { name: 'PerGB2018' }
    retentionInDays: 30
  }
}

// ---------------------------------------------------------------- registry

// Admin user stays disabled and anonymous pull is never enabled; the Container
// App pulls with its managed identity instead of a stored credential.
resource acr 'Microsoft.ContainerRegistry/registries@2023-11-01-preview' = {
  name: acrName
  location: location
  tags: tags
  sku: { name: 'Basic' }
  properties: {
    adminUserEnabled: false
    anonymousPullEnabled: false
    publicNetworkAccess: 'Enabled'
  }
}

// ---------------------------------------------------------------- identity

resource identity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'id-${appName}-${suffix}'
  location: location
  tags: tags
}

// AcrPull, scoped to this registry only.
var acrPullRoleId = '7f951dda-4ed3-4680-a7ca-43fe172d538d'

resource acrPull 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  scope: acr
  name: guid(acr.id, identity.id, acrPullRoleId)
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', acrPullRoleId)
    principalId: identity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

// ---------------------------------------------------------------- environment

resource env 'Microsoft.App/managedEnvironments@2024-03-01' = {
  name: 'cae-${appName}-${suffix}'
  location: location
  tags: tags
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logs.properties.customerId
        sharedKey: logs.listKeys().primarySharedKey
      }
    }
  }
}

// ---------------------------------------------------------------- the app

var usingAcr = startsWith(containerImage, '${acrName}.azurecr.io/')

resource app 'Microsoft.App/containerApps@2024-03-01' = {
  name: 'ca-${appName}'
  location: location
  tags: tags
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: { '${identity.id}': {} }
  }
  properties: {
    managedEnvironmentId: env.id
    configuration: {
      // Public ingress: the knowledge is CC BY 4.0 and the server is read-only.
      // apiKey is what stops it being an open compute resource, not a data control.
      ingress: {
        external: true
        targetPort: 8080
        transport: 'auto'
        allowInsecure: false
      }
      // Only attach the registry once the image actually comes from it; on the
      // first pass the placeholder is public and the role assignment may not
      // have propagated.
      registries: usingAcr ? [
        {
          server: '${acrName}.azurecr.io'
          identity: identity.id
        }
      ] : []
      secrets: empty(apiKey) ? [] : [
        {
          name: 'api-key'
          value: apiKey
        }
      ]
    }
    template: {
      containers: [
        {
          name: 'hve-iq'
          image: containerImage
          resources: {
            cpu: json('0.25')
            memory: '0.5Gi'
          }
          env: concat(
            [
              { name: 'PORT', value: '8080' }
              { name: 'HVE_REPO_ROOT', value: '/app' }
            ],
            empty(apiKey) ? [] : [ { name: 'HVE_API_KEY', secretRef: 'api-key' } ]
          )
          probes: usingAcr ? [
            {
              type: 'Readiness'
              httpGet: { path: '/health', port: 8080 }
              initialDelaySeconds: 3
              periodSeconds: 10
            }
          ] : []
        }
      ]
      // Scales to zero. The graph is static and every request is independent,
      // so a cold start costs nothing but latency and there is no session to lose.
      scale: {
        minReplicas: 0
        maxReplicas: 3
      }
    }
  }
  dependsOn: [ acrPull ]
}

// ---------------------------------------------------------------- outputs

output acrName string = acr.name
output acrLoginServer string = acr.properties.loginServer
output mcpEndpoint string = 'https://${app.properties.configuration.ingress.fqdn}/mcp'
output healthEndpoint string = 'https://${app.properties.configuration.ingress.fqdn}/health'
output containerAppName string = app.name
