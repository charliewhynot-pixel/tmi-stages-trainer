// Expanded question banks (Grill, Test, Scenario), merged into STAGES at load.
const EXTRA_STAGES = [
 {
  "n": 1,
  "grill": [
   {
    "q": "By Culadasa's criteria, which of these students has NOT yet mastered Stage One?",
    "options": [
     {
      "t": "Sits daily, but her mind still wanders for most of each session despite her efforts",
      "ok": false,
      "why": "Involuntary mind-wandering is the obstacle Stage Two works on, and neither of Stage One's mastery criteria concerns how stable attention is."
     },
     {
      "t": "Sits daily, but deliberately uses most sessions to plan and think through his work",
      "ok": true,
      "why": "Mastery also requires that you rarely if ever procrastinate on the cushion by thinking and planning, so attendance without diligence falls short."
     },
     {
      "t": "Sits daily, but missed two sessions last month during an emergency hospital stay",
      "ok": false,
      "why": "The criterion allows for sessions missed when absolutely unavoidable, which is exactly what this was."
     },
     {
      "t": "Sits daily, but rarely gets beyond Step Two of the transition before the bell goes",
      "ok": false,
      "why": "Culadasa says that spending a whole session without getting past Step Two is perfectly fine, and mastery is not defined by reaching the breath at the nose."
     }
    ]
   },
   {
    "q": "A student sits daily. Whenever she notices that she is planning, she decides to finish the plan before going back to the breath. In Stage One terms, this is best described as:",
    "options": [
     {
      "t": "Mind-wandering, the involuntary sequel to forgetting the breath",
      "ok": false,
      "why": "She has already woken up from the wandering each time, so what follows is a choice and not something involuntary."
     },
     {
      "t": "Procrastination, in the sense of putting off sitting down to practise",
      "ok": false,
      "why": "What is being put off here is not sitting down, since she is already seated, but the practice itself, which the Conclusion calls procrastinating on the cushion and the obstacles section calls reluctance and resistance."
     },
     {
      "t": "Self-doubt, a loss of confidence in her own ability to meditate",
      "ok": false,
      "why": "Nothing she reports suggests doubt about her abilities, only a preference for a more engaging activity."
     },
     {
      "t": "Reluctance and resistance, choosing other mental activity instead",
      "ok": true,
      "why": "This is how Culadasa characterises reluctance and resistance: time on the cushion given over to daydreams, fantasies or plans in place of meditating."
     }
    ]
   },
   {
    "q": "Which description matches what Culadasa says diligence 'precisely' means?",
    "options": [
     {
      "t": "Joyfully repeating the same simple tasks as many times as needed",
      "ok": true,
      "why": "This is the description he gives in 'The Right Attitude' immediately before saying that it is precisely what diligence means."
     },
     {
      "t": "Applying strong, sustained effort to keep attention on the breath",
      "ok": false,
      "why": "He says the only place for great effort is in adjusting your schedule to practise more, and he treats striving as the wrong attitude."
     },
     {
      "t": "Keeping to your daily sitting schedule whatever else may come up",
      "ok": false,
      "why": "That is being consistent, which the Overview names separately from diligence in its description of Stage One."
     },
     {
      "t": "Overriding reluctance through firm and consistent self-discipline",
      "ok": false,
      "why": "He specifies 'train yourself', not 'force' or 'discipline yourself', on the grounds that force, guilt and willpower cannot sustain a practice."
     }
    ]
   },
   {
    "q": "According to the Second Interlude, why does 'just do it' work as an antidote to laziness?",
    "options": [
     {
      "t": "Acting at once leaves no opening for doubt about the practice to form",
      "ok": false,
      "why": "Doubt has its own remedies, namely reasoning and the trust that comes from success, and speed of action is not among them."
     },
     {
      "t": "Repeatedly forcing yourself to act is what gradually builds discipline",
      "ok": false,
      "why": "Culadasa says the key factor is not discipline but motivation and habits, and he rejects force as a method."
     },
     {
      "t": "Laziness has its power before a task begins and fades once it's under way",
      "ok": true,
      "why": "He says the power of laziness lies in procrastination, so it tends to fade once we have actually begun the task."
     },
     {
      "t": "Starting without reflection removes the need to feel motivated at all",
      "ok": false,
      "why": "The other antidote he gives for laziness is precisely to motivate yourself, by weighing future benefits against the costs."
     }
    ]
   },
   {
    "q": "Which is closest to the kind of session goal Culadasa suggests for someone starting out?",
    "options": [
     {
      "t": "Remaining patient when the mind wanders or drowsiness sets in",
      "ok": true,
      "why": "His own examples are of this kind: not giving up and daydreaming, staying patient with wandering or drowsiness, and not getting annoyed."
     },
     {
      "t": "Keeping attention on the breath for ten minutes without a break",
      "ok": false,
      "why": "For a novice this is not reasonable given recent progress, and it invites the very disappointment he warns about."
     },
     {
      "t": "Having fewer episodes of mind-wandering than in yesterday's sit",
      "ok": false,
      "why": "He warns against expecting visible progress from one sit to the next, noting that attention may be less stable today than it was weeks ago."
     },
     {
      "t": "Reaching Step Four within the first few minutes of the session",
      "ok": false,
      "why": "He says there is no need to hurry on to the next Step, and that a whole session spent at Step Two is perfectly fine."
     }
    ]
   },
   {
    "q": "In Step One of the Four-Step Transition, how are thoughts to be treated?",
    "options": [
     {
      "t": "Suppressed, so that attention can remain with the present moment",
      "ok": false,
      "why": "Nothing is to be suppressed; the instruction is to let it come, let it be and let it go."
     },
     {
      "t": "Labelled briefly, then released before returning to the present",
      "ok": false,
      "why": "Labeling belongs to Stage Three, where it serves to strengthen introspective awareness, and is not part of the transition."
     },
     {
      "t": "Observed mindfully as present-moment objects on a par with sounds",
      "ok": false,
      "why": "He says mindfully observing thoughts is tricky, which is why he advises attending to sounds, smells and physical sensations."
     },
     {
      "t": "Left in awareness, with attention favouring sensations instead",
      "ok": true,
      "why": "Being fully present means being aware of mental activity without engaging in its content, while giving priority to sensations over thoughts."
     }
    ]
   },
   {
    "q": "In Step One, when a sensation is pleasant, what does Culadasa tell you to savour?",
    "options": [
     {
      "t": "The sense object itself, explored closely for all of its fine detail",
      "ok": false,
      "why": "He specifies savouring the pleasure and not the sense object."
     },
     {
      "t": "The pleasure itself, distinguished from the object that triggered it",
      "ok": true,
      "why": "He asks you to separate the feeling of pleasure from whatever triggered it and to savour the feeling, so that it inclines the mind toward happiness in the present."
     },
     {
      "t": "Neither one; you simply note it as pleasant and let attention move on",
      "ok": false,
      "why": "He says to take a moment to enjoy it, so detached noting is not the instruction here."
     },
     {
      "t": "The sense of calm that remains once the pleasant sensation has faded",
      "ok": false,
      "why": "The instruction concerns pleasure that is available in the present moment, not a state that arrives afterwards."
     }
    ]
   },
   {
    "q": "Which of these does Culadasa explicitly permit during the opening breath count?",
    "options": [
     {
      "t": "Carrying on with the count once the sensations have dropped from awareness",
      "ok": false,
      "why": "Thinking and counting are acceptable only while you have not completely lost awareness of the actual sensations."
     },
     {
      "t": "Resuming from the last number you can remember after losing the count",
      "ok": false,
      "why": "When attention slips or you lose track of the count, you start over again at one."
     },
     {
      "t": "Talking to yourself and thinking about the breath while you observe it",
      "ok": true,
      "why": "He says non-verbal, non-conceptual observation is not the aim at this point, provided the sensations and the count are not lost."
     },
     {
      "t": "Counting on beyond ten for as long as attention seems to be holding",
      "ok": false,
      "why": "The rule is never more than ten and never less than five, because counting quickly becomes automatic."
     }
    ]
   },
   {
    "q": "A novice realises her mind has been wandering for several minutes. What does Culadasa advise?",
    "options": [
     {
      "t": "Return straight to the nose and begin a fresh ten-count",
      "ok": false,
      "why": "A fresh ten-count is his advice when the mind is agitated or wanders again soon after returning, whereas after a long wander he says not to go straight back to the nose."
     },
     {
      "t": "Repeat the Six-Point Preparation, then start again",
      "ok": false,
      "why": "The Preparation is done on sitting down, and he does not prescribe repeating it after mind-wandering."
     },
     {
      "t": "Go back to Step One and remain there until settled",
      "ok": false,
      "why": "Returning to Step One is his advice when restlessness arises while settling into Step Two, not for a long episode of mind-wandering."
     },
     {
      "t": "Revisit Steps Two and Three, then count at the nose",
      "ok": true,
      "why": "He says to go back briefly to Step Two, then to Step Three, and then to start counting breaths at the nose."
     }
    ]
   },
   {
    "q": "When practice feels like a struggle, what does Culadasa say you are actually struggling with?",
    "options": [
     {
      "t": "An untrained mind that cannot yet stay with the meditation object",
      "ok": false,
      "why": "He calls meditation a series of simple tasks that are easy to perform, so the sense of difficulty does not come from the tasks themselves."
     },
     {
      "t": "Unrealistic expectations and an idealised image of what should be",
      "ok": true,
      "why": "In 'The Right Attitude' he locates the struggle in unrealistic expectations and an idealised picture of practice, not in meditating itself."
     },
     {
      "t": "A method that may simply be poorly suited to your own temperament",
      "ok": false,
      "why": "This is one of the stories he says the ego-Self concocts to avoid blame for unmet expectations."
     },
     {
      "t": "Hindrances that have not yet been met with their proper antidotes",
      "ok": false,
      "why": "The hindrances are real, but in this passage he traces the feeling of difficulty to judging your own performance."
     }
    ]
   }
  ],
  "open": [
   {
    "q": "The Overview lists 'cultivating discipline and diligence' among the skills of Stage One. The Stage One chapter says 'train yourself', not 'force' or 'discipline yourself'.\n• Reconcile the two statements.\n• Explain what 'training' consists of in Culadasa's terms.\n• Say how you would answer a student who tells you 'I just need more discipline'.",
    "model": "The wording of the Stage One material does conflict, and neither the Overview nor the chapter reconciles it. Stage Two does. There he says that discipline doesn't mean forcing the mind to do something it can't; it means a firm, intentional resolve to let go of whatever has captured attention and return to the breath. Reading that back into Stage One is my step, not his, but it fits. The Overview's 'discipline' is firmness of intention, whose result is a practice that is regular and diligent. What the chapter rejects is discipline as coercion: a practice built on force, guilt and willpower doesn't last, partly because of the negative emotions these stir up. A teaching shorthand for the difference (a gloss, not Culadasa's wording) is wise, gentle discipline versus harsh discipline. His own word for the good kind is 'firm', as in 'gently but firmly'. What makes it wise is that it works through motivation, intention and habit; a softer tone of self-command would be the harsh kind's method in a quieter voice.\n\nTraining is his alternative. It means working on your motivation and intentions until the simple acts of sitting down and meditating follow naturally, then repeating those acts daily until they become habits. This is his general model applied to Stage One: there is no self in charge of the mind to do the forcing; all you really do is form and hold conscious intentions, intentions lead to actions, and repeated actions become habits. So when practice isn't happening, the instruction is to strengthen motivation and intention, not to chastise or force yourself. The Second Interlude says the same when discussing self-doubt: the key factor isn't discipline but motivation and habits, and without motivation discipline won't help much.\n\nTo the student, I would first agree with what is right in the wish: wanting to be consistent is the Stage One goal. Then I would move the lever. In place of 'more discipline': ask what the practice is for (point one of the Six-Point Preparation); fix a time, or a place in the day's routine, so there is no decision to make; keep sits short enough to be easy to begin; and look deliberately for what is pleasant in them. Anyone who gets themselves to work or to exercise regularly already has all the discipline this needs.",
    "rubric": [
     "Acknowledges the tension in the Stage One material ('discipline' appears approvingly in the Overview and disapprovingly in the chapter) and knows where it is resolved: Stage Two defines discipline as a firm, intentional resolve, not as forcing the mind.",
     "Distinguishes discipline as an outcome (regular, diligent practice) from force, guilt and willpower as a method, and gives his reason for rejecting the method: the negative emotions it stirs up make practice unsustainable. May use the gloss 'wise, gentle discipline' versus 'harsh discipline', marked as a gloss, with 'wise' meaning that it works through motivation, intention and habit.",
     "Defines training accurately: working on motivation and intentions until sitting and meditating follow naturally, then daily repetition until they become habits.",
     "Connects this to the wider model: no self in charge to do the forcing; intentions lead to actions and repeated actions to habits; the Second Interlude's 'not discipline but motivation and habits'.",
     "The response to the student affirms the wish for consistency, then redirects from self-coercion to motivation, a fixed time or place, short sits and enjoyment, without scolding."
    ]
   },
   {
    "q": "The Overview says that no Stage can be skipped and that mastery of one Stage is required for mastery of the next. It also says a beginning meditator works on Stages One and Two at the same time.\n• Explain how both can be true.\n• State what mastery of Stage One does and does not require.\n• Say how you would place an experienced meditator with strong attention who sits irregularly.",
    "model": "Stage One has two goals of different kinds. The first is a way in: the Six-Point Preparation, the Four-Step Transition and the count. The second, which Culadasa calls more important, is a consistent daily practice in which you meditate to the best of your ability throughout every session. Neither is an attainment of attention. The moment you arrive at the breath and lose it, you are meeting forgetting and mind-wandering, which is Stage Two's material. So the two Stages run in parallel on different clocks: Stage Two's work happens inside each sit, while Stage One's is established across weeks of sits. The Overview allows exactly this: practise according to what is happening in the present, and once a Stage's obstacles are overcome even temporarily you can work with those of the next.\n\nThe dependency holds at the level of mastery. Stage Two's gains are habits formed by intentions repeated over many sessions; without regular, diligent sits there is nothing for those habits to form from. (That mechanism is my reading of his intention-to-habit model. His flat statement that Stage One must be mastered to make progress, whatever your natural abilities, points the same way.)\n\nMastery of Stage One requires two things: never missing a daily session except when absolutely unavoidable, and rarely if ever procrastinating on the cushion by thinking, planning or doing something besides meditating. The Overview's one-line summary gives only the first. Mastery does not require reaching a count of ten, reaching Step Four, or any particular stability of attention.\n\nSo the experienced but irregular meditator has not mastered Stage One, whatever their attention can do on a good day. Culadasa remarks that few meditators, even those with years of experience, keep a truly consistent regimen, and he calls this the most difficult Stage to master. I would place them twice: at whichever Stage describes what actually happens in their sits, and at Stage One for the practice as a whole. I would say that plainly, without implying their experience counts for nothing.",
    "rubric": [
     "Identifies Stage One's two goals (a method for entering meditation; a consistent, diligent daily practice), notes that the second is the more important, and that neither is an attainment of attention.",
     "Explains the simultaneity: once at the breath, mind-wandering is already Stage Two's work; cites the Overview's instruction to practise according to what is happening, and to work with the next Stage's obstacles once the current ones are overcome even temporarily.",
     "Explains why mastery still depends on Stage One: later gains are habits formed by intentions repeated over many sessions, which requires regular, diligent sits; marks this as inference unless attributing it to the text.",
     "States both mastery criteria accurately, including 'except when absolutely unavoidable' and the on-cushion clause, and says what is not required (a ten-count, Step Four, stable attention).",
     "Places the experienced, irregular sitter as not having mastered Stage One, citing his remarks that few long-term meditators are truly consistent and that this is the most difficult Stage to master, and frames this without belittling them."
    ]
   },
   {
    "q": "Culadasa says to treat the Four-Step Transition 'as a serious practice, not just as a nice way to start a meditation'.\n• Explain what the transition trains, in terms of attention and peripheral awareness.\n• Explain why it narrows gradually, leaving attention free within each 'space', instead of placing attention on the nose at once.\n• Explain what deliberately evoking pleasure and contentment contributes.",
    "model": "What it trains. At each Step you define a space and let attention range freely inside it, while everything outside that space stays in peripheral awareness. Nothing is suppressed or excluded. This is the first working experience of the distinction the whole method rests on; Culadasa says every Step is a good opportunity to learn to tell attention from awareness. It is also the aim of the early Stages in miniature (stable attention with mindfulness), and it is where 'let it come, let it be, let it go' is introduced. I would add that it is a first exercise in setting the scope of attention, which the First Interlude counts as part of stable attention; he does not draw that link in the chapter.\n\nWhy gradually. Attention arrives from daily life free-ranging, with little intentional control over its movements. The transition never pins it down. It restricts the space, not the movement, and it does so gently: the chapter's summary says to emphasise relaxation, peacefulness and pleasure rather than willpower and effort. By Step Three attention gravitates to the breath without being pushed, because little else is changing in a still body, so the final narrowing to the nose is a small step. Behind this sits the First Interlude's point that attention can be directed at will but not sustained by will: an unconscious process weighs what is worth attending to, and intention can only influence it. The same logic gives the transition a reverse gear. When restlessness stirs, you widen again, return to an earlier Step and re-establish contentment, and a whole sit at Step Two is fine. He also says the opposite can work, that focusing in more sometimes helps you settle, so a teacher should offer both.\n\nWhat pleasure contributes. You are told to relax the body, calm the mind and deliberately evoke contentment, 'like gradually settling into a spa', savouring the pleasure and not the object that set it off. In this chapter he says only that relaxation and happiness play an important role in training the mind, and leaves the explanation for later. Within Stage One the reason is plain enough: enjoying practice is what he calls the real solution to procrastination and resistance, and the transition is where that enjoyment is first practised on purpose. My own inference is that a pleasant object also fares better in the unconscious weighing that sustains attention.",
    "rubric": [
     "States that attention is progressively restricted while peripheral awareness is maintained and nothing is suppressed, so the transition is practice in distinguishing attention from awareness (stable attention with mindfulness in miniature).",
     "Describes the design correctly: each Step defines a 'space' in which attention ranges freely; what narrows is the space; the manner is gentle and gradual, with relaxation and pleasure in place of willpower and effort.",
     "Gives a reason for the gradualness: attention arrives free-ranging with little intentional control; it can be directed but not sustained by will; by Step Three it gravitates to the breath because little else is changing.",
     "Includes the flexibility in both directions: widen and return to an earlier Step when restless (a whole sit at Step Two is fine), yet narrowing can sometimes help the mind settle.",
     "Explains the role of pleasure (deliberately evoked contentment; savouring the pleasure, not the object; the link to enjoyment as the real solution to resistance) and marks which links are the answerer's inference and which are Culadasa's statements."
    ]
   },
   {
    "q": "Culadasa caps the breath count at ten, yet strongly recommends counting even to advanced meditators.\n• Explain what the count is for.\n• Explain what it cannot tell you, and why the cap follows from that.\n• A student offers an unbroken count of 240 as evidence that they are ready for Stage Four. Say what you would ask and what you would tell them.",
    "model": "What it is for. Three things. It stabilises attention at the start of a sit: the task is to follow the sensations continuously for ten breaths, starting again at one whenever attention slips or the count is lost (and aiming for five if ten keeps failing). It becomes a conditioned signal: he compares it to Pavlov's dogs, the mind learning that counting means meditation is beginning and calming down in response, which is why he recommends it even with meditation objects other than the breath. And it is diagnostic: it gives valuable information about the state of your mind and the distractions you are likely to meet in that sit. The last two are why an advanced meditator still counts; at the mastery of Stage Ten, he says, effortless concentration arrives before the tenth breath.\n\nWhat it cannot tell you. Counting quickly becomes automatic, and you can forget the breath and let the mind wander while the count carries on. A number above ten therefore measures the continuity of counting, not the continuity of attention to the sensations. That is his stated reason why counting beyond ten has little value, and for the rule: never more than ten, never less than five. During the count the standard concerns the sensations (not missing an inhale or an exhale), and for a beginner being aware of most of each breath is doing well.\n\nThe student. I would start with what is good: they are sitting, they are keen, and holding a thread for 240 breaths is not nothing. Then I would ask before telling. Were the sensations at the nose clear all the way through, or did the numbers carry on while you thought about something else? Did the breath ever fade or grow dim? When you stop counting at ten, how long is it before you find you have been mind-wandering? Their Stage is read from those answers, from what is happening with forgetting, mind-wandering, distraction and dullness, not from a count. The Overview warns about exactly this: overestimating your abilities, getting ahead of what is actually happening, and shortcuts that only prolong the process. I would suggest an experiment for the week: count ten, drop the count, and watch what attention does without it. They may well be further along than Stage One; the point is to find out with the right instrument. One calibration: Culadasa's rule is unambiguous, so a teacher who lets a student use longer counts as a gauge is departing from TMI and should say so.",
    "rubric": [
     "Gives the count's functions: stabilising attention at the start of a sit; a conditioned cue that settles the mind; information about the state of the mind and likely distractions (hence recommended even for advanced meditators).",
     "States why the cap follows: counting quickly becomes automatic and can continue while the breath is forgotten and the mind wanders, so beyond ten it has little value; never more than ten, never less than five.",
     "Keeps the standard on the sensations, not the number: not missing an inhale or an exhale; for a beginner, most of each breath is doing well.",
     "With the student, affirms first, then asks diagnostic questions (clarity of the sensations during the count; what happens when the count is dropped) before judging their Stage.",
     "Separates Stage diagnosis from the count, citing the Overview's cautions about overestimating ability and getting ahead of what is actually happening, and notes that allowing longer counts departs from Culadasa's rule."
    ]
   }
  ],
  "scenario": [
   {
    "q": "A student six weeks in reports: 'I haven't missed a morning in a month, thirty minutes every day. But if I'm honest, most of the time I end up working through my to-do list or rehearsing conversations. It's actually my best thinking time, and I do feel calmer afterwards. Is that a problem?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening. Several things at once.\n\nFirst, a real accomplishment. A month without a missed morning means the obstacles of time and of procrastination about sitting down are largely overcome. That is half of Stage One's mastery, and the half Culadasa says few meditators manage even after years. It deserves a sincere compliment before anything else.\n\nSecond, the other half is missing. Mastery also means rarely if ever procrastinating on the cushion by thinking and planning. Diligence is defined as engaging wholeheartedly in the practice rather than spending the time planning or daydreaming, and he warns that you will be tempted by things that seem more interesting or 'important' than the meditation object: problems to solve, projects to plan. His category for this is reluctance and resistance: what is being put off is no longer sitting down but the practice itself.\n\nThird, I don't yet know which thing this is, and there are three possibilities. If the planning starts involuntarily and the student returns to the breath each time they notice, it is ordinary mind-wandering, the normal condition that Stage Two addresses, and nothing is wrong. If it runs unnoticed until the bell, that is a null sit (a teaching label, not Culadasa's): it still counts as a sit, which is what Stage One asks, but beyond the waking up at the bell it trained nothing. If they notice and carry on because the plan seems worth finishing, that is the choice Stage One asks them to stop making, and for that stretch they are not meditating at all. 'My best thinking time' suggests the third, but I would ask: when you realise you are planning, what happens next?\n\nFourth, the calm is real and I would not argue with it. But intentions repeated daily become habits, and the habit being built here is thinking on the cushion. (That is my inference from his intention-to-habit formula; he does not say it of planning specifically.)\n\nResponse. Lead with the compliment and mean it. Normalise the pull: he predicts it. Then put the matter as a choice, not a verdict: you have built the container, so what do you want to grow in it? That sends them back to point one of the Six-Point Preparation, motivation. If what they want is thinking time, that is legitimate, at another hour. (Suggesting a separate planning slot is my own teaching craft, not TMI.) If they want what meditation offers, three small changes. Add the diligence resolve at the start of each sit. Use point five to run through the to-do list beforehand, acknowledge it, and resolve to set it aside, knowing they will not be wholly successful. And set one small goal, such as coming back without annoyance each time they notice planning. Alongside that, make the breath more attractive than the list: a slower Four-Step Transition, looking for what is pleasant. I would not tell them the last month was wasted: every one of those mornings was a sit, and sitting down is an accomplishment in its own right. But I would not reach for the slogan he borrows from Stephanie Nash, that the only bad meditation is one you didn't do. A sit given over on purpose to planning is not a bad meditation; it is not a meditation at all. (Deliberate thinking has a place in TMI as analytical meditation, but that only qualifies as meditation with the stability of Stage Four.)",
    "rubric": [
     "Compliments the genuine attainment first: a month of unbroken daily sitting is half of Stage One's mastery criteria, and the part Culadasa says few meditators achieve.",
     "Names the unmet half in his terms: diligence means engaging wholeheartedly rather than planning or daydreaming; mastery requires rarely if ever procrastinating on the cushion by thinking and planning; this is the territory of reluctance and resistance.",
     "Asks before diagnosing: what happens when you notice the planning? Distinguishes three cases: involuntary mind-wandering followed by a return (normal, Stage Two); wandering that runs unnoticed to the bell (a null sit, as a teaching label: still a sit, nothing trained beyond that); and planning that is noticed and deliberately continued (not a meditation at all, short of analytical meditation, which needs Stage Four stability).",
     "Responds through motivation and intention, not prohibition: revisits why they sit, adds the diligence resolve and the distraction inventory from the Six-Point Preparation, sets a small goal about returning without annoyance, and makes the sit more enjoyable; labels any suggestion of a separate planning time as the teacher's own, not TMI.",
     "Weighting: teachers can reasonably differ on whether 'resistance' is the right word when the student reports no reluctance, only a more attractive activity (some would say the intention to meditate was simply never set), on how bluntly to say that these calming sits are not yet training attention, and on whether a label like 'null sit' belongs in the conversation with the student or only in the teacher's own diagnosis."
    ]
   },
   {
    "q": "A student four weeks in reports: 'I'm trying really hard. I clamp my attention onto the tip of my nose and shut everything else out, but within seconds I'm gone again. By the end my forehead is tight and I'm exhausted. I put in more effort than anyone in the group and I'm getting nowhere. Maybe this method just isn't right for my kind of mind.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening. Several layers at once.\n\nThe commitment is exactly right. This student sits, stays, and spends the session meditating instead of daydreaming. Neither kind of procrastination is the problem (they sit down, and once seated they practise), and I would say so first. Whatever is going wrong, it is not a shortage of effort or discipline.\n\nThe technique is working against them. They are attempting exclusive, single-pointed focus and suppressing everything else. Culadasa says a beginner will not be able to focus exclusively, that trying only makes the mind wander more, and that exclusive attention is not a concern before Stage Six. The instruction at Step Four is to watch the breath without intentionally suppressing anything from awareness; the aim is stable attention with mindfulness, attention on the breath with peripheral awareness open. Nor can attention be made to stay by force: willpower cannot prevent forgetting, and he likens forcing stability to stretching a sapling to make it grow. Being gone within seconds at four weeks is the ordinary starting condition, not a verdict.\n\nThe attitude is the deeper issue. 'Trying really hard but not making any progress' is almost word for word the cue he gives for examining your attitude. Meditation is a series of simple tasks repeated until they bear fruit; the sense of struggle comes from judging performance against expectations, here sharpened by comparison with the group. He calls a critical, striving attitude the greatest impediment to progress.\n\nThe last sentence is the real risk. 'Not right for my kind of mind' is self-doubt, and it is also the story he says the ego-Self concocts: if I have tried really hard, the failure is not mine, so it must be the method. Left alone, doubt drains motivation and the practice stops.\n\nThe tight forehead is the same clamping in the body. His instructions are to let the eyes rest angled slightly downward, not to point them at the tip of the nose (a Step Three warning), and to keep the body like a lump of soft clay.\n\nResponse. Start with the compliment and with normalising: the commitment is admirable, and a mind that leaves within seconds is what every untrained mind does. Then redirect the effort instead of asking them to drop it, because 'stop trying' becomes one more thing to fail at. (That caution is mine.) Great effort belongs in keeping the schedule; on the cushion the chapter's summary asks for relaxation, peacefulness and pleasure rather than willpower and effort. Practically: take the Four-Step Transition slowly and look for what is pleasant at each Step; at the nose, let sounds and body sensations stay in the background; treat 'aware of most of each breath' as doing well; and change the session goal from staying on the breath to something they can actually intend, such as not getting annoyed when the mind wanders. Give them his formula: relax and look for the joy; observe; let it come, let it be, let it go. On the doubt, offer his reassurance that very few minds are too active to meditate, and that for an active mind the first three Stages are the hardest and the later ones come more easily. I would hold the ego-Self point back, or offer it lightly and later; said to a discouraged beginner it can sound like an accusation.",
    "rubric": [
     "Opens by affirming the commitment: daily, whole-session, wholehearted practice is what Stage One asks for, so the problem is not a lack of effort or discipline.",
     "Identifies the technique error in his terms: attempting exclusive ('single-pointed') focus and suppressing awareness, which he says only makes the mind wander more; exclusive attention is not a concern before Stage Six; attention cannot be forced to stay.",
     "Identifies the attitude layer: 'trying really hard but not making progress' is his cue to examine attitude; the struggle is with expectations and judging, sharpened by comparison with others; a striving attitude is the greatest impediment.",
     "Recognises 'not right for my kind of mind' as self-doubt and as the ego-Self's exit story, and answers it with his reassurance about active minds, not with argument.",
     "Gives a concrete, relaxing prescription (slow pleasure-seeking transition, open awareness at the nose, 'most of each breath', an attitudinal goal, the relax-and-look-for-the-joy formula) and notes the weighting: teachers differ on whether technique or attitude is primary, and on whether to name the ego-Self mechanism to a discouraged beginner at all."
    ]
   },
   {
    "q": "A student eight weeks in reports: 'For the first three weeks I sat every day. Then work got busy, I missed a couple of days, felt guilty, and it slid. Now I manage maybe twice a week, and I do a full hour each time to make up for it. I've decided I need to get strict: alarm at five, an hour a day, no excuses.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening. Again, several things at once.\n\nThis is the expected arc. Culadasa describes it: at first sheer enthusiasm finds the time; as the excitement fades, other demands press in and 'I'll sit once this is dealt with' takes over. These are the first two obstacles, time and procrastination about sitting down, arriving on schedule. And plenty is going right: three unbroken weeks, still sitting twice a week, and enough care to want to fix it.\n\nThe slide was driven less by the busy week than by the reaction to it. Missed days led to guilt, guilt to judging, and judging feeds doubt and makes the next sit harder to begin. In his terms self-accusation is a form of Aversion, and judgment about our practice undermines motivation and encourages doubt.\n\nThe new plan is more of the same medicine. 'Strict, no excuses' is force, guilt and willpower, which he says cannot sustain a practice, partly because of the negative emotions they stir up. His instruction for exactly this moment is to strengthen motivation and intention, not to chastise or force yourself.\n\nThe dosage is backwards. He starts people at fifteen or twenty minutes a day, adding five minutes at a time towards forty-five, because it is better to work up gradually than to do too much and become discouraged. An hour twice a week, and now an hour daily at five, raises the cost of every sit. Laziness, in his account, appears when the cost of an activity seems to outweigh the benefit, so the plan feeds the very thing it is meant to beat. (Applying that cost-benefit point to 'make-up' sits is my inference.) And getting up earlier, he notes, only works if you go to bed earlier.\n\nBut the instinct is not wrong. He is blunt that he knows no one who established a practice in spare time, that you must make the time and make practice a priority, and that the one place for great effort is adjusting your schedule. The firmness is right; it is aimed at the wrong target.\n\nResponse. Encourage first, then normalise the dip as the usual course. Then keep the resolve and move it: strict about the appointment, gentle with the person, modest about the length. Concretely: one fixed time, or a fixed place in the daily routine, so there is no deciding when; twenty minutes every day, lengthened in five-minute steps once it holds; treated like work or school, with the household told. No making up (my rule, following from the cost point above): a missed day is followed by the next sit and nothing more. Rebuild the benefit side: begin each sit with motivation from the Six-Point Preparation, take satisfaction in simply having sat down, and look deliberately for what is pleasant. If a sitting partner or group is available, use it. And I would ask what the realistic slot is before endorsing five o'clock.",
    "rubric": [
     "Leads with what is working and normalises the dip: early enthusiasm fading under other demands is the expected course of the obstacles of time and of procrastination about sitting down.",
     "Identifies the loop that did the damage: missed sits, then guilt and self-judgment, then doubt and more avoidance; and recognises 'strict, no excuses' as force, guilt and willpower, which he says cannot sustain a practice.",
     "Keeps what is right in the student's instinct: practice has to be made a priority and scheduled, and the one place for great effort is adjusting your schedule, so firmness goes into the timetable and not into self-punishment.",
     "Corrects the dosage: consistency before duration, with short daily sits (fifteen to twenty minutes) lengthened in five-minute steps towards forty-five, a fixed time or place in the routine, realism about sleep, and no compensatory long sits.",
     "Rebuilds motivation and enjoyment, and notes the weighting: teachers differ on how hard to press 'make it a priority' versus easing the load, and some would let the student test the strict plan and learn from the result."
    ]
   }
  ]
 },
 {
  "n": 2,
  "grill": [
   {
    "q": "A student notices mind-wandering and returns to the breath at once, calmly and without self-criticism. In Stage Two terms, what has been missed?",
    "options": [
     {
      "t": "The chance to check whether dullness had brought on the wandering",
      "ok": false,
      "why": "Checking in on the state of the mind is Stage Three's use of introspective attention, not something Stage Two asks for."
     },
     {
      "t": "The chance to label what the distraction was before letting it go",
      "ok": false,
      "why": "Labeling is a Stage Three technique and is not part of the Stage Two instructions."
     },
     {
      "t": "The chance to reinforce the unconscious process that woke them up",
      "ok": true,
      "why": "Returning the instant you notice skips the moment of appreciation, which is how the unconscious process behind the 'aha' is trained to act sooner."
     },
     {
      "t": "Nothing, since a calm and non-judging return is the whole instruction",
      "ok": false,
      "why": "A calm return is right as far as it goes, but Culadasa says that going straight back misses a key opportunity for training the mind."
     }
    ]
   },
   {
    "q": "According to Culadasa, why does annoyance at the moment of waking up slow progress?",
    "options": [
     {
      "t": "It becomes associated with the waking up, the most recent event",
      "ok": true,
      "why": "Negative feedback attaches to what has just happened, the arising of introspective awareness, so it discourages the very process that ends mind-wandering."
     },
     {
      "t": "It agitates the mind, and the agitation turns into monkey-mind",
      "ok": false,
      "why": "Aversion can feed monkey-mind, but the harm he describes here is to the waking-up process itself."
     },
     {
      "t": "It becomes a fresh distraction that carries attention off again",
      "ok": false,
      "why": "He says simply to notice any negative emotion and let it be, and the cost he names is the discouraging of introspective awareness."
     },
     {
      "t": "It drains the willpower that returning to the breath depends on",
      "ok": false,
      "why": "Returning to the breath does not run on willpower in his account, so there is nothing of that kind to drain."
     }
    ]
   },
   {
    "q": "Which statement about the 'aha' moment is accurate in TMI terms?",
    "options": [
     {
      "t": "It comes once attention tires of the thoughts it has been following",
      "ok": false,
      "why": "When attention tires of one distraction it simply moves to another by association, which is how mind-wandering carries on."
     },
     {
      "t": "It is an act of introspective attention that you perform deliberately",
      "ok": false,
      "why": "It is spontaneous introspective awareness, whereas deliberate introspective attention arrives with checking in at Stage Three."
     },
     {
      "t": "It comes more often the harder you strain to stay vigilant for it",
      "ok": false,
      "why": "He says you cannot force yourself to become aware that the mind is wandering."
     },
     {
      "t": "It can't be produced at will, only made likelier by appreciating it",
      "ok": true,
      "why": "The process that detects the disconnect is unconscious and not under conscious control, so all you can do is reinforce it when it delivers."
     }
    ]
   },
   {
    "q": "In TMI, what exactly is lost when 'forgetting' occurs?",
    "options": [
     {
      "t": "The meditation object, while the intention stays in awareness",
      "ok": false,
      "why": "His definition includes the intention, so both the object and the aim of watching it have dropped out."
     },
     {
      "t": "The meditation object, together with the intention to watch it",
      "ok": true,
      "why": "Culadasa defines forgetting as losing both the meditation object and the intention to focus on the breath."
     },
     {
      "t": "The count of breaths, while the breath stays in the background",
      "ok": false,
      "why": "Losing the count while the breath remains is a slip in counting, not what he means by forgetting."
     },
     {
      "t": "The peripheral awareness that had been keeping watch on the mind",
      "ok": false,
      "why": "Peripheral awareness may well have collapsed beforehand, but forgetting names the loss of the object and the intention."
     }
    ]
   },
   {
    "q": "In a Stage Two sit the breath slips into the background while a thought holds the centre of attention. How does Culadasa say to regard that stretch?",
    "options": [
     {
      "t": "As monkey-mind, since attention is being split between two objects",
      "ok": false,
      "why": "Monkey-mind is rapid, restless jumping from object to object, not one thought sitting in front of the breath."
     },
     {
      "t": "As forgetting, since attention has moved off the meditation object",
      "ok": false,
      "why": "Forgetting means the object drops out of awareness completely, along with the intention to watch it."
     },
     {
      "t": "As gross distraction, which must be corrected the moment it appears",
      "ok": false,
      "why": "That is the name later Stages give it, but overcoming gross distraction is Stage Four's work, and here you just return the focus once you realise."
     },
     {
      "t": "With satisfaction, as the breath is still in conscious awareness",
      "ok": true,
      "why": "At this Stage he says it doesn't matter whether the breath is at the centre or in the background, and to feel satisfied whenever it remains in the field of conscious awareness."
     }
    ]
   },
   {
    "q": "A student can now pick out every point in the breath cycle clearly, and finds their interest fading. What does Culadasa prescribe?",
    "options": [
     {
      "t": "A harder task: as many distinct sensations as possible per breath",
      "ok": true,
      "why": "Because willpower is not very effective for sustaining attention, the mind needs a further challenge, and this is the next one he gives."
     },
     {
      "t": "More determination, to hold attention steady through the boredom",
      "ok": false,
      "why": "He says willpower is not very effective for anything in meditation, including sustaining attention."
     },
     {
      "t": "Connecting: comparing the lengths of breaths and pauses over time",
      "ok": false,
      "why": "Connecting is introduced in Stage Three, as an extension of following the breath."
     },
     {
      "t": "Dropping the tasks and resting with the breath non-conceptually",
      "ok": false,
      "why": "The words, images and games are left to fall away naturally later, perhaps not until Stage Four or Five, and are not dropped because interest dips."
     }
    ]
   },
   {
    "q": "Why does Culadasa warn against focusing so closely on the breath that peripheral awareness collapses?",
    "options": [
     {
      "t": "Monkey-mind follows when the excluded thoughts push their way back",
      "ok": false,
      "why": "He attributes monkey-mind to agitation from thoughts and emotions, not to a rebound from over-focusing."
     },
     {
      "t": "Dullness sets in when the mind is starved of other stimulation",
      "ok": false,
      "why": "Dullness is treated from Stage Three onward, and it is not the consequence he names here."
     },
     {
      "t": "You forget the breath more easily when distractions go unnoticed",
      "ok": true,
      "why": "He says that if peripheral awareness collapses you will forget the breath more easily, whereas keeping it lets you notice potential distractions as they arise."
     },
     {
      "t": "Insight is blocked when attention is cut off from its wider context",
      "ok": false,
      "why": "Peripheral awareness does supply context, but the consequence he names at this Stage is easier forgetting."
     }
    ]
   },
   {
    "q": "For monkey-mind, Culadasa has you widen the space in which attention moves. What keeps this from being a surrender to the agitation?",
    "options": [
     {
      "t": "The breath at the nose is still kept at the centre of attention",
      "ok": false,
      "why": "The antidote moves attention off the nose to the whole body, and to the other senses if needed."
     },
     {
      "t": "The area attention is restricted to is still chosen intentionally",
      "ok": true,
      "why": "His basic rule is always to select the locus of attention intentionally, so the mind keeps moving but only inside boundaries you have set."
     },
     {
      "t": "The wider space is only allowed until a count of ten is reached",
      "ok": false,
      "why": "No count is attached to the antidote, which is simply a return to Step One or Two of the Four-Step Transition."
     },
     {
      "t": "The thoughts behind the agitation are watched until they resolve",
      "ok": false,
      "why": "Body awareness works by shifting attention away from the contents and activities of the mind, not by examining them."
     }
    ]
   },
   {
    "q": "On Culadasa's account, why can't willpower resolve impatience?",
    "options": [
     {
      "t": "One part of the mind forcing the others only deepens the conflict",
      "ok": true,
      "why": "He says that one part of the mind trying to force itself on the others creates a struggle that feeds the disharmony-dissatisfaction-impatience loop."
     },
     {
      "t": "Willpower is a limited resource that is used up during a long sit",
      "ok": false,
      "why": "Depletion is not his explanation, since the problem he describes is internal conflict and not a shortage of fuel."
     },
     {
      "t": "Impatience is an emotion, and emotions cannot be changed directly",
      "ok": false,
      "why": "He treats impatience as workable: observe it without identifying with it, and cultivate enjoyment so that the conflict behind it eases."
     },
     {
      "t": "Forcing only works once attention has become effortlessly stable",
      "ok": false,
      "why": "At no Stage does he make forcing the method, and the later effortlessness comes from the mind working in harmony, not from force."
     }
    ]
   },
   {
    "q": "In Stage Two, what does Culadasa say discipline means when you are reluctant to let go of an engaging thought?",
    "options": [
     {
      "t": "A patient allowing of the thought until it fades away by itself",
      "ok": false,
      "why": "Letting it be suits distractions in the background, but for an object that has captured attention he asks for resolve to let go."
     },
     {
      "t": "A forceful push that drives the thought out of conscious awareness",
      "ok": false,
      "why": "Forcing is precisely what he says discipline does not mean, and nothing is to be pushed out of awareness."
     },
     {
      "t": "A commitment to think the matter through once the session has ended",
      "ok": false,
      "why": "Setting a thought aside for later is how Stage Four handles compelling insights, and it is not how he defines discipline here."
     },
     {
      "t": "A firm, intentional resolve to let it go and return to the breath",
      "ok": true,
      "why": "His definition rules out forcing the mind to do what it can't and specifies a firm, intentional resolve to release whatever has captured attention."
     }
    ]
   }
  ],
  "open": [
   {
    "q": "Stage Two rests on appreciating the 'aha' moment.\n• Explain what is being trained and why it cannot be trained directly.\n• Explain why a quick, neutral return is not enough, and why annoyance does active harm.\n• A student asks how long to savour before returning, and whether the savouring is itself a distraction. Answer them, saying where TMI is silent.",
    "model": "What is trained. The 'aha' is spontaneous introspective awareness: an unconscious process registers that what you are doing (thinking) no longer matches what you intended (watching the breath) and delivers that finding to consciousness. It is not something 'you' do and it cannot be made to happen. Forgetting includes losing the intention itself, so during mind-wandering there is nothing on duty to exert will with (that last clause is my gloss). What can be done is indirect: conscious intention and affirmation influence unconscious processes, so you reward the process when it delivers. Take a moment to enjoy having woken up and savour being more fully conscious and present. Repeated, this trains it to wake you sooner and more often.\n\nWhy a neutral return is not enough. Returning at once does exercise redirecting, which matters too, but it skips the reinforcement, and Culadasa says plainly that going straight back misses a key opportunity for training the mind. Why annoyance does harm: feedback attaches to the most recent event, and the most recent event is not the wandering but the waking up. Scolding therefore punishes the noticing; in his image, it tells the unconscious you would prefer not to be interrupted. His comparison is training a pet, where consistent, immediate reward works far better than punishment. If annoyance comes anyway, it gets the same treatment as anything else: notice it, let it come, let it be, let it go. The same faculty, strengthened, later steps in before forgetting (Stage Three) and becomes continuous (Stage Four), which is why he says progress through all Ten Stages depends on it.\n\nThe student. On how long: the text says only 'a moment', so anything more exact is a teacher's judgment. Mine is that it should be long enough to actually feel pleased, about a breath, and short enough that it has not become a commentary on how well you are doing. On whether it is a distraction: the three intentions run in sequence, appreciate, then gently but firmly redirect, then engage with the breath. Appreciation is a brief feeling about something present; a story about your progress is a new episode of mind-wandering, and gets appreciated and released in its turn. TMI does not discuss that failure mode, so I would say so and not present my rule as his.",
    "rubric": [
     "Names what is trained: the unconscious process that produces spontaneous introspective awareness, which is not under conscious control and cannot be forced.",
     "Explains the method: conscious intention and affirmation influence unconscious processes, so the waking up is rewarded immediately each time (the pet-training logic).",
     "Explains why an immediate neutral return misses the training opportunity, and why annoyance backfires: feedback attaches to the most recent event, which is the waking up and not the wandering.",
     "Places it in the arc: the same faculty later intervenes before forgetting (Stage Three) and becomes continuous (Stage Four).",
     "Answers the student with calibration: the text says only 'a moment'; offers a workable rule (feel it, don't narrate it) marked as the teacher's own; notes the three intentions run in sequence and end in a gentle but firm return."
    ]
   },
   {
    "q": "Stage Two says that willpower cannot prevent forgetting or force the 'aha' moment, and that there is no self in control of the mind. It also says the Stage takes work, that effort is required, and that you should 'evoke discipline and diligence'.\n• Reconcile these.\n• Say exactly what the meditator does do.\n• Explain the two mistaken views of the mind that Culadasa warns about, and what he offers in their place.",
    "model": "What will cannot do. Culadasa is specific: willpower cannot prevent forgetting, cannot force you to become aware that the mind is wandering, is not very effective for sustaining attention or for anything else in meditation, and can never overcome the inner resistance behind impatience.\n\nWhat the meditator does. Forms and holds three intentions: to appreciate the 'aha' moment, to redirect attention gently but firmly to the breath, and to engage with the breath as fully as possible without losing peripheral awareness. The simple actions that flow from these, repeated, become habits. That is the sense of working smart, not hard, with finesse, patience and positive reinforcement.\n\nWhere effort and discipline belong. The First Interlude draws the line: attention can be directed voluntarily, but how long it stays is settled by an unconscious weighing that intention can only influence. So effort goes where intention has purchase. Sitting down and repeating the tasks is work. Redirecting is voluntary, and being diligent here means doing it consistently and promptly. And at one specific point he asks for firmness: when you are reluctant to let go of something engaging, evoke discipline, which he defines as a firm, intentional resolve to let go and return, not as forcing the mind to do something it can't. Staying and noticing are then trained indirectly. Putting it as 'effort into directing, none into holding' is my summary, not his sentence.\n\nThe two mistaken views. On finding how little control there is, people either objectify the mind as a faulty thing (something is wrong with it) or identify with it and conclude that they have failed. Either way mind-wandering is cast in a bad light and frustration follows. What he offers in their place: there is no self in control of the mind, and therefore nobody to blame. The mind is a collective of mental processes working by consensus or by the brief dominance of one over the rest; one part wears a hat marked 'I' for a while and is then replaced, sooner if it pushes too hard. Meditation is the training of that multi-part system to work together toward shared goals. He presents this as a working stance that makes practice go more smoothly; the Insight itself comes later.",
    "rubric": [
     "Lists accurately what will cannot do: prevent forgetting, force the 'aha', sustain attention, or overcome the inner resistance behind impatience.",
     "States what the meditator does: holds the three intentions and repeats the resulting actions until they become habits ('work smart, not hard').",
     "Locates effort and discipline correctly: diligence as consistent, prompt redirecting; discipline as a firm, intentional resolve to let go when reluctant, explicitly not forcing; links this to directing being voluntary while sustaining is not.",
     "Gives both mistaken views (the mind as a faulty thing; the mind as a self that has failed) and why each breeds frustration.",
     "Gives the replacement: no self in control and so nobody to blame; the mind as a collective working by consensus or temporary dominance; a part that pushes too hard loses control to another."
    ]
   },
   {
    "q": "Explain 'following the breath' as Culadasa teaches it in Stage Two.\n• What is the technique for, and why is it framed as a game with escalating challenges?\n• What aids are allowed, on what condition, and when do they go?\n• How do you square 'engage with the breath as fully as possible' with 'don't limit peripheral awareness' and with his statement that the breath need not be at the centre of attention?",
    "model": "What it is for. Following the breath exists to lengthen the periods of sustained attention. Since willpower is not effective for sustaining attention, the mind has to be given a reason to stay, and the reason is engagement: a series of tasks, treated like a game, that make you take interest in and investigate the breath, against attention's natural tendency to shift. The tasks escalate because interest fades once a task is easy. First find the exact start and end of the in-breath and of the out-breath (the start of the in-breath is easiest, because of the cool incoming air; the ends are harder), then the pauses. If the ends are hard to find, locate the pauses first and work backward. Then try to observe all these points with equal clarity. When that becomes easy, the next challenge is to notice as many distinct sensations as possible in each in- and out-breath and to discern the pauses as clearly as you can. Comparing breaths and pauses (connecting) belongs to Stage Three.\n\nAids. Anything that helps is allowed: talking to yourself and thinking about the breath, noting 'beginning, end', a mental image such as a circle expanding and contracting, or a felt sense of the body expanding and contracting. The condition is that the aid follows the sensations. You are not picturing what the breath looks like, and the image should be driven by the sensations, not superimposed on them. There is no call yet for non-verbal or non-conceptual observation. Later the aids become obstacles, but they are left to fall away when no longer useful, which may not be complete until well into Stage Four or the start of Stage Five.\n\nSquaring the three statements. 'As fully as possible' describes interest, not narrowness. He explicitly warns against focusing intensely and pushing everything else out: if peripheral awareness collapses you forget the breath more easily, whereas keeping it open is how you come to notice potential distractions as they arise. And he sets the expectation low on purpose. Attention will alternate, the breath will sometimes slip into the background or drop out, and at this Stage you are to feel satisfied with any stretch in which it remains in the field of conscious awareness, simply returning the focus when you realise. So engagement is an intention to be held, not a standard to be met. A sit is on the right track when the three intentions are being carried out, wherever the breath happened to sit.",
    "rubric": [
     "Gives the purpose: active engagement and interest to extend sustained attention, because willpower cannot sustain it.",
     "Gives the sequence and the reason for escalation: starts, ends and pauses with equal clarity, then as many sensations as possible, because interest fades when a task is easy; knows that connecting belongs to Stage Three.",
     "Covers the aids and their condition: words, noting, images and a kinesthetic sense are allowed; they must be driven by the sensations, not superimposed; they fall away naturally, perhaps not until Stage Four or Five.",
     "Reconciles engagement with open peripheral awareness: engagement means interest, not narrowing, and collapsed awareness makes forgetting easier.",
     "Includes the Stage Two standard: the breath need not be central; feel satisfied whenever it remains in the field of conscious awareness; simply return the focus on realising."
    ]
   },
   {
    "q": "A student reports only two 'aha' moments in a forty-minute sit and takes this as a sign that they have mastered Stage Two.\n• Explain why the number of catches cannot settle it, and what would.\n• State how Culadasa defines success for a single sit and mastery for the Stage.\n• Say where a sit with no 'aha' at all until the bell fits.",
    "model": "Why the count of catches cannot settle it. Two 'aha' moments in forty minutes is compatible with opposite sits: thirty-five minutes on the breath with two brief lapses, or two long wanders that filled most of the session. What Stage Two measures is duration: how long mind-wandering lasts before the waking up, and how long attention stays on the breath between episodes. The Stage begins with what he calls interrupted continuity of mind-wandering, mostly wandering broken by brief attention, and ends with the reverse. Early on, then, more catches is usually the better sign, because the training aims at waking up sooner and more often. So I would ask: when you noticed, how long do you think you had been gone? What do you remember of the breath in between? Was it clear, in the background behind thinking, or vague and dreamy? Each answer points somewhere different: stable attention, long undetected wandering, the breath kept in awareness while thought holds the centre, or dullness, which Stage Three begins to address.\n\nSuccess and mastery. For a single sit his criterion is about process: if you sat through the session without getting discouraged and kept returning to the breath whenever the mind wandered, count it a total success. You are on the right track as long as you appreciate the waking up, return diligently and engage with the breath. Mastery of the Stage is an outcome that follows from many such sits: attention consistently sustained for minutes, with mind-wandering lasting only seconds. It does not require that forgetting has stopped, and he tells you not to expect visible improvement within one session but over days and weeks. A figure such as ten to fifteen minutes without mind-wandering is a rule of thumb for moving on; the chapter itself says only 'minutes'.\n\nThe sit with no 'aha' until the bell. By his process criterion it is not a total success, since there was no returning. But it is not a bad meditation either; the mind wandered, which is what untrained minds do. As a teaching label (not Culadasa's) call it a null sit: it counts as a sit, which is all Stage One asks, and it trained nothing further, with one exception. The realisation at the bell is still an 'aha', and it can be appreciated like any other.",
    "rubric": [
     "Explains that the number of catches is ambiguous: what matters is how long mind-wandering lasts and how long attention holds; early in the Stage, more catches usually means progress (waking up sooner and more often).",
     "Asks diagnostic questions that separate stable attention, long undetected wandering, the breath held in the background behind thought, and dullness.",
     "States the single-sit criterion as a process measure: no discouragement and continual returning, with the three intentions carried out.",
     "States mastery accurately: attention sustained for minutes while mind-wandering lasts only seconds; forgetting may persist; improvement shows over days and weeks; a ten-to-fifteen-minute figure is a rule of thumb, not the chapter's wording.",
     "Places the sit with no 'aha' until the bell: not a total success by his criterion and not a bad meditation; 'null sit' as a teaching label, with the realisation at the bell still worth appreciating."
    ]
   }
  ],
  "scenario": [
   {
    "q": "A student three weeks into Stage Two reports: 'Every time I catch my mind wandering I think, idiot, again, and yank myself back to the breath. I must do that forty times a sit. It's getting worse, not better, and now I almost dread the moment I notice.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening. Several things at once.\n\nThe faculty is working. Forty catches in a sit is forty arisings of spontaneous introspective awareness. At this Stage that is the thing being cultivated, and waking up often beats being lost for a long time. As Culadasa puts it, it doesn't matter that the mind wandered; what matters is that you realised it. The student is counting forty failures where there were forty successes, and I would say that first.\n\nThe reaction is undoing the training. Feedback attaches to the most recent event, which is the waking up, not the wandering. 'Idiot, again' punishes the noticing, and he warns that this discourages the very process that stops mind-wandering. The dread is that conditioning becoming visible: the mind is learning that noticing is unpleasant. (Reading the dread that way is my inference, but it is what his account predicts.) 'Getting worse' fits too, though I would hold that loosely, because three weeks is a short time and sits vary.\n\nThe yank is a second problem. The instruction is to redirect gently; the firmness he allows is a firm resolve, not force. And both the insult and the yank rest on the belief that an 'I' should have been in control and failed. His reply is that there is no self in control of the mind, and therefore nobody to blame.\n\nThe trap for the teacher. 'Stop criticising yourself' hands the student a new thing to fail at, and now they are annoyed at being annoyed. His own instruction covers this: if negative emotions arise, notice them and let them come, let them be and let them go.\n\nResponse. Lead with the reframe as good news: forty times a sit, the part of your mind we are trying to train did its job. Explain the mechanism briefly, with his pet-training comparison, because this student will respond to understanding why. Then add something; don't take something away. At each catch, before returning: one moment of being pleased to be back, and only then a gentle return to the breath. The critic will still fire at first; it is to be noticed like any other event and left alone. A small inward 'thank you' or half-smile can carry the appreciation (that device is mine, not TMI's). Change the session goal from fewer wanderings to appreciating every catch, so that success becomes something they can actually do. Add following the breath, so there is something interesting to return to. And suggest they judge the result over the next few weeks, not sit by sit.",
    "rubric": [
     "Reframes first: forty catches are forty arisings of introspective awareness, which is what Stage Two cultivates; the wandering doesn't matter, the realising does.",
     "Explains why the reaction backfires: feedback attaches to the most recent event (the waking up), so self-criticism discourages the process that ends mind-wandering; reads the dread as that conditioning, marked as inference.",
     "Addresses the yank and the belief beneath it: return gently (firm resolve, not force); there is no self in control, so nobody to blame.",
     "Avoids the trap of banning self-criticism: negative emotions are noticed and let be; the prescription adds a moment of appreciation before the return and changes the session goal to something the student can do.",
     "Weighting: teachers differ on whether to work with the critical voice directly or simply install the appreciation and let the criticism fade, and on how much of the mechanism to explain; devices such as an inward 'thank you' are the teacher's own, not TMI."
    ]
   },
   {
    "q": "A student at Stage Two reports: 'It's been a horrible week: a row with my sister and a deadline. When I sit, my attention is everywhere. Breath, the email, a car outside, my knee, the email again, all within seconds. I keep dragging it back to my nose and restarting the count, maybe twenty times. By the end I want to jump out of my skin. Have I gone backwards?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThis is monkey-mind, not mind-wandering. In mind-wandering you are lost in one train of thought, sometimes for minutes, and then wake up. Here attention will not stay anywhere for more than a few seconds, the student can say exactly where it keeps going, and the troublesome issue (the email) is touched for a moment and dropped again. The restlessness is part of the picture. Culadasa says monkey-mind must be dealt with differently from ordinary mind-wandering.\n\nIt has an obvious cause, and it is not a regression in skill. The Second Interlude traces monkey-mind most often to Agitation due to Worry and Remorse, and also to Aversion and anger; a row and a deadline supply both. The Overview is explicit that events outside meditation can set even an advanced meditator back for a time. So 'have I gone backwards?' gets a clear answer: the conditions changed, not the capacity.\n\nThe student's remedy is the wrong one for this state. Dragging attention back to the nose is trying to hold the monkey still. Each failed count then becomes evidence of failure, which adds impatience, and the restlessness of impatience is itself one of the things that feeds monkey-mind. There is a real subtlety here. Stage One does say that when the mind is particularly agitated you should do another ten-count on returning, so the student is following an instruction. The text gives two tools and no stated threshold between them. My reading is that the re-count suits ordinary agitation, and that once attention cannot stay anywhere for more than a few seconds you are in monkey-mind and the larger cage applies.\n\nResponse. Normalise first: this is a named obstacle of the Stage, it has a cause, and it will pass. Then give the antidote and the principle together. Get grounded in the body: widen the space attention may move in to the whole body, and to sounds as well if needed, which is Step One or Two of the Four-Step Transition. Scan part by part, rest on any strong sensation, or hold the body as a whole. Body awareness works because the agitation lives in thoughts and emotions, and this shifts attention away from them. The principle is that you still choose the area; the mind keeps moving, but inside boundaries you set. So it is not a retreat. Drop the count while the mind is like this. When it settles, narrow again through Step Three to the nose, without hurry; if the whole sit is spent with the body, that is fine. Beforehand, use point five of the Six-Point Preparation to acknowledge the row and the deadline and resolve to set them aside. I would also mention that the worry may deserve attention off the cushion, which is my suggestion and not a TMI instruction.",
    "rubric": [
     "Diagnoses monkey-mind and distinguishes it from mind-wandering: the rapid pace, the student not being lost, the momentary returns to a troublesome issue, and the restlessness.",
     "Answers 'have I gone backwards?': this is a named Stage Two obstacle with a cause (Agitation due to Worry and Remorse, Aversion); life events can set anyone back temporarily; the capacity is unchanged.",
     "Explains why dragging attention to the nose and restarting the count fails: it is holding the monkey still, and failed counts breed impatience, whose restlessness feeds monkey-mind.",
     "Gives the antidote with its principle: grounded in the body (Step One or Two; scanning, a strong sensation, the whole body, sounds); the locus is still chosen intentionally, a larger cage, so this is training and not retreat; narrow again without hurry.",
     "Weighting: notes that Stage One prescribes a re-count for an agitated mind and that the text sets no threshold between that and the larger cage, so teachers will draw the line differently; flags anything about handling the worry off the cushion as the teacher's own."
    ]
   },
   {
    "q": "A student six weeks in reports: 'Six weeks of sitting every day and I'm still stuck at Stage Two. Yesterday I spent most of the sit thinking: this isn't working, I could be at the gym. I'm just an impatient person, always have been. I'm thinking of switching to a mantra app, something easier, or else gritting my teeth and doubling my sits until it clicks.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, what is going well. Six weeks without a missed day is Stage One's consistency, which few meditators ever secure. And the student stayed for the whole of yesterday's sit while wanting to be elsewhere.\n\nThis is impatience, on schedule. Culadasa calls it inevitable, and he gives almost this example: you expected to be at Stage Three by now, attention is still unstable, and disappointment combines with desire for some other gratification (the gym). Boredom follows and sharpens aversion to discomfort; doubt arrives ('this isn't working'). In the Second Interlude's terms the roots are Aversion, Worldly Desire and Doubt, and it shows up as an emotion that disrupts, not as one more distracting thought.\n\n'I'm an impatient person' is the identification he warns about. Thinking 'I am impatient' sustains the state and undermines motivation. The alternative is to regard it as a feeling that arises and passes: 'impatience is arising'.\n\nBehind the emotion is a conflict. The mind is a collective of processes that all want the person's happiness and, with expectations disappointed, now disagree about where to find it. Part wants to meditate; part wants the gym. Less harmony means more dissatisfaction and impatience, and more impatience means less harmony.\n\nBoth of the student's plans are the unskillful exits he names. Switching to 'something easier' is giving in. Gritting the teeth and doubling up is forcing, one part of the mind imposing itself on the rest, which feels like willpower and, he says, can never overcome this kind of resistance. Each feeds the loop.\n\nA calibration on the mantra. TMI has nothing against mantras; he says the same methods work with one. What he warns against is leaving a practice because impatience says there must be an easier way. His image in the Overview is a seed that sprouts no faster for being dug up and replanted. The problem is the motive, not the object, and I would expect the same impatience to follow them to the app.\n\nResponse. Start with the credit, then normalise: he predicts this, at about this point. Loosen the identification with one sentence to use in the sit: 'impatience is arising'. Then the real remedy, which is to enjoy the practice. Concretely: notice when the body is comfortable or the mind briefly clear; savour one fully followed breath-cycle; take satisfaction in having sat; and count each time they don't get caught up in the impatience as a success. Give them the formula: relax and look for the joy; observe; let it come, let it be, let it go. Explain why this is not a consolation prize: when the sit is satisfying, the parts of the mind that wanted the gym stop resisting, and harmony and enjoyment start to feed each other. On expectations: progress through the Stages is not linear, the early Stages take longest, and the test he gives is weeks, not sits. I would keep the sits at their present length for now.",
    "rubric": [
     "Credits what is working (six weeks of daily sitting; staying for the whole sit) and normalises impatience as inevitable at this Stage.",
     "Analyses impatience in his terms: unmet expectations (being at Stage Three by now) plus desire for other gratification, boredom sharpening aversion, and doubt; an emotion rooted in Aversion, Worldly Desire and Doubt.",
     "Catches the identification ('I'm an impatient person') and replaces it with 'impatience is arising'.",
     "Explains the conflict among parts of the mind and the disharmony-dissatisfaction-impatience loop, and recognises both plans as the two unskillful exits: giving in (switching) and forcing (doubling the sits).",
     "Prescribes enjoyment concretely and explains the harmony-joy loop; notes the weighting: a mantra is compatible with TMI, so the issue is the motive; teachers differ on whether to hold sit length steady or ease it, and on how firmly to discourage a switch."
    ]
   }
  ]
 },
 {
  "n": 3,
  "grill": [
   {
    "q": "In TMI, what makes a distraction 'gross' as opposed to 'subtle'?",
    "options": [
     {
      "t": "It has gone on long enough for the breath to drop out of consciousness",
      "ok": false,
      "why": "Once the breath has dropped out of consciousness, that is forgetting, which is what a gross distraction can lead to."
     },
     {
      "t": "It carries a strong emotional charge, whatever share of attention it takes",
      "ok": false,
      "why": "A strong charge makes capture quicker, but the defining difference is the share of attention the distraction takes."
     },
     {
      "t": "It has entered attention at all, where a subtle one stays in awareness",
      "ok": false,
      "why": "Subtle distractions are also objects of attention, which flickers to them while the breath stays primary."
     },
     {
      "t": "It takes most of attention's time, pushing the breath to the background",
      "ok": true,
      "why": "The two are distinguished by how much time attention spends on the distraction compared with the breath, and a gross one has become the primary focus."
     }
    ]
   },
   {
    "q": "While trying to perceive every part of the breath with equal clarity, a student notices that the breath has become exaggerated, though they did not intend it. What does Culadasa advise?",
    "options": [
     {
      "t": "Deliberately restore the natural rhythm before going any further",
      "ok": false,
      "why": "Restoring it would be the deliberate interference he warns against, since the instruction is to let the breath continue as it is."
     },
     {
      "t": "Don't take ownership of the change; notice it and go on observing",
      "ok": true,
      "why": "He says unconscious processes exaggerate the breath to help your conscious purpose, which is perfectly all right provided you are not doing it intentionally."
     },
     {
      "t": "Ease off the effort to perceive, since striving distorts the breath",
      "ok": false,
      "why": "He treats the change as normal help from unconscious processes, not as a sign of striving that needs correcting."
     },
     {
      "t": "Shift attention to the abdomen, where the breath is less affected",
      "ok": false,
      "why": "Nothing in the instruction calls for a change of location, only for passive, objective observation."
     }
    ]
   },
   {
    "q": "How does the guidance on mental self-talk change in Stage Three?",
    "options": [
     {
      "t": "Occasional self-talk is fine, but you begin to cut back on commentary",
      "ok": true,
      "why": "He says it is best at this Stage to start cutting back on verbal commentary, while allowing that occasional self-talk is fine."
     },
     {
      "t": "Self-talk has become an obstacle and should now be stopped completely",
      "ok": false,
      "why": "The words and images are left to fall away naturally, which may not be complete until Stage Four or Five."
     },
     {
      "t": "Self-talk is still encouraged, for as long as it helps you to follow",
      "ok": false,
      "why": "That was the Stage Two guidance, and he now points out that self-talk easily slides into mind-wandering."
     },
     {
      "t": "Self-talk gives way to labeling each breath silently as 'in' or 'out'",
      "ok": false,
      "why": "Labeling in Stage Three applies to distractions at the moment you notice them, not to the breath."
     }
    ]
   },
   {
    "q": "On waking from a whole series of thoughts, which does Culadasa say to label?",
    "options": [
     {
      "t": "Each thought in turn, working back along the chain to the breath",
      "ok": false,
      "why": "Tracing the chain is a form of analysing distractions, which he says always to avoid because it creates more distraction."
     },
     {
      "t": "The first thought, as the one that actually caused the forgetting",
      "ok": false,
      "why": "Early on you usually cannot recall what first took you away, and he notes that the last thought is often not the one that caused the forgetting."
     },
     {
      "t": "Only the most recent of the thoughts, with a simple neutral label",
      "ok": true,
      "why": "He says that if there was a series of thoughts you label only the most recent one, keeping labels simple and neutral so they don't become distractions themselves."
     },
     {
      "t": "None of them, since labels belong to check-ins and not to the 'aha'",
      "ok": false,
      "why": "Labeling is introduced for the very moment you realise you are no longer on the breath, and can be used at check-ins as well."
     }
    ]
   },
   {
    "q": "Checking in briefly takes attention off the breath. How does Culadasa regard this at Stage Three?",
    "options": [
     {
      "t": "As a cost that is only worth paying when forgetting has been frequent",
      "ok": false,
      "why": "He asks for regular check-ins as a habit, not as a remedy reserved for bad patches."
     },
     {
      "t": "As fine, and as the very means of training introspective awareness",
      "ok": true,
      "why": "He says the disruption is not only completely OK at this Stage but is the key to cultivating introspective awareness, because attention is training awareness."
     },
     {
      "t": "As a fault, to be avoided by checking with awareness, not attention",
      "ok": false,
      "why": "Awareness that needs no shift of attention is where this leads, but at this Stage the check-in is deliberately done with introspective attention."
     },
     {
      "t": "As fine, provided the breaths are counted so the place is not lost",
      "ok": false,
      "why": "He suggests roughly every half-dozen breaths and says explicitly not to start counting them."
     }
    ]
   },
   {
    "q": "A check-in shows thoughts in the background while the breath is still the primary focus. What should a Stage Three meditator do about them?",
    "options": [
     {
      "t": "Widen the scope of attention, so that they stop competing with the breath",
      "ok": false,
      "why": "Widening the space is the antidote to monkey-mind, not a response to ordinary background thoughts."
     },
     {
      "t": "Tighten attention on the breath until the background has fallen silent",
      "ok": false,
      "why": "Tightening up is the response to a gross distraction, and silencing the background belongs to much later Stages."
     },
     {
      "t": "Label each of them, so that awareness learns to recognise them later",
      "ok": false,
      "why": "Labels are for the distraction you have just woken from or one that was about to take you away, not for everything in the background."
     },
     {
      "t": "Nothing: let them come, let them be and let them go in the background",
      "ok": true,
      "why": "He says you are not trying to eliminate distractions from awareness, and that as long as they stay in the background you let them be."
     }
    ]
   },
   {
    "q": "Culadasa calls dullness 'another form of scattered attention'. Scattered to what?",
    "options": [
     {
      "t": "To dreamlike images that arise as energy falls",
      "ok": false,
      "why": "Dreamlike imagery does appear as drowsiness deepens, but that describes a late symptom and not what dullness is."
     },
     {
      "t": "To pleasant feelings that crowd out the breath",
      "ok": false,
      "why": "Dullness can feel comfortable, but he defines it by the absence of perception, not by attention going to pleasant feelings."
     },
     {
      "t": "To a void in which nothing is perceived at all",
      "ok": true,
      "why": "He contrasts it with distraction, which scatters attention to other objects, whereas dullness scatters it to a void where nothing is perceived."
     },
     {
      "t": "To the whole body, at the expense of the nose",
      "ok": false,
      "why": "Attention moving to the body would be a distraction or a deliberate choice, since it still has an object."
     }
    ]
   },
   {
    "q": "A student is already nodding off in the middle of a sit. What does Culadasa say has to come first?",
    "options": [
     {
      "t": "Rousing the mind, since struggling against strong dullness works poorly",
      "ok": true,
      "why": "He says working with dullness as it arises is productive but struggling against strong dullness already present is not, so you must first rouse the mind."
     },
     {
      "t": "Sharpening attention on fine breath details to cut through the dullness",
      "ok": false,
      "why": "Close engagement and strong intention keep an alert mind energised, but they come after the mind has been roused."
     },
     {
      "t": "Checking in more often, so that the dullness is caught at an earlier point",
      "ok": false,
      "why": "Check-ins catch dullness before it becomes strong, which is the work to resume once the mind is alert again."
     },
     {
      "t": "Accepting the drowsiness, and taking it as the meditation object for now",
      "ok": false,
      "why": "Making a strong distraction the object is his instruction for pain, whereas for drowsiness he prescribes the rousing antidotes."
     }
    ]
   },
   {
    "q": "When pain grows too strong to ignore, Culadasa has you make it the meditation object. What principle is he applying?",
    "options": [
     {
      "t": "Aversion has to be met and overcome by endurance",
      "ok": false,
      "why": "The aim is Insight into how resistance creates suffering, not a contest of endurance, and comfort is to be maximised beforehand."
     },
     {
      "t": "Vivid objects such as pain build concentration faster",
      "ok": false,
      "why": "Nothing is claimed for pain as a better object, and the point is that attention goes there by choice and not by capture."
     },
     {
      "t": "Pain must be watched until it has gone completely",
      "ok": false,
      "why": "You return to the breath when the pain fades or can be ignored again, and you may move mindfully if the urge becomes irresistible."
     },
     {
      "t": "Always choose the focus of attention intentionally",
      "ok": true,
      "why": "He says that in training the mind you always intentionally choose the focus, so anything too strong to ignore is purposely made the object."
     }
    ]
   },
   {
    "q": "A meditator has reached Milestone One. Which of these may still be happening in their sits?",
    "options": [
     {
      "t": "Gross distractions that push the breath into the background",
      "ok": true,
      "why": "Overcoming gross distraction is the work of Stage Four, so at this Milestone the breath is never lost but can still be pushed into the background."
     },
     {
      "t": "Regular episodes of forgetting followed by mind-wandering",
      "ok": false,
      "why": "Mastery of Stage Three means forgetting and mind-wandering no longer occur, or in the Overview's wording occur only rarely."
     },
     {
      "t": "Nodding off whenever the mind turns inward and grows calm",
      "ok": false,
      "why": "Overcoming falling asleep is part of Stage Three's goal, so regular dozing means the Stage is not yet mastered."
     },
     {
      "t": "Nothing but the breath, as attention has become exclusive",
      "ok": false,
      "why": "Exclusive attention is not achieved until Stage Six, and attention at this point still alternates with distractions."
     }
    ]
   }
  ],
  "open": [
   {
    "q": "Trace how forgetting happens in Culadasa's account, and say where each of the early Stages intervenes.\n• Distinguish a potential distraction, a subtle distraction, a gross distraction, forgetting and mind-wandering.\n• Say where in that sequence Stage Two, Stage Three and Stage Four each intervene.\n• Explain why a Stage Three student should not try to get rid of subtle distractions.",
    "model": "The sequence. The field of conscious awareness always holds more than the breath: sounds, body sensations, a stream of thoughts and feelings. All of these are potential distractions. An actual distraction is one that competes for attention: attention alternates to it, even for a flicker. Several are usually in play at once, and the movements are so quick that you may not notice them; this is what Culadasa calls scattering of attention. A subtle distraction gets the smaller share of attention, and the breath remains the primary focus. Together with peripheral awareness, subtle distractions make up the background. A gross distraction has taken centre stage: it now holds attention most of the time and the breath has slipped into the background. From there attention goes on alternating, but it settles more and more on the distraction until it stops returning to the breath at all. The breath may linger in peripheral awareness for a little while and then fades: that is forgetting, of the breath and of what you were doing. A highly charged thought or sensation can do all this at once. When attention tires of the distraction it moves on by association, and mind-wandering has begun.\n\nWhere each Stage intervenes. Stage Two works at the far end: you cannot stop the slide, so you reward the waking up and it comes sooner. Stage Three moves the intervention back one step, to the gap between gross distraction and forgetting: with longer stretches of attention you can look at the mind, find a gross distraction and tighten up on the breath before the breath is lost. Stage Four moves back again, using continuous introspective awareness to overcome gross distraction itself. Subtle distraction is not taken on until Stage Six. He says the parts of the problem are addressed sequentially.\n\nWhy leave subtle distractions alone. First, he says so: you are not trying to eliminate distractions from awareness, and as long as they stay in the background you let them come, let them be and let them go. Second, they are always present, and the attempt to push them out narrows the mind and drops extrospective awareness, which he says makes you more vulnerable to both forgetting and drowsiness. Third, it is work for later Stages that depends on capacities not yet built. I would add a practical point of my own: at this Stage the alternations are too quick to observe reliably, so this scheme is the teacher's map more than something the student can be asked to see.",
    "rubric": [
     "Defines an actual distraction as something attention alternates to in competition with the breath, as opposed to the many potential distractions merely present in awareness.",
     "Distinguishes subtle from gross by the share of attention and by which is the primary focus, and describes the slide into forgetting, including the breath lingering briefly in peripheral awareness and the quick route with highly charged material; mind-wandering follows when attention tires of the distraction.",
     "Places the interventions: Stage Two after mind-wandering (reinforcing the 'aha'); Stage Three at gross distraction, before forgetting; Stage Four at gross distraction itself, with subtle distraction left until Stage Six.",
     "Explains why subtle distractions are left alone: they are always present; he says explicitly not to eliminate them from awareness; pushing them out drops extrospective awareness and increases forgetting and drowsiness.",
     "Marks the limits: the alternations are too rapid to observe reliably at this Stage, so the scheme guides the teacher's diagnosis more than the student's perception (the answerer's own point)."
    ]
   },
   {
    "q": "Stage Three cultivates introspective awareness through labeling and checking in.\n• Explain the difference between introspective awareness and introspective attention, and how the second trains the first.\n• Explain what each practice does and how they work together.\n• Name the ways a student can do each of them wrongly, and how you would correct each.",
    "model": "The difference. Introspective awareness is knowing what is happening in the mind while attention stays on the breath; nothing has to shift. Up to now it has only shown up spontaneously, as the 'aha'. Introspective attention is a deliberate act: you turn attention inward for a moment to look at the mind, and for that moment it is off the breath. The second trains the first because of how the two faculties relate: what attention takes an interest in, peripheral awareness learns to watch for. His example is the person who gets interested in sports cars and then finds every sports car catching their eye. Take a regular, attentive interest in whether gross distraction is present, and awareness learns to alert you to it. That is why the brief disruption of a check-in is, in his words, not only completely OK at this Stage but the key.\n\nWhat each practice does. Labeling starts from a limit: at the 'aha' there is enough conscious power to wake up but usually not enough to know what you were doing. So in the very moment you realise you are off the breath, you identify the distraction with a simple, neutral label ('thinking', 'planning', 'remembering'), only the most recent thought if there was a chain, without analysing, and return gently. At first the thought you label is often not the one that took you away; as wandering shortens it will be, and awareness learns what he calls the faces of your abductors. Checking in is a snapshot: very gently and briefly, look at how much scattering was just going on. Is a gross distraction present? Is dullness? If a gross distraction is there, you were about to forget, so tighten up on the breath; naming it for what it is sometimes makes it dissipate. He suggests every half-dozen breaths or so, uncounted, until it is a habit. Together: labeling teaches awareness what to look for, and check-ins look for it.\n\nHow each goes wrong. Labeling everything in the background turns it into a commentary; labels are for what took you away or was about to, and the rest is let be. Elaborate or judgmental labels, and tracing the chain back, are analysis; keep to one neutral word. Check-ins that become long inspections lose the breath; keep them light. Counting breaths to schedule them is ruled out explicitly. Avoiding them because they break concentration misreads the Stage. And checking so often that attention never settles defeats the first half of the method, which is to extend stable attention; that last caution is my own, since the text asks only that check-ins be regular and brief.",
    "rubric": [
     "Distinguishes introspective awareness (knowing the state of the mind while attention stays on the breath) from introspective attention (a deliberate, momentary turning of attention to the mind).",
     "Explains the training link: attention teaches peripheral awareness what matters (the sports-car example), so the disruption of checking in is acceptable and is the key at this Stage.",
     "Describes labeling accurately: at the moment of realising; a simple, neutral label; the most recent thought only; no analysis; its purpose of teaching awareness which distractions carry you off.",
     "Describes checking in accurately: brief and gentle; looks for gross distraction and dullness; tighten up on the breath if found; roughly every half-dozen breaths without counting; and how the two practices combine.",
     "Names failure modes with corrections: labeling everything, analysing, long inspections, counting, avoidance, and over-frequent checking, marking the last as the teacher's own caution."
    ]
   },
   {
    "q": "Explain Stage Three's approach to dullness and drowsiness.\n• Why does drowsiness appear just as attention is improving, and how is it told apart from ordinary tiredness?\n• Describe the progression from subtle dullness to sleep, and why Culadasa calls dullness a form of scattered attention.\n• Set out the strategy: what comes first, what keeps the mind energised afterwards, and what is not yet the task at this Stage.",
    "model": "Why now, and how to tell. Two reasons are given. Meditation turns the mind inward, and a lifetime has conditioned us to associate turning inward with going to sleep. And as the mind's usual agitation is calmed, its overall energy level drops. His image is the young elephant tethered to a stake: it lunges about, finds it cannot escape, and lies down and sleeps. The untrained mind needs stimulation to stay awake. This kind of dullness has to be separated from the ordinary kind. Lack of sleep, illness, stress, a meal, strenuous exercise, early afternoon and late evening all make people sleepy, and a good night's rest is to be treated as part of practice. If you are rested, those factors are accounted for, and you still get drowsy, it is dullness related to meditation.\n\nThe progression. Dullness comes in degrees. Subtle dullness is comfortable: you can still follow the breath, but without the same intensity, vividness or clarity. It leads to strong dullness, where attention still clings to the breath but the focus is weak and diffuse and the sensations vague. Drowsiness is strong dullness: like looking through dense fog, with the breath distorted by dreamlike imagery and nonsensical thoughts drifting through, and then sleep, usually a few seconds of it ended by the jerk he calls the Zen lurch. He classes dullness as scattered attention because, where distraction scatters attention to other objects, dullness scatters it to a void in which nothing is perceived.\n\nThe strategy. First, rouse. Working with dullness as it arises is productive; struggling against strong dullness already present is not. The antidotes run from mild to strong: three or four deep breaths held and forced out through pursed lips; tensing the whole body until it trembles and releasing; standing; walking; cold water on the face. If drowsiness is back almost at once, that is sinking and means the mind was not re-energised enough, so use something stronger until it stays away for at least several minutes, but no stronger than needed, or you produce agitation. Second, keep the energy up. Don't let extrospective awareness collapse: widen to include the body and sounds while staying with the breath, or even let the breath be secondary to open awareness for a short while, looking for a balance between too inward and too outward. Use intention: set it just ahead of the sensations, a part of the breath at a time. And look for dullness at every check-in, so that it is caught before it is strong. He also asks for curiosity: the aim is to learn about dullness, not only to be rid of it.\n\nWhat is not yet the task. Stage Three's goal is to stop falling asleep. Overcoming strong dullness as such belongs to Stage Four, and subtle dullness is not taken on until Stage Five. A student who is no longer dozing and is beginning to spot dullness early has done what this Stage asks.",
    "rubric": [
     "Gives both reasons dullness appears now (turning inward is conditioned to sleep; calming agitation lowers energy) and separates meditation-related dullness from tiredness due to sleep, illness, meals, exertion or time of day.",
     "Describes the progression: comfortable subtle dullness, then strong dullness with attention still clinging weakly to the breath, drowsiness with fog and dreamlike imagery, then sleep; and explains 'scattered attention' as scattered to a void.",
     "States the order of work: rouse first, because struggling against strong dullness works poorly; the graded antidotes; sinking as the sign of too weak an antidote; not overdoing it, to avoid agitation.",
     "States how alertness is kept: extrospective awareness kept open (a balance between inward and outward), intention set just ahead of the sensations, and a look for dullness at each check-in.",
     "Limits the task correctly: Stage Three aims to stop falling asleep and to recognise dullness early; strong dullness is Stage Four's work and subtle dullness Stage Five's."
    ]
   },
   {
    "q": "A student says: 'I haven't lost the breath once in the last week of sits, so I've mastered Stage Three.'\n• State what mastery of Stage Three and the first Milestone consist of, noting where Culadasa's own wording varies.\n• Say what 'continuous attention' does and does not mean at this point.\n• List what you would want to know before agreeing, and why.",
    "model": "What mastery is. Culadasa states it three ways. In the chapter's goals: you no longer forget the breath. In its conclusion: forgetting and mind-wandering no longer occur, and the breath stays continually in conscious awareness. In the Overview: rarely forgetting the breath or falling asleep. 'No longer' and 'rarely' are not the same claim, and he does not reconcile them. My reading is that forgetting and dozing have become exceptions across ordinary sits, not that a single lapse cancels the attainment. This is also the first Milestone, continuous attention to the meditation object, which he describes as the end of being a novice.\n\nWhat continuous attention means. The breath never drops out altogether. His image is that the mind still roams but is tethered: the unconscious processes that sustain attention never entirely let go of the meditation object. It does not mean that attention is exclusive, which is Stage Six. It does not mean an absence of distraction: attention still alternates, and a gross distraction can still take centre stage with the breath in the background, which is exactly Stage Four's obstacle. And it does not mean an absence of dullness, since strong dullness is Stage Four's other obstacle.\n\nWhat I would want to know. First, how clear was the breath? In strong dullness attention still clings to the breath, weakly and vaguely, so 'never lost' is compatible with being half asleep. Second, where was the breath: mostly the main focus, or often in the background behind a train of thought? That counts as not lost, but it tells me what the next work is. Third, any nodding or lurching? Fourth, were sounds and body sensations still present, or had awareness collapsed onto the nose? Fifth, how would they know? A week without noticing a lapse is good evidence only if introspective awareness is strong enough to notice one, so I would ask what the check-ins have been finding. Sixth, was the week ordinary, or unusually quiet?\n\nIf the answers are good, I would say so plainly; he tells the meditator to take satisfaction in this, because it is something most people cannot do. And agreeing costs little either way: the Overview lets you begin on the next Stage's obstacles once the present ones are overcome even temporarily, so the practical step is the same, to start watching for gross distraction and dullness with continuous introspective awareness.",
    "rubric": [
     "Gives the mastery criteria and notices the variation: 'no longer forget' and 'no longer occur' in the chapter against 'rarely' in the Overview; offers a reading and marks it as one.",
     "Explains continuous attention as the breath never dropping out (the tethered mind), and identifies it as the first Milestone and the end of the novice Stages.",
     "Says what it does not mean: not exclusive attention, not freedom from gross distraction (Stage Four's obstacle), and not freedom from dullness.",
     "Asks the questions that test the claim: vividness of the breath (strong dullness still clings to the breath), breath as focus versus background, dozing, the state of peripheral awareness, how lapses would have been noticed, and whether conditions were typical.",
     "Responds proportionately: affirms a real achievement where the answers support it, and notes that the Overview allows work on the next Stage's obstacles once the current ones are overcome even temporarily."
    ]
   }
  ],
  "scenario": [
   {
    "q": "A student at Stage Three reports: 'I've stopped doing the check-ins. They break my concentration. When I leave them out I get lovely long stretches with the breath, really absorbed. The only problem is that every so often I suddenly find I've been planning my day for five minutes, with no idea how I got there. I'd rather build concentration first and add the introspection later.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThere is real progress here. Long, enjoyable stretches with the breath are what following is meant to produce, and Culadasa says checking in requires longer periods of stable attention. This student has the precondition.\n\nBut the pattern they describe is forgetting, and it is the central obstacle of this Stage. Five minutes of planning with no idea how it began is forgetting followed by mind-wandering, ended by a spontaneous 'aha'. The 'no idea how I got there' is itself diagnostic: introspective awareness is strong enough to wake them eventually and not strong enough to see what carried them off.\n\nThe absorption may be part of the cause. He warns that when you focus closely the mind tends to drop awareness of everything else, and that this makes you more vulnerable to forgetting. With awareness collapsed onto the breath, a distraction can grow from subtle to gross without being seen, and the first the student knows of it is five minutes later. (That this is what is happening here is my inference from the report; I would test it by asking whether sounds and the body are still present during the long stretches.)\n\nThe plan rests on a mistaken picture of the method. In TMI concentration and introspection are not built one after the other. What is being trained is stable attention with mindfulness, and he says progress through all Ten Stages depends on strengthening introspective awareness. Checking in does interrupt the focus, and at this Stage that is not only acceptable, it is the key: attention to the state of the mind is what teaches awareness to watch for gross distraction. Without it, the student is relying on Stage Two's tool for a Stage Three problem.\n\nThere is something right in the complaint. A check-in that feels like a wrench is probably too heavy: it should be very gentle and brief, a snapshot, not an inspection.\n\nResponse. Appreciate the stretches first, and agree that they matter. Then name the five-minute lapses for what they are, without alarm: this is the thing the Stage exists to fix, and the fix is the practice being skipped. Offer it as an experiment for two weeks. Roughly every half-dozen breaths, uncounted, glance at the mind: is something other than the breath taking over? Is there dullness? If so, tighten up on the breath; otherwise carry on. At each 'aha', label the thought you woke from with one neutral word. Keep sounds and the body in awareness throughout. Tell them to expect it to feel clumsy for a few days, and to judge it by one measure: how often and for how long they lose the breath. I would also say that the absorbed feeling is not being taken away; what follows this Stage is awareness that watches the mind without interrupting the breath at all.",
    "rubric": [
     "Affirms the progress: long, stable stretches are the precondition Culadasa names for checking in.",
     "Identifies the five-minute lapses as forgetting and mind-wandering, the central obstacle of the Stage, and reads 'no idea how I got there' as introspective awareness too weak to see what took attention away.",
     "Links close, absorbed focus to collapsed peripheral awareness and greater vulnerability to forgetting, marking the application to this student as inference and saying how to test it.",
     "Corrects the picture of the method: attention and introspective awareness are trained together; the disruption of checking in is the key at this Stage; check-ins should be gentle and brief, so a heavy check-in is a fair complaint.",
     "Offers a concrete, time-limited experiment (uncounted check-ins, labeling at the 'aha', open awareness, one outcome measure) and notes the weighting: teachers differ on how hard to press introspection on a student who is enjoying stable attention, and other approaches do build concentration first, which TMI does not."
    ]
   },
   {
    "q": "A student at Stage Three reports: 'Good news and bad news. I can now stay with the breath for several minutes at a time. But about twenty minutes in, every sit, I start nodding. My head drops and I jerk awake, three or four times. I've tried concentrating harder on the tip of my nose to stay awake, and that makes it worse. I sit straight after lunch because that's when the house is quiet. Is it just tiredness?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThe good news is real, and the bad news partly follows from it. Culadasa says drowsiness shows up exactly when periods of stable attention get longer, for two reasons: turning the mind inward is something we have always associated with falling asleep, and a mind that is becoming calmer has less energy. So the nodding is not a sign that the practice has gone wrong.\n\nBut I cannot yet tell how much of this is meditation and how much is lunch. He is explicit that dullness from other causes has to be separated out first: most people get drowsy after eating, and early afternoon is a sleepy time anyway; so are short nights. Only if someone is rested and those factors are accounted for can they conclude that the dullness is related to meditation. This student has two explanations in play, and they are not exclusive.\n\nThe remedy they chose is feeding the problem. Concentrating harder on the nose turns the mind further inward and drops awareness of the body and surroundings, and he says dullness comes from turning too far inward and losing the energy that stimulation provides. It is also an attempt to struggle against strong dullness that is already present, which he says does not work well.\n\nWhat the head-drops are. Each is a few seconds of sleep ended by a reflex, the Zen lurch. After it, dullness settles back like a heavy cloak. Before it there will have been a comfortable phase where the breath could still be followed but had lost its sharpness. That is subtle dullness, and learning to spot it is what turns this from a nuisance into training.\n\nResponse. Start with the progress, and tell them the drowsiness is a known companion of it. Then two changes. First, conditions: try a week of sits before lunch, or at least an hour or two after it, and look at sleep. That is the cheapest test of which problem this is. Second, method. When nodding has started, rouse first: three or four deep breaths forced out through pursed lips, or tensing the whole body and releasing; if drowsiness is back within moments, that is sinking and calls for something stronger, such as standing. Not more than is needed, or agitation replaces dullness. Once alert, do the opposite of clamping: open awareness to sounds and the body while staying with the breath, and set a clear intention just ahead of each part of the breath. Add a look for dullness to every check-in, so that the comfortable, slightly blurred phase is caught before the fog. And ask them to be curious about it: how does it come on? I would not promise that the after-lunch sit can be made to work; it may simply be the wrong hour.",
    "rubric": [
     "Affirms the longer stretches and explains why drowsiness arrives with them: turning inward is associated with sleep, and a calmer mind has less energy.",
     "Holds both explanations open: ordinary sleepiness (a meal, early afternoon, short nights) must be accounted for before concluding it is meditation-related dullness, and the two can coexist.",
     "Explains why concentrating harder on the nose makes it worse: it turns the mind further inward, drops extrospective awareness, and is a struggle against strong dullness already present.",
     "Gives the strategy in order: change the conditions as a test; rouse first with graded antidotes (sinking means stronger, but no more than needed); then keep awareness open, set intention ahead of the breath, and look for dullness at each check-in, learning to spot the comfortable subtle phase.",
     "Weighting: teachers differ on whether to fix sleep and timing before teaching the antidotes or to do both at once, and on whether a post-lunch sit is worth persisting with; the report alone cannot settle how much is tiredness."
    ]
   },
   {
    "q": "A student with an old knee injury reports: 'About half an hour in, my right knee starts to burn. The book says to ignore pain and not to move, so I clench and wait for the bell. By the end I'm counting the seconds and furious with the whole thing. Then the knee aches for the rest of the morning. Do I just need to toughen up?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the commitment is not in doubt. This student is staying to the bell under real difficulty, and I would acknowledge that before correcting anything.\n\nSecond, this is probably not the kind of pain the instruction is about. Culadasa's guidance concerns the discomfort of a body unused to stillness, which he calls harmless. In Stage One he says to minimise pain, not to aggravate pre-existing injuries, and that any comfortable position will do, a chair included; the first instruction in this chapter is to make yourself as comfortable as possible. A knee with an old injury that burns and then aches all morning does not sound harmless. Whether it is doing damage is not for a meditation teacher to judge. Stage Four says that if you suspect pain is due to injury or disease it is best to consult a physician, and I would say the same.\n\nThird, the instruction has been compressed into something it does not say. The sequence is: ignore discomfort as long as you can; when it is too strong to ignore, turn toward it and make it the meditation object, because the rule is always to choose the focus of attention intentionally; if it fades, go back to the breath; if the urge to move becomes irresistible, decide in advance when and exactly how you will move, and move with full attention. 'Clench and wait' is none of these. It is neither ignoring nor observing; it is resisting.\n\nFourth, the resistance is where the suffering is. Counting seconds and fury are aversion and impatience on top of the sensation. That is the very thing he says meditating with pain can show: how resistance and impatience create suffering, and that while physical pain is unavoidable, suffering is optional. The student is getting the full lesson with none of the Insight, because attention is on getting through, not on what is happening.\n\nFifth, 'toughen up' is force and willpower again, which this method does not run on.\n\nResponse. Thank them for the effort, then take the pressure off: nobody is asking them to injure a knee. Change the posture first, a chair or a bench or more support, and aim for a sit in which what remains is ordinary discomfort. Then teach the actual sequence on small things, an itch, numbness, an ache in the back, where it is safe to stay and look. Give explicit permission to move, in his way: choose the moment, choose the movement, watch it. Suggest they notice what he predicts, that relief is brief and discomfort tends to reappear somewhere else. If the knee still burns in a good posture, shorten the sitting period or alternate with walking, and get it looked at. I would also tell them that Stage Four goes much further into working with pain, so there is no hurry to master it now.",
    "rubric": [
     "Acknowledges the commitment, then distinguishes harmless discomfort from possible injury: Stage One says to minimise pain and not aggravate existing injuries, and any comfortable posture, including a chair, is acceptable.",
     "States the actual sequence the student has compressed: ignore as long as possible; then make the pain the object (always choosing the focus intentionally); return to the breath if it fades; if the urge is irresistible, decide when and how to move and move attentively.",
     "Identifies 'clench and wait' as resistance, neither ignoring nor observing, and the fury and second-counting as the suffering that resistance and impatience add to pain.",
     "Rejects 'toughen up' as force and willpower, and prescribes a posture change first, then practice of the sequence on minor discomforts, with explicit permission to move mindfully.",
     "Weighting: teachers differ on how long to encourage a student to stay with pain; when injury is suspected Culadasa's own advice (in Stage Four) is to consult a physician, while suggestions such as shorter sits or walking are the teacher's own."
    ]
   }
  ]
 },
 {
  "n": 4,
  "grill": [
   {
    "q": "Besides interrupting attention to the breath, what second drawback of introspective attention does Culadasa give in Stage Four?",
    "options": [
     {
      "t": "It gives only a conceptual snapshot of what was happening a moment ago",
      "ok": true,
      "why": "He says its object comes from the contents of introspective awareness in the previous moment, so it is a delay or echo, whereas awareness can monitor continuously."
     },
     {
      "t": "It strengthens identification with whatever state of mind it comes upon",
      "ok": false,
      "why": "Identification is discussed later, with emotions, and is not a drawback he attributes to introspective attention."
     },
     {
      "t": "It energises the mind too much, tipping a calm sit over into agitation",
      "ok": false,
      "why": "Over-energising is a risk he attaches to focusing too intensely on the breath, not to checking in."
     },
     {
      "t": "It can see the contents of the mind but never the movements of attention",
      "ok": false,
      "why": "The limitation he names is one of timing, a snapshot of the previous moment, not of what kind of thing can be seen."
     }
    ]
   },
   {
    "q": "At Stage Four, what does Culadasa mean by 'stilling the mind'?",
    "options": [
     {
      "t": "Holding attention on the breath so intensely that nothing else is noticed",
      "ok": false,
      "why": "He warns that hyper-focused tunnel vision brings tension and anxiety and can cost you peripheral awareness altogether."
     },
     {
      "t": "Removing thoughts from peripheral awareness so that only the breath remains",
      "ok": false,
      "why": "He calls it a misconception that stilling the mind means getting rid of thoughts or blocking out distractions."
     },
     {
      "t": "Reducing the movement of attention between the breath and gross distractions",
      "ok": true,
      "why": "He defines it at this point as reducing the constant movement of attention between the breath and gross distractions."
     },
     {
      "t": "Slowing the breath until the mental activity that follows it has subsided",
      "ok": false,
      "why": "He never uses control of the breath as a way of calming the mind, and as a meditation object the breath is observed passively."
     }
    ]
   },
   {
    "q": "What does Stage Four add to Stage Three's way of dealing with gross distraction?",
    "options": [
     {
      "t": "Labeling each distraction in turn, so that awareness learns to recognise it",
      "ok": false,
      "why": "Labeling was a Stage Three aid, and what Stage Four adds is prevention through continuous introspective awareness."
     },
     {
      "t": "Clearing subtle distractions out of awareness, so that none is left to grow",
      "ok": false,
      "why": "Subtle distractions are tolerated and even used at this Stage, and subduing them is left to Stage Six."
     },
     {
      "t": "Checking in more frequently, so that gross distractions are found earlier",
      "ok": false,
      "why": "Check-ins interrupt attention, so they give way here to continuous introspective awareness."
     },
     {
      "t": "Spotting a subtle distraction about to turn gross, and tightening up first",
      "ok": true,
      "why": "The second step is a refinement that prevents gross distraction: recognise a subtle distraction with the potential to become gross and tighten up your focus before it does."
     }
    ]
   },
   {
    "q": "Culadasa says pain often dissolves once resistance stops. Why does he warn against expecting that to happen?",
    "options": [
     {
      "t": "The pain at this Stage usually has a physical cause needing treatment",
      "ok": false,
      "why": "He says the mind at this Stage tends to magnify discomfort and even to create pain with no physical cause."
     },
     {
      "t": "The expectation is itself a return to resistance and non-acceptance",
      "ok": true,
      "why": "He says that expecting the pain to disappear leads you back toward resistance and non-acceptance, so it will not happen every time."
     },
     {
      "t": "The formula only holds once equanimity has matured in the adept Stages",
      "ok": false,
      "why": "He presents the formula as working here and now, whenever resistance actually drops."
     },
     {
      "t": "The relief comes from dullness, which masks pain without resolving it",
      "ok": false,
      "why": "He credits the change to acceptance, and notes that pain makes dullness less likely, not more."
     }
    ]
   },
   {
    "q": "What does Culadasa say happens if you keep thinking through the insights that come up in meditation?",
    "options": [
     {
      "t": "You train the mind to turn each sit into therapy or creative thinking",
      "ok": true,
      "why": "He says compelling issues will then arise whenever you sit, because you have trained the mind to make meditation a kind of personal psychotherapy or creative tool."
     },
     {
      "t": "You weaken attention, since discursive thought erodes concentration",
      "ok": false,
      "why": "He says the opposite about focus: while thinking it will be stronger than ever, which is part of the seduction."
     },
     {
      "t": "You delay Insight proper, which intellectual understanding obstructs",
      "ok": false,
      "why": "The cost he names is being drawn away from the practice again and again, not an obstruction of Insight by understanding."
     },
     {
      "t": "You exhaust the unconscious, which soon stops supplying any new insights",
      "ok": false,
      "why": "He says the mind keeps dredging up material, though its quality declines."
     }
    ]
   },
   {
    "q": "A painful memory surfaces with strong emotion. In what order does Culadasa say to work?",
    "options": [
     {
      "t": "The cause first, tracing what in your history gave rise to the reaction",
      "ok": false,
      "why": "He says it is not important to work out why the material arises, and that such analysis takes you away from the real work."
     },
     {
      "t": "The memory first, since the emotion fades once the memory is understood",
      "ok": false,
      "why": "He says the memory can only be viewed objectively and let go once its emotion has been dealt with."
     },
     {
      "t": "The breath first, returning to the emotion once attention has stabilised",
      "ok": false,
      "why": "Material too strong to disregard is made the meditation object, and the breath is returned to after it subsides."
     },
     {
      "t": "The emotion first, starting with its bodily sensations, then the memory",
      "ok": true,
      "why": "He says in every case to address the emotions first, beginning with the physical sensations that accompany them, and only then the memories or images."
     }
    ]
   },
   {
    "q": "While observing a strong emotion as instructed, a meditator finds they are suffering. What does Culadasa say this shows?",
    "options": [
     {
      "t": "They have stayed with it for too long and should return to the breath",
      "ok": false,
      "why": "The process can be tiring and a break is allowed, but that is not what he says suffering indicates."
     },
     {
      "t": "They are identifying with some emotion, possibly one in the background",
      "ok": true,
      "why": "He says that if you are suffering you can be sure you are identifying with an unpleasant emotion, which may be an undercurrent beneath the one you are observing."
     },
     {
      "t": "They are suppressing the emotion when they should be feeling it fully",
      "ok": false,
      "why": "The emotion is meant to be felt fully, but the cause of suffering he names is identification, not suppression."
     },
     {
      "t": "They have come upon material that observation by itself cannot resolve",
      "ok": false,
      "why": "He does provide exits for those who are overwhelmed, but his reading of suffering in the process is identification."
     }
    ]
   },
   {
    "q": "How should a Stage Four meditator treat stable subtle dullness?",
    "options": [
     {
      "t": "Deepen it gently, since its calm is the beginning of mental pliancy",
      "ok": false,
      "why": "Subtle dullness is an obstacle to be overcome in Stage Five, not a forerunner of pliancy."
     },
     {
      "t": "Rouse the mind fully, since all dullness leads to strong dullness",
      "ok": false,
      "why": "Only progressive subtle dullness leads to strong dullness, and that is the kind to rouse yourself from."
     },
     {
      "t": "Tolerate it for now, since it keeps the mind from becoming agitated",
      "ok": true,
      "why": "He says tolerating stable subtle dullness at this Stage keeps the mind from becoming agitated and restless, at some cost in vividness."
     },
     {
      "t": "Disregard it, since it cannot be detected at all before Stage Five",
      "ok": false,
      "why": "It can be noticed as a loss of vividness and clarity, but overcoming it is deferred to Stage Five."
     }
    ]
   },
   {
    "q": "In a dim, dreamy sit, vivid archetypal imagery arises with a strong sense that something profound is happening. What is Culadasa's instruction at this Stage?",
    "options": [
     {
      "t": "Welcome it as purification, and acknowledge, allow and accept it",
      "ok": false,
      "why": "That is his method for charged material surfacing in a calm, alert mind, whereas here the dimness and dreaminess point to dullness."
     },
     {
      "t": "Let it go, rouse the mind from dullness, and return to the breath",
      "ok": true,
      "why": "He says states of dullness produce such experiences, that they are only a hindrance to training attention and awareness, and that you should let go and bring yourself out of dullness."
     },
     {
      "t": "Take the imagery as the object, since it is too strong to ignore",
      "ok": false,
      "why": "Making something the object is for distractions you cannot disregard, while imagery born of dullness is ended by rousing the mind."
     },
     {
      "t": "Explore its meaning at once, since such visions seldom come again",
      "ok": false,
      "why": "He says to set any significance aside and explore it at another time."
     }
    ]
   },
   {
    "q": "Which of these does Culadasa include among the marks of having mastered Stage Four?",
    "options": [
     {
      "t": "Attention now rests on the breath without any effort or vigilance",
      "ok": false,
      "why": "Effortlessness belongs to Stage Seven, and this Stage runs on vigilance."
     },
     {
      "t": "Subtle distractions have stopped appearing in peripheral awareness",
      "ok": false,
      "why": "Thoughts and sensations still arise at mastery but no longer draw attention away, and subduing subtle distraction is Stage Six."
     },
     {
      "t": "Subtle dullness of every kind has been recognised and then overcome",
      "ok": false,
      "why": "Stable subtle dullness remains until Stage Five."
     },
     {
      "t": "Perception of the breath has become non-verbal and non-discursive",
      "ok": true,
      "why": "In the chapter's conclusion he says that by the end of this Stage perception of the meditation object has become non-verbal and non-discursive."
     }
    ]
   }
  ],
  "open": [
   {
    "q": "Stage Four replaces checking in with continuous introspective awareness.\n• Give Culadasa's two reasons why introspective attention no longer serves, and explain the second.\n• Describe how the meditator finds and strengthens continuous introspective awareness, and what it should be watching.\n• Explain why he says this matters beyond making attention stable.",
    "model": "Why check-ins no longer serve. Two reasons. The first was already admitted in Stage Three: a check-in takes attention off the breath. That was acceptable while the task was to stop forgetting; now the task is continuous attention, and the interruption defeats it. The second is subtler, and he asks the reader to take time over it. What introspective attention looks at is not the mind as it is now; its object is drawn from what introspective awareness held a moment earlier. So it can only deliver a conceptual snapshot of what was just happening, a delay or echo. Introspective awareness has no such lag and can monitor the mind continuously.\n\nFinding and strengthening it. He points out that the meditator has already tasted it: just after a check-in, on returning to the breath, awareness is sharper and clearer for a while, with attention and introspective awareness better balanced. The exercise is to stabilise attention, check in, return to the breath, and notice that awareness of the mind continues while attention stays put. That is the thing to strengthen and extend until it is always there. It needs a shift of emphasis. Until now the balance has been between attention on the breath and mostly extrospective awareness; now the introspective part of peripheral awareness is emphasised. He describes it as standing back a little from the meditation object, just enough to keep the breath at the centre while taking in everything else happening in the mind, like a sentry. And it should watch more than content. Beyond which thoughts and feelings are present, it attends to the activities of the mind: movements of attention, the way objects arise and pass in peripheral awareness, and changes in the clarity and vividness of perception. This is what he means by watching the mind while the mind watches the breath, and he names it metacognitive introspective awareness, which matures fully only by Stage Eight.\n\nWhy it matters. If stability were the only aim, he says, you could get it just by bringing attention back to the breath over and over. Anchoring attention while sustaining introspective awareness is something else: it is cultivating mindfulness. He adds three practical arguments. It is more efficient, because you come to understand how the mind behaves; more useful, because the later Stages depend on it; and more satisfying, because the sit becomes a continuous process of learning. The limit to respect is intensity: focus on the breath too hard for too long and introspective awareness is lost. His image is holding a robin's egg, firmly enough not to drop it and gently enough not to break it.",
    "rubric": [
     "Gives both drawbacks of introspective attention: it interrupts attention to the breath, and it yields only a conceptual snapshot drawn from the previous moment (a delay or echo), where awareness can monitor continuously.",
     "Describes how it is found: the sharper awareness that persists just after a check-in, deliberately noticed and then extended until it is always present.",
     "Describes the shift of emphasis from extrospective to introspective awareness ('standing back' with the breath still central, like a sentry) and what is watched: not only content but the mind's activities, including movements of attention and changes in clarity.",
     "Names this as metacognitive introspective awareness ('watching the mind while the mind watches the breath'), maturing fully by Stage Eight.",
     "Explains why it matters: stability alone could come from repeated returning, but this cultivates mindfulness, and is more efficient, useful and satisfying; notes the limit that over-intense focus loses introspective awareness (the robin's egg)."
    ]
   },
   {
    "q": "Explain Stage Four's 'purification of the mind' as a teacher would need to understand it.\n• What does Culadasa say is happening, and why at this Stage?\n• Set out the method step by step, including what he says not to do.\n• State the exits he provides for a meditator who is overwhelmed, and say where you would treat his claims with caution.",
    "model": "What he says is happening. As the mind grows calm and everyday distractions fall away, material from the unconscious wells up: memories, thoughts or visions with strong emotion attached, or raw emotion with no object at all. It may be announced by restlessness and impatience, which he compares to the tip of an iceberg. Its sources are past difficulties, large and small, and internalised beliefs in conflict. He calls its arrival a sign of progress and a purification: when the material is observed and accepted, mindfulness lets deep unconscious processes register that the circumstances behind the conditioning no longer exist, and they are reprogrammed. He says this can be the equivalent of years of therapy and that it is a necessary step toward śamatha.\n\nThe method. Ignore the material as long as you can. When it is too strong to disregard, make it the meditation object. Then: keep clear that you are here, safe, sitting in meditation. Address the emotion first, before any memory or image. Create distance with words ('anger is arising', not 'I am angry'). Begin with the body: where the sensations are, whether pleasant or unpleasant, how they change. Only when ready, turn to the mental side: name the emotion and its quality, notice the thoughts it triggers and how it shifts. Throughout, acknowledge, allow and accept. If you find you are suffering, you are identifying with some emotion, often one in the background of the one you are watching; find it and make it the object. When the emotion fades or weakens, observe any remaining images without engaging, and return to the breath when that is easy. Expect the material to come back until it can be met with acceptance. What not to do: resist, avoid or reject it, which only sends it back down; analyse its content or hunt for its cause; judge it; or force yourself on when exhausted, since he explicitly allows a break.\n\nThe exits. For someone acutely disturbed: ground yourself and take your mind off it, with company, food, exercise, a film. Talk to a good listener, but take advice only from a meditation teacher experienced in these purifications or a trained counsellor. If consistently overwhelmed, switch to loving-kindness until compassion for yourself comes easily, then try again. If it is still too much, seek professional help.\n\nWhere I would be cautious. 'Years of therapy' and 'no need to do anything' are his claims; the book asserts them and does not demonstrate them, and I would not repeat them to a student as promises. His own restriction on advice also binds the teacher: unless I have real experience with this, my job is to normalise, teach the method, watch for overwhelm, and refer. And with a student I know to have a difficult history, I would set out the exits before the material arrives, not after. Those three points are my judgment, not TMI.",
    "rubric": [
     "States his account: a calmer mind lets unconscious material surface (charged memories and images, or raw emotion without an object), sometimes preceded by restlessness; he treats it as progress and purification, with mindfulness reprogramming unconscious conditioning.",
     "Gives the method in order: ignore, then make it the object; present-moment safety; emotions first; verbal distance ('anger is arising'); bodily sensations before the mental side; acknowledge, allow, accept; return to the breath when it eases.",
     "Includes the two finer points: suffering indicates identification, possibly with a background emotion; and what not to do (resist, avoid, reject, analyse content or causes, judge).",
     "States the exits: grounding and distraction when acutely disturbed; advice only from an experienced teacher or trained counsellor; loving-kindness when consistently overwhelmed; professional help if still too intense.",
     "Shows calibrated caution, marked as the answerer's own: the 'years of therapy' claim is asserted, not demonstrated; the restriction on advice applies to the teacher; exits are best explained in advance to a student with a difficult history."
    ]
   },
   {
    "q": "Set out Stage Four's work with dullness.\n• Distinguish strong dullness, progressive subtle dullness and stable subtle dullness, and say how each is to be treated at this Stage.\n• Give the three steps, and explain why the second is the hard one.\n• Explain how antidotes are matched to the strength of the dullness, how you know one has worked, and what 'the seduction of dullness' refers to.",
    "model": "The three kinds. Strong dullness is the coarse form: perception of the breath grows dim, takes on dreamlike distortions, and ends in drowsiness and sleep. This Stage aims to overcome it entirely. Subtle dullness is a loss of vividness, clarity and intensity with the breath still followed, and Culadasa now divides it in two. Progressive subtle dullness leads on to strong dullness, and the longer it lasts the likelier that becomes; it has to be recognised and corrected. Stable subtle dullness does not lead to strong dullness. At this Stage it is tolerated, because it keeps the mind from becoming agitated and restless, at some cost in sharpness. Overcoming it is Stage Five's work.\n\nThe three steps. One: whenever strong dullness or progressive subtle dullness is present, rouse the mind completely with an antidote strong enough for the job. Two: use introspective awareness to notice dullness coming back, as early as possible, and apply the antidote again. Three: repeat until it does not return. The second step is the hard one for a reason he states directly: subtle dullness impairs the introspective awareness that is supposed to detect it, and in deep dullness there is none at all, so you find out only when you are nodding or dreaming. The skill grows with practice. The earlier the onset is caught, the lighter the antidote that will do, and when noticing and correcting have become automatic, strong dullness has been overcome.\n\nMatching the antidote. For strong dullness: forceful breaths through pursed lips, clenching and releasing the muscles, and for very strong dullness standing, a few minutes of walking, or cold water. For lesser dullness: widening peripheral awareness to the body and sounds while keeping attention on the breath, taking the whole body and surroundings as the object for a while, or opening the eyes. For very subtle dullness caught very early, simply strengthening the intention to perceive the breath clearly and in detail. There is a ceiling on that last one: attention held too intensely for too long loses mindfulness and can over-energise the mind, and then the correction runs the other way, relaxing attention to let a little subtle dullness in. The test of success is time. If dullness stays away for at least three to five minutes, the antidote was enough; if it returns sooner, it was too weak or too brief; if it returns almost at once, that is sinking and calls for something much stronger. He warns that it will often return anyway, and that whole sessions may go on this.\n\nThe seduction of dullness. Strong dullness with attention anchored on the breath can be sustained without falling asleep, and it produces dream imagery, archetypal visions, pleasant sensations, apparently paranormal experiences and a feeling of profundity. He notes that some traditions cultivate these states. For training attention and awareness he calls them only a hindrance: let go, rouse the mind, return to the detail of the breath, and keep any meaning for another time.",
    "rubric": [
     "Distinguishes the three and their treatment: strong dullness to be overcome entirely; progressive subtle dullness to be recognised and corrected because it leads to strong dullness; stable subtle dullness tolerated at this Stage because it keeps the mind from agitation.",
     "Gives the three steps (rouse completely; notice the return early with introspective awareness and re-apply; repeat until it stays away) and explains why the second is hard: dullness impairs the awareness that detects it.",
     "Matches antidotes to strength: forceful breathing, muscle tension, standing, walking or cold water for strong dullness; wider awareness, whole-body object or open eyes for lesser; strengthened intention only for very subtle dullness caught very early.",
     "Gives the test and the balance: no return for three to five minutes means the antidote sufficed; a sooner return means too weak or too brief; an almost immediate return is sinking; over-intense attention can agitate, corrected by letting a little subtle dullness in.",
     "Explains the seduction of dullness: sustained dull states yield visions and a sense of profundity, cultivated in some traditions but a hindrance here; let go, rouse, return to the breath, keep any meaning for later."
    ]
   },
   {
    "q": "Stage Four gives several different responses to distraction. Say which response Culadasa prescribes, and why, for each of these:\n• a subtle distraction that is gaining strength;\n• a gross distraction that lingers in the background after you have returned to the breath;\n• a useful insight;\n• a thought, pain or emotion that will not be disregarded.\nThen state what the responses have in common.",
    "model": "A subtle distraction gaining strength. Tighten up on the breath before it becomes gross, and then engage more fully, using following and connecting, so that it and others are kept at bay. This is the Stage's second step, the refinement that prevents gross distraction. Two kinds deserve special watchfulness: those with an obvious allure, such as food when hungry or a nagging problem, and those that creep in so gradually that they displace the breath unnoticed. Tightening has a limit, though: more intensity, but not too much, and not for too long.\n\nA gross distraction that lingers in the background after the return. Leave it. He says not to worry if it persists as a subtle distraction; let it be and it will usually dissipate. Going after it would hand it attention again.\n\nA useful insight. Make a mental note, resolve to take it up after the sit, and return to the breath; it helps to set aside a separate time for analytical meditation. The reason is not that such insights are worthless, since he grants they are often valid. It is that thinking them through trains the mind to produce compelling material every time you sit, and meditation turns into therapy or a creative workshop.\n\nSomething that will not be disregarded. Make it the meditation object, deliberately. For pain: investigate its qualities, whether it is fixed or changing, single or composite, and how much of the unpleasantness is in the sensation and how much in the reaction. For a thought that keeps returning: label it ('thinking, thinking') and hold it in attention without analysing its content until its intensity subsides. For an emotion: acknowledge, allow and accept, starting with the body. In each case, return to the breath once the thing has faded or can be ignored, and if pain never fades, it serves as the object in its own right.\n\nWhat they have in common. Attention is never dragged and never used to suppress: its focus is always chosen. Where a distraction can be left, it is left in the background; where it can be forestalled, attention is sharpened on the breath; where it cannot be disregarded, it is made the object on purpose, which he calls finessing the situation. Behind that is the Stage's definition of stilling the mind, which is reducing the movement of attention, not emptying awareness. And the manner is constant too: let go gently and without self-judgment, and affirm what went right. The summary is mine; the pieces are his.",
    "rubric": [
     "Subtle distraction gaining strength: tighten up on the breath before it turns gross and engage more fully (following, connecting); names the two troublesome kinds (alluring; creeping in gradually) and the limit on intensity.",
     "Lingering after the return: let it be as a subtle distraction, since it will usually dissipate without further attention.",
     "Useful insight: mental note, resolve to address it after the sit, return to the breath, with analytical meditation as a separate practice; the reason is that pursuing insights trains the mind to turn sits into thinking sessions, not that they lack value.",
     "Cannot be disregarded: deliberately make it the meditation object, with the specific handling for pain (investigate; sensation versus reaction), a recurring thought (label, don't analyse) and emotion (acknowledge, allow, accept); return to the breath when it subsides.",
     "States the common principle: the focus of attention is always chosen, never dragged and never used to suppress ('finesse the situation'); stilling the mind means less movement of attention, not an empty awareness; the manner is gentle and affirming."
    ]
   }
  ],
  "scenario": [
   {
    "q": "A student at Stage Four reports: 'My sits had become calm and steady. Then last week, out of nowhere, I was flooded with grief and found myself crying on the cushion. There was no story at first; then images of my father's funeral, fifteen years ago. It has happened three sits running. I've started to dread sitting, and I wonder whether meditation is making me worse. Should I stop, or push through and work out what it means?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nIn Culadasa's terms this is purification, and it arrives when it does for a reason. As the mind grows calm and everyday distractions fall away, material from the unconscious wells up. He describes both forms this student reports: raw emotion with no object, which seems to have no cause, and memories or images carrying strong feeling. He calls it perfectly normal and a sign of progress. So the first thing to say is that the practice has not gone wrong, and that calm sits followed by this are a known sequence.\n\nThe dread is understandable, and it matters. Three sits of being flooded would make anyone wary. It also tells me the student has been inside the grief, not observing it; he says that if you are suffering in this process you are identifying with the emotion.\n\nBoth options on the table are ones he warns against. Stopping is avoiding: material that is resisted or rejected goes back into the unconscious and returns later. Pushing through to work out what it means is force plus analysis, and he says it is not important to know why the material arises, and that examining its content bogs you down. The path he gives is neither: acknowledge, allow and accept.\n\nWhat I don't know. How the student is between sits: sleeping, working, coping? Whether there is a history that makes this heavier than it sounds. Those answers decide how much of what follows is appropriate.\n\nResponse. Lead with care and with normalising; say plainly that grief for a father is not a malfunction. Then offer the method in small steps. When the wave comes and cannot be ignored, let it be the object. Know where you are: safe, sitting. Stay with the feeling before the images. Find it in the body, the throat, chest or belly, and watch how the sensations move. Use his wording, 'grief is arising'. Don't interrogate the funeral. When it eases, notice any images without following them, and come back to the breath when that is easy. Expect it to return some more times. It is tiring; a break is allowed, and shorter sits for a while are fine.\n\nThen the exits, stated in advance. If they are acutely disturbed: ground themselves with company, food, exercise, something distracting. If it keeps overwhelming them: switch to loving-kindness until compassion for themselves comes easily, then try again. If it is still too much: professional help. He also says to take advice only from a teacher experienced in these purifications or a trained counsellor, and I would be honest about which of those I am. I would not tell them this will be worth years of therapy; that is his claim, and it is not mine to promise.",
    "rubric": [
     "Normalises with his account: a calmer mind lets unconscious material surface, as raw emotion and as charged memories, and he treats this as purification and a sign of progress.",
     "Reads the dread as a sign of identification with the emotion, and recognises both proposed options as ones he warns against: stopping as avoidance, and pushing through to find the meaning as force and analysis.",
     "Gives the method in order: let it be the object when too strong to ignore; present-moment safety; emotion before images; bodily sensations first; 'grief is arising'; no analysis of content; return to the breath when it eases; breaks allowed.",
     "States his exits in advance (grounding, loving-kindness, professional help) and his restriction that advice should come only from an experienced teacher or trained counsellor, applying that restriction to oneself.",
     "Weighting: teachers differ on how long to follow Culadasa's default of staying and observing; those with trauma-informed training often bring in shorter sits, grounding and loving-kindness sooner, and would ask about functioning and history first; the 'equivalent of years of therapy' claim is his and should not be passed on as a promise."
    ]
   },
   {
    "q": "A student who can now stay with the breath for a whole sit reports: 'Thoughts keep barging in front of the breath, so I've been locking on harder, really boring into the sensations to shut everything else out. It works for a few minutes. Then I get tense and a bit anxious, my jaw tightens, and afterwards I feel wired. And on other days it flips: I'm foggy and half asleep by the end. Which is my real problem, distraction or dullness?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the achievement. A whole sit without losing the breath is the first Milestone, and I would say so before anything else.\n\nSecond, what the student calls thoughts barging in front of the breath is gross distraction, the first obstacle of Stage Four. Attention still alternates; when a thought becomes the primary focus the breath seems to fade. It is where this Stage is supposed to begin.\n\nThird, the strategy is the trouble. Locking on to shut everything out is what Culadasa calls brute force, and he says it never works for long. He goes further: forcing exclusive attention at this Stage is a big mistake, because hyper-focused tunnel vision is the kind of attention that goes with fight-or-flight, and it brings tension and anxiety. The tight jaw and the wired feeling are that, almost item for item. It also costs peripheral awareness, which leaves the meditator more vulnerable to both distractions and dullness.\n\nFourth, the foggy days come from the same strategy. Focusing on the breath too intensely for too long shuts out the thoughts and sensations that keep the mind alert, so energy drops and dullness follows. So the question 'distraction or dullness?' has the answer: neither is the root. The student is swinging between an over-energised mind and a dull one, and he names learning to hold the balance between those two as one of the challenges of this Stage. (That one cause explains both kinds of day is my reading of the report; sleep and time of day should be ruled out for the foggy sits.)\n\nFifth, the picture of the goal needs correcting. Stilling the mind here does not mean emptying it. It means reducing the movement of attention between the breath and gross distractions, with thoughts allowed to come, be and go in the background.\n\nResponse. Credit the Milestone. Then replace the clamp with his two steps, both run on awareness and not on force. When a thought has taken over: let go gently, without self-reproach, return to the breath, and if the thought lingers in the background, leave it. To prevent it: stand back a little from the breath, so that the breath stays central while you take in what the mind is doing, and when something is gaining pull, tighten up just enough. His images help: carrying a full cup of hot tea through a crowded room, and holding a robin's egg. Use connecting to stay engaged. For the energy swings: if tense and wired, relax the force of attention and let a little subtle dullness in; if foggy, widen awareness to the body and sounds or use an antidote. Tell them that background thoughts and a slightly soft edge are acceptable at this Stage and are in fact what they steer by. And loosen the jaw: relax first, then look.",
    "rubric": [
     "Credits the first Milestone, and identifies thoughts moving in front of the breath as gross distraction, the expected starting obstacle of Stage Four.",
     "Identifies locking on as brute force and forced exclusive attention: fight-or-flight tunnel vision that produces tension and anxiety and costs peripheral awareness, matching the student's symptoms.",
     "Explains the foggy days by the same cause (over-intense focus shuts out stimulation, so energy drops) and reframes the question as a failure of balance between an over-energised and a dull mind, marking the single-cause reading as inference and ruling out ordinary tiredness.",
     "Corrects the goal (stilling the mind is reducing the movement of attention, not emptying awareness) and teaches the two steps through continuous introspective awareness: let go gently, leave what lingers, stand back, tighten up only as much as needed.",
     "Gives the balancing moves in both directions (relax attention when wired; widen awareness or rouse when foggy) and notes the weighting: teachers differ on whether to work first on the bodily tension or on the student's understanding, and on whether to prescribe a period of more open awareness."
    ]
   },
   {
    "q": "A student at Stage Four reports: 'In my longer sits I've begun having extraordinary experiences. Vivid scenes: a temple, faces of people I've never met, once what felt like a past life. Time disappears and the breath goes soft and far away. It feels deeply meaningful, and afterwards I'm floaty for an hour. A friend from another tradition says this is exactly what is supposed to happen. Is this Insight, or jhāna?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThe likeliest reading in TMI terms is what Culadasa calls the seduction of dullness. He lists the contents almost exactly: states of dullness lead to dream imagery, archetypal visions, pleasant sensations, apparently paranormal experiences including past-life recollections, and an overall feeling that something profound is occurring. With attention anchored on the breath, such states can be sustained for a long time without falling asleep. The key detail fits: a breath gone soft and far away is perception growing dim, which is what strong dullness does to the meditation object. Losing track of time and feeling floaty afterwards are not listed in the chapter and could go either way, so I would not lean on them.\n\nI would not be certain from a report, because this Stage has a second source of visions. Purification also brings up images from the unconscious, and those are to be acknowledged and accepted, not dismissed. TMI gives no explicit test for telling the two apart. The working distinction, as I read the chapter, is the state of mind the images arise in: purification material comes with a clear, alert mind and usually a difficult emotional charge; dullness imagery comes with dimness, drift and pleasant fascination. So I would ask: how sharp are the breath sensations just before and during? Are sounds and the body still present? Any nodding? What is the feeling tone?\n\nOn the student's two candidates: it is not Insight in his sense, and it is not jhāna. In this system the jhāna practices begin at Stage Six and depend on exclusive attention with awareness intact, the opposite of a breath that has faded. The Overview warns that unrecognised dullness leads people to overestimate where they are.\n\nOn the friend: Culadasa is fair about this. He says that in certain traditions these states are purposely cultivated, and elsewhere he notes that shamanic practices induce the same receptivity on purpose. He does not say the experiences are meaningless. He says that for cultivating attention and awareness they are only a hindrance, and that visionary experiences should be avoided at this Stage. Both statements can be true: the friend's tradition is doing something different.\n\nResponse. Don't mock it and don't interpret it. Say that the experiences are real experiences, that TMI has a name for the state they arise in, and that within this training the instruction is clear: resolve to let them go, strengthen the intention to perceive the breath vividly and in detail, and bring the mind out of dullness. Give the practical means: catch the first softening of the breath, widen awareness, open the eyes or use a stronger antidote, and check that dullness stays away for a few minutes. If a vision seems significant, he says to set it aside and explore it at another time, so nothing has to be thrown away. Expect reluctance; this is being asked to give up the most interesting part of the sit. I would also be clear about the choice: if what they want is this method's results, the dullness has to go.",
    "rubric": [
     "Identifies the seduction of dullness as the likeliest reading: strong dullness with attention anchored on the breath produces imagery, visions, past-life impressions and a sense of profundity, and the faded breath is dimmed perception.",
     "Holds the alternative open: purification also produces visions; TMI gives no explicit test, so the answerer offers one (alert, clear and emotionally charged versus dim, drifting and pleasantly fascinating), marks it as a reading, and asks about clarity, peripheral awareness, nodding and feeling tone.",
     "Answers the student's question: not Insight in his sense and not jhāna, which in TMI depends on exclusive attention with awareness intact; cites the warning that unrecognised dullness leads to overestimating one's Stage.",
     "Treats the friend's tradition fairly, as Culadasa does: such states are deliberately cultivated elsewhere and may have meaning, but for training attention and awareness they are a hindrance to be avoided at this Stage.",
     "Gives the instruction without contempt (let go, strengthen the intention to perceive the breath in detail, rouse the mind, keep any meaning for later) and notes the weighting: teachers differ on how firmly to call it dullness from a report alone, and those from other systems would value the experiences themselves."
    ]
   }
  ]
 },
 {
  "n": 5,
  "grill": [
   {
    "q": "Which set lists the three characteristics of subtle dullness that Culadasa teaches the meditator to look for?",
    "options": [
     {
      "t": "Heavy eyelids, dreamlike distortions of the breath and a pull towards sleep",
      "ok": false,
      "why": "Those are marks of drowsiness and strong dullness, which were the work of Stages Three and Four."
     },
     {
      "t": "Falling vividness, rising subtle distractions and a restless, tense feeling",
      "ok": false,
      "why": "Rising distractions and tension describe agitation, whereas subtle dullness comes with fewer thoughts and a relaxed feeling."
     },
     {
      "t": "Falling vividness, fading peripheral awareness and a pleasant, relaxed feeling",
      "ok": true,
      "why": "These are the three he gives, and he says they occur together though only one or two may be obvious at a time."
     },
     {
      "t": "Fading peripheral awareness, more wandering thoughts and a sudden jolt of alertness",
      "ok": false,
      "why": "Thoughts become fewer as dullness deepens, and a jolt of alertness is a startle that follows dullness and is not one of the three marks."
     }
    ]
   },
   {
    "q": "How does the loss of vividness caused by subtle dullness differ from the loss caused by subtle distractions?",
    "options": [
     {
      "t": "Dullness lowers it gradually, with less fluctuation and no rise in distractions",
      "ok": true,
      "why": "He says that when dullness is the cause, vividness and clarity decline more gradually and without as much fluctuation, and there is no increase in subtle distractions."
     },
     {
      "t": "Dullness leaves the breath itself sharp and dims only peripheral awareness",
      "ok": false,
      "why": "Dullness dims the breath as well, because non-perceiving mind moments gradually replace perceiving ones."
     },
     {
      "t": "The two cannot be told apart by perception and differ only in pleasantness",
      "ok": false,
      "why": "He says the two produce similar changes, yet he gives the pattern of change and the number of distractions as ways to tell them apart."
     },
     {
      "t": "Dullness lowers it suddenly, while distractions wear it down by degrees",
      "ok": false,
      "why": "It is the other way round, since distractions come and go and so make vividness fluctuate from moment to moment."
     }
    ]
   },
   {
    "q": "Why is deepening subtle dullness hard to catch by relying on introspective awareness alone?",
    "options": [
     {
      "t": "Introspective awareness is still too undeveloped to do the job reliably",
      "ok": false,
      "why": "That was Stage Three's version of the problem, whereas by now introspective awareness has been trained and the trouble is that dullness itself dims it."
     },
     {
      "t": "Introspective awareness itself fades, and reports comfort, not dullness",
      "ok": true,
      "why": "He says it is precisely when subtle dullness deepens that introspective awareness starts to fade, leaving you aware of comfort and ease, which is why he also has you check in with attention at this Stage."
     },
     {
      "t": "Subtle dullness produces no change that awareness could possibly register",
      "ok": false,
      "why": "It changes vividness, peripheral awareness and feeling tone, all of which can be registered, so the trouble lies in the state of the observer."
     },
     {
      "t": "By then no awareness is left at all, just as when one is nodding off",
      "ok": false,
      "why": "That is how Stage Four describes drowsiness, where no introspective awareness is left to alert you, whereas here it is dimmed, not absent, and still reports comfort and ease."
     }
    ]
   },
   {
    "q": "A meditator reports a very pleasant sit and asks whether the pleasantness shows they were in subtle dullness. What does Culadasa say?",
    "options": [
     {
      "t": "It proves it, since dullness of any kind is always pleasant unless resisted",
      "ok": false,
      "why": "He says dullness is always pleasant except when actively resisted, but he also says pleasantness by itself is not a reliable sign."
     },
     {
      "t": "It shows meditative joy has begun, so the pleasure should be cultivated",
      "ok": false,
      "why": "He warns that the pleasure of dullness is easily misread as the first signs of the meditative joy of advanced Stages."
     },
     {
      "t": "It rules it out, since dullness is felt as a heavy and unpleasant fog",
      "ok": false,
      "why": "He says dullness of any kind is always pleasant except when we actively resist it, so a pleasant sit cannot rule it out."
     },
     {
      "t": "It settles nothing alone, since wholesome stable attention is pleasant too",
      "ok": true,
      "why": "He says pleasantness by itself is not a reliable sign, and that you must learn to tell the warm, soft, quiet pleasure of dullness from the bright, alert enjoyment of being in the flow of mindfulness."
     }
    ]
   },
   {
    "q": "A sudden noise makes a Stage Five meditator jerk and feel inwardly startled. What does Culadasa say this suggests, and what does he advise?",
    "options": [
     {
      "t": "Agitation was building, so soften the focus and ease the effort on the breath",
      "ok": false,
      "why": "He ties the startle to dullness and not to agitation, since a really mindful mind would have been harder to startle."
     },
     {
      "t": "Dullness was probably present, so examine the state of mind just before",
      "ok": true,
      "why": "He says the more mindful you are in the moment the harder it is to be startled, and that reflecting on the state just before teaches you the signs of dullness."
     },
     {
      "t": "Concentration was deep, so the shock is a good sign and needs no attention",
      "ok": false,
      "why": "He says the reverse, that the more mindful you are in the moment the harder it is to be startled or surprised."
     },
     {
      "t": "Strong dullness has set in, so rouse the mind with a forceful antidote",
      "ok": false,
      "why": "The startle points to subtle dullness, and his advice is to learn from it by reflection, not to treat it as drowsiness."
     }
    ]
   },
   {
    "q": "Which of these does Culadasa call the real antidote to dullness in meditation, acting on its root cause?",
    "options": [
     {
      "t": "A tighter focus on the breath, so that nothing else can enter the mind",
      "ok": false,
      "why": "Stage Four warns that focusing too intensely for too long shuts out the stimulation that keeps the mind alert, and what he asks for here includes strong peripheral awareness."
     },
     {
      "t": "A forceful breath or tensed muscles, applied as soon as dullness appears",
      "ok": false,
      "why": "Those are the rousing antidotes of Stages Three and Four for drowsiness and strong dullness, whereas for subtle dullness he relies on intention, following and connecting, and a wider scope."
     },
     {
      "t": "A strong intention to perceive, held in every moment of consciousness",
      "ok": true,
      "why": "The Fourth Interlude says so almost word for word, and the chapter adds that vigilant introspective awareness is therefore an antidote as well as a detector, since intention produces more perceiving moments."
     },
     {
      "t": "A relaxed letting go of effort, since striving is what dulls the mind",
      "ok": false,
      "why": "Dropping effort belongs to Stage Seven, and in his model non-perceiving moments are also non-intending ones, so letting intention lapse breeds more dullness."
     }
    ]
   },
   {
    "q": "A Stage Five meditator finds that the scope of attention has widened by itself to take in the chest and abdomen. What does Culadasa advise?",
    "options": [
     {
      "t": "Welcome it, since a wider scope is the antidote and dullness is clearing",
      "ok": false,
      "why": "He lists a deliberate widening as an antidote, but warns that an unprompted widening can disguise an increase in dullness."
     },
     {
      "t": "Narrow it at once, since exclusive attention is the goal of this Stage",
      "ok": false,
      "why": "Exclusive attention is Stage Six's work, and what he asks for here is a look inward for subtle dullness."
     },
     {
      "t": "Treat it as a good balance of attention and awareness, and keep it going",
      "ok": false,
      "why": "He says never to rely on the subjective feeling of alertness and clarity, and to examine the actual quality of both attention and awareness."
     },
     {
      "t": "Be wary and look inward for subtle dullness, which a wide scope can hide",
      "ok": true,
      "why": "He warns that spontaneous expansion can disguise dullness, through fuzzier perception of many objects at once and through mistaking the wider range of objects for extrospective awareness."
     }
    ]
   },
   {
    "q": "Which condition does Culadasa give for using the body scan?",
    "options": [
     {
      "t": "Subtle distractions are not too strong or numerous and perception is fairly clear",
      "ok": true,
      "why": "He says to use it when subtle distractions are not too strong or numerous and when perception of the object and peripheral awareness are both fairly clear."
     },
     {
      "t": "Subtle distractions are strong, so attention needs a larger task to hold it",
      "ok": false,
      "why": "That is closer to Stage Six's reason for taking in the whole body, whereas he says to use this scan when subtle distractions are not too strong or numerous."
     },
     {
      "t": "Subtle dullness has begun to deepen and the mind needs a strong jolt of energy",
      "ok": false,
      "why": "He offers the scan as a way to increase mindfulness when perception is already fairly clear, and the counters to deepening dullness are sharper observation, following and connecting, and a wider scope."
     },
     {
      "t": "The start of the sit, while the mind is freshest and least likely to tire",
      "ok": false,
      "why": "He says that when you are learning it you should not scan right after sitting down, because the mind tires quickly and the rest of the sit becomes a struggle with dullness."
     }
    ]
   },
   {
    "q": "In the Moments of Consciousness model, how can subtle dullness fool a meditator into thinking they have achieved exclusive focus?",
    "options": [
     {
      "t": "Distractions are truly subdued, so more moments of attention go to the breath",
      "ok": false,
      "why": "In dullness the distractions are not subdued but replaced by non-perceiving moments, so the breath gains nothing and the focus only seems exclusive."
     },
     {
      "t": "Moments of peripheral awareness are converted into moments of attention",
      "ok": false,
      "why": "That would be attention growing at the expense of awareness, whereas in dullness the lost moments become non-perceiving and the breath itself grows less vivid."
     },
     {
      "t": "Moments that would have gone to distractions become non-perceiving instead",
      "ok": true,
      "why": "He says true exclusive focus has almost all perceiving moments of attention on the object with no increase in non-perceiving moments, whereas in dullness the distractions' share has simply stopped perceiving."
     },
     {
      "t": "Perceiving moments multiply but all of them are spent on one narrowed scope",
      "ok": false,
      "why": "Dullness adds non-perceiving moments and not perceiving ones, and the pleasantness of those moments is part of the illusion."
     }
    ]
   },
   {
    "q": "Which statement does Culadasa make about what mastering Stage Five involves?",
    "options": [
     {
      "t": "Reaching a fixed high level of mindfulness that then needs no further growth",
      "ok": false,
      "why": "He says mindfulness continues to grow stronger through all the later Stages."
     },
     {
      "t": "Being able to sustain and increase mindfulness in each sit, at no fixed level",
      "ok": true,
      "why": "He says mastery does not involve reaching any particular level of mindfulness, and is the ability to consistently sustain and increase it in each session."
     },
     {
      "t": "No subtle dullness arising at all, so that no correction is ever needed",
      "ok": false,
      "why": "Introspective awareness is meant to detect and automatically correct for any subtle dullness, so correction still happens but has become automatic."
     },
     {
      "t": "Exclusive attention on the breath, with subtle distractions largely subdued",
      "ok": false,
      "why": "Exclusive attention and subdued subtle distractions are the work of Stage Six."
     }
    ]
   }
  ],
  "open": [
   {
    "q": "Explain why Culadasa says Stage Five must not be skipped.\n• Say how deepening subtle dullness comes to be mistaken for the achievements of later Stages, and which ones.\n• Use the Moments of Consciousness model to explain what dullness and true exclusive focus have in common and where they differ.\n• State what he says makes such states a dead end, and say how you would speak to a student who is delighted with them.",
    "model": "Why it is dangerous now. By Stage Five the agitation that used to keep the mind stimulated and awake has subsided, and the new stable attention is exactly what leaves the meditator open to a deeper stable subtle dullness. Stage Four tolerated stable subtle dullness because it kept the mind from agitation; here it is the obstacle. As that dullness deepens, peripheral awareness fades and the subtle distractions fade with it. Two things then look like achievements. The fading of distractions looks like the strong exclusive focus of Stage Six, and the pleasant feeling looks like the first signs of the meditative joy of the advanced Stages. He says that without guidance meditators often take it for a Stage Six or Seven level of practice, and that when the pleasure is strong and peripheral awareness has faded completely it can even seem to fit the description of a jhāna. The reports are familiar: an hour felt like minutes, or 'I was just gone, and felt so peaceful and happy'.\n\nThe model. In the Moments of Consciousness model the vividness of the object depends on the number of perceiving moments whose content is that object, as a photograph's clarity depends on its pixels. In subtle dullness, non-perceiving mind moments replace perceiving ones. They carry less vital energy, so the mind's energy falls, and they carry a gentle pleasure, so the sit feels good. The moments that would have gone to distractions become non-perceiving, which leaves only breath moments and so looks like exclusive focus. True exclusive focus shares the first feature, that distractions take almost no moments, but it differs in the second: almost all the perceiving moments of attention are on the object, with no increase in non-perceiving moments. In dullness the object is less vivid and awareness has shrunk. The Stage Six chapter describes the real thing the other way round: a more energised mind, a vivid object, brighter peripheral awareness, and sounds and sensations still present in it even at mastery.\n\nWhy a dead end. His words are that, relative to the practice goals in this book, such experiences are complete dead ends, and the Overview adds that moving on prematurely gives concentration with dullness, a shallow facsimile of the later Stages. My reading of why is that the book's two objectives are stable attention and powerful mindfulness, and this state delivers neither: the Overview says subtle dullness creates an illusion of stable attention, and the power of consciousness has fallen, not risen. He does not say the experiences are worthless in themselves or in another system.\n\nWith the student. I would honour what got them here first: being free of gross distraction and drowsiness is a real achievement, and it is where this Stage begins. He warns that we quickly get attached to such experiences and prize them as proof of our skill, so I would expect resistance, and I would ask and not tell: how vivid were the fine details of the breath compared with their sharpest sits, were sounds and the body still present, did anything startle them, and how did they feel afterwards, clear or sluggish and spacey? The reframe is that enjoying a sit is not the problem. The task is to learn which pleasure this is, the warm, soft, quiet kind or the bright, alert kind, and not to take the first for the destination.",
    "rubric": [
     "Explains why the vulnerability arises now (the agitation that used to stimulate the mind has subsided; Stage Four tolerated stable subtle dullness for that very reason) and how deepening dullness makes peripheral awareness and subtle distractions fade, so that it can be mistaken for Stage Six exclusive focus, for the meditative joy of advanced Stages, and even for a jhāna.",
     "Uses the Moments of Consciousness model correctly: non-perceiving moments replace perceiving ones, carry less vital energy and a gentle pleasure, and the distractions' share becomes non-perceiving, so only breath moments remain.",
     "States the difference from true exclusive focus: almost all perceiving moments of attention are on the object with no increase in non-perceiving moments, and Stage Six itself is described as more energised, vivid and bright, with sounds and sensations still in peripheral awareness.",
     "Gives his verdict (a dead end relative to this book's goals; concentration with dullness; a shallow facsimile of later Stages) and marks the answerer's own reading of why (the Overview calls the stability an illusion, and conscious power has fallen), noting that he does not call the experiences worthless in themselves.",
     "Describes a respectful response to a delighted student: credit the achievement, expect attachment to the state, ask diagnostic questions about vividness, awareness, startle and after-effects, and reframe as a question of which pleasure this is, not whether pleasure is allowed."
    ]
   },
   {
    "q": "Set out how a Stage Five meditator detects deepening subtle dullness when the faculty needed for detection is itself fading.\n• Give the signs within the sit, including how loss of vividness from dullness differs from loss of vividness from subtle distractions.\n• Give the involuntary signals and the after-sit signs, and say what to do with them.\n• Say how periodic check-ins and a standing intention work together, and what the meditator should be holding in mind.",
    "model": "Signs within the sit. Three occur together, though only one or two may be obvious at a time. Vividness and clarity of the breath decline. Extrospective and introspective peripheral awareness fade: the field of conscious awareness shrinks, sounds and body sensations recede, and thoughts become fewer. And a comfortable, relaxed, pleasant feeling grows. The vividness change has a pattern. When subtle distractions are the cause, vividness rises and falls as they ebb and flow and they increase in number. When dullness is the cause, it declines more gradually, with less fluctuation, and there is no increase in distractions. He suggests watching how the breath looks as distractions come and go, so as to recognise dullness doing the same thing. Pleasantness alone proves nothing, because wholesome stable attention is pleasant too. The pleasure of dullness is warm, soft and quiet, whereas the pleasure of mindfulness is bright and alert. Nor does feeling clear prove anything: he says it may seem that you have a clear mind when you are not very alert.\n\nThe difficulty. These are the things introspective awareness would report, and it fades as dullness deepens. What it reports is comfort and ease in place of dullness. So, as in Stage Three, the meditator also checks in with attention from time to time, comparing the present clarity with their sharpest sits and with earlier in the same sit.\n\nInvoluntary and after-sit signs. A startle at a sudden noise, surprise at finding oneself taking a deep breath, and suddenly correcting a slumping posture all suggest dullness was present: his rule is that the more mindful you are in the moment, the harder it is to be startled or surprised. Once startled into greater awareness, reflect on the quality of the meditation just before, which teaches the signs. Examining the sit after it ends does the same, and so does noticing that you feel sluggish or spacey afterwards and recalling what the sit was like.\n\nStrengthening the detector. The best way, he says, is to make introspective awareness stronger, and the key to that is intention. Hold the intention to remain continuously aware of what is happening in the mind from moment to moment: which subtle distractions are present and how often attention shifts between them and the breath, and both the contents of the mind and its activities. Hold the intention to observe the breath with as much intensity and clarity as possible. Hold the intention to know how well that is being done, and if vividness is falling to know why, whether dullness or agitation. He calls this vigilance, and it is also an antidote, since the intention to perceive creates perceiving moments.\n\nHow they fit together. Check-ins and the retrospective signs cover for introspective awareness while dullness is still dimming it, as attention covered for it at Stage Three. By mastery, he says, that awareness detects and corrects subtle dullness automatically, so I read the check-ins as scaffolding; he does not say so in as many words.",
    "rubric": [
     "Gives the three characteristics (falling vividness and clarity; fading extrospective and introspective awareness with fewer thoughts; pleasant, relaxed feeling) and notes that only one or two may be obvious at a time.",
     "Distinguishes dullness from distraction: dullness lowers vividness gradually with less fluctuation and no increase in distractions, while distractions make it fluctuate; adds that neither pleasantness alone nor the feeling of being clear is a reliable sign.",
     "Explains the central difficulty (introspective awareness fades as dullness deepens, so what is noticed is comfort) and says that periodic check-ins with attention are used, as in Stage Three, by comparison with sharp sits and with earlier in the sit.",
     "Gives the involuntary and after-sit signs (startle, an unexpected deep breath, correcting a slump; feeling sluggish or spacey afterwards) and says to reflect on the state just before.",
     "States the standing intention (continuous moment-by-moment awareness of contents and activities of mind, intensity and clarity of the object, knowing how well that is going and why vividness falls), notes that he calls this the best way, and marks as a reading the view that check-ins are scaffolding until awareness detects and corrects automatically."
    ]
   },
   {
    "q": "Explain how Stage Five counters subtle dullness once it has been detected, and why the detector and the antidote turn out to be the same thing.\n• Explain in Moments of Consciousness terms why intention works as an antidote, and how it becomes automatic.\n• Describe the other counters he gives, including the questions to ask when connecting.\n• Explain the two ways spontaneous widening of the scope can disguise dullness, and say what to do about it. Then say what the chapter leaves unsaid.",
    "model": "Why intention is the antidote. In the model, dullness is the proportion of non-perceiving mind moments, and these are also non-intending moments, so they breed more of the same. Intention works the other way: a strong intention to perceive produces more perceiving moments. So setting the intention to observe the breath clearly and vividly while sustaining introspective awareness acts directly on the root cause. The Fourth Interlude calls a strong intention to perceive the real antidote to dullness in meditation. Two intentions matter. The intention to detect dullness turns potential moments into actual moments of introspective awareness, and the intention to make perception more vivid and intense does the same for attention. Each moment carrying such an intention helps create a later one, until the intentions are self-perpetuating and the mind detects and corrects dullness automatically. That is why the detector and the antidote are one practice.\n\nThe other counters. Sharpen the observation using following and connecting: follow the sensations of the breath while intending to perceive the details as clearly and vividly as possible, and connect changes in the breath with the alertness of the mind. When you are more alert, is the breath deeper or shallower, longer or shorter, and how do the pauses change? Then ask the same of the dull state. He also says to widen the scope of attention to include the body, because a larger area automatically uses more conscious power. After a correction, the meditation object should be vivid and clear again, both kinds of awareness should be back to what they were, and the next task is to raise the energy of the mind further.\n\nThe caution. The scope tends to expand by itself at this Stage, and that can hide dullness in two ways. Without enough conscious power, a wider scope gives only fuzzier perception of many objects at once, so the fuzziness of dullness is easily overlooked, which he calls double fuzziness. And a wider scope includes many objects that can be mistaken for extrospective awareness, so it feels balanced while awareness is in fact fading. When the scope widens on its own, look inward for dullness, and never trust the feeling of alertness and clarity; examine the actual quality of attention and awareness.\n\nWhat the chapter leaves unsaid. Unlike Stages Three and Four, it gives no graded list of antidotes and no test of how long dullness should stay away; it says to apply the appropriate antidote and to expect the object and awareness to be restored. It asks for as much intensity and clarity as possible, and does not repeat Stage Four's warnings that brute force never works for long and that attention made too intense for too long loses mindfulness and can agitate the mind, though its intentions do pair intensity with awareness. I would carry Stage Four's warning over, as my own caution, because a student told to sharpen up is likely to clamp.",
    "rubric": [
     "Explains the mechanism: non-perceiving moments are non-intending and breed more of themselves, a strong intention to perceive yields more perceiving moments, and the two intentions (to detect dullness; to perceive more vividly and intensely) become self-perpetuating until correction is automatic.",
     "Concludes that detector and antidote are one practice, because the same intention that makes introspective awareness vigilant also increases perceiving moments.",
     "Gives the other counters: following with intent to perceive fine detail, connecting breath changes (deeper or shallower, longer or shorter, pauses) with alertness and dullness, and deliberately widening the scope to include the body because it uses more conscious power.",
     "Explains both ways spontaneous widening disguises dullness (double fuzziness; mistaking many objects for extrospective awareness) and the response: look inward, and examine actual quality and not the feeling of alertness.",
     "Marks what the chapter does not give (a graded list of antidotes, a test of success, a restated warning against force and over-intensity) and presents the carried-over Stage Four caution as the answerer's own."
    ]
   },
   {
    "q": "Stage Five's second goal is to increase the power of mindfulness, and the body scan is its strongest tool.\n• Say why Culadasa holds that restoring alertness is not enough, and give the body scan in order, including what is kept in peripheral awareness and when to return to the nose.\n• Explain why the scan increases mindfulness, and when and when not to use it.\n• State how mastery of Stage Five is defined, and say where TMI's account of it is unclear.",
    "model": "Where it fits. Once deepening dullness has been caught and the mind restored to its previous alertness, the Stage's second goal is to raise the power of mindfulness further. Culadasa's reason is that the skills of mindfulness can be developed without increasing the overall power of the mind, which leaves a less effective mindfulness that is easily lost. One method is already in use: the intention to keep peripheral awareness bright while observing the object as vividly as in your best sits. The body scan is the stronger tool.\n\nThe method. Move attention from the nose to the surface of the abdomen and observe the breath there as sensations, not as concepts such as expansion, skin or air, until attention is stable and the changing sensations are clear. Then choose a small area far from the abdomen, for example the front half of one foot, and shift attention there while keeping the breath at the abdomen in peripheral awareness. Examine every sensation and look for any that change with the in- or out-breath; at first you will probably find none. Work through the body in small areas, in any order, and then in larger ones, up to whole regions. Breath-related sensations are readily found in the upper back, chest and abdomen, and eventually, in subtle form, everywhere. Once they are distinct, shift between small and large areas while intending equal vividness. The meditation on the elements is an optional aid. Whenever you realise perception has become much sharper, which may be long before the scan is finished, return to the breath at the nose, notice how vivid it is and how introspectively aware you are, and sustain that as long as you can. When it declines noticeably, return to the scan. Always return to the nose, since the purpose is clear, sustained attention to the usual object.\n\nWhy it works, and when. The intention to perceive extremely subtle sensations in unfamiliar places recruits more moments of consciousness, and a larger scope uses more conscious power. Use it when subtle distractions are not too strong or numerous and perception of the object and peripheral awareness are both fairly clear. It is mental work and tiring at first, so while learning it do not scan right after sitting down, or the mind fatigues and the rest of the sit is a struggle with dullness. Later it can be done at any point.\n\nMastery, and where it is unclear. The conclusion describes intense, clear perception sustained through most or all of the sit, in attention and in introspective awareness: individual breath sensations experienced arising and passing, concepts such as inhale and exhale dropped, extrospective awareness intact, and subtle dullness detected and corrected automatically. It is an ability to sustain and increase mindfulness in each session (the Overview says 'sustain or even increase'), not a level reached. The chapter also calls this having completely overcome stable subtle dullness, and the Overview has dullness completely gone by the end of Stage Six. Yet the Fourth Interlude calls everyday alertness varying degrees of stable subtle dullness and speaks only of less of it at Stage Five, the conclusion has awareness still correcting for it, and Stage Seven warns of slipping into it on cruise control. My reading, an inference, is that 'overcome' means caught and corrected automatically, with the mind brighter than its everyday baseline. The text does not settle it.",
    "rubric": [
     "Places the scan: the Stage's second goal is to increase the power of mindfulness beyond restored alertness, because skills without power give a mindfulness that is easily lost; the intention to keep awareness bright while observing vividly is the method already in use.",
     "Gives the method in order: abdomen first, sensations and not concepts; then a small distant area with the abdominal breath kept in peripheral awareness, searching for sensations that change with the breath (probably none at first); any order; small areas, then larger; return to the nose when perception sharpens, sustain it, and go back to the scan when it declines.",
     "Explains why it works (the intention to perceive very subtle sensations in unfamiliar places and a larger scope recruit more moments of consciousness) and when to use it (subtle distractions not too strong or numerous, perception fairly clear, not right after sitting down while learning, always back to the nose).",
     "Describes mastery from the conclusion (intense, clear perception in attention and introspective awareness through most or all of the sit, sensations experienced arising and passing, concepts dropped, extrospective awareness retained, automatic detection and correction) as an ability to sustain and increase, not a fixed level.",
     "Identifies the unclear point: 'completely overcome stable subtle dullness' and the Overview's 'completely disappeared' after Stage Six, against the Fourth Interlude (everyday alertness is stable subtle dullness; 'less subtle dullness' at Stage Five), the conclusion's continuing automatic correction and Stage Seven's cruise-control warning; offers a reading marked as inference."
    ]
   }
  ],
  "scenario": [
   {
    "q": "A student at Stage Five reports: 'My sits have become incredible. Within a few minutes everything goes quiet. Sounds fade, thoughts stop, my body seems to disappear, and I feel deeply peaceful and happy. An hour can pass like ten minutes. The breath is just a faint, soft presence somewhere. I think this is Stage Six exclusive attention, maybe even a jhāna, and I would like to start the whole-body practice.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst the achievement, because it is real. If, as it sounds, there is no nodding and no getting lost in thought, this is roughly where Stage Four ends and Stage Five begins. This student has done a great deal of work to get here.\n\nSecond, the report matches what Culadasa warns about almost item for item. Sounds fading, thoughts stopping and the body disappearing are the fading of peripheral awareness. The deep peace and happiness are the pleasant feeling. The faint, soft breath is low vividness. An hour passing like ten minutes is close to his own example of how such sits are described.\n\nThird, the difference from Stage Six. The book describes the threshold of Stage Six as the opposite of going quiet: a more energised mind, a vivid breath, brighter peripheral awareness in which sounds and sensations continue, and even the impression of more subtle distractions than before. On the report as given, the breath has dimmed and awareness itself has gone. He grants that such a state can seem to fit the description of a jhāna, and is blunt about why it is not: 'absorption without metacognitive awareness isn't really jhāna, even if it's pleasant'. In the whole-body jhānas that Stage Six opens, bodily sensations dominate peripheral awareness, so a body that disappears is not what he describes.\n\nWhat I don't know. I cannot tell from a report, and I would treat this as a hypothesis to test. I would ask how sharp the fine details of the breath are at the start compared with later; whether sounds and the body are truly absent or just unattended; whether a sudden noise startles them; how they feel afterwards, clear or sluggish and spacey; whether the intensity of their mindfulness rises over the sit, which is his marker of mastery here; and whether there is any nodding, drifting or dream imagery, which would make this strong dullness and Stage Four's work. The Fourth Interlude treats subtle and strong dullness as one continuum, so the line between them here is not sharp, and reading the faint breath as low vividness is my inference.\n\nResponse. I would start with warmth, and say that he calls this a common mistake for an unguided meditator, one that grows out of real stability. He also warns that we quickly get attached to such sits and prize them as proof of our skill, so I would expect resistance, and would work through the test questions with the student and not hand down a verdict. The reframe is that enjoying a sit is not the problem: within this method these sits are a dead end, and what he puts in their place is the bright, alert enjoyment of mindfulness. If the answers fit, the next step is the work of this Stage: hold the intention from the start of the sit to see fine detail vividly, check in at intervals against the sharpest sits, widen the scope deliberately to include the body, connect changes in the breath with alertness, and use the body scan when perception is fairly clear.\n\nOn the whole-body practice I would go by the state and not the Stage number. The Overview allows work on the next Stage's obstacles once the present ones are overcome even temporarily, and the jhāna appendix allows that a Stage Six state can be reached on retreat by someone not yet there in daily practice. So on a day when the breath is vivid and awareness bright, it is fair to try. From the state described here I infer it would only train more dullness, and he warns that dullness trained in jhāna has to be unlearned. That reconciliation is mine.",
    "rubric": [
     "Credits the real achievement (long, steady sits, apparently free of gross distraction and nodding) and normalises the mistake: he says unguided meditators often confuse deeper dullness with Stage Six or Seven, and even with a jhāna.",
     "Maps the report onto the three characteristics (fading sounds, thoughts and body; pleasant feeling; faint breath) and distinguishes it from Stage Six as the book describes it (more energised, vivid, brighter awareness, sounds and sensations still present); notes that absorption without metacognitive awareness is not jhāna in his terms.",
     "Treats the diagnosis as a hypothesis from a report, marks the reading of the faint breath as inference, and asks the test questions (vividness at start versus later, presence of sounds and body, startle, after-effects, whether intensity rises over the sit, and any nodding or dream imagery, which would point to strong dullness and Stage Four's antidotes first).",
     "Responds gently and practically: normalise, expect attachment to the state, reframe enjoyment as not the problem (the bright, alert kind replaces the dull kind), and give the Stage Five practices (intention to perceive vividly, check-ins with comparison, deliberate widening, connecting, body scan when perception is clear).",
     "Weighting: teachers differ on how firmly to name dullness from a report alone, and teachers from absorption-based traditions would value the state in its own right, whereas TMI calls it a dead end relative to its own goals. On Stage Six practice the book pulls two ways: the Overview allows work on the next Stage once obstacles are overcome even temporarily and the jhāna appendix allows a Stage Six state on retreat, yet 'do not skip this Stage' is emphatic; going by the state on the day and not the Stage label is the answerer's reconciliation, and some teachers would simply say wait."
    ]
   },
   {
    "q": "A student at Stage Five reports: 'I do the body scan at the start of every sit because it is so relaxing. By the time I come back to the nose I am warm and heavy, and the rest of the sit is a fog. I also cannot feel anything in my feet that changes with the breath, so I think I am doing it wrong. A friend says body scans are just a relaxation practice anyway.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThe student has taken up a new technique and is doing it every day, which deserves acknowledgment before correction. And the question about doing it wrong is a good one, since the answer is partly yes and partly no.\n\nWhere it goes wrong. Culadasa's body scan is not a relaxation practice. He calls it real mental work that is tiring at first, because you are pushing the mind to detect very subtle sensations in unfamiliar places, and its purpose is to increase the power of mindfulness. The friend may be right about body scans in other settings; I would say so and then say that this one is built for a different job. The timing also goes against his instructions: the scan is for when perception and peripheral awareness are already fairly clear, and while learning it you should not scan right after sitting down, because the mind fatigues and the rest of the sit becomes a struggle with dullness. That is close to what the student reports. 'Warm' is also his word for the pleasure of subtle dullness, which is part of why this has felt like success. And a scan done to relax, without a sharp intention to perceive faint sensations, would feed dullness directly, since in his model a lack of intention breeds non-perceiving moments. Applying that here is my inference, and I would check it by asking what they intend while scanning.\n\nWhat I don't know. 'Heavy' and 'fog' are words he uses for drowsiness, so I would ask about nodding, drifting and dream imagery; if they are there, the rest of the sit is Stage Four's work and the mind has to be roused first. I would also ask about sleep, meals and time of day, and whether the breath at the abdomen stays in awareness during the scan.\n\nWhere it is not wrong. Finding no breath-related sensation in the feet is expected. He says that when you first start you will probably not notice any changes, and that it is the careful scrutiny that sharpens perception. He also says that breath-related sensations are readily found in the upper back, chest and abdomen, and only eventually everywhere else.\n\nResponse. I would thank them for the commitment and say the problem is the order and the intention, and not the effort. First, settle with the breath at the nose until attention is stable and perception is fairly clear and subtle distractions are not many. Then scan, briefly, in small areas, with the abdomen kept in peripheral awareness and a crisp intention to perceive the faintest sensations, as an exercise and not a way of unwinding. As soon as perception sharpens, go back to the nose and notice how much more vivid it is. If the mind turns soft and warm, check in with attention and treat that as information about dullness. Keep looking for breath sensations in the feet, but do not take their absence as a sign of doing it wrong.\n\nWhat the text does not say. It gives no durations, no frequency and no point in the sit at which to begin the scan, only the conditions above. So the specifics I would offer are mine, and I would present them as an experiment.",
    "rubric": [
     "Acknowledges the daily effort, answers the student's question fairly (partly right, partly wrong), and does not treat the friend as simply mistaken.",
     "Identifies the misuse: the scan is mental work to increase the power of mindfulness and not relaxation; it is for when perception is already fairly clear, and scanning right after sitting down tires the mind and leaves the rest of the sit a struggle with dullness; 'warm' is his word for the pleasure of subtle dullness.",
     "Marks as inference that a relaxing, low-intention scan feeds dullness, asks what the student intends while scanning, and states what the report leaves open: nodding or dream imagery (strong dullness, so rouse first), sleep, meals and time of day, and whether the abdomen stays in awareness.",
     "Normalises finding nothing in the feet (he says you will probably notice no changes at first, and the scrutiny itself sharpens perception), and gives the corrected sequence: stable alert breath first, brief scanning with abdomen in periphery, return to the nose when perception sharpens, check in if things go soft.",
     "Weighting: teachers differ on whether this fog is Stage Five's subtle dullness or strong dullness that sends the student back to Stage Four's antidotes for a while, and on whether to withdraw the scan until dullness is in hand or simply move it later in the sit; teachers of relaxation or insight body scans would say the friend is right about their practice; the text gives conditions but no durations, so any specifics are the teacher's own."
    ]
   },
   {
    "q": "A student at Stage Five reports: 'My sits are bright for the first fifteen or twenty minutes. Then things go soft and comfortable and I only realise afterwards that I have been coasting. I cannot catch it while it is happening. Yesterday a car horn made me jump. When I tried to fix it by straining to stay sharp I got tense and a headache, so now I just let it be loose. Should I try harder?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThis student has already done several things well. Bright first twenty minutes means the faculties work. Seeing afterwards that they were coasting is one of the retrospective methods he recommends, and the car horn is a gift: he says a startle suggests dullness was present, and that reflecting on the quality of the meditation just before it teaches you the signs. I would say this first, because the student sounds discouraged.\n\nThe inability to catch it in the moment is the central difficulty of the Stage and not a personal failing. Introspective awareness is precisely what fades as subtle dullness deepens, and what it reports in its place is comfort. So 'soft and comfortable' is how dullness announces itself.\n\nBoth of the student's solutions miss, and both are understandable. Straining is force. Stage Four says that brute force never works for long in meditation, and that attention made too intense for too long loses mindfulness and can over-energise the mind. The Stage Five chapter does not repeat this, so reading the tension and headache that way is my inference. Going loose is not a blunder either: it is Stage Four's own correction for an over-energised mind, to relax the force of attention and let a little subtle dullness in. There it was allowed. Here it is the obstacle, and his later image for settling into it, from Stage Seven, is cruise control. What the chapter asks for is neither forcing nor slackening but intentions, firmly held: to observe the breath vividly in detail, to stay aware of what the mind is doing from moment to moment, and to know how well both are going and, if vividness is falling, why. This is not effortless, since he says vigilance and effort are needed through most of Stage Seven. But the Overview's point stands: all we are really doing in meditation is forming and holding intentions, and trying to force the mind fails and leaves the meditator discouraged.\n\nWhat I don't know. I would ask about sleep, time of day and whether the sits come after meals, since twenty minutes in could be ordinary tiredness as well as meditative dullness, and the two can coexist. The conclusion that it is subtle dullness is the likeliest reading of the report, not a certainty.\n\nResponse. Encourage first. Then answer the question: no, not harder in the sense of straining, and not looser either. Offer an experiment. From the start of the sit, hold the intention to perceive the breath vividly. Check in with attention at intervals, and I would start before the usual twenty-minute mark, comparing the clarity with the first five minutes. Learn your own signature: connect changes in the breath, such as depth, length and pauses, with the dull and bright states. When you notice softening, reach first for the counters that add energy without clamping: widen the scope deliberately to include the body, and use the body scan once perception is fairly clear. Preferring those for a student who strains is my suggestion, not his ranking. After the sit, go back over it and recall what the dullness felt like. And if tension appears, relax the body and the forcing, and keep the intention.",
    "rubric": [
     "Encourages first: bright early sits show the faculties work, noticing afterwards is a recognised retrospective method, and the car horn startle is evidence of dullness and a chance to reflect on the state just before.",
     "Diagnoses subtle dullness deepening, and normalises not catching it in the moment because introspective awareness fades as dullness deepens, so that what is reported is comfort.",
     "Reads both responses fairly: straining is force (Stage Four: brute force never works for long, and over-intense attention loses mindfulness and over-energises; applied here by inference), and going loose is Stage Four's own correction for an over-energised mind, which Stage Five no longer allows as a place to settle; contrasts forcing with firmly held intention, without claiming that no effort is needed.",
     "Gives the Stage Five practices: standing intentions (vivid perception, continuous awareness of mind, knowing how well and why), check-ins with comparison, connecting breath changes with alertness, deliberate widening, after-sit review, and the body scan when perception is clear; marks the preference for low-force energisers as the teacher's own.",
     "Weighting: teachers differ on whether the first job is to take the straining out or to supply energising methods that need no force; some would treat the swing between wired and loose as unfinished Stage Four balance work and go back to it; teachers from open-awareness or 'do nothing' approaches would endorse the looseness that TMI treats as settling into dullness; and sleep, meals and time of day may explain more than method does, which a report cannot settle."
    ]
   }
  ]
 },
 {
  "n": 6,
  "grill": [
   {
    "q": "At the start of Stage Six it may seem that there are more subtle distractions than before. What does Culadasa say has happened?",
    "options": [
     {
      "t": "Overcoming subtle dullness has released energy that feeds new thoughts",
      "ok": false,
      "why": "The mind is more energised, but he says the distractions are not new and have only become visible."
     },
     {
      "t": "Heightened conscious power has revealed ones that were already there",
      "ok": true,
      "why": "He says you have just become more aware of distractions that were already present and scattering your attention, as turning up the light shows objects in the shadows."
     },
     {
      "t": "The effort of the body scan has stirred the thinking mind up again",
      "ok": false,
      "why": "He attributes the impression to brighter awareness and not to any disturbance caused by the scan."
     },
     {
      "t": "Practice has slipped back to Stage Four, where distractions are stronger",
      "ok": false,
      "why": "Stage Four's obstacle is gross distraction, whereas these are subtle distractions seen more clearly by a more powerful mind."
     }
    ]
   },
   {
    "q": "What is exclusive attention for, in Stage Six?",
    "options": [
     {
      "t": "It is a way of shutting out peripheral awareness so the mind can settle",
      "ok": false,
      "why": "He says to exclude nothing from peripheral awareness, which works together with attention throughout."
     },
     {
      "t": "It is the Stage's final goal, after which distractions need no more work",
      "ok": false,
      "why": "Achieving it is only the first step, and the distractions it subdues return if the effort to ignore them stops."
     },
     {
      "t": "It is the gateway to jhāna, which is what this Stage is meant to reach",
      "ok": false,
      "why": "Meditative absorption is offered as a method for speeding progress, not as the goal of the Stage."
     },
     {
      "t": "It is a means of subduing subtle distractions, and not an end in itself",
      "ok": true,
      "why": "He says it is a valuable skill but only a means to subduing subtle distractions, which requires sustaining it until mental objects start to fade from awareness."
     }
    ]
   },
   {
    "q": "While developing exclusive attention, what is the meditator told to do about peripheral awareness?",
    "options": [
     {
      "t": "Let it lapse for now, since it returns unprompted once attention is stable",
      "ok": false,
      "why": "Losing awareness is what earlier Stages warned would leave you open to distraction and dullness, and here awareness is refined into metacognitive awareness."
     },
     {
      "t": "Narrow it down by degrees until only the meditation object is left in it",
      "ok": false,
      "why": "It is the scope of attention that is defined and stabilised, and peripheral awareness is left open."
     },
     {
      "t": "Exclude nothing from it, and let it keep watch for potential distractions",
      "ok": true,
      "why": "He says to exclude nothing from peripheral awareness, which keeps a lookout while attention tightens up, and at mastery sensations and sounds still continue there."
     },
     {
      "t": "Turn it inward only, since sounds and sensations have become distractions",
      "ok": false,
      "why": "Non-breath sensations are excluded from attention but remain in peripheral awareness, and withdrawal from the senses belongs to Stage Eight."
     }
    ]
   },
   {
    "q": "After long periods of exclusive attention, subtle distractions have faded. What does Culadasa say about their status?",
    "options": [
     {
      "t": "They are only subdued, and return if the effort to ignore them stops",
      "ok": true,
      "why": "He says they are only temporarily subdued, since thought goes on unconsciously, and that they are not completely overcome until Stage Seven."
     },
     {
      "t": "They are overcome for good, since the thinking mind has gone dormant",
      "ok": false,
      "why": "He says the thinking/emotional sub-minds stay continuously active at an unconscious level, so constant vigilance and effort are needed."
     },
     {
      "t": "They are suppressed by force, which is why they come back stronger",
      "ok": false,
      "why": "The method is to withhold the energy of attention until they tire, like children who are consistently ignored, and not to suppress them."
     },
     {
      "t": "They are still present, but dullness now keeps them out of awareness",
      "ok": false,
      "why": "That describes the false exclusive focus of Stage Five, whereas here they fade because they consistently fail to become objects of attention."
     }
    ]
   },
   {
    "q": "How does experiencing the whole body with the breath produce exclusive attention?",
    "options": [
     {
      "t": "By shrinking attention to a point too small for distractions to enter",
      "ok": false,
      "why": "He rejects this picture in so many words, and Stage Seven is where the scope is narrowed right down."
     },
     {
      "t": "By expanding attention until no room is left for distracting thoughts",
      "ok": true,
      "why": "He says exclusive attention is created not by shrinking attention to a small point but by expanding it so that there is no room for thoughts and other mental objects."
     },
     {
      "t": "By moving attention so quickly that no distraction can keep up with it",
      "ok": false,
      "why": "The scope is defined and stabilised, and the aim is to hold all the breath sensations in the body at once."
     },
     {
      "t": "By relaxing the body so deeply that thoughts stop arising by themselves",
      "ok": false,
      "why": "It works by filling attention with a huge amount of somatosensory information, and thoughts go on being generated unconsciously."
     }
    ]
   },
   {
    "q": "What distinguishes experiencing the whole body with the breath from Stage Five's body scan?",
    "options": [
     {
      "t": "All sensations in each area are examined, and subtle distractions tolerated",
      "ok": false,
      "why": "That describes the Stage Five scan, and he says that tolerating subtle distractions is exactly what now changes."
     },
     {
      "t": "The breath at the abdomen is dropped and the body alone becomes the object",
      "ok": false,
      "why": "As in the body scan, you start at the abdomen and keep peripheral awareness of the breath there from fading."
     },
     {
      "t": "The whole body stays as the object, with no return to the breath at the nose",
      "ok": false,
      "why": "That is the variation used when trying for jhāna, whereas the practice itself ends by returning to the nose for a period of exclusive attention."
     },
     {
      "t": "The scope is defined precisely and only breath sensations are attended to",
      "ok": true,
      "why": "He calls the differences small but crucial: a much more precisely defined scope, exclusive focus on breath-related sensations, and expansion until the scope is the entire body."
     }
    ]
   },
   {
    "q": "Bodily sensations and thoughts are the two main sources of subtle distraction in a quiet sit. Which does the whole-body practice deal with first, and how?",
    "options": [
     {
      "t": "Mental objects, by filling attention with bodily sensations instead",
      "ok": true,
      "why": "He says mental objects are the more intrusive, so they are dealt with first by emphasising bodily sensations, which compete with them for attention."
     },
     {
      "t": "Bodily sensations, by withdrawing the mind from the senses altogether",
      "ok": false,
      "why": "Pacifying the senses is the work of Stage Eight, and here non-breath sensations simply remain in peripheral awareness."
     },
     {
      "t": "Mental objects, by labeling each thought until it stops coming back",
      "ok": false,
      "why": "Labeling belongs to Stages Three and Four, and any attention given to a thought now gives it energy to continue."
     },
     {
      "t": "Bodily sensations, by sitting perfectly still until they fade away",
      "ok": false,
      "why": "Bodily sensations are used and not removed, and it is the thoughts that are crowded out."
     }
    ]
   },
   {
    "q": "A memory of a compliment appears in peripheral awareness. What does metacognitive introspective awareness know about it?",
    "options": [
     {
      "t": "Who is doing the remembering, as the witness behind the experience",
      "ok": false,
      "why": "The sense of a witness arises when such information is taken as an object of attention, whereas in awareness it is just information and no Self is inferred."
     },
     {
      "t": "What the memory is about, in enough detail to judge its importance",
      "ok": false,
      "why": "That is ordinary introspective awareness of mental objects as content, which he distinguishes from awareness of the mind's activities and state."
     },
     {
      "t": "That a memory has arisen and is making the state of mind pleasant",
      "ok": true,
      "why": "He says it knows that the activity is occurring and its effect on the state of mind, without being particularly concerned with what the memory is about."
     },
     {
      "t": "Nothing, since exclusive attention keeps such objects out of awareness",
      "ok": false,
      "why": "Exclusive attention excludes them from attention only, and early in the Stage thoughts are still plentiful in peripheral awareness."
     }
    ]
   },
   {
    "q": "What does Culadasa mean by the 'acquired appearance' of the meditation object?",
    "options": [
     {
      "t": "The breath experienced as sensations, relatively free of concepts",
      "ok": true,
      "why": "He says that as the mind is pacified the breath is experienced purely as a sensory phenomenon, a repeating series of sensations arising and passing away."
     },
     {
      "t": "An inner light that replaces the breath as attention grows unified",
      "ok": false,
      "why": "The internally generated light is the object of the luminous jhānas, which are entered from Stage Eight and beyond."
     },
     {
      "t": "The breath known as 'inhaling' and 'exhaling', made vivid by following",
      "ok": false,
      "why": "That mostly conceptual experience is what he calls the initial appearance, which is only slightly more refined than a non-meditator's."
     },
     {
      "t": "A mental image of the breath, held steady in place of the sensation",
      "ok": false,
      "why": "It is the reverse, since the concepts fall away and the actual sensations become the object for the first time."
     }
    ]
   },
   {
    "q": "In a whole-body jhāna, the focus of attention shifts from the breath sensations to the feelings of pleasure. What is the instruction at this Stage?",
    "options": [
     {
      "t": "Let the pleasure grow, since joy is what unifies the mind at this Stage",
      "ok": false,
      "why": "Joy is cultivated in awareness beforehand, but a mind trained to become dull in jhāna has to unlearn it."
     },
     {
      "t": "Follow the pleasure, since it leads on into a deeper kind of jhāna",
      "ok": false,
      "why": "Entering jhāna by focusing on joy and pleasure is taught in Stage Seven, and he says this is not the time."
     },
     {
      "t": "Stay in the jhāna, and widen attention to hold breath and pleasure",
      "ok": false,
      "why": "Pleasure belongs in metacognitive awareness while attention stays on the breath sensations, and once attention has moved to it he says to leave."
     },
     {
      "t": "Abandon the jhāna and come back at once to a state of full alertness",
      "ok": true,
      "why": "He says this shift usually means awareness has faded and dullness is possible, and that absorption without metacognitive awareness is not really jhāna."
     }
    ]
   }
  ],
  "open": [
   {
    "q": "Explain exclusive attention as Stage Six teaches it.\n• Say what it is, what it excludes and from where, and why Culadasa calls it a means and not an end.\n• Explain the part played by conscious intention, by the scope of attention and by peripheral awareness.\n• Describe 'pacifying the mind', and say why the result is called subdued and not overcome.",
    "model": "What it is. Exclusive attention, also called single-pointed attention, is attention that no longer alternates to subtle distractions: you can focus on the meditation object despite competing stimuli. What is excluded is excluded from attention only. He says to exclude nothing from peripheral awareness, and thoughts and non-breath sensations are meant to remain there. It is a means because the goal of the Stage is to subdue subtle distractions. Achieving exclusive attention is the first step; the second is sustaining it long enough that mental objects start to fade from awareness. He says plainly that it is a valuable skill but not an end in itself.\n\nIntention. He calls conscious intention the key, and the instruction is short: hold the intention to observe all the fine details of the meditation object, and hold the intention to ignore everything else. His account of why this works is that attention moves spontaneously because unconscious sub-minds project objects into consciousness, each arriving with an intention to become the object of attention. Those intentions conflict with the intention to follow the breath, and whichever gets more support from the mind-system gets more attention. A conscious intention is an agreement among several sub-minds, so it is stronger, and each time you choose the breath and ignore the distraction, the distraction and the intention behind it fade. Any attention given to a thought, even subtly, gives it energy to continue. His image is children trying to get the attention of a busy parent: ignored consistently, they tire of trying, and if you stop ignoring them they are back.\n\nScope and awareness. The quality of exclusive focus depends as much on stabilising the scope of attention as on fixating on an object, because otherwise the scope expands on its own to take in other things, especially thoughts. So you first define and stabilise the scope and then completely ignore everything outside it. Peripheral awareness is a working partner in this: it keeps a lookout for potential distractions, and attention responds by tightening the focus.\n\nPacifying the mind. Two linked processes. Intentionally ignoring mental objects trains the mind-system as a whole to ignore them automatically. And when they have been ignored consistently for long enough, the thinking/emotional mind stops projecting its content into consciousness, so that thoughts rarely appear even in peripheral awareness. This begins here and is completed in Stage Seven.\n\nSubdued, not overcome. Thought processes continue at an unconscious level, even in deep sleep, so the quiet is held in place only by vigilance and effort. As soon as the intention to focus exclusively weakens, the distractions return. A teacher should therefore expect the result to come and go from sit to sit, and should not let a student read a quiet sit as a permanent gain; that last point is my application, not his wording.",
    "rubric": [
     "Defines exclusive (single-pointed) attention as attention that no longer alternates to subtle distractions, with objects excluded from attention but nothing excluded from peripheral awareness.",
     "Explains why it is a means: the goal is subduing subtle distractions, which takes achieving exclusive attention and then sustaining it until mental objects fade.",
     "Gives the role of conscious intention (to observe fine detail; to ignore everything else) and his account of it: sub-minds project objects with competing intentions, a conscious intention is a stronger consensus, and attention gives a thought energy.",
     "Gives the role of scope (define and stabilise it, then ignore everything outside it) and of peripheral awareness (keeps a lookout while attention tightens).",
     "Describes pacifying the mind (automatic ignoring; the thinking/emotional mind stops projecting) and why it is only subdued: thought continues unconsciously, vigilance and effort are needed, and completion comes in Stage Seven."
    ]
   },
   {
    "q": "Teach 'experiencing the whole body with the breath'.\n• Give the method in order, including how it ends.\n• State the differences from the Stage Five body scan that Culadasa calls small but crucial.\n• Explain why the practice works, and why it deals with thoughts before sensations.",
    "model": "Why use it. He says exclusive attention can be reached by focusing over and over on the breath at the nose and ignoring subtle distractions until they fade, but that this can take a very long time. The whole-body practice is offered as faster and more enjoyable.\n\nThe method. It builds on the body scan. Direct attention to the breath at the abdomen. Then, making sure peripheral awareness of the breath at the abdomen does not fade, shift attention to one body part, such as a hand. Define the scope of attention to include that area only, then refine it to only the breath sensations in that area. Ignore all other sensations by excluding them from attention, while letting them remain in peripheral awareness. Move to another part, perhaps the forearm, and do the same. Each moment of attention should carry a strong intention to perceive breath-related sensations clearly and to exclude everything else. As skill grows, enlarge the scope to bigger and bigger areas, and keep shifting between large and small, for example one finger and the whole arm, intending the same clarity in both. He says success at this is unimportant at first; what matters is that the intention brings your full conscious capacity to bear. Keep expanding until the scope is the whole body at once. After a while, shift back to the breath at the nose, by way of the abdomen if that is easier. A period of exclusive attention to that much smaller object follows, with very few mental objects even in peripheral awareness. When it fades, repeat. Once breath sensations can be recognised everywhere, there is no need to go part by part each time.\n\nThe differences. Three. The scope of attention is defined much more precisely. Attention is on breath-related sensations exclusively, where until now subtle distractions were tolerated and the meditator was even warned not to try to stop attention alternating with them; now it is the opposite. And the scope is expanded until it includes the entire body.\n\nWhy it works. In a quiet sit with eyes closed, the two kinds of object that dominate peripheral awareness are bodily sensations and thoughts, and they compete with the breath and with each other for attention. Mental objects are the more intrusive, so they are dealt with first, and the way to do it is to emphasise bodily sensations. Taking in the whole body is a huge amount of somatosensory information, and with consciousness filled in that way there is no attention left over for thoughts. His summary is that exclusive attention is created not by shrinking attention to a small point but by expanding it. Confining attention to breath-related sensations then keeps other bodily sensations from becoming subtle distractions as well, and the mind grows used to holding an exclusive focus. He adds that the discriminating sub-minds go on generating thoughts unconsciously, which is why vigilance is still needed.",
    "rubric": [
     "Gives the method in order: abdomen first; one body part with the abdominal breath kept in peripheral awareness; scope defined to that area and refined to its breath sensations only; other sensations left in awareness; larger areas, alternating large and small with equal clarity intended; the whole body at once.",
     "Gives the ending and repetition: return to the nose (via the abdomen if helpful), a period of exclusive attention follows, repeat when it fades, and go straight to the whole body once breath sensations are familiar everywhere.",
     "States the three differences from the body scan: a much more precisely defined scope; exclusive focus on breath-related sensations where subtle distractions used to be tolerated; expansion to the entire body.",
     "Explains why it works: bodily sensations and thoughts compete for attention, thoughts are the more intrusive and are dealt with first by emphasising the body, and exclusive attention comes from expanding attention, not shrinking it.",
     "Notes the limits he states: success with equal clarity is not the point at first, the intention is; thoughts continue to be generated unconsciously, so vigilance is still needed."
    ]
   },
   {
    "q": "Explain metacognitive introspective awareness as the second goal of Stage Six.\n• Distinguish it from ordinary introspective awareness, using an example.\n• Set out what it is aware of: the two kinds of activity, and the state of the mind.\n• Say how it is cultivated, how the Mind-System model accounts for it, and what changes when its content is taken up by attention.",
    "model": "The distinction. Ordinary introspective awareness knows mental objects as content: a thought about changing the water filter, a memory of a compliment. Those are simply let be and let go in peripheral awareness. Metacognitive introspective awareness has the mind itself as its object. It knows that thinking is occurring, that a thought or memory has arisen, and what effect that has on the state of mind, for example that a memory is producing a pleasant state, without being particularly concerned with what the memory is about, though it could find out. He calls it 'meta' because it is a broader view from a higher perspective, like a panorama from a hilltop.\n\nWhat it is aware of. Activities, of two kinds. The first is what attention is doing: where it is directed, the sensory category of its object, how it is moving, and its vividness and clarity. You know you are attending to the breath at the nose, and if there is a subtle distraction you know that attention is alternating. The second is moment-by-moment change in the objects of peripheral awareness, such as sounds moving in and out. His whole-body example covers both: noticing that sensations in the lower half of the body are less clear than in the upper half, and then becoming clearer, is the first kind; noticing a thought about that process emerging in the periphery is the second. Then state: the mind's clarity and alertness, the predominant emotion, hedonic feeling, and the intentions driving activity. In everyday terms, patient or annoyed, alert or dull, focused or distracted, obsessively focused or mindfully aware, equanimous or grasping. It has a job to do: stay aware of perceptual clarity and alertness and correct for dullness, and stay aware of how strong the intention to feel the breath is, and strengthen it when it weakens.\n\nHow it is cultivated. By intention, as always: intend to observe objectively the activities and state of the mind, to know from moment to moment the movements of attention, the quality of perception, and whether the scope is stable or expanding to include distractions. It is cultivated together with exclusive attention, not after it. Early in the Stage the variety of states and activities gives plenty of material.\n\nThe model. In the Mind-System model, metacognitive awareness is the work of the narrating mind, which integrates what other sub-minds project into consciousness and projects it back as binding moments, each a brief summary of the mind's state and activity. Cultivating it means increasing the proportion of such moments. A strong intention to be an objective observer increases that binding activity, and consistently ignoring thoughts and irrelevant sensations frees more moments for it.\n\nWhen attention takes it up. In awareness, he says, this content is just information and no separate Self is inferred. Taken as an object of attention, it passes through the discriminating mind, which imputes an 'I' in charge, so it feels as though there is a witness to what is happening in the mind. This has a practical bearing as I read it: the Stage asks for the mind to be known in awareness while attention stays on the breath, so repeatedly turning attention onto the mind is a different activity from the one being trained. He describes the difference and does not put it as a warning.",
    "rubric": [
     "Distinguishes ordinary introspective awareness (mental objects as content) from metacognitive introspective awareness (the mind itself: that an activity is occurring and its effect on the state of mind), with an example such as the memory of a compliment.",
     "Gives the two kinds of activity: what attention is doing (direction, sensory category, movement, vividness and clarity, alternation) and moment-by-moment change in the objects of peripheral awareness.",
     "Gives the state of mind (clarity and alertness, predominant emotion, hedonic feeling, intentions) and its practical use: correcting for dullness and renewing the intention to perceive the breath.",
     "Says how it is cultivated (by intending to observe the activities and state of the mind objectively, while sustaining exclusive attention) and gives the Mind-System account: binding moments from the narrating mind, increased in proportion.",
     "Explains metacognitive attention: in awareness the content is just information with no Self inferred, whereas attention involves the discriminating mind and a sense of a witness arises; marks any practical conclusion drawn from this as the answerer's reading."
    ]
   },
   {
    "q": "A student says: 'My mind has gone quiet. I hardly have any thoughts in my sits now, so I've mastered Stage Six.'\n• State what mastery of Stage Six and the second Milestone consist of, noting where Culadasa's wording varies.\n• Explain why 'hardly any thoughts' cannot settle the question, and what would distinguish the real thing.\n• List what you would ask before agreeing, including about how the breath is now perceived.",
    "model": "What mastery is. The chapter's goals put it this way: attention rarely alternates with bodily sensations and ambient sounds, thoughts are at most infrequent and fleeting, and metacognitive awareness is continuous. The conclusion adds detail. Mindfulness is strong and the object is perceived clearly and vividly. There is complete control over the scope of attention. It takes a little while for attention to stabilise in each sit, after which subtle distractions are more or less completely absent. Thoughts may intrude now and then but are often absent even from peripheral awareness. Sensations and sounds continue in peripheral awareness but only rarely become subtle distractions, and are then corrected automatically. Being able to sustain exclusive attention together with powerful mindfulness for long periods is the second Milestone, and the meditator is then called skilled. The wording varies. The Overview says subtle distractions have 'almost entirely disappeared' and speaks of 'unwavering' exclusive attention, where the chapter says 'rarely' and 'more or less'. The Overview also says that with Stages Four to Six mastered dullness has completely disappeared, while Stage Seven says distraction and dullness remain a threat needing vigilance and effort. I read mastery as a reliable capacity that is still maintained by effort, not a permanent state; that is my reading.\n\nWhy quiet does not settle it. Fewer thoughts is what Stage Six produces, and it is also what Stage Five's deepening subtle dullness produces, where thoughts fade because awareness is fading. The difference lies in everything else. In the real thing the object is vivid, sounds and sensations are still present in peripheral awareness, and the meditator knows the state and activity of the mind from moment to moment. Mastery here is defined by three things together, and the student has reported one. There is also a second gap: the quiet is only subdued. It lasts while the intention to ignore distractions is held, so a quiet sit says nothing yet about consistency.\n\nWhat I would ask. How clear and detailed is the breath? Are sounds and the body still there in the background? During the sit, do you know what attention is doing and how alert you are, continuously or only when you check? How long does it take to settle, and how long does the quiet last? Does it happen in most sits? What happens if you ease off the effort? Can you widen and narrow the scope at will? And how does the breath appear now? He describes an acquired appearance, the breath experienced as sensations arising and passing, relatively free of concepts, and gives two signs of concepts dropping away: suddenly not knowing whether the sensations belong to the in-breath or the out-breath, and the breath seeming to be somewhere other than where the nose is. He says such experiences depend on having completely overcome subtle dullness, so if the student reports them I would take it as encouraging evidence. I would not treat their absence as disproof, since he does not make them a criterion of mastery.\n\nIf the answers are good I would say so plainly. If they are not, the quiet is still worth crediting, and the next step is the same either way: keep the intention, and watch the mind as well as the breath.",
    "rubric": [
     "States mastery from the chapter: attention rarely alternates with sensations and sounds; thoughts at most infrequent and fleeting, often absent even from peripheral awareness; continuous metacognitive awareness; vivid perception; control of scope; sounds and sensations continuing in peripheral awareness; and the second Milestone (skilled meditator).",
     "Notes the variation in wording ('rarely' and 'more or less' in the chapter; 'almost entirely disappeared' and 'unwavering' in the Overview; dullness 'completely disappeared' against Stage Seven's continuing threat) and marks any reconciliation as a reading.",
     "Explains why few thoughts cannot settle it: Stage Five's subtle dullness also thins thoughts; the real thing has a vivid object, intact extrospective awareness and continuous metacognitive awareness; and the result is only subdued, so consistency matters.",
     "Asks the questions that test the claim: vividness, presence of sounds and body, continuous knowledge of the mind's activity and state, time to settle and duration, consistency across sits, what happens when effort eases, control of scope.",
     "Uses the acquired appearance correctly: sensations relatively free of concepts, with not knowing in-breath from out-breath and the displaced breath as signs; treats them as supporting evidence that depends on dullness being overcome, not as a criterion of mastery."
    ]
   }
  ],
  "scenario": [
   {
    "q": "A student at Stage Six reports: 'Since my mind got brighter I seem to have more thoughts than ever, little ones, constantly. I've been trying to block them. I squeeze my attention down to a pinpoint at the nostrils and push everything else out, sounds included. I get a few clean seconds, then they flood back and I end up tense and annoyed with myself. Am I going backwards?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, this is not going backwards, and the reason is to the student's credit. Culadasa describes exactly this at the start of Stage Six: the mind is more energised, attention and awareness are brighter, and thoughts and sensations that were too subtle to detect now show up. He says it may even seem that there are more subtle distractions than before, when you have only become more aware of ones already present. The student is seeing the obstacle of this Stage clearly, which is the precondition for working on it.\n\nSecond, the aim is right and the method is not. The Stage does ask for subtle distractions to be subdued. But the instruction is to ignore them, not to block them. His account is that any attention given to a thought, even subtly, gives it energy to continue, and that distractions fade when they consistently fail to get attention, like children who give up when a busy parent keeps ignoring them. Blocking is a way of attending to them. Stage Four already said that brute force never works for long.\n\nThird, two specific errors. Squeezing attention to a pinpoint is the picture he explicitly rejects: exclusive attention is created not by shrinking attention to a small point but by expanding it so that there is no room for thoughts. And pushing out sounds confuses attention with awareness. He says to exclude nothing from peripheral awareness, which is needed as the lookout, and at mastery sounds and sensations are still there.\n\nFourth, the annoyance. The return of thoughts after a few seconds is what the book predicts, since they are only ever subdued and come back the moment the intention weakens. Reading that as failure adds a second distraction. That the tension comes from the squeezing is my inference from the report.\n\nWhat I don't know. Whether sounds and the body really disappear when the student squeezes, or are just resented. How the sits go before the squeezing starts. Whether Stage Five is secure: on days when the breath is not vivid, this is not yet the work.\n\nResponse. Start with the good news, plainly: brighter awareness is why the thoughts are visible. Then change the verb from block to ignore, and give the two intentions: to observe the fine detail of the breath, and to let everything else go unattended. Let sounds and background thoughts stay in awareness. Then teach the whole body with the breath as the main tool, because it does what the student is trying to do by other means: define the scope precisely, attend only to breath sensations within it, widen it until it is the whole body, and then come back to the nose, where a period of exclusive attention follows. Tell them to expect the quiet to be brief at first and to come and go. And ask them to watch one thing for themselves, as he suggests: what happens to a thought when it gets no attention at all.",
    "rubric": [
     "Reassures with his account: a more energised mind reveals subtle distractions that were already present, so the impression of more thoughts is a sign of progress and the proper starting point of the Stage.",
     "Separates aim from method: subduing is done by ignoring, since attention gives a thought energy and distractions fade when consistently unattended; blocking is force, and brute force never works for long.",
     "Identifies the two errors: shrinking attention to a pinpoint (he says exclusive attention comes from expanding, not shrinking) and pushing sounds out (nothing is to be excluded from peripheral awareness).",
     "Normalises the thoughts returning (only subdued; they come back when the intention weakens), marks the link between squeezing and tension as inference, and asks what is not known, including whether Stage Five is secure.",
     "Prescribes the two intentions and the whole-body practice ending at the nose, and notes the weighting: teachers differ on whether to go straight to the whole-body method or first to have the student practise simple ignoring at the nose, and on how much the tension needs addressing before any technique."
    ]
   },
   {
    "q": "A student at Stage Six reports: 'The whole-body practice has started to click. A few times my mind slipped into a kind of groove, smooth and very pleasant, for a minute or two. Lately the pleasure is stronger, and I find I'm resting in it. The breath sensations go a bit vague, as if they've come loose from my body, and I come out feeling hazy. It feels wonderful and I'd like to go deeper into the bliss. Is that the next step?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the early experiences sound like the real thing, and I would say so. Culadasa's description of entering the first whole-body jhāna is that when everything is just right the mind seems to slip into a groove and begins to flow for a little while, and that the shift is noticeable. The student has used his own word. Getting there means there were periods of stable, exclusive attention with the breath sensations in the whole body very clear, together with awareness of pleasure. That is an achievement of this Stage.\n\nSecond, what has been happening lately is something he warns about specifically. He says there is still a possibility of dullness in jhāna if awareness fades: you go on experiencing breath-related sensations, but they seem a little vague, as if disconnected from your overall awareness of the body, and the focus of attention usually shifts from the breath sensations to the feelings of pleasure and happiness. The student's report matches this point for point. The haziness afterwards fits what Stage Five gives as a sign of having sat in dullness. That last link is mine; he does not repeat it here.\n\nThird, his instruction is unambiguous. If you ever find the focus of your attention shifting to pleasure, abandon the jhāna and bring yourself to full alertness immediately. He says absorption without metacognitive awareness isn't really jhāna, even if it's pleasant, and that a mind accidentally trained to become dull in jhāna has to unlearn that before jhāna can help.\n\nFourth, the student's wish is not wrong, only early. He says that in Stage Seven you learn to enter a deeper kind of jhāna by focusing on joy and pleasure, but that this is not the time. So the honest answer to 'is that the next step?' is: yes, later, and not from here.\n\nWhat I don't know. Whether metacognitive awareness is present in the good episodes: does the student know, while in the groove, what attention is doing and how alert the mind is? How long the vague phase lasts. Whether sits outside jhāna are bright.\n\nResponse. Celebrate the groove first. Then draw the line where he draws it. Pleasure belongs in awareness, and he asks for it to be noticed and held there in every sit. Attention stays on the breath sensations in the whole body. The moment the breath goes vague or attention settles on the pleasure, come out, rouse the mind fully, and re-enter from clear whole-body breath sensations. Shorter, clean absorptions are worth more than long hazy ones. I would also remind them what the practice is for: he says jhāna should be guided by a purpose, such as speeding progress through the Stages, and not pursued for its own sake. And I would be straightforward that being asked to leave the nicest part of the sit is hard, and that the deeper pleasure they want is on the far side of this discipline.",
    "rubric": [
     "Credits the early experiences as matching his description of the first whole-body jhāna (the mind slipping into a groove and flowing; a noticeable shift), which presupposes periods of exclusive attention with clear whole-body breath sensations and awareness of pleasure.",
     "Identifies the recent change as the dullness he warns of in jhāna: awareness fading, breath sensations vague and seemingly disconnected from the body, attention shifting to pleasure; marks the reading of the after-sit haze as the answerer's link to Stage Five.",
     "States his instruction: abandon the jhāna and return to full alertness at once; absorption without metacognitive awareness is not really jhāna; dullness trained in jhāna has to be unlearned.",
     "Places the student's wish correctly: jhāna entered by focusing on joy and pleasure is taught in Stage Seven; here pleasure is held in awareness while attention stays on the breath sensations; jhāna is practised for a purpose and not for its own sake.",
     "Asks what is not known (metacognitive awareness during the good episodes, duration, brightness of ordinary sits) and notes the weighting: teachers differ on whether to pause jhāna practice altogether until awareness is stronger or to keep it with a strict exit rule, and teachers from pleasure-based jhāna traditions would let the student follow the bliss."
    ]
   },
   {
    "q": "A student who has been at Stage Six for some months reports: 'Last week my mind was silent for whole sits. I felt like a pure witness, just watching the mind from behind, and I wondered if this was awakening. This week it's gone. The thoughts are back, I can't find the witness, and when I try to watch my mind I lose the breath. Did I break something, and how do I get the witness back?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the silent sits were real progress. Sustained exclusive attention leads the thinking/emotional mind to stop projecting its content into consciousness, and whole sits of that is what pacifying the mind looks like. I would say so before anything else, because the student thinks they have lost something.\n\nSecond, nothing is broken. He says subtle distractions are only temporarily subdued, that the sub-minds producing thought stay active at an unconscious level, and that distractions return as soon as the intention to focus exclusively weakens. Pacification is not completed until Stage Seven, and even there he says there will be days when you can't quite get there. A silent week followed by a noisy one is the expected shape of this Stage.\n\nThird, the witness. He explains this experience directly. Information about the mind's state and activity, produced by the narrating mind, can appear in awareness, where it is just information and no Self is inferred. Or it can be taken as an object of attention. Attention always involves the discriminating mind, which imputes an 'I' in charge, and then it feels as though someone or something is the witness to what is happening in the mind. So in TMI terms the witness is a construct that arises with metacognitive attention. He does not present it as awakening, and by his account it is the sense of Self appearing in a subtler form. I would not tell the student what their experience ultimately was; I can only say how this book accounts for it.\n\nFourth, why the breath is lost. Trying to find the witness means turning attention onto the mind, so attention leaves the breath. What the Stage asks for is the other arrangement: attention stays on the breath, and the mind is known in awareness. This reading of the student's difficulty is my inference from his distinction.\n\nFifth, the trying itself. Chasing last week's state replaces the intention the practice runs on with a different one. I infer that this is part of why it has not come back.\n\nWhat I don't know. Whether last week's silence was bright: was the breath vivid, were sounds still present? If not, some of it may have been dullness. Whether anything changed in sleep, health or circumstances this week.\n\nResponse. Normalise first: this comes and goes, by the book's own account. Take the question about awakening seriously and answer it without deflating them: an experience worth having had, explained in this system as the mind's summary of itself being grasped by attention. Then give them something to do. Drop the search for the witness. Return to the two intentions, to observe the fine detail of the breath and to ignore everything else, and use the whole body with the breath to rebuild exclusive attention. For knowing the mind, hold the intention to know what attention is doing and how the mind is, lightly, without looking away from the breath. If the witness appears again, let it be one more thing known in awareness.",
    "rubric": [
     "Credits the silent sits as pacification of the mind through sustained exclusive attention, and says so first because the student believes something has been lost.",
     "Normalises the loss: distractions are only temporarily subdued, thought continues unconsciously, they return when the intention weakens, and completion comes only in Stage Seven.",
     "Explains the witness from the text: metacognitive content in awareness is just information, but taken as an object of attention it passes through the discriminating mind, which imputes a Self, so a witness seems to be present; he does not present this as awakening.",
     "Marks as inference that searching for the witness pulls attention off the breath and that chasing the state gets in its way; asks whether the silence was bright or partly dull; redirects to the two intentions, the whole-body practice, and knowing the mind in awareness.",
     "Weighting: teachers differ sharply on the witness, since some traditions cultivate it as a practice and TMI itself uses it later, so how far to discourage it here is a judgment; they also differ on whether to interpret the student's experience at all or only to say how this book accounts for it."
    ]
   }
  ]
 }
];
