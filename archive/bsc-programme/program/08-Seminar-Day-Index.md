# Seminar Day Index

> All ninety seminar days. Numbering runs continuously `S001`–`S090` across the whole programme, and does **not** reset at quarter boundaries, because the retrieval schedule is cumulative and programme-wide. The "Retrieves from" column is the design of the spacing schedule made explicit.

Each day links to its plan and its whitepaper. Days marked **⊘** are assessment-bearing: phases 5 through 7 are replaced by an entrustment occasion, as permitted in the [Seminar Day Design Pattern](/archive/bsc-programme/program/04-Seminar-Day-Design-Pattern.md).

The **Platform anchor** column names the service the day is executed against. It is the summary form of the header block every day's plan carries, which also names the MCP servers in use. **A day with no anchor and no build does not exist in this programme.**

---

## Q1 · Machines, Programs and Proof

### M01 · The Machine and the Proof — complexity class 1

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S001 | Why This Programme Feels Wrong: The Design You Are Subject To | — | Copilot agent mode; the first sealed prediction | [plan](/archive/bsc-programme/seminars/S001.md) · [WP-001](/archive/bsc-programme/whitepapers/WP-001.md) |
| S002 | What a Machine Actually Does | S001 | Copilot agent mode | [plan](/archive/bsc-programme/seminars/S002.md) · [WP-002](/archive/bsc-programme/whitepapers/WP-002.md) |
| S003 | Representation and the Leaking Abstraction | S001, S002 | Copilot agent mode; where the agent's abstraction leaks | [plan](/archive/bsc-programme/seminars/S003.md) · [WP-003](/archive/bsc-programme/whitepapers/WP-003.md) |
| S004 | Proof as an Act of Communication | S002, S003 | Learn MCP Server; the citation as the unit | [plan](/archive/bsc-programme/seminars/S004.md) · [WP-004](/archive/bsc-programme/whitepapers/WP-004.md) |
| S005 | Induction and the Machine That Runs Forever | S001, S003, S004 | Copilot agent mode | [plan](/archive/bsc-programme/seminars/S005.md) · [WP-005](/archive/bsc-programme/whitepapers/WP-005.md) |

### M02 · Constructing Correct Programs — complexity class 1

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S006 | The Invariant You Did Not Write Down | S004, S005 | Copilot agent mode; the instructions file as specification | [plan](/archive/bsc-programme/seminars/S006.md) · [WP-006](/archive/bsc-programme/whitepapers/WP-006.md) |
| S007 | Decomposition and the Cost of a Bad Seam | S002, S003, S006 | Copilot agent mode | [plan](/archive/bsc-programme/seminars/S007.md) · [WP-007](/archive/bsc-programme/whitepapers/WP-007.md) |
| S008 | Recursion as an Induction Hypothesis | S005, S006 | Copilot as a proof-checking adversary | [plan](/archive/bsc-programme/seminars/S008.md) · [WP-008](/archive/bsc-programme/whitepapers/WP-008.md) |
| S009 | Testing as Hypothesis, Not Ritual | S001, S004, S007 | Copilot agent mode; agent-written tests that assert nothing | [plan](/archive/bsc-programme/seminars/S009.md) · [WP-009](/archive/bsc-programme/whitepapers/WP-009.md) |
| S010 | Being Wrong in Public: The First Error Clinic ⊘ | S006–S009 | Copilot agent mode; **first unassisted portion** | [plan](/archive/bsc-programme/seminars/S010.md) · [WP-010](/archive/bsc-programme/whitepapers/WP-010.md) |

## Q2 · Structure and Scale

