# 49 · Corrective Actions

**Phase:** 5 — Govern Value · **Use when:** a metric has gone red and you must respond

## What it does

Converts a red metric into a diagnosed, sized, owned response — with an explicit decision
about whether to push harder, change approach, or stop. Prevents the two standard failures:
doing more of what is not working, and abandoning something that just needs more time.

## Inputs you need

- What has gone red: the metric, by how much, for how long
- The plan's expectation for that metric at this point
- What has already been tried
- Available levers and the resource behind them

## Prompt

```
You are designing the corrective response to [PROBLEM: METRIC, VARIANCE, DURATION] at
[COMPANY].

Produce:

1. THE PROBLEM PRECISELY
   What is off, by how much, since when, and what it costs per month if unaddressed.
   Distinguish a level problem (we are below where we should be) from a trend problem (the
   gap is widening) — they need different responses.

2. IS IT REAL?
   Before acting: is this a measurement artefact, timing effect, seasonality, one-off, or
   comparison-base problem? State the check you have done. Acting on a data error is
   expensive and common.

3. DIAGNOSIS
   Why is it off? Distinguish:
   - PLAN WRONG: the target was never achievable on these assumptions
   - APPROACH WRONG: the method does not produce the result — more effort will not help
   - EXECUTION SHORT: the approach is right but it is not being done well or fast enough
   - TIMING: it is working, just later than assumed
   - EXTERNAL: conditions changed
   State the evidence for your classification. This determines everything downstream, and
   getting it wrong is the most expensive error in this tool.

4. WHAT HAS BEEN TRIED
   Table: action | when | expected effect | actual effect | why it did not work.
   If the same class of action has been tried twice without effect, a third attempt is not
   a corrective action.

5. RESPONSE OPTIONS
   For each option: what we do, expected effect on the metric, how long before it shows,
   cost, resource required, risk, and confidence.
   Include across the range: intensify current approach | change approach | change target |
   change resource | change owner | narrow scope | stop.
   Stopping must be a genuine option on the list, priced, not a token entry.

6. RECOMMENDATION
   One recommended response, with the reasoning tied to the section 3 diagnosis. State the
   expected recovery path: by when the metric returns to amber, and to green.

7. IMPLEMENTATION
   Table: action | owner | date | expected effect | how measured.
   Include: what stops to make room for this, since capacity is finite.

8. CHECKPOINT
   When will we know if this is working? Set a specific date and a specific threshold. Then
   state what happens if that checkpoint is missed — including the pre-agreed decision to
   escalate or stop. Set it now.

9. IF THIS DOES NOT WORK
   The next option in sequence, and the point at which we conclude the objective is not
   achievable and change the plan rather than the effort.

Rules:
- Do not recommend intensifying an approach that the diagnosis says is wrong.
- Every corrective action needs a date by which its effect should be visible.
- Sunk cost and prior public commitment are not reasons to continue. Note them and set
  them aside.

MATERIAL:
[PASTE THE PROBLEM DATA, PLAN EXPECTATION, WHAT HAS BEEN TRIED, AVAILABLE LEVERS]
```

## Output you should get

A verified-real problem, a typed diagnosis with evidence, a history of attempts, priced
options including stopping, one recommendation with a recovery path, and a dated checkpoint
with a pre-agreed stop decision.

## Quality bar

- **Section 3 is where this tool earns its value.** "Approach wrong" and "execution short"
  look identical from a distance and demand opposite responses.
- **Section 8's pre-agreed stop** is what prevents indefinite escalation of commitment.
- **Reject** any response that is "try harder" where section 4 shows that has already failed twice.

## Pairs with

- Precede with [48 Early Warning Signals](48-early-warning-signals.md) or [44 Value Realization](44-value-realization.md)
- Precede with [08 Root Cause Scan](../1-diagnose/08-root-cause-scan.md) for a deeper diagnosis
- Follow with [45 Performance Review](45-performance-review.md) at period end
