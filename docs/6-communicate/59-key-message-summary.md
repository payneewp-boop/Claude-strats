# 59 · Key Message Summary

**Phase:** 6 — Communicate · **Use when:** the message must survive being repeated by others

## What it does

Reduces a strategy or decision to a small set of messages that stay accurate as they are
retold down the organisation — and stress-tests them for how they will distort. Messages
degrade with every retelling; this designs for that.

## Inputs you need

- The strategy, decision, or change
- The audiences and the chain of retelling: who tells whom
- What people currently believe
- Known sensitivities and anything that must not be misstated

## Prompt

```
You are building the key message set for [STRATEGY / DECISION] at [COMPANY].

Design for retelling. Every message will be passed on by someone who heard it once, in
their own words, to someone with less context.

Produce:

1. THE THREE MESSAGES
   Exactly three. Each one sentence, each independently memorable, together covering what
   matters. Three is the limit of what survives retelling; a fourth displaces one of the
   first three rather than adding to them.
   For each: the message, why it is one of the three, and what it must accomplish.

2. THE SUPPORTING PROOF
   For each message, one or two supporting facts — a number, a customer example, a
   competitor move — that a person would remember and repeat alongside it. Specific facts
   travel; general claims do not.

3. AUDIENCE VARIANTS
   Table: audience | message 1 as they hear it | message 2 | message 3 | the "what it means
   for me" line for that audience.
   Variants may change emphasis and language; they must not change meaning. Check each
   variant against the others for contradiction, because audiences talk to each other.

4. THE TELEPHONE TEST
   Simulate the retelling chain: executive → director → manager → team member. Show how each
   message is likely to be paraphrased at each step, and where it distorts. For each
   distortion: is it tolerable, or does it need the message rewritten to be
   distortion-resistant?
   Common failure: any nuance ("we are prioritising X while maintaining Y") collapses to its
   first half within two retellings.

5. WHAT PEOPLE WILL HEAR THAT WE ARE NOT SAYING
   The inferences people will draw beyond the literal message — usually about job security,
   status, workload, or who is favoured. Name them. Then either address them explicitly in
   the messages or accept that the inference will spread unchallenged.

6. THE PHRASES TO USE VERBATIM
   The exact wording for the sensitive parts, where paraphrase would cause harm — anything
   involving jobs, commitments, timing, or numbers. State which phrases must be used as
   written and why.

7. THE PHRASES TO AVOID
   Wording that will trigger cynicism or be turned against the message in this specific
   organisation. Base it on the language of previous initiatives here and what happened to them.

8. THE QUESTION EVERY MESSAGE MUST SURVIVE
   For each message, the obvious challenge from a sceptical listener, and the one-line
   answer that holds. If a message cannot survive its obvious challenge in one line, it is
   the wrong message.

9. CONSISTENCY CHECK
   Test the three messages against each other and against what leadership has said in the
   last six months. Name any contradiction — someone in the audience will find it, and it
   will define the reception.

Rules:
- Three messages. Not five, not seven.
- No message that requires a caveat to be true.
- Every message must be sayable in one breath, in plain words.
- Every supporting fact must come from the material, with its source. Invented proof is the
  fastest way to lose an audience that can check it, and messages travel further than
  their corrections.

MATERIAL:
[PASTE STRATEGY, AUDIENCES, RETELLING CHAIN, CURRENT BELIEFS, SENSITIVITIES]
```

## Output you should get

Exactly three messages with memorable proof, audience variants that do not contradict, a
retelling simulation with distortion analysis, named inferences, verbatim phrases, and a
consistency check against past statements.

## Quality bar

- **Section 4 is what makes this different from a message list.** Messages that cannot survive
  paraphrase must be rewritten, not repeated louder.
- **Section 5 catches the rumour before it starts.** People fill silence with their worst assumption.
- **Reject** any set of more than three. The fourth message is where clarity goes.

## Pairs with

- Precede with [52 Narrative Builder](52-narrative-builder.md)
- Follow with [38 Communication Plan](../4-build-execution/38-communication-plan.md)
- Follow with [55 Hostile Q&A](55-hostile-qa.md)