### M03 · Representing Structure — complexity class 1

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S011 | What a Representation Makes Cheap | S003, S007 | Azure MCP Server (read); a representation you are billed for | [plan](/archive/bsc-programme/seminars/S011.md) · [WP-011](/archive/bsc-programme/whitepapers/WP-011.md) |
| S012 | Ordering, Searching and the Cost of Comparison | S005, S008, S011 | Foundry embeddings; comparison in a real vector space | [plan](/archive/bsc-programme/seminars/S012.md) · [WP-012](/archive/bsc-programme/whitepapers/WP-012.md) |
| S013 | Hashing and Amortised Reasoning | S004, S011, S012 | Foundry embeddings | [plan](/archive/bsc-programme/seminars/S013.md) · [WP-013](/archive/bsc-programme/whitepapers/WP-013.md) |
| S014 | Trees, Graphs and the Shape of a Problem | S008, S012 | Azure MCP Server (read); the resource graph as a graph | [plan](/archive/bsc-programme/seminars/S014.md) · [WP-014](/archive/bsc-programme/whitepapers/WP-014.md) |
| S015 | Choosing a Representation for a Caller You Have Met | S006, S009, S011, S014 | Foundry embeddings | [plan](/archive/bsc-programme/seminars/S015.md) · [WP-015](/archive/bsc-programme/whitepapers/WP-015.md) |

### M04 · Managing Memory, Time and Contention — complexity class 2

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S016 | The Memory Hierarchy Is the Performance Model | S002, S003, S011 | Azure MCP Server (read) | [plan](/archive/bsc-programme/seminars/S016.md) · [WP-016](/archive/bsc-programme/whitepapers/WP-016.md) |
| S017 | Processes, Scheduling and the Illusion of Simultaneity | S002, S007, S016 | Azure MCP Server (read) | [plan](/archive/bsc-programme/seminars/S017.md) · [WP-017](/archive/bsc-programme/whitepapers/WP-017.md) |
| S018 | Virtual Memory and Paging as an Allocation Policy | S013, S016, S017 | Azure MCP Server (read); allocation policy you did not choose | [plan](/archive/bsc-programme/seminars/S018.md) · [WP-018](/archive/bsc-programme/whitepapers/WP-018.md) |
| S019 | Contention, Queueing and Why Latency Is Not Throughput | S012, S017, S018 | Azure MCP Server (read); a real contended service | [plan](/archive/bsc-programme/seminars/S019.md) · [WP-019](/archive/bsc-programme/whitepapers/WP-019.md) |
| S020 | Your First Capacity Argument ⊘ | S009, S015, S016–S019 | Azure MCP Server (read); the substrate's actual limits | [plan](/archive/bsc-programme/seminars/S020.md) · [WP-020](/archive/bsc-programme/whitepapers/WP-020.md) |

## Q3 · Algorithms and Uncertainty

### M05 · Algorithmic Thinking Under Constraint — complexity class 2

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S021 | Paradigms Are Hypotheses About Structure | S008, S012, S014 | Azure AI Search; query planning as a paradigm choice | [plan](/archive/bsc-programme/seminars/S021.md) · [WP-021](/archive/bsc-programme/whitepapers/WP-021.md) |
| S022 | Amortisation, Randomisation and Expected Cost | S013, S019, S021 | Azure AI Search; expected cost over a real index | [plan](/archive/bsc-programme/seminars/S022.md) · [WP-022](/archive/bsc-programme/whitepapers/WP-022.md) |
| S023 | Reduction as an Argumentative Move | S004, S005, S021 | Azure AI Search | [plan](/archive/bsc-programme/seminars/S023.md) · [WP-023](/archive/bsc-programme/whitepapers/WP-023.md) |
| S024 | Intractability and the Duty to Say So | S023 | Foundry evaluators; the duty to say a score is uncalibrated | [plan](/archive/bsc-programme/seminars/S024.md) · [WP-024](/archive/bsc-programme/whitepapers/WP-024.md) |
| S025 | Approximation, Heuristics and Stated Guarantees | S015, S022, S024 | Azure AI Search; a stated recall guarantee | [plan](/archive/bsc-programme/seminars/S025.md) · [WP-025](/archive/bsc-programme/whitepapers/WP-025.md) |

