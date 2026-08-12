# 27 · Scenario Comparison

**Phase:** 3 — Choose Strategy · **Use when:** the future is uncertain in ways that matter

## What it does

Builds a small set of genuinely different futures, then tests every strategic option against
each one — producing not just a preferred option but a view of which options are robust
across futures and which are bets on one specific world.

## Inputs you need

- Strategic options ([21](21-strategic-options.md))
- The high-impact, low-certainty uncertainties ([16 Trend Scan](../2-map-markets/16-trend-scan.md))
- Financial model or business case that can be re-run under different inputs
- Time horizon for the decision

## Prompt

```
You are running scenario comparison for [COMPANY]'s options over [HORIZON].

Scenarios are not optimistic/base/pessimistic. They are different worlds driven by
different resolutions of genuine uncertainties.

Produce:

1. CRITICAL UNCERTAINTIES
   From the material, identify the uncertainties that are both high-impact and genuinely
   uncertain. Rank them. Select the two that most drive divergent futures, and state why
   the others are either more certain or less consequential.

2. SCENARIO FRAME
   Build 3–4 scenarios from the resolutions of those uncertainties. For each:
   - NAME: memorable and descriptive
   - THE WORLD: what is true in this future, in 4–6 sentences
   - HOW WE GOT HERE: the plausible path from today, with rough timing
   - INDICATORS: the observable signals that this scenario is emerging, and roughly when
     they would appear
   - PROBABILITY: your estimate, with reasoning. They should sum to 1.
   Each scenario must be plausible, internally consistent, and materially different from
   the others in what it demands of us.

3. OPTION × SCENARIO MATRIX
   Table: rows = options, columns = scenarios. Each cell: outcome (quantified where the
   model allows — revenue, margin, NPV) and a one-line qualitative read.
   Include the do-nothing option.

4. ROBUSTNESS READ
   - ROBUST: options that perform acceptably in every scenario
   - BETS: options that win big in one scenario and lose badly in others — state which
     scenario each bets on and its probability
   - DOMINATED: options beaten by another option in every scenario. Drop them and say so.

5. REGRET ANALYSIS
   For each option, the worst-case regret: how much worse off we are than we would have
   been with the best option for that scenario. Rank by maximum regret. The minimum-regret
   option is often not the highest-expected-value one, and the difference is the real
   conversation.

6. NO-REGRET MOVES
   The actions worth taking today regardless of which scenario unfolds. These should be
   started immediately and need no further debate.

7. OPTION-CREATING MOVES
   Actions that are cheap now and preserve the ability to move decisively when the
   scenario clarifies — a small stake, a pilot, a partnership, an option to buy, a
   capability seeded. For each: cost now, and what it buys later.

8. TRIGGERS
   For each scenario, the specific observable event that would confirm it is arriving, and
   the pre-agreed action to take at that point. Write these as "if we see X by date Y,
   we do Z."

9. WHERE THE SCENARIO FRAME ITSELF FAILS
   The two uncertainties you chose determine every conclusion here. State what a third
   uncertainty, excluded from the frame, would do to these rankings if it resolved adversely
   — and whether any scenario you built is actually implausible on closer inspection.

Rules:
- Scenarios must not be the same future at three levels of intensity.
- Probabilities must be stated and sum to 1. Vagueness here defeats the exercise.
- The do-nothing option gets scored in every scenario, including the ones where it fails.
- Quantify a matrix cell only where the model or the material supports it. Mark the rest
  qualitatively rather than filling the grid with invented figures — a complete-looking
  matrix of guesses is more dangerous than an honestly sparse one.

MATERIAL:
[PASTE OPTIONS, UNCERTAINTIES, FINANCIAL MODEL, HORIZON]
```

## Output you should get

Two named driving uncertainties, 3–4 distinct worlds with probabilities, a full option ×
scenario matrix, a regret ranking, and a set of no-regret and option-creating moves with
triggers.

## Quality bar

- **Sections 6 and 7 are what you act on Monday.** A scenario exercise that produces only
  analysis has failed.
- **Check that scenarios are genuinely different worlds,** not sensitivity cases. The test:
  each should demand a different capability.
- **Triggers must be observable and dated.** "If the market shifts" is not a trigger.

## Pairs with

- Precede with [21 Strategic Options](21-strategic-options.md) and [16 Trend Scan](../2-map-markets/16-trend-scan.md)
- Follow with [46 Scenario Stress Test](../5-govern-value/46-scenario-stress-test.md)
- Feed triggers into [48 Early Warning Signals](../5-govern-value/48-early-warning-signals.md)
