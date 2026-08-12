# 46 · Scenario Stress Test

**Phase:** 5 — Govern Value · **Use when:** you want to find the breaking point before the market does

## What it does

Deliberately breaks the plan: pushes assumptions to their adverse limits, combines shocks the
way reality combines them, and finds the specific point at which the plan stops working. The
output is a set of breaking points and the actions that widen the margin before them.

## Inputs you need

- The financial model or plan with its drivers exposed
- Assumption list with ranges ([03](../1-diagnose/03-assumption-audit.md))
- Balance sheet: cash, facilities, covenants, maturity profile
- Historical worst cases for the key variables — how bad has each actually got before

## Prompt

```
You are stress-testing [PLAN / STRATEGY] at [COMPANY]. Your job is to break it and report
where it broke.

Produce:

1. STRESS VARIABLES
   Identify the variables the plan is most sensitive to. For each: base assumption, a
   realistic adverse value (grounded in history, not imagination), and the worst observed
   historical value with its date.

2. SINGLE-VARIABLE STRESS
   Table: variable | base | stressed value | effect on revenue, EBIT, cash | does the plan
   still work (yes/marginal/no) | the breaking value — the point at which it fails.
   The breaking value is the key output. State it as a plain sentence for each variable:
   "the plan fails if volume falls more than 17% below base."

3. COMBINED STRESS SCENARIOS
   Real shocks arrive together. Build 3–4 combined scenarios where correlated variables
   move together — for example: demand falls, so competitors cut price, so our margin
   falls, while our funding costs rise and a key customer delays.
   For each combined scenario: the resulting position on revenue, EBIT, cash, covenant
   headroom, and whether the business survives without external support.

4. THE BREAKING POINT
   State the specific combination of conditions at which the plan fails — where cash runs
   out, a covenant breaks, or the strategy becomes unfundable. Then state how far current
   conditions are from that point, in the units that matter (percentage points, months,
   customers).

5. TIME TO IMPACT
   For each stress, how fast does it hit? A slow-onset stress can be managed; a sudden one
   must be pre-planned. Table: stress | onset speed | warning available | our reaction time
   | is our reaction time fast enough.

6. SURVIVAL LEVERS
   In the worst credible scenario, what can we actually pull, and how much does each buy?
   Table: lever (cut capex, cut discretionary opex, defer initiatives, reduce headcount,
   draw facility, sell an asset, raise price, stretch payables) | value | time to execute |
   permanent damage caused.
   Rank by value per unit of damage. This becomes the playbook if the scenario arrives.

7. PRE-POSITIONING
   What should be done now, while conditions are normal, to widen the margin before the
   breaking point? Extend a facility, diversify a supplier, reduce a customer concentration,
   convert fixed cost to variable. For each: cost now, and protection bought.

8. THE ASSUMPTION THAT MUST HOLD
   Of everything tested, the single assumption whose failure the plan could not survive.
   State it, state the current evidence for it, and state what monitors it.

Rules:
- Ground adverse values in history where possible. State the historical precedent for each.
- Model correlations. Independent shocks understate real risk substantially.
- Include cash and covenant effects, not just P&L. Businesses fail on cash, not on EBIT.

MATERIAL:
[PASTE PLAN/MODEL, ASSUMPTIONS AND RANGES, BALANCE SHEET, HISTORICAL EXTREMES]
```

## Output you should get

Breaking values per variable stated as plain sentences, correlated combined scenarios, a
named breaking point with distance-to-it, a ranked survival lever playbook, and
pre-positioning actions.

## Quality bar

- **Section 4's distance-to-breaking-point is the number for the board.** "We fail if volume
  drops 17%; it dropped 22% in 2009" is a complete argument.
- **Section 6 must be prepared in advance.** Levers identified during a crisis are pulled late
  and badly.
- **Reject** stress tests that move one variable at a time only. Correlation is the whole risk.

## Pairs with

- Precede with [27 Scenario Comparison](../3-choose-strategy/27-scenario-comparison.md)
- Precede with [42 Risk & Mitigation](42-risk-and-mitigation.md)
- Feed section 8 into [48 Early Warning Signals](48-early-warning-signals.md)