### M06 · Evidence, Error and Measurement — complexity class 2

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S026 | What Are You Actually Measuring? | S001, S009, S020 | Foundry evaluators | [plan](/archive/bsc-programme/seminars/S026.md) · [WP-026](/archive/bsc-programme/whitepapers/WP-026.md) |
| S027 | Error Has Structure | S019, S022, S026 | Foundry evaluators | [plan](/archive/bsc-programme/seminars/S027.md) · [WP-027](/archive/bsc-programme/whitepapers/WP-027.md) |
| S028 | Sampling, Intervals and What a Number Licenses | S026, S027 | Foundry evaluators; scores across repetitions | [plan](/archive/bsc-programme/seminars/S028.md) · [WP-028](/archive/bsc-programme/whitepapers/WP-028.md) |
| S029 | Designing an Instrument for a Question | S009, S015, S026, S028 | Foundry evaluators; a custom evaluator | [plan](/archive/bsc-programme/seminars/S029.md) · [WP-029](/archive/bsc-programme/whitepapers/WP-029.md) |
| S030 | The First Measurement You Are Asked to Defend ⊘ | S020, S025, S026–S029 | Foundry evaluators | [plan](/archive/bsc-programme/seminars/S030.md) · [WP-030](/archive/bsc-programme/whitepapers/WP-030.md) |

## Q4 · Concurrency and Correctness

### M07 · Correctness at Scale — complexity class 3

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S031 | Concurrency Is a Specification Problem | S006, S017, S023 | API Management | [plan](/archive/bsc-programme/seminars/S031.md) · [WP-031](/archive/bsc-programme/whitepapers/WP-031.md) |
| S032 | Synchronisation and Errors You Cannot Reproduce | S010, S027, S031 | API Management | [plan](/archive/bsc-programme/seminars/S032.md) · [WP-032](/archive/bsc-programme/whitepapers/WP-032.md) |
| S033 | Partial Failure and the Unreliable Network | S019, S031, S032 | API Management; circuit breaking on a failing backend | [plan](/archive/bsc-programme/seminars/S033.md) · [WP-033](/archive/bsc-programme/whitepapers/WP-033.md) |
| S034 | Consistency Models as a Contract with the Caller | S015, S031, S033 | API Management | [plan](/archive/bsc-programme/seminars/S034.md) · [WP-034](/archive/bsc-programme/whitepapers/WP-034.md) |
| S035 | Breaking a System That Appears to Work | S009, S028, S032–S034 | Azure MCP Server (write); Bicep | [plan](/archive/bsc-programme/seminars/S035.md) · [WP-035](/archive/bsc-programme/whitepapers/WP-035.md) |

### M08 · Understanding the Problem Before the Solution — complexity class 3

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S036 | The Question You Should Not Have Asked | S001, S026 | Azure MCP Server (write); the ask you should not have made | [plan](/archive/bsc-programme/seminars/S036.md) · [WP-036](/archive/bsc-programme/whitepapers/WP-036.md) |
| S037 | Contextual Inquiry with a Real User | S036 | Azure MCP Server (write); the substrate's real users | [plan](/archive/bsc-programme/seminars/S037.md) · [WP-037](/archive/bsc-programme/whitepapers/WP-037.md) |
| S038 | Domain Modelling and Ubiquitous Language | S011, S015, S037 | Bicep; a domain model expressed as declared infrastructure | [plan](/archive/bsc-programme/seminars/S038.md) · [WP-038](/archive/bsc-programme/whitepapers/WP-038.md) |
| S039 | Requirements as Negotiated Constraint | S029, S034, S038 | API Management; a requirement expressed as an enforced policy | [plan](/archive/bsc-programme/seminars/S039.md) · [WP-039](/archive/bsc-programme/whitepapers/WP-039.md) |
| S040 | Staying in the Problem: An Endurance Exercise ⊘ | S030, S036–S039 | Bicep; Azure MCP Server (write) | [plan](/archive/bsc-programme/seminars/S040.md) · [WP-040](/archive/bsc-programme/whitepapers/WP-040.md) |

## Q5 · Learning Machines

