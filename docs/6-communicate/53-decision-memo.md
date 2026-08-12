# 53 · Decision Memo

**Phase:** 6 — Communicate · **Use when:** you need a decision made, not a discussion had

## What it does

Writes the memo that gets a decision taken in the room: recommendation first, the reasoning
compressed, the alternatives fairly treated, the risks stated, and the specific decision
requested. Written to be read in advance and decided on the day.

## Inputs you need

- The decision required, and who has the authority to make it
- The analysis behind your recommendation
- The alternatives considered and why they lost
- Known objections from the people in the room
- Any deadline or window that constrains timing

## Prompt

```
You are writing a decision memo for [DECISION] to [DECISION MAKER / FORUM].

Maximum two pages. Recommendation in the first paragraph. Written to be read before the
meeting, not presented in it.

Structure:

1. RECOMMENDATION (3–4 sentences)
   What we should do, what it costs, what it returns, and the specific decision requested
   today. Lead with the answer. Do not build to it.

2. THE DECISION REQUIRED
   State exactly what you are asking for: approve X, allocate £Y, authorise Z by date D.
   Include what is not being asked for now, so the scope of the decision is unambiguous.

3. WHY (the argument, 3–5 points)
   Each point one short paragraph, each with its supporting evidence, ordered by weight.
   These must be the reasons that actually drive the recommendation, not the reasons that
   are easiest to defend.

4. ALTERNATIVES CONSIDERED
   Table: option | what it would achieve | why not chosen | what would make us revisit it.
   Treat them fairly. A memo that presents strawmen loses the reader who has thought about
   one of them seriously — and there is always one who has. Include doing nothing.

5. RISKS AND WHAT WE DO ABOUT THEM
   The three or four material risks, each with its mitigation and residual exposure. State
   the maximum downside plainly. A memo with no honest downside is not trusted.

6. WHAT WOULD CHANGE THIS RECOMMENDATION
   The specific evidence or event that would make this wrong. This is the sentence that
   makes a memo credible, and almost no memo contains it.

7. IF WE DO NOTHING
   The cost of the status quo, quantified. Every decision competes with inaction, and
   inaction is usually the default winner unless it is priced.

8. WHAT HAPPENS NEXT
   If approved: the first three actions, their owners, and their dates. Show that the work
   starts immediately and that someone owns it.

APPENDIX (not counted in the two pages)
Supporting analysis, model detail, and data — for those who want to check the reasoning.

Rules:
- No more than two pages for the main memo. If it cannot be made in two pages, the thinking
  is not finished.
- No jargon, no hedging. Where you are uncertain, state the uncertainty precisely and its
  size, rather than softening the language.
- Every number in the memo must be traceable to the appendix.
- Do not bury the cost or the downside. Put them where they will be found.

MATERIAL:
[PASTE ANALYSIS, ALTERNATIVES, RISKS, KNOWN OBJECTIONS, DEADLINE]
```

## Output you should get

Two pages: recommendation first, an explicit ask, the real reasons, fairly treated
alternatives, honest downside, falsification conditions, and named next steps — with the
analysis in an appendix.

## Quality bar

- **Section 6 is the credibility test.** A recommendation with no stated falsification
  condition reads as advocacy.
- **Section 7 is what beats the default.** Inaction wins by forfeit when nobody prices it.
- **Check section 4 for strawmen.** The strongest alternative must be presented at its strongest.

## Pairs with

- Precede with [51 Stakeholder Alignment](51-stakeholder-alignment.md) — align before you send
- Follow with [55 Hostile Q&A](55-hostile-qa.md) to prepare for the room
- Follow with [60 Next Steps](60-next-steps.md)
