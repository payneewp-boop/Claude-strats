# 36 · Resource Plan

**Phase:** 4 — Build Execution · **Use when:** you need to know what the plan really costs

## What it does

Costs the plan honestly in money, people, and calendar time — including the internal capacity
that plans habitually treat as free, the ramp time before new hires contribute, and the
business-as-usual load that the same people are already carrying.

## Inputs you need

- The roadmap and milestone plan
- Current headcount by skill, and their existing commitments
- Cost rates: internal fully loaded, contractor, vendor
- Hiring lead times and attrition rates in the relevant roles
- Available budget by period

## Prompt

```
You are building the resource plan for [PROGRAMME] over [PERIOD].

Produce:

1. DEMAND BY SKILL
   Table by period: skill/role | person-months required | which workstream needs it |
   criticality.
   Break the plan down until you reach specific skills, not "resources." A plan that needs
   14 engineers is different from one that needs 3 platform engineers, 6 integration
   specialists, and 5 data engineers, because the market for each differs.

2. SUPPLY
   Table: skill | available internally | already committed elsewhere | genuinely free |
   gap | how the gap is filled (hire, contract, vendor, redeploy, defer scope).
   The "already committed" column is where plans usually break. Include business-as-usual
   load explicitly — most contributors are not free even when the org chart says they are.

3. THE FREE-RESOURCE FALLACY
   Identify every place the plan assumes internal people will contribute alongside their
   existing job. Quantify how many hours a week that requires and state what they will stop
   doing to make room. If nothing stops, the plan is over-committed — say so with the number.

4. HIRING PLAN
   Table: role | number | when needed | when to start recruiting (working back from
   realistic time-to-hire) | time to productivity | fully loaded cost | risk of not filling.
   Include ramp: a hire in month 4 contributing fully from month 4 is a fiction. State the
   productivity curve you are assuming.

5. COST PROFILE
   By period: internal people cost, contractor cost, vendor cost, technology, other,
   total. Cumulative. Peak. Compare against available budget by period and flag any period
   where the plan exceeds it.

6. THE CRITICAL PEOPLE
   Name the roles (and where known, the individuals) without whom the plan fails. For each:
   what they are needed for, what proportion of their time, what happens if they leave or
   are pulled elsewhere, and the mitigation — deputy, documentation, retention, redundancy.

7. CAPACITY-CONSTRAINED PATH
   If the resource cannot be secured, what does the plan look like at 70% of requested
   resource? Which workstreams stretch, which stop, what is the end-date impact? Have this
   ready before the budget conversation rather than after it.

8. ASSUMPTIONS
   State every assumption behind these numbers: productivity rates, attrition, time-to-hire,
   contractor availability, vendor lead times, and the proportion of time contributors can
   actually give. These assumptions are where resource plans go wrong.

Rules:
- Use fully loaded internal costs, not marginal cash cost. Internal time is not free.
- Include ramp time for every new person, internal transfer included.
- Include management and coordination overhead — typically 10–20% on a programme of any size.
- Do not smooth demand into a flat line. Real plans have peaks, and the peak is what breaks.

MATERIAL:
[PASTE ROADMAP, CURRENT HEADCOUNT AND COMMITMENTS, COST RATES, HIRING DATA, BUDGET]
```

## Output you should get

Skill-level demand and supply by period, an explicit statement of over-commitment, a hiring
plan with ramp, a cost profile against budget, named critical people, and a 70%-resource
fallback.

## Quality bar

- **Section 3 is what makes this plan honest.** Almost every failing programme was
  over-committed here from day one.
- **Section 7 changes the budget conversation** from "give us everything" to "here is what
  each level buys."
- **Check the hiring lead times against reality,** not against the recruiter's optimism.

## Pairs with

- Precede with [33 Transformation Roadmap](33-transformation-roadmap.md)
- Precede with [29 Allocation Choices](../3-choose-strategy/29-allocation-choices.md) to fund it
- Follow with [42 Risk & Mitigation](../5-govern-value/42-risk-and-mitigation.md) for the key-person risks