### M09 · Learning From Data — complexity class 3

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S041 | Generalisation Is the Only Thing That Matters | S009, S026, S028 | Foundry models and deployment | [plan](/archive/bsc-programme/seminars/S041.md) · [WP-041](/archive/bsc-programme/whitepapers/WP-041.md) |
| S042 | Model Selection Without Fooling Yourself | S028, S029, S041 | Foundry models and deployment | [plan](/archive/bsc-programme/seminars/S042.md) · [WP-042](/archive/bsc-programme/whitepapers/WP-042.md) |
| S043 | Regularisation, Capacity and the Bias-Variance Account | S021, S027, S041, S042 | Foundry models; the fine-tuning path | [plan](/archive/bsc-programme/seminars/S043.md) · [WP-043](/archive/bsc-programme/whitepapers/WP-043.md) |
| S044 | The Threat Model of a Learned Component | S035, S039, S041 | Defender AI posture | [plan](/archive/bsc-programme/seminars/S044.md) · [WP-044](/archive/bsc-programme/whitepapers/WP-044.md) |
| S045 | A Model You Are Willing to Defend ⊘ | S030, S040, S041–S044 | Foundry deployment and evaluation; **second unassisted portion** | [plan](/archive/bsc-programme/seminars/S045.md) · [WP-045](/archive/bsc-programme/whitepapers/WP-045.md) |

### M10 · Evaluating What Was Learned — complexity class 4

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S046 | Where Do Criteria Come From? | S026, S036, S037 | Foundry evaluation | [plan](/archive/bsc-programme/seminars/S046.md) · [WP-046](/archive/bsc-programme/whitepapers/WP-046.md) |
| S047 | Criteria Drift and Validating the Validator | S029, S042, S046 | Foundry evaluation | [plan](/archive/bsc-programme/seminars/S047.md) · [WP-047](/archive/bsc-programme/whitepapers/WP-047.md) |
| S048 | The Judge Is Biased: Measuring the Measurer | S027, S046, S047 | Foundry evaluation; the unpublished agreement figure | [plan](/archive/bsc-programme/seminars/S048.md) · [WP-048](/archive/bsc-programme/whitepapers/WP-048.md) |
| S049 | Clustering, Power and the Interval You Owe the Reader | S022, S028, S043 | Foundry evaluation | [plan](/archive/bsc-programme/seminars/S049.md) · [WP-049](/archive/bsc-programme/whitepapers/WP-049.md) |
| S050 | Saying What the Measurement Does Not License ⊘ | S024, S030, S046–S049 | Foundry evaluation; Defender AI posture | [plan](/archive/bsc-programme/seminars/S050.md) · [WP-050](/archive/bsc-programme/whitepapers/WP-050.md) |

## Q6 · Language and Retrieval

### M11 · Language, Attention and Representation — complexity class 4

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S051 | From Vectors to Meaning | S011, S016, S041 | Foundry model catalogue | [plan](/archive/bsc-programme/seminars/S051.md) · [WP-051](/archive/bsc-programme/whitepapers/WP-051.md) |
| S052 | Attention as a Retrieval Operation | S012, S013, S051 | Foundry model catalogue | [plan](/archive/bsc-programme/seminars/S052.md) · [WP-052](/archive/bsc-programme/whitepapers/WP-052.md) |
| S053 | The Transformer, Assembled | S007, S043, S051, S052 | Foundry model catalogue | [plan](/archive/bsc-programme/seminars/S053.md) · [WP-053](/archive/bsc-programme/whitepapers/WP-053.md) |
| S054 | Preference, Alignment and What Optimisation Selects For | S042, S046, S048, S053 | Foundry model catalogue across families | [plan](/archive/bsc-programme/seminars/S054.md) · [WP-054](/archive/bsc-programme/whitepapers/WP-054.md) |
| S055 | What These Systems Cannot Do | S024, S050, S054 | Foundry model catalogue across families | [plan](/archive/bsc-programme/seminars/S055.md) · [WP-055](/archive/bsc-programme/whitepapers/WP-055.md) |

