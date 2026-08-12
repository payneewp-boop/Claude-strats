# 05 · Momentum Read

**Phase:** 1 — Diagnose · **Use when:** the levels look fine but you want to know the direction

## What it does

Reads rate of change rather than level. A business at 20% margin that was at 26% two years
ago is a different business from one that was at 14%, even though today's page looks
identical. This tool finds inflection points, measures acceleration and deceleration, and
identifies which trends are compounding.

## Inputs you need

- Time-series data at the finest granularity you have — monthly or quarterly beats annual
- At least 8 periods; 12+ is much better
- Leading indicators if available: pipeline, bookings, enquiries, trial starts, applications
- Any known one-offs (acquisitions, disposals, accounting changes, COVID-era distortions)

## Prompt

```
You are reading momentum in [COMPANY / SEGMENT]. Levels are not the subject. Direction,
rate of change, and inflection are the subject.

Produce:

1. MOMENTUM TABLE
   For each key metric: metric | level now | growth rate over the last 4 periods | growth
   rate over the 4 before that | acceleration (is the rate rising or falling) | direction
   (improving / flat / deteriorating) | is this trend compounding or one-off.
   Cover at minimum: revenue, volume, price realisation, gross margin, customer count,
   churn, and any leading indicator supplied.

2. INFLECTION POINTS
   Identify each point where a trend changed direction or slope. For each: the period,
   the metric, the size of the change, and the most plausible cause given the material.
   Distinguish inflections that appear in several metrics at once (systemic) from
   isolated ones (local or noise).

3. LEADING VS. LAGGING
   Sort the metrics into leading and lagging for this business, and state the observed lag
   between them where the data lets you. Then state what the leading indicators are
   currently saying about the lagging ones 2–4 periods out.

4. THE DIVERGENCES
   Find places where two metrics that normally move together have separated — revenue up
   but volume down, customers up but revenue per customer down, bookings up but conversion
   down. Each divergence is a story. State what each one most likely means.

5. MOMENTUM VERDICT
   One paragraph: is this business gaining or losing momentum, and how confident are you?
   Then state the two metrics you would watch weekly to know if that verdict is changing.

6. NOISE WARNING
   Identify any movement in the data that is likely noise, seasonality, one-off, or an
   artefact of a small base, and should not be read as momentum. Be specific about which
   figures you are discounting and why.

Rules:
- Adjust for known one-offs where the material identifies them; flag where you suspect one
  but cannot confirm it.
- With fewer than 8 periods, state that the momentum read is directional only.
- Do not confuse a high level with good momentum, or a low level with bad momentum.

DATA:
[PASTE TIME SERIES, NOTING PERIODS AND ANY KNOWN ONE-OFFS]
```

## Output you should get

A rate-of-change table, dated inflection points, and a verdict with two watch metrics.

## Quality bar

- **Section 4 is the one to read first.** Divergences are where momentum reads earn their keep.
- **Reject** any verdict that does not name the specific metrics that would falsify it.
- **Sanity-check the noise section.** If it discounts every inconvenient data point, it is
  rationalising rather than filtering.

## Pairs with

- Precede with [04 Fact Base](04-fact-base.md) so the series are consistently defined
- Follow with [48 Early Warning Signals](../5-govern-value/48-early-warning-signals.md) to formalise the watch metrics
- Feed inflection points into [08 Root Cause Scan](08-root-cause-scan.md)
