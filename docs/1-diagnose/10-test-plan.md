# 10 · Test Plan

**Phase:** 1 — Diagnose · **Use when:** an assumption can only be settled by trying something

## What it does

Designs cheap, fast experiments that can actually falsify a load-bearing belief — with the
success threshold set before the test runs, so the result cannot be reinterpreted afterwards.

## Inputs you need

- The assumptions to test, in falsifiable form (from [03 Assumption Audit](03-assumption-audit.md))
- What you can change in the real world: pricing, messaging, channel, product config, process
- Available populations: customers, prospects, regions, teams, segments
- Base rates for the metric you would measure (conversion, churn, attach rate, cycle time)

## Prompt

```
You are designing experiments to test the load-bearing assumptions behind [STRATEGY /
DECISION]. Each test must be capable of returning a "no" that the organisation will accept.

For each assumption, produce a test card:

TEST [#]: [ASSUMPTION IN FALSIFIABLE FORM]
- HYPOTHESIS: the specific, measurable claim being tested, with a number.
- WHY IT MATTERS: what changes in the strategy if this is false, and how much is at stake.
- DESIGN: what you will actually do — the intervention, the population, the control or
  comparison, the duration, the sample size. State the design type (A/B, pre/post,
  matched cohort, pilot region, concierge/manual test, fake-door, expert panel).
- PRIMARY METRIC: one metric. Name it and its current baseline.
- SUCCESS THRESHOLD: the number that means "assumption holds", set NOW.
- FAILURE THRESHOLD: the number that means "assumption is false", set NOW.
- INCONCLUSIVE ZONE: the range between them, and what you do if you land there.
- CONFOUNDS: what else could move the metric during the test window, and how you will
  detect or control for it (seasonality, a competitor move, another initiative, sales
  behaviour changing because they know they are being measured).
- COST AND DURATION: person-days, cash, elapsed weeks, and any revenue at risk.
- WHAT WE DO WITH EACH RESULT: the specific decision on pass, on fail, on inconclusive.

Then produce:

TEST PORTFOLIO
Table of all tests: # | assumption | cost | duration | decision value (how much of the
strategy rests on it) | run order.
Sequence them so that the cheapest test of the most load-bearing assumption runs first.
Flag any tests that can run in parallel and any that must wait for an earlier result.

VALIDITY WARNINGS
For the portfolio as a whole: where sample sizes are too small to detect the effect size
that matters, where the test population is unrepresentative of the target population, and
where a positive result would not generalise beyond the test conditions. Be blunt — a test
that cannot detect the effect it is looking for is worse than no test, because it produces
a false negative that feels like evidence.

Rules:
- Thresholds are set before the test, never after. If a threshold cannot be set in advance,
  the hypothesis is not specific enough — rewrite it.
- Prefer tests that can fail fast and cheap over tests that are rigorous but take a quarter.
- If an assumption genuinely cannot be tested before the decision must be made, say so
  and route it to scenario planning instead of designing a fake test.

ASSUMPTIONS TO TEST:
[PASTE ASSUMPTIONS, AVAILABLE LEVERS, POPULATIONS, AND BASELINE RATES]
```

## Output you should get

One test card per assumption, a sequenced portfolio, and an honest validity section.

## Quality bar

- **Pre-set thresholds are non-negotiable.** A test whose success criterion is decided after
  seeing the data is theatre.
- **Check sample sizes against the effect you care about.** Most business "tests" cannot
  detect a 3-point conversion difference with the traffic they have.
- **Reject** a portfolio whose first test is the expensive one. Sequence for early kills.

## Pairs with

- Precede with [03 Assumption Audit](03-assumption-audit.md)
- Route untestable assumptions to [27 Scenario Comparison](../3-choose-strategy/27-scenario-comparison.md)
- Follow with [39 Benefit Tracking](../4-build-execution/39-benefit-tracking.md) once tests become rollouts