### M12 · Finding the Right Thing — complexity class 4

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S056 | The Lexical Baseline You Must Beat | S013, S041, S051 | Azure AI Search; keyword ranking | [plan](/archive/bsc-programme/seminars/S056.md) · [WP-056](/archive/bsc-programme/whitepapers/WP-056.md) |
| S057 | Dense Retrieval and the Geometry of Similarity | S051, S052, S056 | Azure AI Search vector retrieval | [plan](/archive/bsc-programme/seminars/S057.md) · [WP-057](/archive/bsc-programme/whitepapers/WP-057.md) |
| S058 | Approximate Search: Trading Recall for Latency | S014, S019, S025, S057 | Azure AI Search vector retrieval | [plan](/archive/bsc-programme/seminars/S058.md) · [WP-058](/archive/bsc-programme/whitepapers/WP-058.md) |
| S059 | Zero-Shot Generalisation and the Benchmark Trap | S041, S049, S050, S056 | Azure AI Search hybrid retrieval | [plan](/archive/bsc-programme/seminars/S059.md) · [WP-059](/archive/bsc-programme/whitepapers/WP-059.md) |
| S060 | Shipping Retrieval Into Production ⊘ | S035, S045, S056–S059 | Azure AI Search hybrid retrieval; the chunking trap | [plan](/archive/bsc-programme/seminars/S060.md) · [WP-060](/archive/bsc-programme/whitepapers/WP-060.md) |

## Q7 · Serving and Economics

### M13 · The Economics of Inference — complexity class 5

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S061 | Where the Time and Memory Actually Go | S007, S016, S053 | Provisioned throughput | [plan](/archive/bsc-programme/seminars/S061.md) · [WP-061](/archive/bsc-programme/whitepapers/WP-061.md) |
| S062 | Batching, Throughput and the Latency You Promised | S019, S034, S061 | AI gateway | [plan](/archive/bsc-programme/seminars/S062.md) · [WP-062](/archive/bsc-programme/whitepapers/WP-062.md) |
| S063 | Memory Management for Serving | S018, S061, S062 | Provisioned throughput | [plan](/archive/bsc-programme/seminars/S063.md) · [WP-063](/archive/bsc-programme/whitepapers/WP-063.md) |
| S064 | Capacity Is Not Quota | S020, S039, S062, S063 | Provisioned throughput; the refusal | [plan](/archive/bsc-programme/seminars/S064.md) · [WP-064](/archive/bsc-programme/whitepapers/WP-064.md) |
| S065 | The Cost Argument You Present to Someone Who Pays ⊘ | S029, S050, S061–S064 | Provisioned throughput; hourly billing | [plan](/archive/bsc-programme/seminars/S065.md) · [WP-065](/archive/bsc-programme/whitepapers/WP-065.md) |

### M14 · Releasing Responsibly — complexity class 5

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S066 | The Release Gate as an Evaluation Artefact | S009, S047, S059 | Foundry cloud evaluation in CI | [plan](/archive/bsc-programme/seminars/S066.md) · [WP-066](/archive/bsc-programme/whitepapers/WP-066.md) |
| S067 | Offline Measures, Online Reality | S041, S049, S059, S066 | Foundry cloud evaluation in CI | [plan](/archive/bsc-programme/seminars/S067.md) · [WP-067](/archive/bsc-programme/whitepapers/WP-067.md) |
| S068 | Designing for Detectability | S027, S033, S035, S067 | AI gateway; per-consumer metrics | [plan](/archive/bsc-programme/seminars/S068.md) · [WP-068](/archive/bsc-programme/whitepapers/WP-068.md) |
| S069 | Governing the Release Decision | S039, S046, S066, S068 | Foundry cloud evaluation in CI | [plan](/archive/bsc-programme/seminars/S069.md) · [WP-069](/archive/bsc-programme/whitepapers/WP-069.md) |
| S070 | Ship or Do Not Ship: First Rehearsal ⊘ | S030, S050, S065, S066–S069 | Foundry cloud evaluation in CI; the AI gateway's cost line | [plan](/archive/bsc-programme/seminars/S070.md) · [WP-070](/archive/bsc-programme/whitepapers/WP-070.md) |

