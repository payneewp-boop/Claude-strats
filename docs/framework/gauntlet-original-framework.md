# Gauntlet Loop — original full framework (archived)

The version this skill was condensed from, preserved verbatim in structure so
nothing is lost. `SKILL.md` is the active file; this is reference.

Kept because several ideas here are good and only need somewhere to store state
before they work: reviewer performance tracking, historical similarity, and the
architecture knowledge graph all presuppose memory across sessions. If
`.gauntlet/findings.jsonl` ever accumulates real history, they become live.

---

## Phases (v1)

1. **THE WHAT** — Objective, Success Criteria, Constraints, Assumptions, Deliverables, Acceptance Criteria. Requirements get unique IDs (REQ-001...).
2. **THE HOW** — Architecture, Implementation Plan, Risk Analysis, Validation Strategy, Test Strategy, Rollback Strategy. Decisions recorded as ADRs (Decision / Why / Alternatives / Tradeoffs).
3. **BUILDER SWARM** — Builder Alpha, Beta, Gamma propose independently; must not anchor on each other. Builder Governor scores innovation, detects duplicates, tracks regressions, merges best ideas, retires weak approaches.
4. **CRITIC SWARM** — Architecture, Security, QA, Product, Operations, Performance, Simplicity, Documentation, Observability, Production Readiness. Run in parallel; critics cannot view each other's output until complete. Each delivers Finding ID, Evidence, Impact, Severity, Fix Recommendation, Confidence. Votes: Reject / Conditional / Approve / Strong Approve.
5. **CRITIC GOVERNOR** — removes duplicates, validates evidence, scores critic quality, detects hallucinations and review fatigue, tracks discovery rate.
6. **REPAIR** — every material finding resolved with Issue ID, Description, Validation Method. Findings stay OPEN / RESOLVED / REJECTED / ACCEPTED_RISK.
7. **META CRITIC SWARM** — Coverage, Depth, Consensus, Challenge, Blind Spot auditors review the review.
8. **META GOVERNOR** — audits reviewers, coverage, confidence validity, challenge depth.
9. **CONVERGENCE GOVERNOR** — monitors confidence, consensus, discovery rate, review exhaustion, churn, bikeshedding, duplicate rate, confidence spread. Detects false convergence, review loops, governance failure, deadlock. Actions: CONTINUE / ESCALATE / CONVERGED.
10. **FINAL CHALLENGER** — assume the entire solution is wrong; attempt to justify a rewrite, redesign, or alternative architecture.

## Supporting engines (v2)

- **Traceability Engine** — every requirement maps to Implementation, Tests, Reviews, Approval. Pass blocked if any requirement lacks traceability.
- **Risk Register** — Risk ID, Description, Probability, Impact, Mitigation, Owner, Status. No unresolved critical risk may pass.
- **Assumption Register** — extract hidden assumptions by keyword: assume, likely, probably, expected, normally, typically.
- **Acceptance Test Generator** — every requirement gets criteria, validation method, expected result.
- **Confidence System** — 0-100 with trend arrows; every change requires reason, evidence, validation.
- **Scoring** — 0-5 across Requirements, Correctness, Quality, Security, Testing, Operations, Maintainability, Documentation.
- **Validation Layer** — continuously verify consensus, confidence, severity, finding, dashboard, traceability, data, and governor integrity.
- **Error Handling** — detect missing evidence, zombie findings, duplicates, hallucinated APIs/files/tests, invalid confidence or consensus, broken traceability, deadlocks, governor conflicts, false consensus, confidence inflation, severity drift.
- **Deadlock Detection** — governors disagree AND no progress for 3 cycles, convene an arbitration board.
- **Loop Protection** — no score improvement in 5 cycles, or no new findings in 3, or 15 cycles reached, trigger convergence review.
- **Cost Control** — max 3 builders, 10 critics, 5 meta-critics, 15 cycles.

## Ultimate extensions (v3)

Reviewer Performance Learning (trust scores weighting critic influence) ·
Adaptive Critic Routing · Historical Similarity Engine · Organizational
Standards Engine · Architecture Knowledge Graph · Stakeholder Review Board
(CTO, EM, PM, Support, Customer, Sales, Security, Compliance) · Business Impact
Scoring · Technical Debt Portfolio · Self-Tuning Governors · Review Strategy
Optimizer · Failure Prediction Engine · Architecture Futures Analysis (6/12/24/36
months) · Black Swan Critic · Chaos Review Mode · Competitive Architecture Arena
· Strategic Challenger (build/buy/simplify/postpone/delete) · Chief Architect AI
· Governance Health Index.

Ultimate pass required: all governors PASS, Critical = 0, High = 0, Business
Value >= 90, Governance Health >= 95, Review Quality >= 95, Confidence >= 95,
Consensus >= 95, Review Exhaustion >= 95, Discovery Rate = 0, Blind Spots = 0,
Traceability PASS, Integrity PASS, no active errors, conflicts, or deadlocks.

---

## Why the active version is shorter

Measured over ten cycles on a real authentication system:

**Kept, because it found things:** requirements before code; every fix carries a
verification method; the traceability gate (it rejected a state already reported
as passing); the Chaos/restore lens (found a HIGH that nine prior cycles missed).

**Cut, because it did not:**

- *Ten parallel critics.* One agent writing ten reviews sequentially in one
  context is one reviewer, not ten. Every expensive bug came from executing
  something — writing a test for untested code, fuzzing hostile input, asking
  what a backup restore resurrects, mutation testing — and none from a
  read-through. The apparatus cost the most and found the least.
- *Percentage gates (Consensus/Confidence/Exhaustion >= 95).* Self-generated and
  unfalsifiable, and requiring a threshold rewards producing the number. In
  practice: "Review Exhaustion 97%" was reported one cycle before a HIGH turned
  up. Replaced with counts — tests, mutations caught, findings by severity,
  lenses used.
- *Discovery Rate = 0 and Blind Spots = 0 as stop conditions.* Unsatisfiable.
  There is always one more LOW, and an unknown unknown cannot be counted to
  zero. Replaced with: no material findings across two cycles using distinct
  lenses, plus a clean mutation run.
- *The learning engines.* Reviewer trust scores, historical similarity, the
  knowledge graph, self-tuning governors — all need cross-session state a skill
  file does not have. Reinstate them once `.gauntlet/findings.jsonl` has history.
