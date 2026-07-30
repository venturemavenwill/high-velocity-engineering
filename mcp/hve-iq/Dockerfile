# HVE IQ — read-only MCP server over the knowledge graph.
#
# Build context is the REPOSITORY ROOT, not this directory, because the server
# reads graph/graph.json:
#
#   az acr build --registry <acr> --image hve-iq:<tag> --file mcp/hve-iq/Dockerfile .
#
# The graph is baked into the image. That is deliberate: the image is a snapshot
# of a specific commit's knowledge, it needs no network at runtime, and it cannot
# drift from the substrate it was built from. A new commit means a new image.

FROM node:20-alpine AS base
WORKDIR /app

# Dependencies first, so a change to the server or the graph does not invalidate
# the npm layer. --omit=dev because nothing here needs the test client.
COPY mcp/hve-iq/package.json mcp/hve-iq/package-lock.json ./mcp/hve-iq/
RUN cd mcp/hve-iq && npm ci --omit=dev

COPY mcp/hve-iq/index.js ./mcp/hve-iq/
COPY graph/graph.json ./graph/

# hve_get serves the authored markdown, not only graph metadata. Copy only the
# tracked knowledge namespaces; raw copyrighted sources are excluded.
COPY AGENTS.md LICENSE.md README.md ./
COPY concepts ./concepts/
COPY graph/*.md ./graph/
COPY mcp/hve-iq/*.md ./mcp/hve-iq/
COPY projections ./projections/
COPY research ./research/
COPY sources ./sources/
COPY wiki ./wiki/

# HVE_REPO_ROOT is how the server locates graph/. PORT is what switches it from
# stdio to Streamable HTTP — and it must match the Container App's targetPort.
ENV HVE_REPO_ROOT=/app \
    PORT=8080 \
    NODE_ENV=production

EXPOSE 8080

# Never root. The image is read-only in practice: the server never writes.
USER node

CMD ["node", "mcp/hve-iq/index.js"]