## Q8 · Agency and Adversary

### M15 · Agents That Act — complexity class 5

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S071 | What Changes When the System Can Act | S031, S044, S055 | Foundry Agent Service | [plan](/archive/bsc-programme/seminars/S071.md) · [WP-071](/archive/bsc-programme/whitepapers/WP-071.md) |
| S072 | Orchestration Patterns as Control Flow | S017, S031, S033, S071 | Agent Framework; the five built-in orchestrations | [plan](/archive/bsc-programme/seminars/S072.md) · [WP-072](/archive/bsc-programme/whitepapers/WP-072.md) |
| S073 | Protocols, Tools and the Boundary of Trust | S034, S039, S044, S072 | MCP | [plan](/archive/bsc-programme/seminars/S073.md) · [WP-073](/archive/bsc-programme/whitepapers/WP-073.md) |
| S074 | Tool Failure Has Four Shapes | S027, S032, S068, S073 | Agent Framework; the tool-call evaluators | [plan](/archive/bsc-programme/seminars/S074.md) · [WP-074](/archive/bsc-programme/whitepapers/WP-074.md) |
| S075 | Evaluating a Trajectory, Not an Answer | S046, S048, S067, S074 | Agent Framework; conversation split strategies | [plan](/archive/bsc-programme/seminars/S075.md) · [WP-075](/archive/bsc-programme/whitepapers/WP-075.md) |

### M16 · The Adversary and the Accident — complexity class 6

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S076 | The Adversary Who Reads Your Prompt | S044, S071, S073 | Foundry Agent Service; prompt injection against a real agent | [plan](/archive/bsc-programme/seminars/S076.md) · [WP-076](/archive/bsc-programme/whitepapers/WP-076.md) |
| S077 | Poisoning, Extraction and Exhaustion | S043, S064, S076 | Defender | [plan](/archive/bsc-programme/seminars/S077.md) · [WP-077](/archive/bsc-programme/whitepapers/WP-077.md) |
| S078 | Authorisation at Retrieval Time | S038, S057, S060, S073 | Purview; the two-stage check at query time | [plan](/archive/bsc-programme/seminars/S078.md) · [WP-078](/archive/bsc-programme/whitepapers/WP-078.md) |
| S079 | Drift, Alerting and the Incident You Did Not See | S027, S067, S068, S075 | Defender AI alerts | [plan](/archive/bsc-programme/seminars/S079.md) · [WP-079](/archive/bsc-programme/whitepapers/WP-079.md) |
| S080 | Blameless Forensics on a Real Incident ⊘ | S010, S032, S035, S076–S079 | Defender AI alerts; Purview | [plan](/archive/bsc-programme/seminars/S080.md) · [WP-080](/archive/bsc-programme/whitepapers/WP-080.md) |

## Q9 · Deployment and Entrustment

### M17 · Deployment as Engagement — complexity class 6

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S081 | The Organisation Is Part of the System | S036, S037, S069 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S081.md) · [WP-081](/archive/bsc-programme/whitepapers/WP-081.md) |
| S082 | Stakeholders, Power and the Person Not in the Room | S038, S078, S081 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S082.md) · [WP-082](/archive/bsc-programme/whitepapers/WP-082.md) |
| S083 | Communicating Risk to Someone Who Will Decide | S028, S050, S065, S079 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S083.md) · [WP-083](/archive/bsc-programme/whitepapers/WP-083.md) |
| S084 | Change, Resistance and the Adoption You Cannot Mandate | S037, S081, S082 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S084.md) · [WP-084](/archive/bsc-programme/whitepapers/WP-084.md) |
| S085 | Negotiating Scope Under Constraint ⊘ | S039, S064, S070, S081–S084 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S085.md) · [WP-085](/archive/bsc-programme/whitepapers/WP-085.md) |

