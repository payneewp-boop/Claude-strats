# 04 · Fact Base

**Phase:** 1 — Diagnose · **Use when:** people are arguing from different numbers

## What it does

Builds the single shared set of numbers that everyone in the debate agrees to argue from —
sourced, dated, reconciled, with contradictions surfaced rather than smoothed over. Most
strategy arguments are actually data arguments in disguise, and they cannot be settled until
the fact base is settled.

## Inputs you need

- Every source you have, including the ones that disagree: management reports, statutory
  accounts, CRM extracts, analyst notes, market reports, operational dashboards
- Definitions in use for key metrics (this is where most of the disagreement hides)

## Prompt

```
You are building the fact base for a strategy review of [COMPANY / MARKET]. This document
will be the agreed reference for the whole team, so it must be sourced, dated, and honest
about disagreement.

Produce:

1. FACT REGISTER
   Table: # | fact (one line, with the number and unit) | value | as-of date | source |
   basis (audited / management / third party / estimate / inference) | confidence
   (high/med/low).
   Organise into sections: Financial performance | Customers | Market and share |
   Operations | Competitors | Cost structure.
   Never state a number without its date and source.

2. DEFINITIONS
   For every metric that appears more than once, state the definition being used and flag
   where different sources define it differently. Examples that routinely differ: "active
   customer", "churn", "gross margin", "market share", "bookings vs. revenue", "headcount".
   Where two definitions coexist, say which one this fact base adopts and why.

3. CONTRADICTIONS
   Table: contradicting fact A | contradicting fact B | size of the discrepancy | most
   likely cause (timing, definition, scope, error) | which one to trust and why | what
   would resolve it.
   Do not average conflicting figures. Do not pick silently.

4. DERIVED FACTS
   Calculations built from the register: unit economics, per-customer revenue, margin by
   segment, growth decomposition. Show the arithmetic for each so a reader can check it.
   Label these clearly as derived, and state which raw facts they depend on.

5. WHAT IS NOT IN HERE
   The material questions this fact base cannot answer, and what source would answer each.
   Rank by importance to the decision at hand.

6. STALE AND FRAGILE
   Flag every fact that is more than 12 months old, based on a single unverified source, or
   carried forward from an earlier document without re-checking. These are where the fact
   base will break.

Rules:
- Absolutely no invented numbers. If a figure is not in the material, it goes in section 5.
- Where you must estimate to make a derived fact work, label it "ESTIMATE" and show the
  method and the range.
- Preserve precision as given; do not round away meaningful digits, and do not add
  precision that the source does not support.

SOURCES:
[PASTE ALL AVAILABLE DATA, NOTING WHERE EACH CAME FROM AND WHEN]
```

## Output you should get

A sourced register, an explicit definitions section, and a contradictions table. This is the
artefact you circulate before the strategy offsite, not during it.

## Quality bar

- **Every row needs a source and a date.** A fact base with unsourced rows is a memo.
- **Section 3 should not be empty.** If your inputs came from more than two systems and no
  contradictions were found, the model smoothed them over — push back and re-run.
- **Definitions are the highest-value section.** Half of all "we disagree about strategy"
  turns out to be "we disagree about what churn means."

## Pairs with

- Feed into [01 Situation Assessment](01-situation-assessment.md) as the input material
- Feed gaps into [09 Evidence Plan](09-evidence-plan.md)
- Reuse the definitions section when building [43 KPI Architect](../5-govern-value/43-kpi-architect.md)
