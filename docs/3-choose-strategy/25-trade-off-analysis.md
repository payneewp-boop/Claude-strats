# 25 · Trade-off Analysis

**Phase:** 3 — Choose Strategy · **Use when:** a plan promises everything at once

## What it does

Forces the real sacrifice out of each option. Strategy is choosing what not to do; a plan
with no trade-offs is a budget with adjectives. This tool names what each option costs in
the dimensions people prefer to leave vague.

## Inputs you need

- The options under consideration ([21 Strategic Options](21-strategic-options.md))
- Constraints: capital, people, management attention, time, brand permission
- The organisation's stated goals across all dimensions (growth, margin, risk, resilience)

## Prompt

```
You are performing trade-off analysis on [OPTIONS] for [COMPANY].

Every option costs something. If an option appears to cost nothing, you have not found
the cost yet — look harder at capacity, attention, optionality, and identity.

Produce:

1. TRADE-OFF DIMENSIONS
   Identify the dimensions in genuine tension here. Common ones:
   growth vs. margin | speed vs. quality | scale vs. focus | cost vs. flexibility |
   short term vs. long term | breadth vs. depth | control vs. speed (build vs. partner) |
   optionality vs. commitment | current customers vs. new customers | risk vs. return.
   For each dimension: state why it is genuinely a trade-off here, rather than a false
   dichotomy that better execution resolves. Discard the false ones explicitly.

2. TRADE-OFF PROFILE PER OPTION
   For each option, a table: dimension | where this option sits | what it gains | what it
   gives up | how much (quantify where the material allows) | who feels the loss.
   The "who feels the loss" column is what determines whether the trade-off survives
   contact with the organisation.

3. THE EXPLICIT SACRIFICES
   For each option, state in one blunt sentence what we are choosing NOT to do or NOT to
   be. If you cannot write that sentence for an option, the option is not a strategy.

4. HIDDEN TRADE-OFFS
   The costs not on anyone's list: management attention (the scarcest resource in most
   organisations), organisational identity, optionality foreclosed, talent that will leave,
   capability that atrophies from disuse, customer relationships that quietly decay.
   For each option, name at least two.

5. REVERSIBILITY
   Table: option | which commitments are reversible | which are one-way | cost and time to
   reverse | what is permanently foreclosed.
   Weight one-way decisions much more heavily than two-way ones, and say which parts of
   each option could be sequenced to keep the door open longer.

6. THE TRADE-OFF THE ORGANISATION WILL REFUSE
   For each option, identify the specific sacrifice this organisation will try to avoid
   making while claiming to have chosen the option. This is how strategies die — chosen in
   the deck, unchosen in the budget. Name the sacrifice, who will resist it, and the
   mechanism that would make the sacrifice stick.

7. WHAT WOULD MAKE THE TRADE-OFF EASIER
   For the leading option, what could reduce the cost of its main sacrifice — sequencing,
   partnering, a pilot, a transition period? Be concrete, and do not pretend the sacrifice
   disappears.

Rules:
- Quantify sacrifices wherever the material permits: revenue foregone, margin points,
  months of delay, headcount redeployed.
- Do not resolve trade-offs by asserting "and we'll do both." If both is genuinely
  possible, prove it with the capacity numbers.
- Treat management attention as a hard constraint with a fixed budget.

MATERIAL:
[PASTE OPTIONS, CONSTRAINTS, GOALS, CAPACITY DATA]
```

## Output you should get

A dimension list with false dichotomies removed, a per-option trade-off profile, blunt
sacrifice sentences, and a named prediction of which sacrifice the organisation will dodge.

## Quality bar

- **Section 3 is the test.** If the sacrifice sentence for an option is weak or generic,
  that option is a slogan.
- **Section 6 predicts implementation failure** better than any risk register — take it
  into the governance design.
- **Reject** any analysis that resolves the main tension with "and."

## Pairs with

- Precede with [21 Strategic Options](21-strategic-options.md)
- Follow with [30 Decision Rights](30-decision-rights.md) — someone must own the sacrifice
- Feed section 6 into [37 Change Plan](../4-build-execution/37-change-plan.md)