### M18 · Entrustment and Handover — complexity class 6

| Day | Title | Retrieves from | Platform anchor | |
|---|---|---|---|---|
| S086 | What Actually Transfers | S015, S038, S084 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S086.md) · [WP-086](/archive/bsc-programme/whitepapers/WP-086.md) |
| S087 | The Safety Case | S024, S044, S068, S076–S079 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S087.md) · [WP-087](/archive/bsc-programme/whitepapers/WP-087.md) |
| S088 | Residual Risk, Stated Plainly | S028, S050, S083, S087 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S088.md) · [WP-088](/archive/bsc-programme/whitepapers/WP-088.md) |
| S089 | The Handover Artefact and Its Warranty | S034, S069, S086, S088 | The whole stack, handed over | [plan](/archive/bsc-programme/seminars/S089.md) · [WP-089](/archive/bsc-programme/whitepapers/WP-089.md) |
| S090 | Entrustment: The Final Defence ⊘ | programme-wide | The whole stack, handed over; **third unassisted portion** | [plan](/archive/bsc-programme/seminars/S090.md) · [WP-090](/archive/bsc-programme/whitepapers/WP-090.md) |

---

## Reading the retrieval schedule

Three properties of the "Retrieves from" column are deliberate and are the operational form of the spacing argument in [Learning Science Foundations](/archive/bsc-programme/program/02-Learning-Science-Foundations.md).

- **Gaps expand.** Early days retrieve from the preceding one or two days; by Q6 a typical day retrieves from material two to four quarters old. S061 retrieves S007 and S016; S078 retrieves S038.
- **Sources interleave across strands.** No day retrieves solely from its own strand. S058 retrieves a data-structures day, a queueing day, an approximation day and a retrieval day in the same set — forcing strategy selection rather than execution.
- **Assessment-bearing days retrieve widest.** Every ⊘ day draws from its whole module plus at least one prior ⊘ day, so that entrustment occasions are cumulative rather than local.

**Known weakness.** Days S002–S006 retrieve almost entirely from the preceding fortnight, because there is nothing older to retrieve. The spacing mechanism is therefore effectively inactive for the first month of the programme, and the design compensates with denser within-day generation rather than pretending otherwise.

## Reading the platform anchor column

Three properties of it, all of which are consequences of the rule rather than choices made day by day.

**Every anchor is drawn from its quarter's anchor set** in the [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md), and the map is authoritative where this column and the map disagree. A day is anchored on the element of its quarter's set that its own subject exercises, which is why S056 and S057 sit in the same quarter and name lexical and vector retrieval respectively. Nothing in this column is invented.

**The anchors repeat, and the repetition is the point.** Q1's five M01 days name the same instrument four times, because the argument for a whole quarter on Copilot agent mode is that an instrument is characterised by repeated use under varied conditions rather than by a tour of instruments. A reader who finds the column monotonous in Q1 and Q9 has read it correctly; the variety lives in the day's build, not in its service.

**Three rows carry a bold annotation for the unassisted portion.** [S010](/archive/bsc-programme/seminars/S010.md), [S045](/archive/bsc-programme/seminars/S045.md) and [S090](/archive/bsc-programme/seminars/S090.md) are the three occasions on which a bounded part of the assessed work is performed without agent assistance, described in the [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md). They are marked here rather than only there because a reader scanning this index for the shape of the programme should be able to see the dependency measure without being told where to look for it.

**This whole column is perishable and the durable claims beside it are not.** Every entry will need re-verification before every offering, and the [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) carries the check. The titles in the second column are what is assessed.

## Related pages

- [Seminar Day Design Pattern](/archive/bsc-programme/program/04-Seminar-Day-Design-Pattern.md)
- [Module Map](/archive/bsc-programme/program/07-Module-Map.md)
- [Whitepaper Standard](/archive/bsc-programme/program/05-Whitepaper-Standard.md)
- [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md)
- [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md)
- [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md)
- [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md)
