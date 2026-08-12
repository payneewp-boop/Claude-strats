# 44 · Value Realization

**Phase:** 5 — Govern Value · **Use when:** the programme is running and you need to know if value is arriving

## What it does

Checks whether promised value is actually appearing in the accounts, on the expected profile,
and attributable to the work — then diagnoses the gap where it is not. Runs periodically
against the frozen baselines from [39 Benefit Tracking](../4-build-execution/39-benefit-tracking.md).

## Inputs you need

- The benefit register with its frozen baselines and expected profile
- Actual financial and operational results for the period
- Programme delivery status against milestones
- Any external factors affecting the same lines

## Prompt

```
You are performing a value realization review for [PROGRAMME] as at [DATE].

Produce:

1. BENEFIT SCORECARD
   Table: benefit | promised annual value | expected to date on the profile | actual to
   date | variance | % of expected | status (on track / behind / ahead / at risk / lost).
   Use the frozen baselines. If any baseline has been changed since approval, flag it
   explicitly and show both the original and the revised figure.

2. TOTAL VALUE POSITION
   Cumulative promised vs. cumulative delivered. Cumulative cost vs. plan. Net position.
   Compare against the business case's expected crossover point and state whether the
   programme is ahead of, on, or behind its return curve — and by how many months.

3. ATTRIBUTION CHECK
   For every benefit claimed as delivered, verify: is this movement attributable to the
   programme, or would it have happened anyway? Check for market movement, pricing effects,
   one-offs, other initiatives claiming the same benefit, and accounting reclassification.
   Restate the defensible number where the claimed one is inflated.

4. DIAGNOSIS OF SHORTFALLS
   For each benefit behind plan, determine which it is:
   - TIMING: the benefit will arrive, later than expected. State the revised date and the
     evidence for it.
   - SIZE: the benefit will arrive but smaller. State the revised number and why.
   - MECHANISM: the change was delivered but does not produce the benefit — the causal
     logic in the business case was wrong. This is the most important finding when it
     occurs, because more delivery will not fix it.
   - DELIVERY: the change has not been delivered yet. State when it will be.
   - MEASUREMENT: the benefit may be arriving but cannot be seen in current reporting.
   The response to each of these is completely different. Do not blur them.

5. UNBANKED SAVINGS
   Which cost reductions have been identified but not removed from budgets? Name the budget
   lines, the amounts, and who must action the reduction. Unbanked savings do not exist.

6. UNEXPECTED VALUE AND UNEXPECTED COST
   Benefits arriving that were not in the case, and costs arriving that were not either.
   Both are common and both should be recorded rather than quietly netted off.

7. REVISED FORECAST
   Given the evidence to date, restate the expected total benefit and its timing. Compare
   against the original case. If the programme is no longer value-positive on realistic
   assumptions, say so directly.

8. ACTIONS
   Table: issue | action | owner | date | expected effect on the benefit position.
   Include the option of stopping a workstream whose benefits have proven illusory.

Rules:
- Do not rebaseline to make performance look better. Report against the approved case, and
  show any change explicitly.
- Separate delivery status from benefit status. A programme can be fully delivered and
  produce nothing.
- Where a benefit cannot be measured, say so rather than assuming it arrived.

MATERIAL:
[PASTE BENEFIT REGISTER, BASELINES, ACTUAL RESULTS, DELIVERY STATUS, EXTERNAL FACTORS]
```

## Output you should get

A scorecard against frozen baselines, an attribution-corrected total, a typed diagnosis of
every shortfall, an unbanked savings list, and a revised forecast stated against the original.

## Quality bar

- **The MECHANISM finding in section 4 is the one to act on fastest.** If the causal logic
  was wrong, delivering more of the same wastes money.
- **Section 5 recovers real cash** in almost every programme review.
- **Reject** a review that has quietly rebaselined. Compare against what was approved.

## Pairs with

- Precede with [39 Benefit Tracking](../4-build-execution/39-benefit-tracking.md)
- Follow with [49 Corrective Actions](49-corrective-actions.md)
- Follow with [45 Performance Review](45-performance-review.md)
