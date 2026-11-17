// Expanded question banks (Grill, Test, Scenario): batch 1 then batch 2 per stage, merged into STAGES at load.
// IDs follow position: grill Q1-10 batch 1, Q11-20 batch 2; open Q1-4 / Q5-8; scenario Q1-3 / Q4-6.
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
   },
   {
    "q": "A student says her only reason for meditating is that the rest of her day goes better when she does. What does the first of the Six Points say to do with a reason like this?",
    "options": [
     {
      "t": "Acknowledge and accept it as it is, without judging it good or bad",
      "ok": true,
      "why": "He gives this very reason as an example and says not to judge your reasons as good or bad, only to acknowledge and accept them as they are."
     },
     {
      "t": "Replace it with a higher aim, since modest reasons give modest practice",
      "ok": false,
      "why": "He lists peace of mind, Awakening and simply feeling better as equally usable reasons, and what matters is having a clear sense of purpose."
     },
     {
      "t": "Hold it very lightly, as you would a goal, so that it cannot disappoint",
      "ok": false,
      "why": "Holding lightly is what the third Point asks of goals, whereas motivation is something the first Point tells you to fire up."
     },
     {
      "t": "Keep it in reserve, and review it only once resistance has appeared",
      "ok": false,
      "why": "Reminding yourself why you meditate is the first thing to do after sitting down, and it is what helps when restlessness or resistance come."
     }
    ]
   },
   {
    "q": "Before a sit, a student knows that an argument with a friend is likely to keep coming to mind. What does the fifth of the Six Points ask her to do about it?",
    "options": [
     {
      "t": "Put it firmly out of mind before starting, so that the sit begins clear",
      "ok": false,
      "why": "Nothing is to be suppressed in this method, and he expects that you may not be wholly successful in keeping such thoughts away."
     },
     {
      "t": "Think it through to a conclusion first, so that it has no reason to return",
      "ok": false,
      "why": "The Point asks for a quick inventory and an intention, not for the problem to be solved, and thinking it through is the very activity the sit sets aside."
     },
     {
      "t": "Acknowledge it, and resolve to set it aside if it does arise in the sit",
      "ok": true,
      "why": "He says to take a quick inventory, acknowledge these thoughts and emotions, and resolve to set them aside if they arise, which makes them easier to handle even when it does not wholly succeed."
     },
     {
      "t": "Plan to take it as the meditation object as soon as it makes itself felt",
      "ok": false,
      "why": "Taking a persistent distraction as the object is a method of later Stages for what cannot be disregarded, whereas the resolve here is simply to set it aside."
     }
    ]
   },
   {
    "q": "A new student says the Six-Point Preparation takes up a large part of her sit and asks whether that is a problem. What is Culadasa's answer?",
    "options": [
     {
      "t": "Yes, so it should be kept to a minute or two, to protect the time for the breath",
      "ok": false,
      "why": "He sets no limit, and says the mind will be well settled by the time you have gone through the Six Points."
     },
     {
      "t": "No, since the preparation is itself a form of meditation that trains attention",
      "ok": true,
      "why": "He says it does not matter how long you spend on it, because you are still intentionally directing and sustaining attention, and he asks how the rest of the sit went afterwards."
     },
     {
      "t": "Yes, so it is best dropped once the Six Points have become second nature",
      "ok": false,
      "why": "He says it goes more quickly with daily use, not that it should be dropped, and that it helps establish a consistent practice free from resistance."
     },
     {
      "t": "No, as long as at least half of every sit is still spent with the breath",
      "ok": false,
      "why": "He gives no such proportion, and elsewhere allows that for a novice the Four-Step Transition alone may take most or all of a session."
     }
    ]
   },
   {
    "q": "Which statement about posture matches the Stage One chapter?",
    "options": [
     {
      "t": "Lying down is ruled out, because a comfortable body always falls asleep",
      "ok": false,
      "why": "Lying down is one of the four traditional postures that he says all work, and the only caution is against being so comfortable that you fall asleep."
     },
     {
      "t": "Sitting cross-legged on the floor is correct, and a chair is only a concession",
      "ok": false,
      "why": "He lists a chair, a bench and the floor side by side, and says to use a straight-backed chair if sitting on the floor proves difficult."
     },
     {
      "t": "Full lotus is the aim, because only a locked posture keeps the mind alert",
      "ok": false,
      "why": "He says full lotus is stable and helps alertness but is not necessary for success, and can cause serious injury to those not flexible enough."
     },
     {
      "t": "Sitting, standing, walking and lying down all work, and none is more correct",
      "ok": true,
      "why": "He says any comfortable position works as long as it is not so comfortable that you fall asleep, and that of the four traditional postures none is more correct than the others."
     }
    ]
   },
   {
    "q": "In Step Three a student wants to perceive the breath sensations more clearly. Which of these does Culadasa suggest?",
    "options": [
     {
      "t": "Turning the closed eyes towards the tip of the nose or the abdomen",
      "ok": false,
      "why": "He says not to actually direct your eyes there, because that will just create discomfort."
     },
     {
      "t": "Breathing a little more fully, so that the sensations stand out better",
      "ok": false,
      "why": "He says to breathe naturally as a passive observer, and that you do not have to exaggerate the breath to make sensations easier to notice."
     },
     {
      "t": "Imagining that you are looking at the place where the sensations occur",
      "ok": true,
      "why": "He says to try imagining that you are looking at the place where the sensations are occurring, letting the eyes rest wherever serves that."
     },
     {
      "t": "Forming a clear mental picture of the area where the breath is felt",
      "ok": false,
      "why": "He says not to visualise the area in your mind, and the object throughout is the sensations and not an image of them."
     }
    ]
   },
   {
    "q": "Why does Culadasa suggest treating the beginning of the out-breath as the start of each breath cycle when counting?",
    "options": [
     {
      "t": "The pause then falls in mid-cycle, where the mind is less likely to wander",
      "ok": true,
      "why": "He says the mind tends to shift focus when it has completed a task, so a pause at the end of the cycle is the perfect opportunity for thoughts to wander off."
     },
     {
      "t": "The out-breath is the more soothing half, so that each count begins in calm",
      "ok": false,
      "why": "He does note that the out-breath feels more relaxing, but the reason he gives here is where the pause falls."
     },
     {
      "t": "The in-breath sensations are clearer, so they are best saved until last",
      "ok": false,
      "why": "He makes no such claim, and the alternative he offers is to say the number during the pause so as to fill the gap."
     },
     {
      "t": "Counting on the out-breath slows the breathing, which settles the mind",
      "ok": false,
      "why": "The breath is to be observed passively and not controlled, and the count is there to stabilise attention."
     }
    ]
   },
   {
    "q": "Once attention is at the nose in Step Four, what should it do as the air moves in and out?",
    "options": [
     {
      "t": "Rest on the tip of the nose alone, since that one point is the object",
      "ok": false,
      "why": "The area may be just inside the nostrils, at the tip or on the upper lip, from the size of a pencil eraser to two inches across, and may differ between the in-breath and the out-breath."
     },
     {
      "t": "Travel with the air into the chest and back, so that no part is missed",
      "ok": false,
      "why": "He says in so many words not to try to follow the air as it moves into the body or out of your nose."
     },
     {
      "t": "Range between the nose, chest and abdomen, wherever the breath is felt",
      "ok": false,
      "why": "Ranging freely among breath sensations anywhere in the body is Step Three, and Step Four restricts attention to the nose."
     },
     {
      "t": "Stay where the sensations are clearest and observe the air passing over it",
      "ok": true,
      "why": "He says to keep attention on the area where the sensations are clearest and not to follow the air into the body or out of the nose, because the object is the sensations and not the breath itself."
     }
    ]
   },
   {
    "q": "A student finds one long sit hard and prefers two sits of twenty minutes each day. What is Culadasa's position?",
    "options": [
     {
      "t": "It is better, since frequent short sits form the habit more quickly",
      "ok": false,
      "why": "He allows it as easier for some people without calling it better, and names a longer daily sit as the solid basis for practice."
     },
     {
      "t": "It is fine at first, but he asks for at least one 45-minute sit a day",
      "ok": true,
      "why": "He says two shorter meditations are fine at first but strongly recommends at least one daily 45-minute sit as a minimum, reached by gradual increases."
     },
     {
      "t": "It is equivalent, since what matters is the total time spent each day",
      "ok": false,
      "why": "If only the total mattered he would not single out one 45-minute sit as the minimum."
     },
     {
      "t": "It is unhelpful, since a sit of under 45 minutes trains very little",
      "ok": false,
      "why": "He himself suggests starting with fifteen or twenty minutes a day, and says it is always best to work up gradually."
     }
    ]
   },
   {
    "q": "A student sits each morning with a friend who keeps cancelling and seems half-hearted. What does Culadasa advise?",
    "options": [
     {
      "t": "Sit only on the days they come, so that the practice stays a shared one",
      "ok": false,
      "why": "That would tie your practice to someone else's wavering intention, when mastery of this Stage means never missing a daily session."
     },
     {
      "t": "Carry on, since your steady commitment will in time strengthen theirs",
      "ok": false,
      "why": "Mutual reinforcement is what he hopes for from a partner, but where only one intention is established he says to end it."
     },
     {
      "t": "End the arrangement, since your intention is established and theirs is not",
      "ok": true,
      "why": "He says that if you have clearly established your intention but your practice partner has not, it is better to end the practice arrangement."
     },
     {
      "t": "Join a group in its place, since groups meet daily and need no partner",
      "ok": false,
      "why": "He says groups provide especially strong support but usually do not meet every day."
     }
    ]
   },
   {
    "q": "Where does Culadasa say 'the only place for great effort in meditation' lies?",
    "options": [
     {
      "t": "In adjusting your schedule so that more time goes to practice",
      "ok": true,
      "why": "He says the only place for great effort is in adjusting your schedule to actually spend more time practicing, since small measures repeated consistently produce huge results."
     },
     {
      "t": "In holding attention on the breath against the pull of distraction",
      "ok": false,
      "why": "On the cushion he asks for joyful effort and the repetition of simple tasks, and calls a striving attitude the greatest impediment to progress."
     },
     {
      "t": "In staying still through the discomforts of the first long sits",
      "ok": false,
      "why": "He asks you to stay as still as you can, but also to minimise pain and to be patient, which is not a call for great effort."
     },
     {
      "t": "In the first few weeks, until sitting every day has become a habit",
      "ok": false,
      "why": "He says force and willpower will not produce a sustainable practice, and that habits come from working on motivation and intention."
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
   },
   {
    "q": "The Six-Point Preparation tells the meditator to set goals for each sit and, immediately afterwards, to beware of expectations.\n• Reconcile the two instructions.\n• Explain what Culadasa says about plateaus and bad days, and trace how judging one's practice leads to missed or wasted sits.\n• A student rates every sit out of ten in a notebook and is discouraged by the trend. Say what you would tell them.",
    "model": "Goals and expectations. A goal, as he uses the word, gives direction to one sit: what you will work on today, chosen in the light of recent sits and kept reasonable. His examples for a beginner are small ones, such as not giving up and daydreaming, or staying patient when the mind wanders or drowsiness comes. An expectation is a view about where you 'should be', and it sets you up for disappointment. The two are reconciled by how the goal is held. He says to practise diligently towards the goals you set and to hold them very lightly, to find enjoyment in every meditation no matter what happens, and to savour any achievement. Simply sitting down is an accomplishment. So the goal steers the effort, and the result is not used to grade the sit. That last sentence is my summary of his three resolves.\n\nPlateaus and bad days. Some sits are easy, and he calls that the fruit of previous practice. But obvious progress should not be expected each time. There will be plateaus where nothing seems to change for days or weeks, and today's attention or mindfulness may be weaker than it was weeks or even months ago. He calls that normal and says to stay relaxed, to keep the effort diligent yet joyful, and to remember that there is no such thing as a bad meditation.\n\nFrom judging to lost sits. He gives the chain in two places. In the fourth Point: judging the quality of your practice can lead to doubt, and doubt gives rise to procrastination about sitting down and to resistance once seated. In the passage on attitude: calling the practice difficult means you are dissatisfied with your performance and have started judging; expectations have not been met; doubt about ever succeeding saps motivation. Under self-doubt he adds the link that closes the loop: without regular practice, improvement is slow, which creates more doubt.\n\nThe notebook. I would start with what the notebook shows about the student: they care, they sit, and they pay attention to their practice. Then I would say that a score out of ten is a judgment passed after every sit, which is the first link of his chain, and that a falling trend over a few weeks is what he describes as normal. He does want you to know your practice. The second Point asks you to think about recent sits when choosing a goal, and he recommends counting partly for the information it gives about the state of the mind. So I would not ask them to stop observing. I would ask them to change what they record: the goal they set, what they noticed, and one thing they enjoyed, with no number. The suggestion about the record is my own advice. The book says nothing about journals.",
    "rubric": [
     "Distinguishes a goal (direction for this sit, reasonable, chosen in the light of recent sits; simple examples such as not giving up and daydreaming) from an expectation (a view of where one 'should be' that sets up disappointment).",
     "Reconciles them by how goals are held: practise diligently towards them, hold them very lightly, find enjoyment in every sit whatever happens, savour any achievement; sitting down is itself an accomplishment.",
     "Gives his account of plateaus: easy sits are the fruit of previous practice; no obvious progress each time; days or weeks without change; today may be weaker than weeks or months ago; this is normal, and there is no 'bad' meditation.",
     "Traces the chain: judging the quality of practice leads to doubt, and doubt to procrastination about sitting down and resistance on the cushion; unmet expectations sap motivation; irregular practice slows improvement and feeds more doubt.",
     "Responds to the student by crediting the care first, naming the score as a judgment, keeping observation (recent sits inform goals; counting gives information) while changing what is recorded; marks the advice about the notebook as the answerer's own."
    ]
   },
   {
    "q": "Culadasa names four major obstacles to establishing a practice.\n• Distinguish them, and say which one each of these students is describing: 'I'll start again once this project is finished'; 'I sit every day but mostly drift'; 'There just aren't enough hours'; 'I don't think I have the right kind of mind'.\n• Give the antidote he offers for each.\n• Explain why he says diligence 'helps start you on your way' but is not the real solution, and what is.",
    "model": "The four. Time: finding room for practice once early enthusiasm fades and other demands press. Procrastination: putting off sitting down, with 'after I take care of such-and-such' or 'tomorrow'. Reluctance and resistance: sitting down but spending the time daydreaming, fantasising or planning in place of meditating. He draws that line himself: procrastination keeps us from sitting down, and reluctance and resistance waste the time once we are seated. Self-doubt: concluding from an unruly mind that something inherent is missing, whether discipline, intelligence or being 'spiritual' enough.\n\nThe four students. 'Once this project is finished' is procrastination about sitting down, almost in his own words. 'I sit every day but mostly drift' needs a question before a label. If the drifting is chosen or indulged, it is reluctance and resistance. If the student is trying and the mind simply wanders, it is the ordinary mind-wandering of Stage Two. 'Not enough hours' is the obstacle of time. 'Not the right kind of mind' is self-doubt, and he says the real obstacle there is the doubt and not the mind.\n\nThe antidotes. For time: make the time, as you would for anything else you are committed to. He says he knows no one who has established a practice in spare time, and that without a regular schedule you most likely will not meditate. For procrastination about sitting down: make practice a priority, since otherwise there will always be something more important to do first. He adds that regular practice leaves you feeling that you have more time, not less. For reluctance and resistance: inspiration and motivation, taken from somewhere else at first and supplied by your own success later. For self-doubt: trust and perseverance, which again depend on inspiration and motivation. For procrastination and resistance together he gives one more, to just do it, because nothing works as quickly or effectively as diligence.\n\nWhy diligence is only the start. Diligence gets the person onto the cushion and keeps them at the task. The real solution, he says, is learning to enjoy the practice: savouring feelings of physical comfort, cultivating the pleasure that can be found in quietness, and taking satisfaction in having sat down at all. He contrasts this with approaching meditation like medicine that tastes bad but is supposed to be good for you. His claim is that someone at ease and happy will be more successful than someone tense and straining, and that once the practice is enjoyed the rest falls into place: doubt disappears, time is found, and procrastination and resistance vanish.\n\nA caution of my own. That is a statement about what enjoyment does once it is present. With a student who is not enjoying anything yet, the practical steps and inspiration from outside have to carry the first weeks, and I would not promise the enjoyment on a timetable.",
    "rubric": [
     "Distinguishes the four: time; procrastination (putting off sitting down); reluctance and resistance (seated, but daydreaming, fantasising or planning); self-doubt; and cites his own line between the second and third.",
     "Matches the statements: the project is procrastination about sitting down; the hours are time; the mind is self-doubt; and for 'mostly drift' asks whether it is chosen (reluctance and resistance) or involuntary (Stage Two's mind-wandering) before labelling.",
     "Gives the antidotes: make the time and keep a regular schedule; make practice a priority; inspiration and motivation (from outside first, then from one's own success); trust and perseverance; and 'just do it' for procrastination and resistance.",
     "Explains the two layers: diligence starts you, but the real solution is learning to enjoy practice (savouring comfort, the pleasure of quietness, satisfaction in having sat), in contrast to taking it like medicine; ease and happiness succeed where tension and straining do not.",
     "States his claim that enjoyment makes the other obstacles fall away, and marks any caution about students who are not yet enjoying practice as the answerer's own."
    ]
   },
   {
    "q": "Explain self-doubt as an obstacle at Stage One, using the Stage One chapter and the Second Interlude's account of Doubt.\n• Say what Doubt is for, and when it becomes a hindrance.\n• Give the remedies, and the specific assurances Culadasa offers about an overactive mind, intelligence and self-discipline.\n• Explain why self-doubt confirms itself, and what finally ends it.",
    "model": "What Doubt is for. In the Second Interlude, Doubt is healthy and valuable when it moves us to question, investigate and try things for ourselves. It protects against blind acceptance and against wasting time and resources. It begins as an unconscious process that focuses on negative results and possible negative outcomes, and when the feeling is strong enough it compels us to re-evaluate an activity or to abandon it. Its purpose, he says, is to challenge the strength of our motivation and invite us to test what we are doing with reason and logic.\n\nWhen it becomes a hindrance. When we respond only to the emotional uncertainty and do not re-evaluate rationally. It then keeps us from making the effort needed to validate something through our own experience. He calls this form a perverse faith in failure that saps the will and undermines intentions, and he gives the Stage One case directly: doubt your ability to succeed in meditation, and your motivation fades and you do not sit down.\n\nThe form it takes at Stage One. The chapter describes the moment. You discover that you cannot control your unruly mind and conclude that you are different, lack self-discipline, or are not smart or 'spiritual' enough, especially when you compare yourself with what others seem to be achieving. He says the real obstacle is the self-doubt and not any inherent lack.\n\nRemedies. The immediate remedy is to use reason to envision the possibility of long-term success, against the short-term emotional pressure. The chapter's 'basic antidote' is trust and perseverance, which need inspiration and motivation. The ultimate remedy is the trust and confidence that come from success, and success depends on persistent effort.\n\nThe three assurances. On an active mind: some people are calmer by nature, but very few have minds so active that they cannot meditate. If your mind is more active than average, the first three Stages will be the most challenging, and the later ones come more easily. On intelligence: it is not that important, because meditation is about attention and awareness, and anyone who can read the book and follow the instructions has more than enough. On self-discipline: if you can exercise regularly or go to work or school, you can establish a practice. The key factor is not discipline but motivation and habit, so someone who questions their discipline should re-examine their motivation.\n\nWhy it confirms itself, and what ends it. Doubt weakens the motivation to sit; without regular practice it takes a long time to see improvement; and the lack of improvement creates more doubt. The way out runs through the same loop in the other direction. Consistent effort develops the meditation factor of sustained attention, you learn that you are capable of sustaining attention and getting results, and success leads to trust in the practice and in yourself. He says Doubt is then completely overcome. He also says that even serious attention deficit disorder does not prevent people from reaching the highest goals. I would pass that on to a student as his assurance and not as a clinical claim.",
    "rubric": [
     "States the function of Doubt (it prompts questioning and testing, protects against blind acceptance and wasted effort, challenges the strength of motivation) and that it begins as an unconscious focus on negative outcomes.",
     "States when it is a hindrance: responding only to the emotional uncertainty without rational re-evaluation, so that the effort is never made; 'a perverse faith in failure'; at Stage One, motivation fades and you do not sit down.",
     "Gives the remedies: reason used to envision long-term success; trust and perseverance, supported by inspiration and motivation; ultimately the trust and confidence that come from success through persistent effort.",
     "Gives the three assurances: very few minds are too active to meditate, and for them the first three Stages are the hardest; intellectual ability is not that important; the key factor is motivation and habit, not discipline.",
     "Explains the loop (doubt, less practice, slow improvement, more doubt) and its reversal (consistent effort, sustained attention, success, trust), and treats the statement about attention deficit disorder as his assurance, not as a clinical claim."
    ]
   },
   {
    "q": "Explain Culadasa's choice of meditation object.\n• Say what 'the breath' means as a meditation object, and what it does not mean.\n• Give the qualities that make the breath suitable, and what each one serves.\n• Explain why he recommends the nose over the abdomen, and what you would tell a student who already practises with a mantra or with body scanning.",
    "model": "What it means. A meditation object is something you intentionally choose as the focus of attention. When he says 'the breath' he means the sensations produced by breathing, and not a visualisation or an idea of the breath going in and out. In the chest or abdomen these are sensations of movement, pressure and touch. At the nose they are sensations of temperature, pressure and air moving on the skin: around the tip, on the rim, inside the nostrils, or on the upper lip. Two instructions follow. Do not follow the air into the body or out of the nose; observe the sensations as the air passes over one area. And breathe naturally, as a passive observer, without exaggerating the breath to make it easier to feel.\n\nWhy the breath. He gives several qualities, and each serves something different. It is always with you, so practice is possible anywhere, every day. It lets you be a completely passive observer, with nothing to repeat, generate or look at. It becomes fainter as concentration deepens, so the details attended to grow ever more subtle, which suits the development of powerful attention. Its sensations change continuously, moment by moment, which is conducive to Insight into impermanence. And it repeats the same pattern over and over, which makes it suitable as a fixed object for entering meditative absorption. For these reasons the breath is the basis for śamatha-vipassanā, for dry Insight practice and for jhāna.\n\nWhy the nose. He grants that beginners often find the large movements of the abdomen easier to follow at first. His objection concerns what happens later: when the breath becomes very shallow, the coarser sensitivity of the abdomen makes the sensations harder to detect, and the nerve endings at the nose are much more sensitive. Within that, the choice is free: whatever area around the nostrils works best for you. The object is the nose most often, but not always.\n\nThe student with another method. I would tell them that nothing in the Ten Stages requires them to abandon it. He says the same principles and methods can be used with a visualised object, a mantra or loving-kindness, and alongside Mahasi-style noting, the U Ba Khin and Goenka methods, and Shinzen Young's system, because each of them meets the same problems of mind-wandering, distraction and dullness. He recommends counting as a way into the sit whatever the object. And he adds one qualification, which I would pass on as his: not every meditation object leads to the final Stages as surely as the sensations of the breath. He does not say which objects fall short, or at what point, so I would not pretend to know. Whether to ask such a student to switch is a judgment the book leaves to the teacher.",
    "rubric": [
     "Defines the object as the sensations produced by breathing (movement, pressure and touch in chest or abdomen; temperature, pressure and moving air at the nose), not a visualisation or an idea of the breath.",
     "Draws the practical consequences: do not follow the air in or out; observe the sensations at one area; breathe naturally as a passive observer without exaggerating.",
     "Gives the qualities and what each serves: always available; passive observation; growing fainter (powerful attention); continuous change (Insight into impermanence); a repeating pattern (a fixed object for absorption).",
     "Explains the nose: the abdomen's large movements are easier at first, but its coarser sensitivity fails when the breath is shallow, while the nerve endings at the nose are much more sensitive; any area around the nostrils may be chosen.",
     "Tells the student with another method that the same principles apply (he names several methods) and that counting still helps, passes on his qualification that not every object leads to the final Stages as surely, and notes that he does not say which fall short."
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
   },
   {
    "q": "A student three weeks in reports: 'I work full time and have two small children. The only slot I've found is ten at night, in bed, and I'm asleep within minutes. My partner sighs whenever I mention it, and honestly it feels selfish to take that time for myself. I manage about ten minutes, three nights a week. Should I wait until life is calmer?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the effort deserves saying out loud. With a job and two small children this student has found a slot at all and has kept coming back to it for three weeks. Culadasa says that simply sitting down to practise is an accomplishment.\n\nSecond, the obstacle is the one he calls the first big challenge, time, and it is behaving as he describes: early enthusiasm carried the first sits, and now the pressure of other demands is winning. His antidote is blunt. He knows no one who has established a practice in spare time, spare time is rare, and you have to make the time, as you would for anything else you are committed to. 'Wait until life is calmer' is the usual form of procrastination about sitting down: I'll have more time later.\n\nThird, the slot is working against them. He says beginners often forget to take their mental energy and clarity into account, and to choose a time when you are least agitated or tired. Ten at night after such a day is the opposite. Bed adds to it: any comfortable position works, he says, as long as it is not so comfortable that you fall asleep. So the sleep is not a failure of the meditator. That it is ordinary fatigue is my reading of the report, and it is the obvious one.\n\nFourth, the guilt. He addresses it directly. Meditation time is your time, set aside for yourself, and given how much it will improve your relationships with others it should not be regarded as selfish; it ultimately benefits everyone you come into contact with. He also predicts the sighing: family who are not used to you being unavailable may resist at first, will learn to adjust, and may even join in.\n\nWhat I don't know. Whether mornings are possible at all with these children. What the partner actually objects to. How much sleep the student is getting, since his own suggestion of getting up earlier only works, he says, if you go to bed earlier.\n\nResponse. Start with the credit, then answer the question: no, don't wait. Then work the problem with them. Look for a slot when they are awake. He ranks early morning first, then late afternoon or early evening, and says to avoid sitting straight after a meal. If no clock time will hold, tie the sit to a fixed point in the daily routine. Sit up, and out of bed. Keep it short and daily: fifteen or twenty minutes is where he starts everyone, lengthened five minutes at a time. Ask them to tell the partner plainly when they will be unavailable, and why it matters to them. I would hold back his 45-minute minimum for now. He gives it as a strong recommendation to work up to, and in this household I would treat a short daily sit as the whole goal for some time. That ordering is my judgment.",
    "rubric": [
     "Credits the persistence first: finding and keeping a slot under these conditions is an accomplishment, and sitting down at all counts.",
     "Names the obstacle as time, with his antidote (make the time; no one builds a practice in spare time; make it a priority), and recognises 'wait until life is calmer' as procrastination about sitting down.",
     "Identifies the slot and the setting as the problem: choose the time of least tiredness and agitation; a position so comfortable that you fall asleep does not work; marks the reading of the sleep as ordinary fatigue as an inference.",
     "Answers the guilt and the partner from the text: this time is not selfish and benefits everyone; family resistance is expected and eases; others should be told when you are unavailable.",
     "Gives a workable plan (a wakeful slot or a fixed point in the routine, sitting up, fifteen to twenty minutes daily, gradual increases) and notes the weighting: teachers differ on how soon to press his 45-minute minimum, and on how hard to press 'make it a priority' on a parent of small children; he states the principle and does not discuss such cases."
    ]
   },
   {
    "q": "A student two months in reports: 'I can't stay still. My nose itches, so I scratch it. Then my foot goes numb, so I shift. Then my back aches, so I straighten up. Each fix works for about a minute and then something else starts. I've tried a chair, a bench and two different cushions. By the end I've moved thirty times and I'm irritated with myself. Is my body just not built for this?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, two things are going right. The student sits through the whole period in spite of the irritation, and the experimenting with chair, bench and cushions is what Culadasa recommends: try different postures before deciding, and fine-tune with supports. I would say both before anything else.\n\nSecond, what they have discovered is something he states as a fact about sitting. You cannot overcome all physical discomfort by adjusting your posture. He predicts their exact experience: you move, the thing that made you move disappears, and another irritating sensation, possibly more intense, soon takes its place. So the endless sequence is not evidence about this particular body. He also says that a beginner's body is unaccustomed to staying still for long, and that some aches and pains come merely from not moving.\n\nThird, the instruction has two halves, and the student has been working on only the first. Eliminate what you can: any comfortable position, as little strain or pain as possible, and no aggravating of old injuries. Then accept what remains as part of your practice and stay as still as you can. When something arises, always wait as long as you can before moving. If you do move, do not stop meditating: move slowly and deliberately, with full attention on the sensations as you shift.\n\nFourth, the irritation. Each discomfort is being treated as a problem to be fixed at once, so the sit has become a series of repairs. I infer that the restlessness is in the mind as much as in the body. The Four-Step Transition says something close: when you feel restless or contentment fades, thoughts and emotions begin to stir, and the remedy offered there is to widen out, seek what is pleasant in the present, and re-establish contentment.\n\nWhat I don't know. Whether any of this is pain from an injury, or from a posture that is wrong for them, which would change the advice. Whether the numbness clears quickly on standing. How long the sits are.\n\nResponse. Reassure first: nothing in this report says their body is unsuited, and he says sitting gets easier with practice, eventually for hours without discomfort. Then settle the posture question once, with the most comfortable arrangement of those they have tried, and stop changing equipment. Give them his rule as an experiment for a week: when the itch or the ache comes, wait as long as you can and watch what it does. If you must move, do it slowly and attend to the movement. Tell them to expect his prediction to come true, and to be curious about it; he says that observing discomforts teaches you how body and mind interact. Spend longer in Step Two at the start of each sit, releasing tension and looking for pleasant sensations, with the body, in his image, like a lump of soft clay. I would not ask for perfect stillness. His words are 'as still as you can'.",
    "rubric": [
     "Credits what is right: sitting through the whole period, and experimenting with postures and supports, which he recommends.",
     "Normalises with his statement that discomfort cannot all be overcome by adjusting posture, and his prediction that after moving another irritating sensation soon takes its place; a beginner's body is unaccustomed to stillness.",
     "Gives both halves of the instruction: eliminate what you can (comfort, minimal strain, no aggravating of injuries), then accept what remains as part of practice, stay as still as you can, wait as long as you can, and move slowly with full attention without stopping the meditation.",
     "Marks as inference that the restlessness is mental as much as physical, links it to the Four-Step Transition's advice on restlessness, and asks about injury, numbness and the length of the sits.",
     "Prescribes a settled posture and a week's experiment in waiting and watching, with more time relaxing in Step Two, and notes the weighting: teachers differ on how firmly to ask a beginner for stillness, and some would shorten the sits or alternate with walking first; the chapter says 'as still as you can' and leaves the degree to judgment."
    ]
   },
   {
    "q": "A student who enrolled five weeks ago reports: 'I want to do this properly, so I've been getting ready. I've read the first half of the book twice, bought a bench and a timer, cleared a corner and set up a small altar, and I'm still working out the ideal time of day. I've only actually sat three times, because I don't want to build bad habits before I understand the method. When should I start?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, almost everything this student has done is something the chapter recommends, and I would say so. A regular place just for meditating, a seat that suits the body, a timer, an altar whose purpose is to inspire and motivate, reading to stay inspired, and a considered time of day are all among his practical steps. The care is real.\n\nSecond, the pattern is still procrastination about sitting down, in a respectable form. His description of it is saying 'I'll meditate after I take care of such-and-such', and here the such-and-such is preparing to meditate. The Second Interlude explains why it holds: the power of laziness lies in procrastination, because before we start an activity we can question its value and suggest alternatives that seem more appealing, and once we start it is easier to continue. Calling this student lazy would be unkind and wrong about their energy, so I would keep to his description of the mechanism. That this is what is driving the delay is my inference, and I would ask before saying it.\n\nThird, the stated reason does not survive the text. The basic practice, he says, is quite simple: direct attention to the object, and whenever it slips, bring it back. He calls meditation a series of simple tasks, easy to perform, that only need to be repeated until they bear fruit. The practical steps are presented alongside just doing it, not ahead of it. And the thing from which everything else in the Ten Stages flows is, in his words, the simple act of consistently sitting down and placing attention on the meditation object, day after day.\n\nFourth, there may be expectation and doubt underneath. 'Properly' and 'bad habits' suggest an ideal image of the sit, which is what he says people are really struggling with, and perhaps a fear of meeting an unruly mind. That is a guess, and I would hold it as one.\n\nWhat I don't know. How the three sits went, and whether something in them was discouraging. Whether the reading has left a specific confusion that could be cleared up in a minute.\n\nResponse. Appreciate the preparation, and tell them it is finished. Then answer the question literally: today. Fifteen or twenty minutes, in the corner they have made, at whatever time is available, with the Six Points and the Four Steps as written. The ideal time of day is found by sitting, since his criterion is when you are least agitated or tired, and that can only be learned by trying. On bad habits, the one habit this Stage is about is sitting daily, and each day spent preparing is a day of practising not sitting. That is my own way of putting it, and I would say it gently. I would give them his line that a good meditation is one you did, and ask for a report after seven consecutive days. Keep the reading, which he recommends, as support for the sitting and not as its entry requirement.",
    "rubric": [
     "Credits the preparation as things the chapter recommends: a dedicated place, a suitable seat, a timer, an altar to inspire and motivate, reading for inspiration, a considered time of day.",
     "Identifies the pattern as procrastination about sitting down ('after I take care of such-and-such'), explains its hold with the Second Interlude (the power of laziness lies before a task begins), avoids calling the student lazy, and marks the diagnosis as an inference to be checked by asking.",
     "Answers the stated reason from the text: the basic practice is simple; meditation is a series of simple tasks repeated; the practical steps come alongside just doing it; everything flows from consistently sitting down day after day.",
     "Holds expectation and doubt as possible undercurrents and labels them a guess; asks how the three sits went and whether a specific confusion remains.",
     "Prescribes starting today with a short daily sit using the preparation and transition as written, and notes the weighting: teachers differ on whether to name the avoidance directly or simply to set a start date, and on whether more study before practice ever helps; the chapter favours sitting and also recommends reading."
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
   },
   {
    "q": "A new meditator says that since she started sitting, her mind seems wilder than it used to be. What does Culadasa say is going on?",
    "options": [
     {
      "t": "Sitting still stirs up an agitation that was not there before she began",
      "ok": false,
      "why": "He attributes the impression to noticing, and says mind-wandering is so much a part of normal experience that we rarely notice it."
     },
     {
      "t": "She is only now becoming aware of what has always gone on in her own mind",
      "ok": true,
      "why": "He says you may feel that meditation is making your mind more agitated, but in reality you are just becoming aware of what has always been going on, and that recognising this is an important first step."
     },
     {
      "t": "Her effort to focus is provoking the mind into pushing back against her",
      "ok": false,
      "why": "Forcing does breed conflict, but his explanation of this common first impression is simply that the mind's usual activity has become visible."
     },
     {
      "t": "Buried material is surfacing now that her mind has started to grow calm",
      "ok": false,
      "why": "Material welling up from the unconscious is described at Stage Four, once everyday distractions have fallen away."
     }
    ]
   },
   {
    "q": "The untrained mind produces distractions that lead to forgetting, which results in mind-wandering. Which part of this sequence does Stage Two set out to work on?",
    "options": [
     {
      "t": "All three at once, since ending distraction prevents everything after it",
      "ok": false,
      "why": "He says each part of the problem is addressed sequentially, with mind-wandering first."
     },
     {
      "t": "Forgetting, by catching each distraction before the breath has been lost",
      "ok": false,
      "why": "Intervening before the breath is lost is the goal of Stage Three, when introspective awareness has grown strong enough to do it."
     },
     {
      "t": "Distraction, by training attention to stop alternating away from the breath",
      "ok": false,
      "why": "Distractions are taken on in Stages Four to Six, and at this Stage attention is expected to alternate."
     },
     {
      "t": "Mind-wandering alone, the last event, by making the waking up come sooner",
      "ok": true,
      "why": "The Overview says that in Stage Two you only work with the last event, mind-wandering, and the chapter says forgetting is discussed here but not dealt with as an obstacle until Stage Three."
     }
    ]
   },
   {
    "q": "Culadasa describes three ways in which attention moves spontaneously. Which does he say is apparent only to an experienced meditator, and why?",
    "options": [
     {
      "t": "Alternating, since rapid shifts feel like attending to two things at once",
      "ok": true,
      "why": "He calls alternating attention a subtler kind of scattered attention, because the focus moves so swiftly among objects that there is an illusion of paying attention to two or more things simultaneously."
     },
     {
      "t": "Scanning, since the search for something of interest goes on unconsciously",
      "ok": false,
      "why": "Scanning is the focus moving from object to object in search of something of interest, and he does not say it is hidden from beginners."
     },
     {
      "t": "Getting captured, since a capture is only ever discovered after the event",
      "ok": false,
      "why": "He says getting captured is the movement you are probably familiar with, as when a siren pulls attention away from a book."
     },
     {
      "t": "Mind-wandering, since the one who wanders does not know it is happening",
      "ok": false,
      "why": "Mind-wandering is what follows forgetting and is not one of his three kinds of spontaneous movement, which are scanning, getting captured and alternating."
     }
    ]
   },
   {
    "q": "Why does Culadasa call sustaining attention 'trickier' than directing it?",
    "options": [
     {
      "t": "Directing uses attention, but sustaining depends on peripheral awareness alone",
      "ok": false,
      "why": "Peripheral awareness helps by noticing potential distractions, but the mechanism he describes here is an unconscious weighing of importance and interest."
     },
     {
      "t": "Directing takes a moment, but sustaining takes more willpower than beginners have",
      "ok": false,
      "why": "He says we cannot use our will to control how long we remain focused on one thing, so more willpower is not what is lacking."
     },
     {
      "t": "Directing is voluntary, but how long attention stays put is decided unconsciously",
      "ok": true,
      "why": "He says it is possible to voluntarily direct attention, but the part of the mind that sustains it for more than a few moments works entirely unconsciously, weighing the object's importance against other possible objects."
     },
     {
      "t": "Directing is innate, but sustaining is a new skill with no basis in ordinary life",
      "ok": false,
      "why": "He says all the mental skills used in meditation are innate abilities, and that stable attention is an inborn capacity that is simply used less."
     }
    ]
   },
   {
    "q": "What does Culadasa say about stable attention from an evolutionary point of view?",
    "options": [
     {
      "t": "It is a learned skill with no natural basis, which is why it takes training",
      "ok": false,
      "why": "He says we all have the inherent capacity, and that meditation trains abilities that are already there."
     },
     {
      "t": "It is an inborn capacity, though we are less strongly disposed to use it",
      "ok": true,
      "why": "He says stable attention is useful for survival too, so evolution has not selected against it, and that meditation strengthens this inborn but less-used capacity."
     },
     {
      "t": "It was selected against, since a fixed mind cannot keep watch for danger",
      "ok": false,
      "why": "He says selection favoured moving attention more strongly, and adds in so many words that evolution has not selected against stable attention."
     },
     {
      "t": "It is the mind's natural resting state, which busy modern life has eroded",
      "ok": false,
      "why": "He says spontaneously moving attention is the stronger predisposition and a normal, necessary part of everyday life, not a modern corruption."
     }
    ]
   },
   {
    "q": "Impatience and mind-wandering are rooted in several of the same hindrances. According to the Second Interlude, what sets impatience apart?",
    "options": [
     {
      "t": "It appears only once mind-wandering is overcome, at the start of Stage Three",
      "ok": false,
      "why": "Impatience is listed among the obstacles of Stage Two itself, and he says it is inevitable fairly soon."
     },
     {
      "t": "It comes from Laziness and Lethargy, which play no part in mind-wandering",
      "ok": false,
      "why": "The hindrances he names for impatience are Aversion, Worldly Desire and Doubt, and Laziness and Lethargy is not among them."
     },
     {
      "t": "It shows up as a disruptive emotion, not as a distracting thought or memory",
      "ok": true,
      "why": "He says impatience is rooted in Aversion, Worldly Desire and Doubt like distraction and mind-wandering, and that the difference is that it manifests as a disruptive emotion."
     },
     {
      "t": "It belongs to the body, as restlessness, where mind-wandering is mental",
      "ok": false,
      "why": "He calls impatience an insidious and pervasive emotional state, with any restlessness as something that comes along with it."
     }
    ]
   },
   {
    "q": "A student's monkey-mind follows a day spent fretting about a mistake at work. Which account of the causes of monkey-mind matches the Second Interlude?",
    "options": [
     {
      "t": "Often Worry and Remorse, but any hindrance except Laziness and Lethargy",
      "ok": true,
      "why": "He says Agitation due to Worry and Remorse often causes monkey-mind, that anger and Aversion, anticipated Desire or the restlessness of impatience can too, and that it can stem from any hindrance except Laziness and Lethargy."
     },
     {
      "t": "Always Worry and Remorse, since no other hindrance leaves the mind agitated",
      "ok": false,
      "why": "He names several other causes, including anger and Aversion and the anticipation of fulfilling a strong Desire."
     },
     {
      "t": "Mostly Laziness and Lethargy, which the mind fights off by darting about",
      "ok": false,
      "why": "Laziness and Lethargy is the one hindrance he excludes, and he describes it as a lack of energy where monkey-mind is an overly energised state."
     },
     {
      "t": "Only Worldly Desire, since the monkey is always chasing the next pleasure",
      "ok": false,
      "why": "Anticipated Desire is one cause among several, and the commonest he names is Worry and Remorse."
     }
    ]
   },
   {
    "q": "A student calls her sits boring and scolds herself for not doing better. Under which hindrance does the Second Interlude place both boredom and self-accusation?",
    "options": [
     {
      "t": "Worldly Desire, the craving for an experience more pleasant than this",
      "ok": false,
      "why": "Desire for some other gratification feeds impatience, but boredom and self-accusation are rejections of what is present, which is his mark of Aversion."
     },
     {
      "t": "Laziness and Lethargy, the loss of energy when nothing seems rewarding",
      "ok": false,
      "why": "Lethargy does arise when nothing seems interesting or rewarding, but he lists boredom itself under Aversion."
     },
     {
      "t": "Doubt, the unconscious focus on negative results and possible failure",
      "ok": false,
      "why": "Judging one's practice can encourage Doubt, but self-accusation is named as a form of Aversion."
     },
     {
      "t": "Aversion, the compulsion to get rid of or avoid whatever is unpleasant",
      "ok": true,
      "why": "He says any compulsion to get rid of or avoid unpleasantness is Aversion, and lists dissatisfaction, most forms of criticism, self-accusation, impatience and boredom among its forms."
     }
    ]
   },
   {
    "q": "A student can find the start of each in-breath but cannot tell exactly where the in-breath or the out-breath ends. What does Culadasa suggest?",
    "options": [
     {
      "t": "Lengthen each breath slightly, so that its end is easier to make out",
      "ok": false,
      "why": "The breath is observed as it is, and is not altered to make sensations easier to find."
     },
     {
      "t": "Identify the pauses first, and then work backward to find the ends",
      "ok": true,
      "why": "He says the ends are less obvious than the beginnings, and that if they are hard to perceive it helps to identify the pauses first and then work backward."
     },
     {
      "t": "Say the count at the end of each breath, so the number marks the spot",
      "ok": false,
      "why": "Saying the number in the pause is a Stage One counting aid for keeping the mind on task, not a way of locating the end of the breath."
     },
     {
      "t": "Leave the ends alone for now and attend only to the clear beginnings",
      "ok": false,
      "why": "The task is to find the start and end of each part of the cycle and the pauses, and then to observe all of these points with equal clarity."
     }
    ]
   },
   {
    "q": "In Culadasa's 'formula for success', what does 'look for the joy' mean?",
    "options": [
     {
      "t": "Wait for meditative joy to arise once attention has become fully stable",
      "ok": false,
      "why": "Meditative Joy as a Meditation Factor matures in later Stages, but this instruction applies in every moment from the start."
     },
     {
      "t": "Produce a feeling of joy at the start of the sit and rest attention on it",
      "ok": false,
      "why": "It means noticing what is already pleasant in every moment, and the feelings are held in awareness and not made the object of attention."
     },
     {
      "t": "Notice what is pleasant in each moment of practice and hold it in awareness",
      "ok": true,
      "why": "He says it means noticing the pleasant aspects of the practice in every moment, since feelings of peace, satisfaction and happiness are often present, and holding them in awareness so they become a regular part of experience."
     },
     {
      "t": "Replace each negative thought with a pleasant one as soon as it appears",
      "ok": false,
      "why": "He says negative thoughts and feelings are inevitable and are not to be suppressed or struggled against, only not allowed to colour the practice."
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
   },
   {
    "q": "A student asks: 'Why can't I keep my attention on one simple thing? What is wrong with my mind?'\n• Explain, in Culadasa's terms, how attention comes to leave the breath and why the mind then wanders.\n• Give his evolutionary account, including what it says about stable attention.\n• Say how you would use this to answer the student, and what remains true of an adept's mind in daily life.",
    "model": "How attention leaves the breath. You place attention on the breath, and the mind goes on producing distractions. Attention alternates among them, scanning for something more interesting, important, exciting, intense or novel. He says interest and importance are judged by a thing's perceived ability to increase pleasure or decrease pain, to cause happiness or unhappiness, or to improve or threaten physical well-being. When one of them captures attention, the breath is abandoned and forgetting happens. When attention tires of that distraction it moves to another, usually along chains of association, and that is mind-wandering. It can last seconds, minutes or a whole session, and it ends only when some unconscious part of the mind wakes you up.\n\nThe evolutionary account. His explanation is that selection pressures have favoured spontaneously moving attention more strongly than stable attention, because constantly moving attention keeps us on the lookout for whatever helps us survive and reproduce. If attention never wandered, he says, your house might burn down around you. So forgetting and mind-wandering are obstacles in meditation and at the same time a normal and necessary part of everyday life, a way of using limited conscious resources efficiently. The second half of the account matters as much. Stable attention is also useful for survival, so we all have that capacity, and evolution has not selected against it. We are simply less strongly predisposed to use it. Meditation trains and strengthens an inborn but less-used capacity.\n\nAnswering the student. I would begin by agreeing with the observation and disagreeing with the conclusion. Yes, the mind will not stay put; no, nothing is wrong with it. He says most novices are surprised by how unruly the mind is and may even feel that meditation is making it more agitated, when in reality they are just becoming aware of what has always been going on, and that recognising this is an important first step. I would add the Second Interlude's reassurance that the skills meditation needs are innate abilities, like mental muscles, and that these difficulties are faced by everybody and are not personal shortcomings. Then the practical turn: since the wandering is built in, the task is not to stop it by effort but to train the capacity that is already there, which at this Stage means welcoming each waking up and returning.\n\nThe adept. Training does not abolish spontaneous movement. He says the mind of an adept still moves spontaneously in daily life, allocating consciousness where it is needed, but without being captured unnecessarily, and that with strong mindfulness attention can be refocused and stabilised wherever and whenever it is needed.\n\nA caution. The evolutionary story is asserted in the book, not argued, and I would offer it as his explanation. Its use to a student does not depend on its being proven: it takes the fault out of the experience.",
    "rubric": [
     "Describes the mechanics: the mind produces distractions; alternating attention scans them for what is more interesting, important, exciting, intense or novel (judged by pleasure, pain and well-being); capture brings forgetting; attention then moves by chains of association, which is mind-wandering.",
     "Gives the evolutionary account: selection favoured spontaneously moving attention as a lookout for what aids survival, so forgetting and mind-wandering are normal and necessary in daily life and an efficient use of limited conscious resources.",
     "Gives the second half: stable attention is also useful and inborn; evolution has not selected against it; meditation strengthens a less-used capacity.",
     "Answers the student: nothing is wrong; they are becoming aware of what has always been going on; the needed skills are innate and the difficulty is universal, not a personal shortcoming; the task is to train, not to force.",
     "States what remains true of an adept (attention still moves spontaneously in daily life but is not captured unnecessarily) and treats the evolutionary story as his explanation, asserted without argument."
    ]
   },
   {
    "q": "Culadasa prefers the term 'stable attention' to 'concentration'.\n• Give his definition of stable attention and his reason for the change of term.\n• Describe the three kinds of spontaneous movement of attention, and say which parts of stable attention can be done at will and which cannot.\n• Explain how the part that cannot be willed is trained, and when each component matures across the Stages.",
    "model": "The term and the definition. He finds 'concentration' vague and liable to be filled with a student's preconceptions, and prefers 'stable attention' as more descriptive of what is done in meditation. Stable attention is the ability to intentionally direct and sustain the focus of attention, and to control the scope of attention: choosing the object, keeping attention on it, and adjusting how wide or narrow the focus is. His analogy is vision. To see something in detail you hold your gaze steady for as long as needed, focusing neither too narrowly nor too broadly.\n\nThree spontaneous movements. Scanning: the focus moves from object to object, in the outer world or among the contents of the mind, searching for something of interest. Getting captured: an object such as a thought, a sensation or a siren suddenly takes attention. Alternating: the focus moves very quickly among several objects. He says everyone's attention alternates, but only an experienced meditator sees it, because the speed gives the illusion of attending to two or more things at once, as in multitasking. It has a second form, in which attention seems to stay on one thing while others stand out from peripheral awareness. Anything that stands out in that way does so, he says, because it is intermittently becoming an object of attention. Unless you are multitasking on purpose, alternation means some distraction is present.\n\nWhat can be willed. Directing can: it is a conscious decision about what to attend to. Sustaining cannot. He says the part of the mind that sustains attention for more than a few moments works entirely unconsciously, and that we cannot use our will to control how long we stay with one thing. An unconscious process weighs the importance and interest of the present object against other possible objects, and when something else is judged to matter more the balance tips and attention moves. That is why he calls sustaining trickier than directing.\n\nHow the unwilled part is trained. Through consciously held intentions. Any information held in consciousness is communicated to the unconscious, so the intention to observe the breath, together with returning to it over and over, informs the weighing process that staying with the breath is important. His comparison is learning to throw darts: you hold the intention to hit the target and repeat, and involuntary coordination is trained without being controlled.\n\nWhen each part matures. Directing is exercised from Stages Two and Three, and the Stage Two chapter says redirecting becomes completely automatic by Stage Four. By Stage Four there is a consistent ability to keep attention on the object, though it still alternates with distractions. Exclusive attention, which does not alternate, is reached only in Stage Six. Control of scope is cultivated mainly in Stage Six, and by Stage Eight the focus can be widened to the whole field of conscious awareness. So a Stage Two student who cannot hold attention steady is not failing at something they could will. Putting it that way to a student is my application of his account.",
    "rubric": [
     "Gives the reason for the term (concentration is vague and attracts preconceptions) and the definition: the ability to intentionally direct and sustain the focus of attention and to control its scope, with the vision analogy.",
     "Describes the three spontaneous movements: scanning, getting captured, and alternating, including why alternation is visible only to an experienced meditator and its two forms (apparent simultaneity; objects standing out from peripheral awareness).",
     "Separates what can be willed (directing) from what cannot (sustaining for more than a few moments), and describes the unconscious weighing of importance and interest.",
     "Explains the training: consciously held intention plus repeated returning informs the unconscious process, with the dart-throwing comparison.",
     "Gives the timeline: directing from Stages Two and Three, automatic redirecting and consistent attention by Stage Four, exclusive attention at Stage Six, control of scope mainly at Six and mastered by Eight; marks the application to a Stage Two student as the answerer's own."
    ]
   },
   {
    "q": "Use the Second Interlude to explain the obstacles a Stage Two meditator meets.\n• Say what the Five Hindrances are, why we have them, and how Culadasa says they are to be approached.\n• Trace distraction and mind-wandering, impatience, and monkey-mind to their hindrances, and give the antidote the Interlude lists for each.\n• Explain the practical difference it makes to a teacher to know which hindrance is at work.",
    "model": "What the hindrances are. The Second Interlude names five innate and universal psychological predispositions: Worldly Desire, Aversion, Laziness and Lethargy, Agitation due to Worry and Remorse, and Doubt. He says almost every problem in meditation can be traced to one or a combination of them. We have them because they were useful to the species, and each still serves a purpose in daily life: desire moves us towards what supports survival, aversion away from what is harmful, laziness conserves effort, worry and remorse push us to correct and prepare, and doubt keeps us from wasting time. He stresses that everybody meets them and that they are not personal shortcomings.\n\nHow they are approached. In two steps. First understand the purpose each one ordinarily serves. Second, cultivate the five Meditation Factors that oppose them: Directed Attention, Sustained Attention, Meditative Joy, Pleasure/Happiness and Unification of Mind. He says that neither suppression nor self-punishment helps with conditioning so established and often so useful, and that positive reinforcement of the opposing tendencies works very well. He calls this approaching from the positive pole, not fighting a negative.\n\nStage Two's problems. Distraction, forgetting and mind-wandering: Worldly Desire, Aversion, Agitation and Doubt can all appear as distractions. Thoughts about gain, pleasure, fame and praise are more engaging for a novice than the breath, and even a wish to check email is enough. Aversion to pain or noise disturbs the sit, the charge of anger and resentment makes you want to mull things over, and worry and remorse pull towards the future and the past. The antidote listed is that the parts are addressed sequentially: mind-wandering in Stage Two, forgetting in Stage Three, distraction in Stages Four to Six. Impatience: rooted in Aversion, Worldly Desire and Doubt, and different in that it shows up as a disruptive emotion and not as a distracting thought. The antidote is to observe it objectively without identifying with it, and to cultivate joy, peace, contentment and equanimity. Monkey-mind: often from Agitation due to Worry and Remorse, but also from anger and Aversion, the anticipation of a strong Desire, or the restlessness of impatience; any hindrance except Laziness and Lethargy. The antidote is to get grounded in the body.\n\nWhat it changes for a teacher. He gives the chart so that the appropriate antidote can be applied. On the cushion the Stage Two method is the same whatever pulled attention away. But the hindrance tells you what else might help. Agitation due to Worry and Remorse has remedies off the cushion: the practice of virtue, and positive action to resolve what can be resolved. Aversion is opposed by Pleasure/Happiness, which is one of his stated reasons for always seeking out pleasant feelings in practice. Doubt gives way to success through consistent effort. Naming the hindrance also normalises it, since it is a universal predisposition and not this student's defect. One limit, as I read it: Meditative Joy and Unification of Mind mature in later Stages, so at Stage Two those pairings describe a direction more than a tool.",
    "rubric": [
     "Names the Five Hindrances as innate, universal predispositions that were useful in evolution and still serve purposes, to which almost every problem in meditation can be traced; they are not personal shortcomings.",
     "Gives the approach: understand each hindrance's purpose, then cultivate the opposing Meditation Factors; suppression and self-punishment do not work; 'the positive pole' in place of fighting a negative.",
     "Traces distraction, forgetting and mind-wandering to Worldly Desire, Aversion, Agitation and Doubt, with the sequential antidote (mind-wandering at Stage Two, forgetting at Three, distraction at Four to Six).",
     "Traces impatience (Aversion, Worldly Desire, Doubt; an emotion, not a distracting thought; observe it objectively and cultivate joy and contentment) and monkey-mind (often Worry and Remorse; any hindrance except Laziness and Lethargy; ground in the body).",
     "Explains the teacher's use: the on-cushion method is constant, but the hindrance points to further remedies (virtue and positive action for Agitation; pleasant feeling against Aversion; success against Doubt) and normalises the difficulty; marks as a reading that Joy and Unification are not yet available as tools at Stage Two."
    ]
   },
   {
    "q": "Culadasa's 'formula for success' is: relax and look for the joy; observe; let it come, let it be, let it go.\n• Say what each part means in his words.\n• A student objects that looking for joy is a way of pretending, and conflicts with observing what is without judging. Reconcile the two.\n• Explain why he gives joy this weight at Stage Two, and what he asks for outside the sit.",
    "model": "The parts. Relax: let go of any mental or physical tension as soon as you become aware of it. Look for the joy: notice the pleasant aspects of the practice in every moment. He grants that negative thoughts and feelings are inevitable, and says you need not get caught up in them or let them colour the practice. Even when there is pain somewhere there will be a pleasant feeling elsewhere, and feelings of peace, satisfaction and happiness are often present; hold them in awareness so that they become a regular part of conscious experience. Observe: be aware of what is happening in the moment without reacting, rejecting or clinging. Whether attention is stable or scattered, whether restlessness or dullness has come, whether the mind is clear or a thought keeps surfacing, just observe what is and do not judge. Let it come, let it be, let it go: whatever thoughts or feelings arise, do not suppress them, struggle against them or let them take you away; they disappear in their own time. He says to commit the formula to memory and recite it at every sit, especially on catching the thought that meditation is difficult.\n\nThe objection. The student has seen something real, and I would say so. The formula is not neutral. Elsewhere he says to focus consistently on the positive rather than the negative aspects of the sit, and in the transition to the breath he even says to purposely induce feelings of peace and happiness. So there is a deliberate tilt. What it is not is pretence, for two reasons that are in the text. Nothing is denied: negative feelings are called inevitable, and the last clause forbids suppressing them. And what is looked for is claimed to be there already: a pleasant feeling elsewhere, peace or satisfaction often present. The two instructions then govern different things. Looking for the joy decides what awareness is invited to include. Observing decides how everything is met, the pleasant included, since the stance excludes clinging as well as rejecting, and it covers the sit in which no joy can be found. That reconciliation is mine. He does not raise the objection.\n\nWhy joy carries this weight. Three reasons from the Stage Two material. Waking up from mind-wandering is trained by positive reinforcement, and he asks that satisfaction and pleasure be made a cornerstone of the whole practice. Impatience comes from conflict among parts of the mind that all want happiness, and enjoyment is what brings them into harmony, towards unification of mind. And the Second Interlude pairs Aversion with Pleasure/Happiness: there is little room for negativity in a mind filled with bliss, which he gives as a reason always to seek out pleasant feelings in practice.\n\nOutside the sit. He asks the meditator to create peace, contentment, happiness and joy in every wholesome way possible in daily life, and to bring that joy to the practice.",
    "rubric": [
     "Gives the four parts in his terms: relax (release tension as soon as noticed); look for the joy (notice pleasant aspects in every moment and hold them in awareness, with negative feelings acknowledged as inevitable); observe (no reacting, rejecting or clinging; no judging); let it come, be and go (no suppression or struggle).",
     "Concedes what is right in the objection: the method deliberately favours the positive, and he even speaks of purposely inducing peace and happiness.",
     "Reconciles: nothing is denied or suppressed, and what is looked for is claimed to be present already; 'look for the joy' governs what awareness includes while 'observe' governs how everything is met, including the pleasant and including sits without joy; marks this as the answerer's reconciliation.",
     "Explains the weight given to joy: positive reinforcement of waking up (satisfaction and pleasure as a cornerstone); harmony among parts of the mind and unification; Pleasure/Happiness as the factor opposing Aversion.",
     "States what he asks outside the sit (create these feelings in every wholesome way in daily life and bring them to practice) and when the formula is to be recited (every sit, especially when meditation seems difficult)."
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
   },
   {
    "q": "A student at Stage Two reports: 'Last year I misled my business partner about some money. Nobody knows. For the past month it is all that comes up when I sit. I catch it, come back to the breath, and it is there again within seconds, with a sick feeling in my stomach. I try to feel pleased when I notice, but honestly I don't think I deserve to feel pleased about anything. Should I keep meditating?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the practice is working as designed, and that is worth saying before anything else. The student is catching the thought again and again, which is introspective awareness arising, and is returning each time. They have also told a teacher something hard to tell.\n\nSecond, in the Second Interlude's terms this is the hindrance of Agitation due to Worry and Remorse. Culadasa describes remorse for unwise or unwholesome actions, and worry about their consequences, as states that make it hard to focus mental resources on anything else. He also says what meditation does with them: actions from the past still produce agitation, like seeds buried in the mind, and they emerge fully when we become quiet enough. So the sits have not caused this. They have made room for it.\n\nThird, the hindrance has a function. He says this agitation exists to spur us to correct things where possible and to discourage us from creating similar situations again, and that when the energy cannot be put to use it becomes stress from unresolved impulses to act. I read the month of repetition in that light. That reading is mine.\n\nFourth, the remedies he gives are mostly off the cushion. The best antidote is the practice of virtue, which he distinguishes from following an external moral standard or a code of rules: it is inner purification that results in good behaviour, and it stops new causes of remorse being created. The other remedy is to do whatever is possible to resolve existing sources of remorse by positive action, then to forgive yourself and seek the forgiveness of others for what cannot be resolved, and then to let go of the events and of judgments about them.\n\nFifth, 'I don't deserve to feel pleased'. He says joy and this agitation are opposites, and that joy overcomes remorse because a joyful person sincerely regrets the harm they have caused and is eager to set things right. On his account, appreciating the moment of waking up is not letting oneself off. I would offer that as his view and not insist on it.\n\nWhat I don't know. What, if anything, can still be put right, and what it would cost. Whether there are legal consequences, which are outside anything I can advise on. How the student is sleeping and coping.\n\nResponse. Yes, keep meditating. On the cushion nothing changes: acknowledge the thought in the Six-Point Preparation, resolve to set it aside, and when it comes, notice, let it be, and return gently. Appreciate the noticing, not the content. I would tell them plainly that, by this book, sitting will not make the matter go away, and that the text points to action. What action is theirs to decide, and I would not prescribe it. If the sick feeling becomes overwhelming, later chapters have methods for strong emotion, and beyond that a counsellor is the right person.",
    "rubric": [
     "Credits what is working: repeated catching is introspective awareness arising, the returns are being made, and the student has disclosed something difficult.",
     "Identifies Agitation due to Worry and Remorse, with his account that past actions produce agitation that emerges when the mind grows quiet; meditation has revealed it, not caused it.",
     "Gives the hindrance's function (to prompt correction and discourage repetition) and his remedies: the practice of virtue as inner purification, positive action to resolve what can be resolved, forgiveness, and then letting go; marks any reading of this student's month as the answerer's own.",
     "Answers 'I don't deserve to feel pleased' from the text (joy and this agitation are opposites; a joyful person regrets harm and is eager to set things right) without insisting, and keeps the on-cushion method unchanged: set aside, notice, let be, return, appreciate the noticing.",
     "Does not prescribe the action, names what is outside a meditation teacher's competence (legal questions; overwhelming distress, for which a counsellor), and notes the weighting: teachers differ on whether to engage with the ethical situation at all or to keep strictly to the practice, and on how directly to say that the text points to action."
    ]
   },
   {
    "q": "A student at Stage Two reports: 'I've worked out that noise is my problem. I now sit in a walk-in cupboard with earplugs in, and it's much better: fewer interruptions, longer stretches on the breath. But the neighbour's dog still gets through, and when it does I am furious, and that's the sit ruined. I'm thinking of noise-cancelling headphones. Am I on the right track?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the student is problem-solving and reporting accurately, and part of the solution has Culadasa's support. Stage One recommends a place that is quiet and secluded, where you will not be disturbed. Wanting fewer interruptions is not a mistake, and longer stretches on the breath are a real gain.\n\nSecond, the direction of travel is the problem. The instruction at this Stage is explicit: do not try to limit peripheral awareness. To cultivate mindfulness you do the opposite and allow sounds, sensations, thoughts and feelings to continue in the background. He warns that when attention is stabilised by pushing everything else out, peripheral awareness collapses and the breath is forgotten more easily. He also says that distractions go away by themselves, only to be replaced by others. So the cupboard cannot be made quiet enough. Thoughts are the larger supply, and no headphones reach them. That last point is my inference from his list of what continues in the background.\n\nThird, the fury. In the Second Interlude, aversion to noises is given by name as a way the hindrance of Aversion disturbs meditation, and the Seven Problems say of an itch that it is only stimulation of the skin until Aversion and the desire for it to stop turn it into suffering. The bark is over in a second. What ruins the sit is the reaction. I am applying the itch passage to sound, which he does not do himself. The better each sit is defended, the more a single bark seems to cost, so I suspect the arrangement is feeding the reaction.\n\nFourth, the tool for this was given in Stage One. In the first Step of the transition he says that if the mind reacts to something unpleasant, distinguish the reaction from the object that produced it, and let go of the reaction. The Stage Two version is: let it come, let it be, let it go.\n\nWhat I don't know. How noisy the home really is, and whether the earplugs block ordinary sound or only take the edge off. Whether anger at interruption is a pattern elsewhere in their life.\n\nResponse. Start by agreeing: a quiet place is recommended, and the longer stretches are real. Then say what the Stage is training, which is attention that stays with the breath while the world goes on in the background, and that this cannot be practised in the absence of a background. Suggest an experiment and not a rule: some sits without earplugs, with sounds deliberately included in awareness during the transition, and the dog treated as the exercise. When it barks and attention goes, that is one more waking up to appreciate. When fury comes, name it as aversion arising, feel the difference between the sound and the reaction, and return. Add the antidote he pairs with Aversion, which is to seek out what is pleasant in the sit. I would leave the cupboard alone. He says nothing about earplugs or headphones, so the advice on them is mine.",
    "rubric": [
     "Credits the problem-solving and what is right in it: Stage One recommends a quiet, secluded place, and longer stretches on the breath are a real gain.",
     "Identifies the wrong direction: the Stage says not to limit peripheral awareness and to let sounds continue in the background; collapsed awareness makes forgetting easier; distractions are replaced by others, so the environment can never be made quiet enough.",
     "Identifies the fury as Aversion, which the Second Interlude links to noises by name; marks as the answerer's own the application of the itch passage to sound and the suspicion that defending the sit feeds the reaction.",
     "Gives the tool: distinguish the reaction from the object and let the reaction go (Step One); let it come, let it be, let it go; a capture by the bark is another waking up to appreciate; seek out pleasant feeling as the factor opposing Aversion.",
     "Offers an experiment, not a ban, and notes the weighting: teachers differ on whether to take the earplugs away or simply add sits without them, and on whether a beginner in a noisy home should first be allowed all the quiet they can get; the book is silent on earplugs and headphones."
    ]
   },
   {
    "q": "A student at Stage Two reports: 'I've met someone, and my sits have turned into daydreams about them. Here's the odd part. I do notice. I get the little aha, I even enjoy it as instructed, and then I think: the daydream is nicer than my nostrils, and I go back to it on purpose. Ten minutes later I notice again. I leave the cushion smiling, so where's the harm?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, a good deal is working. Introspective awareness is arising, the student is appreciating it, and the report is unusually honest. They also leave the cushion happy, and Culadasa wants meditation to be pleasurable. None of that should be taken away.\n\nSecond, the distraction is Worldly Desire doing what he says it does. Attention scans for whatever is most interesting, and interest is judged by the promise of pleasure. The Second Interlude says thoughts of pleasure are far more engaging for a novice than the sensations of the breath. On that scale a new love beats the nostrils easily. Nothing here is a moral problem, and he says meditation does not involve repressing worldly desires.\n\nThird, the important detail is 'on purpose'. Being carried off is mind-wandering, the ordinary obstacle of this Stage. Choosing to go back is something else. Stage One calls it resistance: spending the time on fantasies in place of meditating, and the fourth of the Six Points asks for a commitment not to indulge tempting distractions. Stage Two addresses the exact moment. If you are reluctant to let go of an object you find particularly engaging, evoke discipline and diligence, where discipline is not force but a firm, intentional resolve to let go and return, and diligence is doing so consistently and promptly.\n\nFourth, where the harm is. In his model each sit trains something. Appreciating the aha and then returning trains the mind to wake up and come back. Appreciating the aha and then choosing the daydream leaves the second half untrained, and I infer that it rewards the daydream. He does not describe this case, so that is my reading.\n\nFifth, why willpower is the wrong answer. In his account of impatience, the parts of the mind that want to fantasise and the part that wants to meditate share one goal, happiness, and differ about how to reach it. He names two unskillful responses: give in, or force. The student is giving in. Forcing would create the struggle he says can never succeed. His way through is to make the practice itself satisfying, so that the other parts stop resisting and join in.\n\nWhat I don't know. Whether the student wants the training, or wants a pleasant half hour. Both are legitimate, and only one is this method.\n\nResponse. Enjoy the news with them. Then make the distinction between being carried off and choosing, and ask which they want the sit to be for. If it is the training, offer a deal that respects the desire and does not suppress it: the daydream gets its own time, off the cushion, and during the sit the resolve at each aha is to return once, gently and promptly. Then make the breath a fairer competitor, using following as a game and looking for what is pleasant in the body and in the quiet. Expect the pull to stay strong for a while. I would count each chosen return as the success of the sit.",
    "rubric": [
     "Credits what is working: introspective awareness arises and is appreciated, the report is honest, and pleasure in sitting is something he wants.",
     "Identifies Worldly Desire as the source (attention scans for what promises pleasure; such thoughts are more engaging for a novice than the breath) without moralising, noting that the method does not repress desire.",
     "Separates being carried off (mind-wandering) from choosing to return to the fantasy (Stage One's resistance; indulging a tempting distraction), and cites the Stage Two instruction: discipline as a firm, intentional resolve to let go, diligence as doing so consistently and promptly.",
     "Locates the harm in what is trained and marks it as the answerer's reading, since he does not describe this case; explains why force is not the answer (parts of the mind sharing the goal of happiness; giving in and forcing as the two unskillful responses; enjoyment as the way through).",
     "Asks what the student wants the sit to be for, offers the daydream its own time and a single prompt return at each aha, and notes the weighting: teachers differ on how firmly to ask for the return while the infatuation is fresh, and some would simply wait it out; the book gives the principle and not a timetable."
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
   },
   {
    "q": "While following the breath, a student finds that the sensations have faded from one nostril and seem to switch from side to side. What does Culadasa say?",
    "options": [
     {
      "t": "It is the first sign of dullness, so the mind should be energised now",
      "ok": false,
      "why": "Dullness shows as a loss of intensity, vividness and clarity overall, whereas this is a change in where the breath is felt."
     },
     {
      "t": "It shows that attention has drifted, so the focus should be tightened",
      "ok": false,
      "why": "He lists it among the ordinary changes of the breath under observation, not among the signs of distraction."
     },
     {
      "t": "It is completely normal, and there is nothing to do except notice it",
      "ok": true,
      "why": "He says the sensations may grow weaker or even disappear from one nostril, or alternate between nostrils, and that this is completely normal and needs nothing but noticing."
     },
     {
      "t": "It means the breath is being controlled, so let it return to normal",
      "ok": false,
      "why": "Changes that arise without your deliberate intention are not yours to correct, and he says to let the breath continue as it is."
     }
    ]
   },
   {
    "q": "A student recognises three sensations in each in-breath, while a friend at the same Stage reports a dozen. What does Culadasa say about the number?",
    "options": [
     {
      "t": "It is not that important; what matters is sharper perception and interest",
      "ok": true,
      "why": "He says it is possible to identify from four to a dozen or more, but that the actual number is not that important, and what matters is that perception grows sharper and you stay interested in and attentive to the breath."
     },
     {
      "t": "It measures progress, so a dozen is the mark to be reached before moving on",
      "ok": false,
      "why": "He gives the range only as what is possible, and says you will not necessarily observe that many."
     },
     {
      "t": "It should be kept low, since counting sensations is a form of analysis",
      "ok": false,
      "why": "Recognising individual sensations is the task he sets, and the analysis he warns against is the analysis of distractions."
     },
     {
      "t": "It must match on the in-breath and out-breath before following is done",
      "ok": false,
      "why": "He says the out-breath yields a somewhat smaller number, because its sensations are subtler."
     }
    ]
   },
   {
    "q": "What form does 'connecting' take when it is first introduced at Stage Three?",
    "options": [
     {
      "t": "Linking features of the breath to how agitated or how dull the mind is",
      "ok": false,
      "why": "Connecting the breath to states of mind waits until Stages Four and Five, when introspective awareness has improved enough."
     },
     {
      "t": "Comparing the lengths of breaths and pauses, and how they change over time",
      "ok": true,
      "why": "He begins with noticing which pause is longer, then comparing the in-breath with the out-breath, and then tracking relative changes over time."
     },
     {
      "t": "Joining each breath to the next, so that attention is left with no gap",
      "ok": false,
      "why": "Connecting is an extension of following that involves making comparisons and associations, not a way of closing gaps between breaths."
     },
     {
      "t": "Tying each distraction to the label it was given, to spot it sooner",
      "ok": false,
      "why": "Recognising recurring distractions is the work of labeling, which he treats as a separate practice."
     }
    ]
   },
   {
    "q": "What does the Stage Three chapter say about meditating lying down or in a comfortable chair?",
    "options": [
     {
      "t": "Never use it, since stillness can only be learned sitting upright on the floor",
      "ok": false,
      "why": "He allows the exception for health, and Stage One accepts a straight-backed chair as readily as the floor."
     },
     {
      "t": "Use it freely, since all four postures work and none of them is more correct",
      "ok": false,
      "why": "That is the general statement in Stage One, which this chapter qualifies once drowsiness has become the problem."
     },
     {
      "t": "Use it when drowsy, since a relaxed body lets the mind recover its alertness",
      "ok": false,
      "why": "It is the reverse, since his antidotes for drowsiness include standing up and walking."
     },
     {
      "t": "Avoid it unless a health condition requires it, as you may sleep for a long time",
      "ok": true,
      "why": "He says that lying down or in a comfortable chair you might sleep for a long time, which is why you should not meditate in these positions unless arthritis or some other health condition absolutely requires it."
     }
    ]
   },
   {
    "q": "Why, according to Culadasa, do antidotes such as forceful breathing, tensing the muscles and standing up work against drowsiness?",
    "options": [
     {
      "t": "They stimulate body and mind by increasing the flow of external stimuli",
      "ok": true,
      "why": "He says they work because they stimulate you physically and also mentally, by increasing the flow of external stimuli into the mind."
     },
     {
      "t": "They raise the heart rate, which sends a larger supply of oxygen to the brain",
      "ok": false,
      "why": "He gives no physiological account of this kind, and his explanation is that the untrained mind needs stimulation to stay awake."
     },
     {
      "t": "They break up the sit, which gives the mind a short rest from the breath",
      "ok": false,
      "why": "The antidotes are followed by going straight back to practice, and standing and walking are themselves ways of continuing to meditate."
     },
     {
      "t": "They are unpleasant, and a little aversion is what keeps the mind awake",
      "ok": false,
      "why": "The mechanism he names is stimulation, and he warns against doing more than necessary because that creates agitation."
     }
    ]
   },
   {
    "q": "What does Culadasa say a meditator will notice about the experience of coming out of drowsiness?",
    "options": [
     {
      "t": "It passes unnoticed, since awareness only returns some time afterwards",
      "ok": false,
      "why": "He treats the moment as something to observe closely, and as a great opportunity to investigate how dullness develops."
     },
     {
      "t": "It brings a bright, refreshed clarity that lasts for the rest of the sit",
      "ok": false,
      "why": "He says dullness usually sets in again within a short time, like a heavy cloak."
     },
     {
      "t": "It is distinctly unpleasant, and one would probably prefer to stay there",
      "ok": true,
      "why": "He says that if you observe closely, coming out of drowsiness is distinctly unpleasant and you would probably prefer to stay there, so returning to the practice means resisting that urge."
     },
     {
      "t": "It is neutral in feeling, though the dullness that follows is pleasant",
      "ok": false,
      "why": "He does call the subtle dullness that follows comfortable, but the waking itself he calls distinctly unpleasant."
     }
    ]
   },
   {
    "q": "How does Culadasa define mindfulness?",
    "options": [
     {
      "t": "As attention to the present moment that passes no judgment at all on it",
      "ok": false,
      "why": "That is a common modern definition, but his is stated in terms of how attention and awareness work together."
     },
     {
      "t": "As remembering to keep attention on the object that has been chosen",
      "ok": false,
      "why": "He calls 'mindfulness' a somewhat unfortunate translation of sati precisely because it suggests being attentive or remembering to pay attention."
     },
     {
      "t": "As strong peripheral awareness that is freed from the pull of attention",
      "ok": false,
      "why": "Both faculties are needed, and the result he describes includes attention used with greater precision and objectivity."
     },
     {
      "t": "As the optimal interaction between attention and peripheral awareness",
      "ok": true,
      "why": "He says that by mindfulness he specifically means the optimal interaction between attention and peripheral awareness, which requires increasing the overall conscious power of the mind."
     }
    ]
   },
   {
    "q": "What does Culadasa mean by 'awareness deficit disorder'?",
    "options": [
     {
      "t": "A chronic inability to keep attention on one object for long",
      "ok": false,
      "why": "That describes unstable attention, whereas his term names the neglect of peripheral awareness."
     },
     {
      "t": "A chronic lack of awareness that comes from over-using attention",
      "ok": true,
      "why": "He describes it as a chronic lack of awareness due to over-using attention, which is under direct conscious control where peripheral awareness is not, so awareness is neglected and stunted."
     },
     {
      "t": "A loss of awareness that is produced by dullness in meditation",
      "ok": false,
      "why": "Dullness does rob the mind of conscious power, but this term refers to a lifelong habit of favouring attention."
     },
     {
      "t": "A habit of spreading awareness so widely that nothing stays clear",
      "ok": false,
      "why": "The problem he names is too little use of awareness, not too much."
     }
    ]
   },
   {
    "q": "According to the First Interlude, why does peripheral awareness fade when attention focuses intensely on something?",
    "options": [
     {
      "t": "Both draw on one limited supply of conscious power, so one dims the other",
      "ok": true,
      "why": "He says attention and awareness draw their energy from the same limited source, so there is always a trade-off until the total power of consciousness is increased."
     },
     {
      "t": "Attention pushes awareness aside in order to protect the object that it holds",
      "ok": false,
      "why": "He describes a shortage of shared energy, not one faculty acting against the other."
     },
     {
      "t": "Awareness works more slowly than attention, and so it cannot keep pace",
      "ok": false,
      "why": "He says peripheral awareness responds more quickly than attention, because it processes information less thoroughly."
     },
     {
      "t": "Awareness is used up as each of its objects is handed over to attention",
      "ok": false,
      "why": "Awareness goes on filtering and selecting objects for attention, and what runs short is the energy available to both."
     }
    ]
   },
   {
    "q": "How does the First Interlude say attention and peripheral awareness differ in the way they take things in?",
    "options": [
     {
      "t": "Attention is non-conceptual, while awareness turns things into concepts",
      "ok": false,
      "why": "He says attention turns its objects into concepts, while peripheral awareness is only minimally conceptual."
     },
     {
      "t": "Attention is objective, while awareness is coloured by mood and feeling",
      "ok": false,
      "why": "It is the other way round, since objects of attention are easily distorted by desire, fear and aversion."
     },
     {
      "t": "Attention deals with the outer world, while awareness watches the mind",
      "ok": false,
      "why": "Both attention and awareness can be either extrospective or introspective."
     },
     {
      "t": "Attention tends to be self-centred, while awareness is more objective",
      "ok": true,
      "why": "He says attention usually involves a strong concern for self and leads us to identify with objects and states, while peripheral awareness is less personal and takes things in more as they are."
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
   },
   {
    "q": "Explain what Culadasa means by mindfulness, as a teacher would need to at the point where its training begins.\n• Give his definition, and say why he calls 'mindfulness' an unfortunate translation.\n• Set out what attention and peripheral awareness each normally do, and what goes wrong when awareness fails.\n• Explain why only peripheral awareness can watch the mind, and what that means for the practices of Stage Three.",
    "model": "Definition. He says 'mindfulness' is a somewhat unfortunate translation of sati, because it suggests being attentive or remembering to pay attention. We are always paying attention to something. With sati we pay attention to the right things and more skilfully, because we are more fully conscious and alert than normal. His own definition is the optimal interaction between attention and peripheral awareness, which requires increasing the overall conscious power of the mind. He offers 'fully conscious awareness' as a clumsier but more accurate phrase.\n\nWhat each faculty does. Attention picks one object out of the field of conscious awareness and analyses and interprets it. To do that quickly it turns its objects into concepts. Peripheral awareness takes in everything the senses provide. It is open, inclusive, holistic and only minimally conceptual, and it supplies context: where we are, what is going on, what we are doing and why. His example is the rope taken for a snake, which context corrects. Awareness has three other jobs. It is where anything new first appears, and it filters out what is unimportant and passes on what deserves attention. It stays on the lookout while attention is occupied, and can free attention and redirect it. And it handles what needs no analysis or happens too fast for attention, because less processing means a quicker response. In turn, what attention takes an interest in trains awareness to watch for it. The last difference is objectivity. Attention carries a strong concern for self, so its objects are easily distorted by desire and fear, and it identifies: 'I am annoyed'. Awareness is less personal: annoyance is arising.\n\nWhen awareness fails. He gives a consequence for each function. Without context we misinterpret, overreact and decide badly. Without the lookout, attention moves blindly and is taken off guard. Without its quick handling we do not react at all, or we react automatically and mindlessly. And when awareness fades, perception becomes self-centred and distorted.\n\nWatching the mind. Both faculties can be extrospective or introspective, but he says only peripheral awareness can observe the overall state of the mind and its activities. Attention cannot observe the mind's activities because its own movements are activities of the mind: we cannot attend to attention. And because it works by isolating objects, it cannot take in an overall state.\n\nWhat this means at Stage Three. Two things, as I read it. The instruction to keep extrospective awareness while following the breath closely is mindfulness training in his exact sense, and he says this training starts in Stage Three. And the faculty that will eventually guard against forgetting has to be awareness. Checking in uses attention, so it can only be a way of training awareness, which is how the chapter presents it. The chapter does not draw that second connection in these words.",
    "rubric": [
     "Gives the definition (the optimal interaction between attention and peripheral awareness, requiring more conscious power) and why the translation is unfortunate: it suggests merely being attentive or remembering to pay attention.",
     "Describes attention (selects one object, analyses and interprets it, conceptualises) and peripheral awareness (open, holistic, minimally conceptual, supplying context), with their interaction: awareness filters and alerts, and attention trains awareness.",
     "Includes the further differences: awareness responds faster with less processing and handles what needs no analysis; attention is more self-centred and identifies, while awareness is more objective.",
     "States what goes wrong when awareness fails: misinterpretation and overreaction, attention moving blindly, automatic or absent reactions, and self-centred, distorted perception.",
     "Explains why only peripheral awareness can observe the mind's state and activities (attention cannot attend to itself, and it isolates objects), and applies this to Stage Three, marking the application as the answerer's reading."
    ]
   },
   {
    "q": "Stage Three asks for the breath to be followed ever more closely, and in the same passage warns against losing awareness of everything else.\n• Use the First Interlude to explain why these pull against each other in an untrained mind.\n• Give Culadasa's two reasons why mindfulness has to be cultivated, and the ways he says it is lost.\n• Explain how the conflict is resolved, and give the three reasons the Stage Three chapter offers for keeping extrospective awareness.",
    "model": "Why they pull against each other. He asks us to think of consciousness as a limited power source from which attention and awareness both draw. With a fixed supply there is always a trade-off. When attention focuses intensely, the field of conscious awareness contracts and peripheral awareness of the background fades. Intensify the focus enough and the context and guidance that awareness provides disappear altogether, which he compares to wearing blinders or having tunnel vision. The trade-off runs the other way too. In a relaxed state awareness opens and the intensity of attention dissipates; relax further and attention fades, and more often than not dullness sets in. When one grows brighter the other becomes dimmer.\n\nWhy mindfulness has to be cultivated. Two reasons. The first he calls awareness deficit disorder: a chronic lack of awareness from over-using attention. Attention is under direct conscious control and awareness is not. Awareness arises automatically, so it is easy to neglect, and neglect stunts it. The second is power. We do not have enough conscious power to sustain mindfulness, especially when we need it most. His example is a partner who complains about the food after a bad day: when strong emotion takes hold, all the energy pours into hyper-focused attention, awareness fails, and the remark is taken as a personal attack.\n\nHow it is lost. All the ways come down to not having enough conscious power for an optimal interaction. Intense focus is one. Attending to many things is another, since that takes considerable power, so mindfulness is lost in multitasking. Emotional stress does the same, with many worries competing for attention. And dullness robs us of the power directly.\n\nThe resolution. The answer is not to find the right compromise between the two. The goal is to increase the total power of consciousness available for both, so that there are no more trade-offs. He says there is only one way to do it: exercises in which close attention and strong peripheral awareness are sustained at the same time, like weight training. The more vivid attention can be made while awareness is still sustained, the more power is gained. So the two halves of the Stage Three instruction are one exercise and not two competing demands. That last sentence is my way of putting it.\n\nThe chapter's three reasons. First, when you focus closely the mind naturally tends to drop awareness of bodily sensations and external stimuli, and if that happens you become more vulnerable to both forgetting and drowsiness. Second, emphasising attention and peripheral awareness together increases the total power of consciousness, which he calls the key to progress in later Stages. Third, allowing the full range of awareness has great potential for Insight even at this early Stage, because you are watching and learning from the activity of the mind as a whole and not only observing the breath.",
    "rubric": [
     "Explains the trade-off: attention and awareness draw on one limited power source, so intense focus contracts awareness (tunnel vision), and deep relaxation lets attention fade towards dullness.",
     "Gives the two reasons mindfulness must be cultivated: 'awareness deficit disorder' (awareness neglected because attention is under direct control) and insufficient conscious power, especially under strong emotion.",
     "Lists the ways mindfulness is lost, all as shortages of conscious power: intense focus, multitasking, emotional stress, dullness.",
     "Gives the resolution: increase the total power of consciousness by sustaining close attention and strong awareness at the same time (the weight-training comparison), so that the two instructions are one exercise; marks that formulation as the answerer's.",
     "Gives the chapter's three reasons for keeping extrospective awareness: less vulnerability to forgetting and drowsiness; more total conscious power, the key to later Stages; and the potential for Insight from watching the mind as a whole."
    ]
   },
   {
    "q": "Explain following and connecting as Stage Three uses them.\n• Say what the two techniques are for at this Stage, and in what manner they are to be done.\n• Give the steps of following beyond Stage Two, including what he says about the number of sensations and about changes in the breath.\n• Describe connecting as introduced here, what is deferred to later Stages, and how much he expects of it now.",
    "model": "What they are for. Forgetting is overcome by catching distractions before they cause it, and that needs periods of attention long enough to look at the mind. His image is a raft on a turbulent sea: attention to the breath is the anchor, and only when the raft is steady can you stand up, see a wave coming and manoeuvre. Following and connecting supply the steadiness. They give the mind simple tasks, or games, that make the breath more interesting and so counter the tendency of attention to leave it. He adds two conditions. They are to be done without losing peripheral awareness, and always in a relaxed manner, not with driven intensity.\n\nFollowing. In Stage Two the task was to find the beginning and end of the in-breath and out-breath and the pauses between. The first goal now is to discern each of these with equal clarity. When that is easy, the next challenge is the individual sensations inside each half of the breath: first three or four distinct sensations in every in-breath, with the rest of the cycle kept as clear as before, and then the same with the out-breath. On number, he says it is possible to identify from four to a dozen or more on the in-breath and somewhat fewer on the out-breath, where they are subtler, but that the actual number is not that important. What matters is that perception sharpens and that you stay interested and attentive. If you miss, there is always the next breath. On changes in the breath, he mentions two. The breath may become exaggerated as unconscious processes try to help, which is all right so long as you are not doing it intentionally. And the sensations may weaken, disappear from one nostril, or alternate between nostrils, which is normal and needs only noticing.\n\nConnecting. He calls it an extension of following that involves making comparisons and associations, and a more advanced technique, introduced early for those who need a new challenge. It begins with the two pauses: which is longer? Then the in-breath against the out-breath. Then changes over time: are they longer or shorter than earlier, and is the longer pause still the longer one?\n\nWhat is deferred. Connecting the details of the breath to the state of the mind, for example whether the breath is longer, deeper or coarser when the mind is agitated or drowsy, waits until Stages Four and Five, when introspective awareness has improved enough. He says it then becomes another way of detecting subtle and changing states of mind.\n\nHow much to expect. Not much yet. He says not to set expectations too high, that you may find connecting is not particularly useful at this Stage, and that it is described here only because some will benefit from using it sooner. So I would teach following to every Stage Three student and offer connecting only to one who has run out of challenge. That ordering is my inference from his wording.",
    "rubric": [
     "States the purpose: longer, steadier attention so that the mind can be observed and distractions caught before forgetting (the raft and anchor), by making the breath more interesting; done without losing peripheral awareness and in a relaxed manner, not with driven intensity.",
     "Gives the steps of following: all points of the cycle with equal clarity; then three or four distinct sensations in each in-breath; then the same for the out-breath.",
     "Reports what he says about number (four to a dozen or more is possible, fewer on the out-breath, but the number is not that important) and about changes in the breath (unintended exaggeration is all right; fading or alternating between nostrils is normal).",
     "Describes connecting as introduced: comparing the two pauses, the in-breath with the out-breath, and their changes over time; and what is deferred to Stages Four and Five: connecting the breath to states of mind.",
     "States how little he expects of connecting now (it may not be particularly useful at this Stage; expectations kept low) and marks any teaching order built on that as the answerer's inference."
    ]
   },
   {
    "q": "Culadasa says the three intentions of Stage Three 'are simply elaborations of those from Stage Two'.\n• Set the two sets of intentions side by side and say what each elaboration adds.\n• Explain what stays the same between the two Stages, and what he says will happen to mind-wandering.\n• A student newly at Stage Three still waits for the 'aha' before doing anything. Say what is missing and how you would put it to them.",
    "model": "Side by side. Stage Two's intentions are to appreciate the 'aha' moment that recognises mind-wandering, to redirect attention gently but firmly to the breath, and to engage with the breath as fully as possible without losing peripheral awareness. Stage Three's are to invoke introspective attention frequently, before the breath has been forgotten or sleep has come; to make corrections as soon as distraction or dullness is noticed; and to sustain peripheral awareness while engaging with the breath as fully as possible.\n\nWhat each elaboration adds. The first moves from receiving to initiating. At Stage Two the waking up is spontaneous and can only be welcomed. At Stage Three the meditator also looks on purpose, with attention, and does so before the loss and not after it. The second moves the correction earlier and widens it. At Stage Two there is one correction, returning after mind-wandering. Now the correction is made when a gross distraction is found, by tightening up on the breath, and it covers dullness as well. The third keeps its wording almost unchanged and deepens in content: engagement now means following in finer detail and, for some, connecting, and the awareness to be sustained is extrospective awareness, with introspective awareness being added to it. The pairing of each intention with its predecessor is my reading. He says only that they are elaborations.\n\nWhat stays the same. The mechanism. In both Stages the meditator holds intentions, the intentions produce simple actions, and repetition turns the actions into habits. He says that once these become habits you will rarely forget the breath. Appreciating spontaneous introspective awareness also continues. He says to keep practising what was learned in Stage Two and that mind-wandering will eventually stop completely. Nothing from Stage Two is dropped.\n\nThe student who waits. What is missing is the first elaboration. Waiting for the 'aha' is Stage Two's method, and it works after forgetting has happened, so by itself it can shorten mind-wandering but cannot prevent forgetting. I would begin by saying that the waiting is not wrong, and that the speed of their waking up is why they are at this Stage. Then I would describe the new step as a small one: every half-dozen breaths or so, without counting, glance at the mind, gently and briefly. Is something other than the breath taking over? Is there dullness? If so, tighten up on the breath. I would give the reason in his terms: attention that takes an interest in the state of the mind trains awareness to watch for it, so that in time the looking happens without being done. And I would warn them that it will feel like an interruption at first, and that at this Stage he calls the interruption the key.",
    "rubric": [
     "States both sets accurately: Stage Two (appreciate the 'aha'; redirect gently but firmly; engage fully without losing peripheral awareness) and Stage Three (invoke introspective attention frequently, before forgetting or sleep; correct as soon as distraction or dullness is noticed; sustain peripheral awareness while engaging fully).",
     "Explains the elaborations: from receiving a spontaneous 'aha' to deliberately looking, and earlier; from one correction after mind-wandering to corrections before the loss, for dullness as well as distraction; closer engagement with awareness sustained; marks the pairing as the answerer's reading.",
     "States what stays the same: intentions produce actions that become habits; Stage Two's practice continues, and he says mind-wandering will eventually stop completely.",
     "Diagnoses the waiting student: relying on the 'aha' alone works only after forgetting, so it cannot prevent it; the deliberate check-in is what is missing.",
     "Puts it to the student by crediting the quick waking up, describing the check-in as small, gentle and brief, giving the reason (attention trains awareness), and warning that the interruption is expected and is the key at this Stage."
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
   },
   {
    "q": "A student at Stage Three reports: 'My friend says she gets ten or twelve separate sensations in every in-breath. I get about four, so I've been pushing: really boring in, hunting for more. Now my breathing has gone strange, as if I'm forcing it, one nostril seems to have gone dead, and my jaw aches by the end. I'm also losing the breath more often than I did a month ago. What am I doing wrong?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, the starting point is good, and I would say so. Four distinct sensations in every in-breath is the target Culadasa sets for this step: three or four, every time. The student has reached it. They have also been working diligently and noticing a great deal about their own sits.\n\nSecond, the comparison is the first problem. He says it is possible to identify from four to a dozen or more sensations, and then adds that this does not mean you will necessarily observe that many, and that the actual number is not that important. What matters is that perception grows sharper and that you stay interested in and attentive to the breath. The friend's twelve is not a standard. The Second Interlude's advice for self-doubt is plain on this: do not compare yourself to others.\n\nThird, the manner. He says following and connecting should always be done in a relaxed manner and not with driven intensity. Boring in and hunting is driven intensity, and the aching jaw is what it costs. That the tension comes from the hunting is my inference from the report.\n\nFourth, the losing of the breath. This is the result he predicts for close focus at the expense of awareness. When you focus closely the mind tends to drop awareness of the body and of external stimuli, and he says that if this happens you become more vulnerable to both forgetting and drowsiness. So more effort has produced more forgetting. I would check this by asking whether sounds and the body are still present while they hunt.\n\nFifth, the two things that feel wrong and are not. The strange breathing: when you intend to discern more, unconscious processes try to help by exaggerating the breath, and he says that is perfectly all right so long as you are not doing it intentionally, and warns against taking ownership of something you did not do. I would ask which it is, since deliberately pushing the breath would be something to drop. The dead nostril: sensations may grow weaker, disappear from one nostril or alternate between the two, and he calls this completely normal.\n\nWhat I don't know. Whether the breath is being altered on purpose. Whether the jaw is clenched throughout or only during the hunt. How sleep and stress have been this month, since those also affect forgetting.\n\nResponse. Tell them they had already arrived, and that nothing in the method asks for twelve. Then change the manner and not the task. Relax the face and jaw at the start and whenever tension is noticed. Follow with interest and let the sensations come; if a breath is missed, there is the next one. Keep sounds and the body in the background on purpose. If four has become too easy to hold their interest, the next challenge he offers is not more of the same but connecting: comparing the pauses and the lengths of the breaths. And suggest they stop exchanging numbers with the friend. That last piece of advice is mine.",
    "rubric": [
     "Credits the starting point: three or four distinct sensations per in-breath is the target he sets, and the student had reached it.",
     "Deals with the comparison from the text: four to a dozen or more is possible but the number is not that important; sharper perception and continued interest are what matter; the antidote to self-doubt includes not comparing yourself to others.",
     "Identifies the manner as the fault (driven intensity where he asks for a relaxed manner), marks the link to the jaw tension as inference, and explains the increased forgetting by close focus dropping extrospective awareness, with a question to test it.",
     "Normalises the two alarms correctly: exaggeration of the breath is all right if it is not done intentionally (and asks which it is); weakening, loss in one nostril or alternation is completely normal.",
     "Prescribes a change of manner, awareness kept open, and connecting as the next challenge if one is needed, and notes the weighting: teachers differ on whether to take detailed following away for a while or simply relax it, and on how much weight to give sleep and stress in the extra forgetting; the advice about not swapping numbers is the teacher's own."
    ]
   },
   {
    "q": "A student at Stage Three reports: 'Labeling has opened something up for me. When I catch a distraction I don't just label it, I trace it back. Planning tomorrow's meeting, because I'm anxious about it, because my manager reminds me of my father. I'm learning more about myself than in years of journaling. The sits are mostly this now, and I come away with real insights. Isn't this exactly what mindfulness is for?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, several things here are worth having. The student is catching distractions and can say what they are, which means introspective awareness is growing and labeling is doing its job. The curiosity about the mind is something Culadasa wants. He says that even at these early Stages there is great potential for Insight, because you are watching and learning from the activity of the mind as a whole.\n\nSecond, what the student is doing is not labeling. The instruction is narrow: at the moment you realise you are off the breath, give the distraction a simple, neutral label, only the most recent thought if there was a series, and gently return. He adds: always avoid analysing distractions, which only creates more distraction. Tracing a thought back to a manager and a father is analysis, and the report confirms his prediction. The sits are now mostly this.\n\nThird, what is and is not being trained. Labeling exists to teach awareness which distractions steal attention, so that it can alert you before forgetting. Each chain of analysis is itself a stretch of discursive thinking with the breath gone. I infer that the sits are training fluent self-reflection, which the student already had from journaling, and are no longer training the skill this Stage is for. That inference is mine.\n\nFourth, the question deserves a straight answer. In his terms, no. Mindfulness is the optimal interaction between attention and peripheral awareness, and the learning he has in mind comes from awareness observing the mind while attention stays on the breath. It does not come from attention leaving the breath to think about the mind. Stage Four makes the same point about insights that arise in a sit: they are often valid, but pursuing them trains the mind to turn every sit into a kind of psychotherapy, so they are noted and taken up afterwards. There he also offers analytical meditation as a separate practice with its own time.\n\nWhat I don't know. Whether the connections the student is finding are distressing or simply interesting. Whether they want what this method offers, or have found something they value more. I would not assume.\n\nResponse. Take the insights seriously and do not argue about their truth. Then separate two activities that have been merged. On the cushion: one neutral word, such as 'planning', and back to the breath, with no tracing. Off the cushion: a set time, soon after the sit, to write down and think through whatever seemed important. If a connection feels urgent mid-sit, make a mental note and promise it that time. I would tell them honestly what the trade is: fewer insights of this kind during the sit for a while, in exchange for attention that stays and an awareness that, by his account, later sees the mind far more directly. If the material about the father turns out to be heavy, that is a conversation for a counsellor as well as a meditation teacher.",
    "rubric": [
     "Credits what is working: distractions are caught and identified (introspective awareness growing), and curiosity about the mind is valued, since he sees potential for Insight even at early Stages.",
     "States the instruction the student has left behind: a simple, neutral label for the most recent thought and a gentle return; 'always avoid analysing distractions, which only creates more distraction'; sits that are 'mostly this' are the predicted result.",
     "Explains what labeling is for (teaching awareness which distractions steal attention) and marks as inference that the sits now train self-reflection in place of the Stage's skill.",
     "Answers the question in his terms: mindfulness is the interaction of attention and peripheral awareness, with the mind known in awareness while attention stays on the breath; cites Stage Four's handling of insights (note them, take them up afterwards; analytical meditation as a separate practice).",
     "Separates on-cushion labeling from off-cushion reflection without disputing the insights, and notes the weighting: teachers differ on how much room to give self-inquiry inside a sit, and those with a therapeutic orientation would value the material more; whether it needs a counsellor depends on how heavy it is, which the report does not show."
    ]
   },
   {
    "q": "A student who has been at Stage Three for some months reports: 'Most of the sit is steady now, and my check-ins usually find nothing much. But two or three times a sit I get ambushed. A thought about my ex, or about money, and I'm gone instantly, no build-up at all. I wake up thirty seconds later with my heart going. Check-ins can't catch something that fast. Am I stuck here until I've sorted my life out?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, this is a report from near the end of the Stage. A mostly steady sit, check-ins that find little, and a waking up within thirty seconds mean that mind-wandering is short and forgetting is becoming the exception. I would say that before anything else.\n\nSecond, the ambush is in the book. Culadasa says forgetting often happens gradually, but that when the distracting thought is highly charged, attention can be captured quickly and intensely and the meditation object disappears at once from consciousness. So the student's account is accurate, and so is their conclusion about check-ins. A check-in looks for a gross distraction that is still sharing attention with the breath. A capture with no build-up gives it nothing to find.\n\nThird, what the Stage does offer. Labeling: at each waking up, one neutral word for what took you. He says this teaches introspective awareness which distractions are most likely to steal attention, the faces of your abductors, until it can alert you before forgetting. Two topics that ambush repeatedly are exactly what that is for. Peripheral awareness: Stage Two says that if it is maintained you learn to notice potential distractions as they arise, and attention is less likely to be captured. And the Six-Point Preparation asks for an inventory of what might come up, with a resolve to set it aside. None of these is a guarantee against a charged thought. He does not claim one, and I would not.\n\nFourth, where this belongs. Emotionally charged material is named among the distractions of Stage Four, which has its own methods for it. The Overview lets a meditator begin on the next Stage's obstacles once the present ones are overcome even temporarily, and its wording for mastery of Stage Three is that you rarely forget. Reading two or three brief ambushes as compatible with moving on is my judgment. Others would hold to the stricter wording of the chapter, that forgetting no longer occurs.\n\nFifth, 'until I've sorted my life out'. Partly. The Second Interlude treats worry and remorse as agitation that also has remedies off the cushion: positive action where something can be resolved. But it does not make progress wait for that.\n\nWhat I don't know. Whether the pounding heart settles quickly. Whether the thirty seconds are spent lost in the story or already half aware. Whether these topics are live crises.\n\nResponse. Congratulate them, and agree that check-ins will not catch this. Then give the three things that bear on it: name the two topics in the preparation and set them aside; label at each waking up and appreciate it; and keep awareness of the body and of sounds open through the sit. When the heart is going, relax the body before returning. Tell them that this is Stage Four's territory arriving a little early, that a method for charged material is coming, and that some of the charge may ease if the money and the ex are given attention at another time of day.",
    "rubric": [
     "Credits the stage of practice: mostly steady sits, quiet check-ins and waking within thirty seconds indicate that forgetting is becoming the exception.",
     "Confirms the student's account from the text: a highly charged thought can capture attention quickly and intensely, with the object disappearing at once; agrees that a check-in, which looks for gross distraction still sharing attention with the breath, cannot catch that.",
     "Gives what the Stage does offer without overclaiming: labeling to teach awareness the 'faces of your abductors'; maintained peripheral awareness, which makes capture less likely; the preparation's inventory and resolve; none of them a guarantee.",
     "Places the problem: emotionally charged material is Stage Four's distraction; the Overview allows work on the next Stage once obstacles are overcome even temporarily; answers 'sort my life out' with the Second Interlude (off-cushion remedies exist, but progress does not wait on them).",
     "Weighting: teachers differ on whether a few brief captures a sit are compatible with moving on, since the Overview says 'rarely' and the chapter says forgetting no longer occurs; and on whether to bring Stage Four's method for charged material forward now or to keep to Stage Three's tools."
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
   },
   {
    "q": "A strong distraction takes centre stage and the breath slips out of attention altogether, though it is still faintly present in peripheral awareness. How does Culadasa classify this?",
    "options": [
     {
      "t": "Subtle distraction, since awareness of the breath is still present",
      "ok": false,
      "why": "A distraction is subtle only while the breath remains the primary focus of attention, and here the distraction has taken the centre."
     },
     {
      "t": "Forgetting, since the breath is no longer an object of attention",
      "ok": false,
      "why": "He grants that the breath is no longer an object of attention, yet says this is different from forgetting so long as it remains in consciousness."
     },
     {
      "t": "Mind-wandering, since attention has now left the breath entirely",
      "ok": false,
      "why": "Mind-wandering follows forgetting, when the breath has gone from consciousness and attention moves from thought to thought, which has not happened here."
     },
     {
      "t": "Gross distraction still, since the breath has not left consciousness",
      "ok": true,
      "why": "His note says that, strictly speaking, the breath is then no longer an object of attention, but that as long as it has not disappeared entirely from consciousness this differs from the forgetting of Stage Three."
     }
    ]
   },
   {
    "q": "Culadasa singles out two types of subtle distraction as especially troublesome at Stage Four. Which two?",
    "options": [
     {
      "t": "Those that come as pain, and those that come as strong emotion",
      "ok": false,
      "why": "Pain and emotions belong to his three persistent distractions that become gross, which is a different list from the two troublesome types of subtle distraction."
     },
     {
      "t": "Those with a special allure, and those that sneak in gradually",
      "ok": true,
      "why": "He names the noticeably attractive ones, which pull through allure or interest, and those that divert attention by the manner of their arising, sneaking in gradually until they displace the focus."
     },
     {
      "t": "Those that arise as words, and those that arise as mental images",
      "ok": false,
      "why": "He draws no line here between verbal and visual distractions, and defines the two types by allure and by gradual arising."
     },
     {
      "t": "Those from outside the body, and those that the mind itself makes",
      "ok": false,
      "why": "He does not sort the troublesome ones by sensory or mental origin, only by their allure and by how gradually they arise."
     }
    ]
   },
   {
    "q": "Culadasa says you could make attention more stable simply by bringing it back to the breath over and over. What does he say anchoring attention on the breath while sustaining introspective awareness does that this would not?",
    "options": [
     {
      "t": "It prevents subtle dullness, and not only the strong kind of it",
      "ok": false,
      "why": "Stable subtle dullness is still tolerated at this Stage, and overcoming all subtle dullness is left to Stage Five."
     },
     {
      "t": "It produces exclusive attention, and not only continuous attention",
      "ok": false,
      "why": "Exclusive attention is the work of Stage Six, and he warns that attempting it now costs you introspective awareness."
     },
     {
      "t": "It cultivates mindfulness, and not only stability of attention",
      "ok": true,
      "why": "He says sustained introspective awareness does not just make attention more stable, since returning over and over would do that, and that anchoring attention while maintaining it is cultivating mindfulness."
     },
     {
      "t": "It gives Insight into the mind, and not only a calmer experience",
      "ok": false,
      "why": "He promises a better understanding of how the mind behaves, but Insight experience belongs to his fourth level of mindfulness and is not what he claims here."
     }
    ]
   },
   {
    "q": "Besides major traumas and lesser trials such as teasing or parental favouritism, what further source of the charged material of Stage Four does Culadasa name?",
    "options": [
     {
      "t": "Internalised belief systems that are dysfunctional or in conflict",
      "ok": true,
      "why": "He says charged material also arises from internalised dysfunctional or conflicting belief systems, such as a work ethic that makes you feel guilty for meditating."
     },
     {
      "t": "Imprints of experiences carried over from one's previous lives",
      "ok": false,
      "why": "He mentions past-life recollections only among the seductions of dullness, and says that whatever surfaces was caused by something in your own history."
     },
     {
      "t": "Innate programming that is shared by every human being alike",
      "ok": false,
      "why": "Innate programming is what the Third Interlude says Insight reconditions at the fourth level, whereas this purification concerns conditioning from personal history."
     },
     {
      "t": "Unwholesome acts of the past that still call for making amends",
      "ok": false,
      "why": "That is the ground of Agitation due to Worry and Remorse in the Second Interlude, and it is not on his list of sources in this passage."
     }
    ]
   },
   {
    "q": "On catching a gross distraction, the natural tendency is to yank attention straight back to the breath. What does Culadasa say about this?",
    "options": [
     {
      "t": "It works for thoughts, but not for pain or for strong emotions",
      "ok": false,
      "why": "He makes no such division here, and asks for a gentle return whenever the mind has been drawn into gross distraction."
     },
     {
      "t": "It is right at this Stage, since gross distraction grows quickly",
      "ok": false,
      "why": "Speed of return is not his remedy for gross distraction, which is introspective awareness and fuller engagement with the breath."
     },
     {
      "t": "It is harmless, provided that no annoyance comes along with it",
      "ok": false,
      "why": "He treats the abruptness itself as what slows you down, and annoyance as one more thing to be let go of."
     },
     {
      "t": "It slows progress in the long run, so let go gently and easily",
      "ok": true,
      "why": "He says abruptly yanking yourself back will slow you down in the long run, and asks for a gentle, unhurried, even loving return that appreciates the part of the mind that noticed."
     }
    ]
   },
   {
    "q": "Culadasa tells the meditator to 'dissociate' from a difficult emotion. What does he say this means?",
    "options": [
     {
      "t": "Feeling only its bodily side, and leaving the mental side alone",
      "ok": false,
      "why": "Bodily sensations are where the investigation starts, and he then turns attention to the mental aspects once you are ready."
     },
     {
      "t": "Cooling it down by turning attention back to the breath at once",
      "ok": false,
      "why": "He rules out pouring cold water on the emotion, and at this point the emotion is itself the meditation object."
     },
     {
      "t": "Letting it come and do its dance without getting absorbed in it",
      "ok": true,
      "why": "He says dissociating does not mean failing to feel the emotion fully or pouring cold water on it, but letting it come into consciousness and do its dance without getting absorbed."
     },
     {
      "t": "Treating it as not yours, so that it need not be felt so fully",
      "ok": false,
      "why": "He does say there is no self in emotions, but he also says that dissociating does not mean you do not feel them fully."
     }
    ]
   },
   {
    "q": "A disturbing image arises that seems to have nothing to do with the meditator or with anything they have lived through. What does Culadasa say about it?",
    "options": [
     {
      "t": "Something in their history caused it, and knowing what is not important",
      "ok": true,
      "why": "He says that however bizarre it seems you can be sure something in your history caused it, perhaps a long-forgotten film image, and that whether you know the cause is not important."
     },
     {
      "t": "It is random mental noise, and it carries no significance of any kind",
      "ok": false,
      "why": "He says nothing in meditation is ever random or meaningless, and that everything arising is part of your psychic make-up."
     },
     {
      "t": "It is symbolic, and its meaning should be worked out after the sitting",
      "ok": false,
      "why": "He does say images symbolise material the mind is not comfortable confronting directly, but he says knowing the cause is not important and prescribes no decoding."
     },
     {
      "t": "It is a product of dullness, and the mind needs rousing straight away",
      "ok": false,
      "why": "Dream imagery in dullness is treated separately under the seduction of dullness, whereas this passage concerns material that surfaces as the mind grows calm."
     }
    ]
   },
   {
    "q": "A meditator notices progressive subtle dullness and responds only by strengthening the intention to observe the breath clearly and in more detail. When does Culadasa say this will work?",
    "options": [
     {
      "t": "Whenever the dullness has not yet reached the point of drowsiness",
      "ok": false,
      "why": "For dullness short of drowsiness that was not caught very early he gives stronger measures, such as expanding peripheral awareness or opening the eyes."
     },
     {
      "t": "Only for very subtle dullness that is identified very early on",
      "ok": true,
      "why": "He says raising the mind's energy just by strengthening this intention will only work for very subtle dullness, identified very early on."
     },
     {
      "t": "Only once the dullness has stopped returning for several minutes",
      "ok": false,
      "why": "Three to five minutes without dullness is his test that an antidote was strong enough, not a condition for using this one."
     },
     {
      "t": "Whenever it is paired with a brief check-in on the state of mind",
      "ok": false,
      "why": "He attaches no check-in to this antidote, and at this Stage he is replacing checking in with continuous introspective awareness."
     }
    ]
   },
   {
    "q": "In the Third Interlude, why does Culadasa say there is no 'magic' in the first level of mindfulness, moderating behaviour?",
    "options": [
     {
      "t": "It works on behaviour, whereas suffering comes from wrong views",
      "ok": false,
      "why": "Misconceptions about self and reality are what the fourth level reconditions, but his stated reason here is simply that the first level changes nothing lasting."
     },
     {
      "t": "It relies on attention alone, with no peripheral awareness in it",
      "ok": false,
      "why": "He describes the first level as staying mindful, attentive to our feelings and aware of the situation, so both faculties are at work."
     },
     {
      "t": "It happens off the cushion, and reprogramming needs meditation",
      "ok": false,
      "why": "The second level also happens in daily life and does reprogram conditioning, and only the third level is confined to meditation."
     },
     {
      "t": "It changes behaviour in the moment but makes no permanent change",
      "ok": true,
      "why": "He says awareness in the present moment lets us slow down and change our behaviour but makes no permanent changes, so that next time we react the same way unless we are mindful again."
     }
    ]
   },
   {
    "q": "In the thorn bush metaphor of the Third Interlude, what is the third level of mindfulness, the kind that happens on the cushion?",
    "options": [
     {
      "t": "Cutting off a whole trunk at the root, though the root survives",
      "ok": true,
      "why": "He says each purification in meditation cuts off an entire trunk with all its branches, yet the root still survives and new trunks can grow back."
     },
     {
      "t": "Trimming back the branches that hang across the path you walk",
      "ok": false,
      "why": "Trimming the branches is the second level, mindfulness sustained in daily life, where new branches keep growing to replace them."
     },
     {
      "t": "Destroying the root, so that the thorn bush can never grow back",
      "ok": false,
      "why": "Destroying the root is the fourth level, the Insight of Awakening, and not the purification that meditation brings."
     },
     {
      "t": "Dodging the thorn bush, so that it no longer scratches your face",
      "ok": false,
      "why": "Dodging the bush is the first level, moderating behaviour, which he says changes nothing in the long term."
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
   },
   {
    "q": "A student asks why sitting on a cushion should change anything that being mindful in daily life does not. Answer from the Third Interlude.\n• Explain what Culadasa means by 'invisible programs', why they do not change, and how mindfulness changes them.\n• Set out the four levels at which he says mindfulness works, and where each takes place.\n• Explain why he says meditation accomplishes more than mindfulness in daily life, and what even meditation leaves undone.",
    "model": "The programs. He says imprints of past experience shape our emotional reactions and behaviour, mostly without our knowing it. He calls this unconscious conditioning a collection of invisible programs: reactions that may have been appropriate once and are now submerged and fixed. They lie dormant until something triggers them. When that happens we get so focused on the triggering event and our own emotions that the programs take in no new information about the present situation. That is why they do not change. Mindfulness works because it supplies that information. When attention is not so captured by the moment that awareness fades, the unconscious mind is informed, in real time, that its reaction does not fit the situation and is harming more than helping.\n\nThe four levels. One: moderating behaviour. Staying mindful, we react less quickly, see more options and choose better. He says this makes no permanent change: next time we react the same way unless we are mindful again. There is no magic here. Two: becoming less reactive and more responsive. When mindfulness in daily life is strong enough, for long enough and often enough, the context and consequences of our reactions reach their unconscious sources and real reprogramming happens. Duration and consistency both matter. Even when emotion wins in the moment, or mindfulness is lost completely, he says honest, non-judgmental reflection afterwards begins the process, provided we do not become submerged in self-reproach. Three: reprogramming deep conditioning. He says this occurs only in meditation. It is the purification of mind, which he places mainly in Stage Four and also at Stage Seven. Four: the radical reconditioning of the innate tendencies that create all our suffering, which occurs only through Insight experience.\n\nWhy meditation does more. He gives two reasons. In daily life, conditioning can be reprogrammed only when something triggers it; in meditation, as the mind grows stable and quiet, deep memories, thoughts and emotions come to the surface without a trigger. And what surfaces is more fundamental: conditioning that drives a wide range of reactive behaviours, which daily life could reach only piecemeal, through many different triggering events. His metaphor is a thorn bush beside a path. The first level dodges it. The second trims the branches across the path, and new ones keep growing. The third cuts off an entire trunk at the root, with every branch on it.\n\nWhat it leaves undone. The root survives, and new trunks can grow back unless you remain vigilant. Only the fourth level, the Insight of Awakening, destroys the root. So the answer to the student has two halves. Practice in daily life is, in his word, essential, and he asks for it especially when it is easy, to build the capacity for when it is hard. Sitting reaches what daily life would have to wait for.\n\nCalibration. All of this is his account, asserted and illustrated but not demonstrated; 'informing unconscious processes' is a model of what happens. That purification is not confined to Stage Four is his statement. That it therefore need not be finished before a meditator moves on is my inference.",
    "rubric": [
     "Explains the programs: conditioned reactions stay fixed because, when triggered, we focus on the event and our emotions, so no new information gets in; mindfulness supplies that information in real time.",
     "Gives the four levels in order, with where each occurs: moderating behaviour (no permanent change, no magic); less reactive and more responsive (daily life; duration and consistency; reflection afterwards counts); deep conditioning (only in meditation; purification, mainly Stage Four and also Stage Seven); innate tendencies (only through Insight experience).",
     "Gives both reasons meditation does more: no trigger is needed, and what surfaces is more fundamental conditioning that drives many reactive behaviours.",
     "States what is left undone: the root survives and trunks can regrow; only the Insight of Awakening destroys it; daily-life practice remains essential.",
     "Calibration: presents the mechanism as his model, and marks any claim about how complete purification must be before moving on as inference."
    ]
   },
   {
    "q": "Stage Four tells the meditator to tighten up on the breath, and also not to focus on it too intensely. Reconcile the two.\n• Say when and why Culadasa asks for more intensity, and how much.\n• Set out what he says goes wrong when focus is too intense, at once and over a longer stretch.\n• Explain the balance he names as a challenge of this Stage, and how subtle distraction and subtle dullness are 'made use of' in finding it.",
    "model": "When and how much. He asks for more intensity at two moments: when introspective awareness shows a subtle distraction with the potential to become gross, and whenever you return to the breath after a gross distraction. The measure is specific. Intensify the focus, 'but not too much', only enough to keep other subtle distractions from becoming gross ones. The tools are following and connecting from Stage Three, and he says connecting is particularly useful now. He also asks that it be done in as relaxed and gentle a way as possible.\n\nWhat goes wrong with too much. At once: trying to force exclusive attention is, he says, a big mistake at this Stage. Hyper-focused tunnel vision is the kind of attention that goes with the fight-or-flight response, and it comes with tension and anxiety. Peripheral awareness may be lost completely, which leaves you more exposed to distraction and dullness, not less. Over a longer stretch there are two further costs, and they point in opposite directions. Focusing too intensely for too long excludes the thoughts and sensations that usually keep the mind alert, so its energy drops and dullness follows. And focusing too intensely can leave you over-energised and agitated. He adds that when attention is too intense for too long, mindfulness fades.\n\nThe balance. He names it among the practice goals: learning to identify and sustain a balance between an over-energised, easily distracted mind and a dull, lethargic one. His summary of close attention is that focus should be neither too intense and tight nor too relaxed and loose. So the two instructions are corrections on one dial, applied in opposite directions according to what introspective awareness reports. Distractions gaining ground: tighten. Tension, agitation or fading awareness: relax the force of attention.\n\nMaking use of the subtle forms. The chapter says you will learn to tolerate and even make use of subtle distractions and subtle dullness, and that they help with this balance. For dullness he is explicit. If you become over-energised, relax the force of attention 'to allow a little subtle dullness in', which lowers the energy of the mind; and stable subtle dullness is tolerated because it keeps the mind from becoming agitated and restless. For subtle distraction he is less explicit. My reading is that it does two jobs. Staying aware of things in the background keeps the brain stimulated, which is his stated reason for 'looking beyond' the meditation object. And the strength of the subtle distractions is the gauge that tells you how much to tighten. That second point is mine.\n\nWhat reconciles them. Introspective awareness. Without it, 'tighten' and 'relax' are guesses; with it, each is a response to something seen. That is why he tells the meditator to aim for a balance between attention and introspective awareness, and why the chapter that asks for tightening also forbids the single-pointed focus that would cost you the faculty doing the steering.\n\nFor teaching. Students tend to hear one half. The diligent hear 'tighten' and end up tense; the relaxed hear 'let it be' and drift. I would ask which mistake a student usually makes and give them the other half. That advice is mine, not the book's.",
    "rubric": [
     "When and how much: on spotting a subtle distraction that could turn gross, and on each return to the breath; only enough to keep subtle distractions from becoming gross; by following and especially connecting; relaxed and gentle.",
     "Costs of too much: fight-or-flight tunnel vision with tension and anxiety; loss of peripheral and introspective awareness; over time, dullness from excluding stimulation, or over-energised agitation; mindfulness fades.",
     "Names the balance between an over-energised, easily distracted mind and a dull, lethargic one (neither too tight nor too loose), and treats the two instructions as opposite corrections on one dial.",
     "Subtle forms made use of: allow a little subtle dullness in to lower energy; stable subtle dullness tolerated; marks the account of how subtle distraction is used as inference, since the chapter does not spell it out.",
     "Identifies introspective awareness as what steers between the two, which is why forced exclusive attention is ruled out at this Stage."
    ]
   },
   {
    "q": "A student believes they have finished Stage Four. Set out how you would judge it.\n• Give Culadasa's marks of mastery for attention, for dullness and for mindfulness.\n• Say what may still be present in a meditator who has mastered the Stage.\n• Say what a verbal report can and cannot establish, and what you would ask.",
    "model": "The marks. He says you have mastered Stage Four when you are free from both gross distractions and strong dullness. For attention: physical sensations, thoughts, memories and emotions still arise, but they no longer draw attention away, and you can direct and sustain attention at will, which he calls a unique and powerful ability. For dullness: it no longer leads to drowsiness, nor causes perception of the breath to grow dim or take on hypnagogic distortions. Within the chapter the goal is put as progressive subtle dullness rarely arising, and being quickly noticed and corrected when it does. For both problems, noticing and correcting have become automatic. For mindfulness, which he says has reached an important threshold: attention can precisely examine every part of the breath with little effort; perception of the meditation object has become non-verbal and non-discursive; and awareness can clearly discern how the breath changes over time. He ties this to the Buddha's words on knowing a long breath as long and a short breath as short.\n\nWhat may remain. Subtle distraction: the goal is that the breath stays the primary focus, not that the background is empty. Stable subtle dullness: he says you will still experience it until you overcome it in Stage Five. Pain: he says it disappears completely only in the later Stages. And purification: the Third Interlude says it occurs mainly in Stage Four but also at Stage Seven, so charged material may still surface. That a meditator can be past the Stage with purification unfinished is my inference from that sentence. He does not make it a criterion either way.\n\nWhat a report can and cannot establish. A report gives me the student's impression of their sits. It cannot easily separate a clear mind from a pleasantly dull one, because subtle dullness impairs the introspective awareness that would detect it, and a peaceful state with fewer distractions is just what he says tolerated stable subtle dullness produces. Nor does one report tell me how consistent the result is. The Overview says to move on only when you have achieved mastery, and warns that isolated experiences of more advanced Stages have no real significance for progress. Reading mastery as 'in most sits, not the best one' is my gloss on that.\n\nWhat I would ask. When a thought or a sound comes, does the breath stay as clear as before, or does it fade for a moment? That separates subtle from gross distraction. Does the breath ever go soft, dim or dreamlike, and does the head ever nod? Is the result the same late in a long sit? He allows that even a well-trained mind slips into strong dullness when extremely fatigued, so one sleepy sit after a bad night settles nothing. Are you still checking in with attention, or does the noticing happen while attention stays on the breath? Is there a running commentary on the breath, or is it known without words? And when something charged comes up, does it take over the sit?\n\nIf the answers fit, I would have them begin Stage Five, and say plainly that the Overview expects sits to move back and forth between Stages.",
    "rubric": [
     "Attention: free of gross distraction; sensations, thoughts, memories and emotions still arise but no longer draw attention away; attention can be directed and sustained at will; noticing and correcting are automatic.",
     "Dullness: free of strong dullness; no drowsiness, dimming or hypnagogic distortion of the breath; progressive subtle dullness rarely arises and is quickly corrected.",
     "Mindfulness: every part of the breath examined with little effort; perception non-verbal and non-discursive; awareness discerns how the breath changes over time.",
     "What may remain: subtle distraction, stable subtle dullness (Stage Five's work), some pain, and further purification (also at Stage Seven), with the last marked as inference where it is used as a criterion.",
     "Limits of a report and the questions that probe them: clear versus pleasantly dull, consistency across sits, whether checking in has given way to continuous introspective awareness."
    ]
   },
   {
    "q": "Explain Stage Four's teaching on pain as a teacher would need to hold it.\n• Say how Culadasa accounts for pain at this Stage, as against Stage Three, and what limits he sets before giving the method.\n• Set out the method, including what to investigate and the formula he borrows.\n• Give the three ways he says pain resolves, what to do when it does not, and what he claims the practice shows.",
    "model": "His account. In Stage Three, he says, pain came because you were not used to sitting still for long periods. Now pain becomes a way for the mind to resist practising. The mind magnifies ordinary discomforts, and will even create painful sensations that have no physical cause, especially in longer sits and on retreat. Such pain often disappears once it is made the focus of attention, only to show up elsewhere a little later. Regardless of its source, he says, pain must now be confronted as part of the practice.\n\nThe limits. You do not have to seek out pain. Do not suppress or ignore pain with a definite physical origin. If you suspect injury or disease and are not sure, consult a physician, since sitting posture could exacerbate an existing condition. Make yourself as comfortable as possible, with pillows, pads or anything else, so that the body does not interfere with training the mind.\n\nThe method. The basic strategy is already known: ignore unpleasant sensations as long as possible; make them the meditation object if they persist; move mindfully only when absolutely necessary. At this Stage you examine the pain more thoroughly and wait even longer before moving. Investigate its qualities: sharp, piercing, burning, aching, dull. Is it solid and unchanging, or does it fluctuate in intensity, area or location? Is it one sensation or a composite of several? Then search within the sensation for the source of the unpleasantness: how much is inherent in the sensation, and how much is the mind's reaction to it? The formula is Shinzen Young's: suffering equals pain multiplied by resistance. If resistance is zero, so is the suffering.\n\nHow it resolves. At first, attention may seem only to intensify the pain. After sustained investigation it often resolves in one of three ways: its intensity fades entirely; it continues as a strong sensation that no longer feels particularly painful; or it stays painful but can be effectively disregarded. He attributes this to no longer resisting, and warns that expecting it every time brings the resistance back. When pain disappears or can be ignored, always return to the breath, and repeat as needed.\n\nWhen it does not. Stay with the pain as the meditation object. He says the mind can be trained just as effectively with pain as with the breath, and names two advantages: pain draws attention so intensely that dullness and distraction are less likely, and because it generates many thoughts and emotions, strong introspective awareness is easier to maintain.\n\nWhat it shows. Unavoidable discomfort is an opportunity to distinguish the sensation from the mind's unnecessary reaction to it, which is the suffering. He quotes the Buddha: the uninstructed person feels two things, a bodily one and a mental one; the instructed disciple feels only the bodily one.\n\nCalibration. That the mind produces pain in order to resist practice is his claim, and nothing in a student's report can confirm it for a given pain. Two instructions also pull against each other: wait even longer before moving, and do not ignore pain of physical origin. He gives no test for telling the two apart beyond suspicion and a physician. My own rule, not his, is that pain which outlasts the sit or worsens from week to week is treated as physical until shown otherwise.",
    "rubric": [
     "Account and contrast: Stage Three's pain came from not being used to sitting still; now pain is a way the mind resists practice, magnified or created, and often moves when attended to.",
     "Limits: no need to seek pain; do not suppress or ignore pain of definite physical origin; physician if unsure; make yourself as comfortable as possible.",
     "Method: ignore, then make it the object, move mindfully only when necessary; investigate qualities, change and composition; separate sensation from reaction; suffering equals pain times resistance (Shinzen Young).",
     "Resolution: the three ways; the warning about expectation; return to the breath; if pain stays, keep it as the object, with the two advantages he names.",
     "Calibration: marks the resistance account as his claim, names the tension between waiting longer and respecting physical pain, and labels any practical test as the answerer's own."
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
   },
   {
    "q": "A student whose attention has become continuous reports: 'Meditation has turned into the most productive hour of my day. Last week I saw exactly how to restructure my team, on Tuesday I finally understood why my marriage ended, and yesterday the whole outline of my book arrived. I keep a notebook beside the cushion now so that I lose nothing. My thinking has never been this sharp. Isn't this what the practice is for?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThis is the gross distraction Culadasa calls discursive brilliance, and it is a sign of progress before it is a problem. I would say that first. He says that as attention grows more stable and mindfulness more powerful, the mind becomes better at creating and linking novel ideas and at appreciating their significance. The sharper thinking is what he predicts. He grants that such insights are often quite valid and very useful. The stability behind them is the student's own work.\n\nThe difficulty is what the hour is now training. He says that if you keep engaging with insights and thinking them through, compelling issues will arise whenever you sit: you will have trained the mind to make meditation into a kind of personal psychotherapy, or a tool for intellectual or artistic creativity. He names a further risk, which the student has just voiced: deciding that the new powers of analysis are the real benefit of meditation. And he predicts a decline. As the mind keeps dredging up material the quality drops, and ideas that seemed profound on the cushion often look trivial afterwards.\n\nThe notebook is not in the book. His instruction is a mental note and a resolve to address the insight after meditating. My reading is that a notebook beside the cushion tells the mind that producing ideas is what the sit is for, and rewards it each time. That inference is mine.\n\nWhat I don't know.\n\nWhether the insights are any good; he says the first ones may indeed be significant. How much of the sit they take: one idea noted in forty minutes is a different matter from an hour of thinking. Whether the student can still return to the breath at will, or whether, as he describes, returning has become difficult and the mind goes looking for something else to think about. And what the student wants from practice. If the aim is a clearer head for work, they are getting it, and I should say honestly that the Ten Stages ask for something else.\n\nResponse.\n\nI would not argue with the value of the ideas. I would say: these came because your mind is steadier, and the steadiness is the asset. Spend all of it on thinking and it stops growing. His word is trap, because it draws you away from the practice again and again.\n\nThen the method. When an insight comes, make a mental note, resolve to take it up afterwards, and return to the breath. If a thought keeps coming back with force, make it the object for a while without analysing its content, label it 'thinking, thinking', hold it until the intensity subsides, and return. He also recommends a separate session of analytical meditation on what came up, on another occasion, and calls that extremely useful. I would move the notebook out of the room and try ten minutes with it straight after the sit. That arrangement is mine, not his.\n\nI would name the cost plainly: for a few weeks the sits will feel less rewarding than the brilliant ones. And I would offer a test, his observation turned into an experiment: read last week's cushion insights cold, and count how many still look as good.",
    "rubric": [
     "Identifies discursive brilliance as a gross distraction, and credits it as a product of progress: more stable attention and stronger mindfulness improve thinking, and such insights are often valid.",
     "Names the trap: thinking insights through trains the mind to turn sits into therapy or a creativity tool; their quality declines; the conclusion that sharper analysis is the real benefit is one he warns of.",
     "States what a report leaves open: the worth of the insights, how much of the sit they take, whether returning to the breath is still possible at will, and what the student wants from practice.",
     "Gives his method: mental note and resolve to address it afterwards; a recurring thought taken as temporary object and labelled without analysing its content; analytical meditation as a separate practice.",
     "Weighting: the verdict on the notebook and the slot after the sit are the answerer's own; teachers differ on whether a notebook by the cushion is a harmless release or a reward for thinking, and on how hard to press a student whose stated aim is clearer thinking."
    ]
   },
   {
    "q": "A student working on Stage Four reports: 'I sit at six, before work. Within ten minutes my head drops. I take the deep breaths, I clench and release, and I'm clear for maybe a minute, then it's back. By the end I've been jolted awake a dozen times and I've hardly felt a breath. It has been like this every morning for three weeks. Standing up feels like giving up on the sit. Honestly, I think I'm wasting my time.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nStrong dullness, and the student is doing more right than they think. They recognise it, they apply antidotes unprompted, and they have sat every morning for three weeks through sits with no reward. I would say so before anything else. Culadasa says strong dullness becomes the next major obstacle as skill with distraction grows, and tells the meditator to be prepared to spend entire sessions working with it.\n\nThe specific problem has a name. He says that when dullness stays away for at least three to five minutes, the antidote was strong enough; when it returns sooner, the antidote was not strong enough or not applied for long enough; and when it returns almost immediately you are 'sinking', and need a much stronger antidote. A minute of clarity is sinking, or close to it. Deep breaths and clenching are the antidotes he says work well if the dullness is not too strong. For very strong dullness he prescribes walking meditation for a few minutes, or meditating while standing, and if nothing else works, getting up to splash cold water on the face and then going back to practising. So standing is the instruction for exactly this case, and the sit continues through it.\n\nThere is also a reason the alarm comes late. He says that when dullness is deep enough there is no introspective awareness left to alert you, so you find out by nodding. The second of his three steps, catching the return early, is hard because subtle dullness impairs the faculty that would catch it.\n\nWhat I don't know.\n\nWhether this is meditation dullness or ordinary tiredness. Stage Three says the two must be clearly distinguished: fatigue from stress, illness or lack of sleep will make anyone sleepy, a good night's rest is part of the practice, and when you meditate makes a difference. Stage Four adds that even a well-trained mind slips into strong dullness when extremely fatigued. So: how much sleep, and is it the same in a sit at another hour? I also don't know the posture, whether the eyes are closed, or how hard the student is focusing between episodes; he says focusing too intensely for too long lowers the mind's energy.\n\nResponse.\n\nFirst the question about sleep, asked without any suggestion of fault. If they are short of it, no antidote will hold.\n\nThen the change of method. Tomorrow, at the first nod, stand, or walk for a few minutes, and sit again only when fully alert. Judge each antidote by his clock: three to five clear minutes. Between episodes, keep peripheral awareness wide, taking in the body and sounds while attention stays on the breath, or meditate with the eyes open. And try one sit at a different hour as a comparison. That last suggestion is mine, drawn from Stage Three's remark about time of day.\n\nThen the reframe. A sit spent waking up twelve times is twelve repetitions of the first step. What is missing is the second, and it grows by catching the slide a little earlier each time: the breath going soft or vague before the head goes. He says the sooner dullness is caught, the milder the antidote it needs. He also says that at some point, usually after many interventions, the dullness may lift and the mind feel light and alert. I would not promise when.",
    "rubric": [
     "Credits recognition, self-applied antidotes and three weeks of persistence, and normalises with his statement that entire sessions may go to working with dullness.",
     "Identifies 'sinking' by his test (dullness back well inside three to five minutes) and matches the stronger antidotes: walking, standing, cold water; standing is the instruction for this case, not a defeat.",
     "Explains the late alarm: deep dullness leaves no introspective awareness to give warning, which is why catching the return early is the hard step and the one to train.",
     "States what a report leaves open: lack of sleep or fatigue as against dullness due to meditation, time of day, posture and eyes, over-intense focus between episodes.",
     "Weighting: teachers differ on whether to move or shorten the sit or to hold the six o'clock sit and work the antidotes; a good answer says which it chooses and why, and marks the comparison sit as the answerer's own."
    ]
   },
   {
    "q": "A student six months into practice reports: 'On the cushion things are steadier than ever. Off it, nothing has changed. On Thursday my teenage son rolled his eyes at me and I heard myself shouting before I knew I had started, the same as always. Afterwards I was so ashamed that I couldn't bear to think about it, and when I did I just went round and round on what a bad parent I am. If mindfulness worked, wouldn't I have caught it?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nIn the Third Interlude's terms, an invisible program ran. Culadasa describes exactly this: something pushes one of our buttons and, without mindfulness, we react before we choose. He says such programs lie dormant until triggered, and that when they fire we are so focused on the trigger and our own emotions that no new information reaches them. That is why it was 'the same as always'. Nothing here shows the practice failing. I would start with what is going well: steadier sits, and a reaction seen clearly enough afterwards to be described this honestly.\n\nTwo things in the report matter more than the shouting. The first is avoidance: 'I couldn't bear to think about it'. He says this is what usually happens. Revisiting is painful, so we put the event out of mind or justify ourselves, and that keeps vital new information from reaching unconscious processes. The second is self-reproach: 'round and round on what a bad parent I am'. He is specific that if you get caught up in self-reproach you are just reacting from, and reinforcing, more unwholesome programming. So the student has used both of the responses he names as blocking change, and not yet the one he recommends.\n\nAs for 'wouldn't I have caught it?': he says it is much harder to stay mindful when it matters most. He also says that being mindful and still unable to change how you feel and act is all right, and that when mindfulness is lost completely in the heat of the moment it can still be used afterwards.\n\nWhat I don't know.\n\nWhether this is rare or daily. Whether the student practises mindfulness in ordinary moments at all, or only on the cushion. And how heavy the shame is. If it is part of something larger, I would want to hear more before offering any technique.\n\nResponse.\n\nI would say: catching it in the moment is the hardest form of the skill, and you attempted it untrained. He asks for intentional practice in everyday life especially when it is easy, such as driving or eating a meal, to build the capacity for greater challenges. Choose one or two ordinary activities a day.\n\nThen Thursday. His instruction is to recall the event vividly and examine it honestly and non-judgmentally: what happened, your reaction, and its impact on yourself and others. That includes your feelings about how you acted. Guilt can be acknowledged as an unpleasant consequence of the action without becoming submerged in it. He says this reflection begins the reprogramming and makes it easier to stay mindful in future. If the review turns into the round-and-round, stop and name it: 'self-reproach'. The naming is my borrowing from Stage Four's handling of emotions; the Interlude does not give it.\n\nWhat to expect, in his terms: with consistent mindfulness, reactions to similar situations grow weaker and easier to let go of, sometimes without your realising it. He also says conditioning of this fundamental kind can surface in the stillness of meditation and be changed more radically there. I would mention that without promising it.\n\nWhether and how to repair things with the son is outside TMI. I would say it is worth doing, as my own view.",
    "rubric": [
     "Reads the outburst as a triggered program that took in no new information, credits the steadier sits and the honest recall, and does not treat the episode as failed practice.",
     "Identifies avoidance and self-reproach as the two responses he says keep new information from the unconscious, the second as reacting from and reinforcing more unwholesome programming.",
     "Gives his remedies: practise mindfulness in daily life when it is easy; afterwards recall vividly and examine honestly and non-judgmentally, feelings included, without becoming submerged in them.",
     "States what a report leaves open: how frequent this is, whether there is any daily-life practice, and how heavy the shame is.",
     "Weighting: teachers differ on how far to go beyond the Interlude, for instance towards repair with the son, self-compassion practices or outside support; a good answer marks which parts are TMI and which are the answerer's own."
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
   },
   {
    "q": "According to the Moments of Consciousness model, why is conscious experience a series of discrete moments and not a continuous stream?",
    "options": [
     {
      "t": "Attention can hold only one object, so it alternates between them",
      "ok": false,
      "why": "That describes how attention appears to behave, whereas the reason he gives for discreteness is that each moment draws on a single sense."
     },
     {
      "t": "We can be conscious of content from only one sense organ at a time",
      "ok": true,
      "why": "He says consciousness is a series of discrete events because we can only be conscious of information coming from one sense organ at a time, so a moment of seeing must end before a moment of hearing or thinking can occur."
     },
     {
      "t": "Non-perceiving moments break up the stream of perceiving moments",
      "ok": false,
      "why": "Non-perceiving moments are interspersed among perceiving ones, but the perceiving moments are already discrete from one another by sense."
     },
     {
      "t": "Each moment must be bound with the others before it is experienced",
      "ok": false,
      "why": "Binding moments are a further kind of moment that integrates what earlier moments held, and they are not his reason for discreteness."
     }
    ]
   },
   {
    "q": "In the Moments of Consciousness model, what is a binding moment of consciousness?",
    "options": [
     {
      "t": "A moment of the mind sense in which a sensation becomes a concept",
      "ok": false,
      "why": "Turning a sensation into a concept is what he describes for moments of attention from the mind sense, and binding is a distinct seventh category."
     },
     {
      "t": "A moment of attention that holds two sense objects at the same time",
      "ok": false,
      "why": "No moment holds content from two senses at once in the model, which is why a separate moment is needed to present their combination."
     },
     {
      "t": "A moment that presents the integrated content of earlier moments",
      "ok": true,
      "why": "He says the contents of many separate moments from the six senses are briefly stored in a kind of working memory and combined, and that the product is projected into consciousness as a seventh kind of moment."
     },
     {
      "t": "A moment of awareness that monitors the other kinds of moments",
      "ok": false,
      "why": "Awareness of the mind's own activity is introspective awareness, which he describes as moments of peripheral awareness with mental content."
     }
    ]
   },
   {
    "q": "In the Moments of Consciousness model, what does a single moment of peripheral awareness contain?",
    "options": [
     {
      "t": "Many objects at once, lightly processed but simply interpreted",
      "ok": true,
      "why": "He says moments of awareness provide minimally processed information about many things at once, while still including simple interpretations of sense data such as 'traffic' or 'trees'."
     },
     {
      "t": "Many objects at once, as raw sense data with no interpretation",
      "ok": false,
      "why": "He says moments of awareness do include some simple interpretations, which help to categorise the information and establish the present context."
     },
     {
      "t": "A single object, held with less intensity than attention gives",
      "ok": false,
      "why": "Awareness is not weak attention in his account, and its moments are distinguished by holding many objects where attention holds only a few."
     },
     {
      "t": "Objects of the physical senses only, and never any mental ones",
      "ok": false,
      "why": "He gives sensory content as a general rule only, and names a growing feeling of annoyance as awareness with mental content."
     }
    ]
   },
   {
    "q": "How does the Fourth Interlude describe introspective awareness in the terms of the model?",
    "options": [
     {
      "t": "Moments of the mind sense holding a concept such as 'the breath'",
      "ok": false,
      "why": "A concept such as 'breath' held in the mind sense is the usual content of attention to the breath, and is not awareness of the mind itself."
     },
     {
      "t": "Moments of attention turned inward to examine the state of mind",
      "ok": false,
      "why": "Attention turned inward is introspective attention, the checking in of Stage Three, and not peripheral awareness of the mind."
     },
     {
      "t": "Binding moments that combine the contents of the other senses",
      "ok": false,
      "why": "Binding moments integrate content from the other six senses, and he does not use them here to define introspective awareness."
     },
     {
      "t": "Moments of peripheral awareness of mental objects and mind states",
      "ok": true,
      "why": "He defines it as moments of peripheral awareness of mental objects and of the states and activities of the mind, and says mindfulness training increases them."
     }
    ]
   },
   {
    "q": "A meditator has the breath in focus while a knee pain and thoughts about lunch stand out as subtle distractions, and attention seems to flick between them. What does the model say is actually happening?",
    "options": [
     {
      "t": "One stream of attention is moving quickly from object to object",
      "ok": false,
      "why": "That is how it seems subjectively, and he says explicitly that attention is not actually moving."
     },
     {
      "t": "Successive moments of attention are taking different objects",
      "ok": true,
      "why": "He says attention is not actually moving between the breath and the distractions, and that instead successive moments of attention hold different objects."
     },
     {
      "t": "Each moment of attention is divided among the three objects",
      "ok": false,
      "why": "These objects come through different senses, and in the model no single moment can hold content from more than one."
     },
     {
      "t": "Attention stays on the breath while awareness takes the others",
      "ok": false,
      "why": "Objects held only by awareness are background, whereas subtle distractions are by definition the objects of some moments of attention."
     }
    ]
   },
   {
    "q": "In the model, why does a distraction tend to keep attention once it has captured it?",
    "options": [
     {
      "t": "Each moment of attention to it carries an intention to stay on it",
      "ok": true,
      "why": "He says each moment of attention to the pain also carries a subconscious intention for subsequent moments to stay on the pain, since intention determines the objects of the moments that follow."
     },
     {
      "t": "Moments on the distraction carry more vital energy than others",
      "ok": false,
      "why": "Vital energy separates perceiving from non-perceiving moments in his account, and he does not rank perceiving moments by their object."
     },
     {
      "t": "Awareness moments about it are referred to attention for analysis",
      "ok": false,
      "why": "Referral from awareness explains how something first reaches attention, whereas what keeps it there in his example is the intention each moment carries."
     },
     {
      "t": "Non-perceiving moments leave the breath with too few moments",
      "ok": false,
      "why": "That describes dullness, and in his example the breath loses moments to the distraction and not to non-perceiving moments."
     }
    ]
   },
   {
    "q": "What does 'stable attention' mean in the Moments of Consciousness model?",
    "options": [
     {
      "t": "Every moment of consciousness now takes the meditation object",
      "ok": false,
      "why": "Stable attention includes moments of peripheral awareness of other things, and even exclusive focus concerns only the moments of attention."
     },
     {
      "t": "Moments of attention outnumber the moments of peripheral awareness",
      "ok": false,
      "why": "He says the number of moments of peripheral awareness has nothing to do with stable attention, which is defined only by what the moments of attention take as object."
     },
     {
      "t": "Non-perceiving moments have fallen to a small share of the total",
      "ok": false,
      "why": "The share of non-perceiving moments is his measure of dullness, a separate matter from which objects the moments of attention take."
     },
     {
      "t": "Most moments of attention take the meditation object as theirs",
      "ok": true,
      "why": "He says stable attention simply means that most of your moments of attention are devoted to the meditation object, and that how many moments of peripheral awareness you have has nothing to do with it."
     }
    ]
   },
   {
    "q": "How does the Fourth Interlude account for the powerful imagery and visions that often come with strong dullness?",
    "options": [
     {
      "t": "Binding moments combine fragments of memory in inaccurate ways",
      "ok": false,
      "why": "Inaccurate binding is his explanation of ventriloquism, and he does not use it to explain visions."
     },
     {
      "t": "Non-perceiving moments carry dream content in place of sensation",
      "ok": false,
      "why": "Non-perceiving moments have no content at all in the model, so the imagery has to be the object of perceiving moments."
     },
     {
      "t": "Unoccupied mind moments let subconscious content become conscious",
      "ok": true,
      "why": "He says the imagery is not part of dullness itself, and that the large proportion of non-perceiving, non-intending moments creates an opportunity for subconscious content to become the object of perceiving moments, as in dreaming."
     },
     {
      "t": "Stable attention lets early signs of meditative joy show through",
      "ok": false,
      "why": "He ties these visions to strong dullness, and warns in Stage Five against reading the effects of dullness as signs of meditative joy."
     }
    ]
   },
   {
    "q": "Culadasa likens subtle dullness in meditation to resting in a lounge chair under a beach umbrella on a warm day. Which features of that state is he pointing to?",
    "options": [
     {
      "t": "Not sleepy, somewhat aware, seemingly clear yet not very alert",
      "ok": true,
      "why": "He says that in this state you are not asleep or even sleepy and are still somewhat aware of what is around you, and that it may even seem you have a clear mind though you are not very alert."
     },
     {
      "t": "Pleasantly numb, with hazy awareness and free-floating attention",
      "ok": false,
      "why": "That is his description of the dullness of alcohol, drugs and mindless entertainment, which he calls quite different from dullness in meditation."
     },
     {
      "t": "Drowsy and drifting, with dreamlike images beginning to appear",
      "ok": false,
      "why": "Drowsiness and dream imagery belong to strong dullness, which the Stage Five meditator has already overcome."
     },
     {
      "t": "Calm and bright, with attention resting easily on its object",
      "ok": false,
      "why": "That is closer to the wholesome pleasure of stable attention, which he calls bright and alert and sets against the warm, soft, quiet pleasure of dullness."
     }
    ]
   },
   {
    "q": "According to the Stage Five chapter, what happens when the intention to perceive very subtle sensations is applied properly and often enough?",
    "options": [
     {
      "t": "Attention becomes exclusive, and subtle distractions drop away",
      "ok": false,
      "why": "Subduing subtle distractions with exclusive attention is the work of Stage Six, and the Stage Five meditator still has them."
     },
     {
      "t": "Mindfulness reaches the fixed level that marks the Stage's end",
      "ok": false,
      "why": "He says mastering the Stage does not involve reaching any particular level of mindfulness, which goes on growing through the later Stages."
     },
     {
      "t": "Powerful mindfulness becomes a habit, on and off the cushion",
      "ok": true,
      "why": "He says that when this intention is applied properly and often enough, powerful mindfulness turns into a habit both on and off the cushion."
     },
     {
      "t": "Effort falls away, and the mind sustains attention on its own",
      "ok": false,
      "why": "Effortlessness is reached at the end of Stage Seven, and at Stage Five the intentions still have to be set and held."
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
   },
   {
    "q": "A student about to start Stage Five says the Moments of Consciousness model looks like theory they can skip. Set out what a teacher needs to be able to say about it.\n• Give the model's basic picture: what a moment of consciousness is, why experience is said to be discrete, and the seven kinds of moment.\n• Explain what binding moments are for, and how attention and peripheral awareness are placed in the model.\n• State the standing Culadasa gives the model, and say where you would be careful in presenting it.",
    "model": "The picture. Experience seems to flow seamlessly. The model says this is an illusion: experience is divided into individual moments of consciousness that occur one at a time, like the frames of a film, so brief and numerous that they seem continuous. The reason given is that we can be conscious of information from only one sense organ at a time. A moment of seeing must end before a moment of hearing, or a thought about what was seen, can occur. Within each moment nothing changes; each is a freeze-frame holding a single static chunk of information. Because successive moments come from different senses, he says consciousness is less like a film and more like a string of differently coloured beads.\n\nThe seven kinds. Six are named for the sense that supplies the content: sight, sound, smell, taste, somatic sensation, and the mind sense, which covers mental objects such as thoughts and emotions. He adds that 'touch' and 'mind' are blanket labels for many distinct senses, and that he keeps six categories for simplicity. The seventh is the binding moment.\n\nBinding. If each moment is gone before the next arises, something has to put the pieces together. The contents of many moments are held briefly in a kind of working memory and combined, and the product is projected into consciousness as a separate moment. That is how words seem to come from a speaker's mouth, and why a ventriloquist can fool us: binding does not always combine things accurately.\n\nAttention and awareness. Any moment, of any of the seven kinds, is either a moment of attention or a moment of peripheral awareness. Moments of awareness hold many objects with little processing; moments of attention hold a few and process them in depth. He adds that the two are not so neatly divided in experience.\n\nIts standing. He says the model is drawn from the Theravada Abhidhamma with elaborations from the later Yogācāra school, restated in modern terms. He tells the reader not to bother deciding whether it is literally true: what matters is that it is useful for making sense of experience and of the instructions, and there will be time to judge it from one's own experience. He also says it is not just a theory someone thought up. The premise of discrete moments arising and passing rests, he says, on the meditation experiences of advanced practitioners across many traditions, and it is an experience the reader will have in the later Stages.\n\nWhere I would be careful. First, those are two different claims: that the model is useful whether or not it is true, and that it is grounded in what adepts observe. I would teach the first and report the second as his. Second, he calls the framework 'more science-based', but the Interlude's text offers no evidence for discrete moments or for one sense per moment, so I would not tell a student that science has shown it. That caution is mine. Third, a student does not need to see moments in order to use the model. At Stage Five its job is practical: it says what dullness is and why intention counters it.\n\nSo to the student: skip the metaphysics if you like, but not the vocabulary. The chapter's instructions are written in it.",
    "rubric": [
     "Basic picture: discrete moments occurring one at a time, because only one sense organ's content can be conscious at once; nothing changes within a moment; film frames, or better, a string of differently coloured beads.",
     "Seven kinds: the five physical senses, the mind sense and the binding moment; may note that somatic sensation and the mind sense are blanket labels kept as single categories for simplicity.",
     "Binding and placement: binding moments present the integrated product of earlier moments held in working memory (speech, ventriloquism); every moment is either a moment of attention (few objects, in-depth processing) or of peripheral awareness (many objects, little processing).",
     "Standing: from the Abhidhamma with Yogācāra elaborations; not to be judged for literal truth but used because it is useful; said to rest on the experience of advanced practitioners, which the reader will have in later Stages.",
     "Care in presentation: separates 'useful' from 'true', does not claim scientific confirmation, and marks these cautions as the answerer's own."
    ]
   },
   {
    "q": "Students often believe they are feeling the breath when they are mostly thinking 'breath'. Trace what TMI says about concepts and sensations from the Fourth Interlude through Stage Five.\n• Say what the Interlude claims moments of attention usually contain, and what this means for attention to the breath.\n• Show how following, and the first step of the body scan, are meant to change that.\n• State what mastery of Stage Five says on the point, and say where the book's statements do not quite fit together.",
    "model": "The claim. The Interlude says attention's job is to isolate objects and interpret them, and that moments of attention contain conceptual representations, usually from the mind sense. His example is an unusual sound. Awareness attributes it to footsteps, and what becomes the object of attention is not the sound but the idea that someone is walking up the stairs. As a general rule, he says, the content of awareness comes from the physical senses and the content of attention from the mind sense. Even when a sensory object does become an object of attention, it is quickly replaced by a more highly processed conceptual formation.\n\nThe breath. He applies this directly. Paying attention to breath sensations usually generates many more moments from the mind sense than from the sense of touch, especially for beginning meditators. Moments of attention that hold actual sensory information are 'few and far between', greatly outnumbered by those holding concepts such as 'breath', 'air', 'in', 'out' and 'nose'. So the student's situation is, on his account, the ordinary condition and no fault.\n\nWhat changes it. He says that only by diligently following the breath, observing ever-finer details, will you train the mind to produce more moments of attention to actual breath sensations. That gives a reason for an instruction that has run since Stage Three: looking for finer detail is how the proportion shifts. Stage Five's body scan begins the same way. At the abdomen you focus as much as you can on the sensations themselves, and not on the concepts of expansion, contraction, skin, breath, air and movement, noticing in particular their changing qualities. There is a qualification that is easy to miss. This is done 'without losing awareness of the breath as a familiar, repeated, cyclical event'. The concept is not attacked. It stays in the background while attention takes the sensations.\n\nMastery. The conclusion says attention gains intensity, so that the details are quite vivid, and clarity, so that you can experience the actual arising and passing away of individual breath sensations. It says you will naturally abandon abstract concepts like 'inhale' and 'exhale', which you were in the habit of using to follow the breath. The word is 'naturally'. He gives no instruction to suppress the labels.\n\nWhere it does not quite fit. Stage Four's conclusion already says that perception of the meditation object has become non-verbal and non-discursive. Stage Five's then describes a meditator who has been in the habit of using 'inhale' and 'exhale' until now. My reading is that Stage Four's phrase means the running commentary has stopped, while Stage Five concerns the quieter conceptual framing that remains. The book does not say so. Second, the elements practice in the scan uses concepts, earth, water, fire, wind and space, to investigate sensations. He calls it simply a help toward greater clarity, to be skipped if it does not help. I take that to show the aim is finer perception and not the elimination of concepts. That inference is mine.\n\nFor teaching. I would not tell a student to stop thinking 'in, out'. I would ask what they can feel that the word leaves out: where the sensation starts, how it changes, when it ends. Interest in the detail does the work, and the label drops when it is no longer needed. That advice is my gloss on 'naturally'.",
    "rubric": [
     "Claim: moments of attention usually hold conceptual representations from the mind sense (the idea of footsteps, not the sound), while awareness's content is usually sensory; stated as a general rule.",
     "Breath: attention to the breath generates far more mind-sense moments than touch moments, especially in beginners; moments holding actual sensory information are few and far between; so the student's situation is the normal condition.",
     "Remedy: following with ever-finer detail trains more moments of attention to actual sensations; the scan's first step asks for sensations and not concepts, without losing awareness of the breath as a familiar cyclical event.",
     "Mastery: clarity enough to experience individual sensations arising and passing away; concepts such as 'inhale' and 'exhale' naturally abandoned, with no instruction to suppress them.",
     "Calibration: notes the imperfect fit with Stage Four's 'non-verbal and non-discursive' and the conceptual nature of the elements practice, and marks its readings as inference."
    ]
   },
   {
    "q": "Stage Five asks for more vivid attention and stronger peripheral awareness together, and Stage Six will ask for exclusive attention. Use the Fourth Interlude to explain why these demands are not in conflict.\n• Place forgetting, gross distraction, subtle distraction and exclusive focus in the model, and say what stable attention is.\n• Say what mindfulness and its loss are in the model, and what he gives as the solution to any loss of it.\n• Explain his answer on whether mindfulness is compatible with single-pointedness, and what happens when its condition is not met.",
    "model": "One continuum for attention. He says forgetting, gross distraction, subtle distraction and exclusive focus all lie on one continuum, and that position on it depends on one thing only: the proportion of moments of attention, in a given period, whose object is the breath as against some distraction. With forgetting, no moments of attention take the breath. With gross distraction, more go to the distraction than to the breath. With subtle distraction, more go to the breath. In the exclusive focus of an advanced practitioner, distractions rarely if ever become objects of moments of attention. Stable attention 'simply means' that most moments of attention are devoted to the meditation object. He adds that it includes moments of peripheral awareness, and that how many of those there are has nothing to do with it.\n\nMindfulness. This is a second measure. Mindfulness means that, in whatever situation we find ourselves, the balance between moments of attention and moments of awareness is just right; lose that balance and mindfulness is lost. The First Interlude described attention and awareness as drawing on one limited capacity. Here the limit is given a unit: there are only so many perceiving moments to go around.\n\nThe solution. He states it without exception. The solution to any loss of mindfulness is to increase the total power of consciousness, which means raising the proportion of perceiving to non-perceiving mind moments by converting the second into the first. With more perceiving moments there are enough to sustain peripheral awareness while attention stays on the task. This is why Stage Five's two demands do not compete: in the model's terms, vivid attention and bright awareness are both supplied from moments that were non-perceiving, not from each other.\n\nSingle-pointedness. He asks directly whether mindfulness is compatible with focusing on the meditation object to the exclusion of everything else, and answers yes. Even while moments of attention are focused exclusively on one thing, enough moments of peripheral awareness can be intermixed to remain mindful. Exclusivity is a fact about what the moments of attention take as their object. It says nothing about whether moments of awareness continue.\n\nThe condition. There must be enough conscious power. Otherwise, as the moments devoted to objects of attention increase, the moments of awareness must drop, because there are not enough moments of consciousness to go around. I read this as the model's account of two warnings in the chapters: Stage Four's, that forcing exclusive attention costs awareness, and Stage Five's, that a state in which awareness has faded can pass for exclusive focus.\n\nSequence. On this reading the model gives a reason for the order: raise conscious power at Stage Five, then narrow attention at Stage Six. That inference is mine; he says only that Stage Five must not be skipped. He also says that from Stage Five onward the moments to increase are those of introspective awareness, leading to metacognitive introspective awareness: being aware of the state of mind in every moment, even while focused on the breath. The Stage Four chapter had already shifted the emphasis to introspective awareness, so the two passages date that shift differently.\n\nCalibration. 'Conscious power' and the counting of moments are the model's terms, not measurements anyone has made.",
    "rubric": [
     "Continuum: position is fixed by the proportion of moments of attention on the breath as against distraction (forgetting: none on the breath; gross: more on the distraction; subtle: more on the breath; exclusive focus: distractions rarely if ever objects of attention); stable attention means most moments of attention take the object, whatever the number of awareness moments.",
     "Mindfulness as just the right balance between moments of attention and moments of awareness, and its loss as the loss of that balance.",
     "Solution: increase the total power of consciousness by converting non-perceiving into perceiving moments, so that attention and awareness are both supplied and need not compete.",
     "Single-pointedness: compatible with mindfulness, because awareness moments can be intermixed with exclusively focused attention; the condition is enough conscious power, failing which awareness moments must drop.",
     "Calibration: marks the links to Stage Four's and Stage Five's warnings, and the reasoning about the order of the Stages, as the answerer's reading; may note that the two passages date the shift to introspective awareness differently."
    ]
   },
   {
    "q": "Use the Moments of Consciousness model to trace how TMI handles dullness from Stage Three to Stage Five.\n• Describe the continuum on which the model places dullness, and say what it claims about ordinary waking alertness and why that state is stable.\n• Explain what changes when we sit down to meditate, and what each of Stages Three, Four and Five contributes.\n• Give the model's explanation of the visions that come with strong dullness, and say what a teacher can and cannot conclude from it.",
    "model": "The continuum. Dullness is determined by the number of non-perceiving moments mixed in with perceiving ones. As their proportion rises we experience subtle dullness, then strong dullness, then sleep; when all perceiving moments have gone we are completely unconscious. At the other end, where every mind moment is an actively perceiving one, is what he calls the ultimate degree of alertness.\n\nOrdinary alertness. He says ordinary consciousness includes a significant proportion of non-perceiving moments, and gives as evidence our capacity for increased awareness and alertness in an emergency. The different degrees of alertness of everyday life are therefore varying degrees of stable subtle dullness. It is stable, he says, for one reason only: enough different stimuli are constantly streaming in, producing new moments of consciousness, to keep us alert.\n\nSitting down. Meditation cuts off much of that stimulation by turning from sensations and thoughts to a relatively boring object. The proportion of perceiving moments starts to fall, and the mind's energy level with it. Non-perceiving moments are also non-intending, so they generate no intent to perceive in the moments that follow, and still more moments become non-perceiving. Without intervention, this cycle turns the stable subtle dullness of daily life into the progressive subtle dullness of meditation, and then into strong dullness and drowsiness.\n\nThe three Stages. In Stage Three the meditator kept a balance between attention and peripheral awareness so as not to become too inwardly focused and fall asleep; the moments of extrospective awareness helped keep the mind energised. In Stage Four the power of intention raised the mind's energy enough to overcome progressive subtle dullness before it became strong. The result, he says, is a mind able to sustain stable subtle dullness in meditation, just as it does in daily life. Stage Five has a different kind of task: reducing the proportion of non-perceiving moments, for less subtle dullness, more conscious power and greater mindfulness. On this account the earlier Stages recover in meditation the alertness we ordinarily have, and Stage Five is the first to go beyond it. That summary is my gloss.\n\nVisions. He says the powerful imagery, visions and sense of profundity that often occur with strong dullness are not part of dullness itself. The large proportion of non-perceiving, non-intending moments leaves many mind moments unoccupied by external stimuli or intended objects, so that otherwise subconscious material can become the object of perceiving moments. Dreaming happens in the same way. He adds that drumming, chanting and other shamanic practices are used to induce the same openness on purpose, usually with a prior intention for visionary objects to arise.\n\nWhat a teacher can conclude. My reading is that the explanation removes one inference: vivid content is no evidence of alertness or of attainment, since it is what the model expects when many moments stand empty. It also allows that the content is real subconscious material, so there is no need to tell a student that a vision was nothing. What it does not provide is a way to tell these visions, from a report, from the charged material that Stage Four says surfaces as the mind grows calm. The book gives no test. I would ask about the state they arose in: was the breath vivid and awareness open, or had both faded?",
    "rubric": [
     "Continuum and ordinary state: dullness is the proportion of non-perceiving moments, running from unconsciousness to the ultimate degree of alertness; ordinary waking is stable subtle dullness (shown by heightened alertness in an emergency), stable only because stimuli keep streaming in.",
     "Sitting down: meditation removes much of the stimulation; non-perceiving moments are non-intending, so the fall feeds itself and becomes progressive subtle dullness, then strong dullness.",
     "The three Stages: Three keeps extrospective awareness to energise the mind; Four uses intention to overcome progressive subtle dullness, leaving stable subtle dullness as in daily life; Five reduces the proportion of non-perceiving moments.",
     "Visions: not part of dullness itself; unoccupied moments let subconscious material become the object of perceiving moments, as in dreaming; shamanic practices induce this on purpose.",
     "Calibration: marks as the answerer's own the summary that Stage Five is the first to exceed everyday alertness and the conclusions drawn for teaching, and states that the book gives no test separating these visions from Stage Four's purification material."
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
   },
   {
    "q": "A student at Stage Five reports: 'Something has started happening in the body scan. When I get to my arms and hands there is a tingling that swells and fades with each breath, and last week it spread up my back like a current. It is exhilarating. I now spend the whole sit scanning for it and trying to push it further, and I have stopped going back to the nose because the breath there seems dull by comparison. A friend who teaches yoga says it is my kundalini waking up. Is it?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, this is the scan doing what it is for, and the student has earned it. Culadasa says that as the scan proceeds you will eventually detect very subtle changes related to the breath in every part of the body, and that as sensitivity grows you will have direct experience of what traditional terms like 'the flow of prāṇa', 'the movement of the inner winds' and 'the circulation of qi' mean. A tingling in the hands that swells and fades with each breath fits that description. His instruction on finding such sensations is to linger and explore them thoroughly.\n\nTwo things have gone off course. One is the purpose. He says the scan exists to develop sustained, clear attention to the usual meditation object, and that you always return to the breath at the nose: whenever perception has become much more powerful, shift back, sustain that sharper perception as long as you can, and go back to the scan when it declines. The student has kept the scan and dropped what it serves. The other is 'trying to push it further'. The scan asks you to perceive and to search. It does not ask you to produce anything.\n\nWhat I don't know.\n\nWhat the 'current' up the back was. It may be more breath-related sensation; the upper back is among the first places he says it shows. It may be something the book places later. Stage Seven says strange sensations such as tingling may already have occurred from time to time when attention was particularly stable, and the Sixth Interlude describes the earliest manifestations of energy as little more than electrical tingling or vibrations, with full energy currents coming as the mind unifies in later Stages. A report cannot separate these. Nor do I know whether exhilaration has replaced alertness. Stage Five warns that pleasant feelings can be misread as first signs of meditative joy, so I would ask whether peripheral awareness is intact during these episodes, and why the breath at the nose seems dull.\n\nOn kundalini: the Sixth Interlude lists kundalinī among the names traditions give this energy, alongside qi and prāṇa, so the friend's word and the book's point at the same family of experience. Whether anything is 'waking up' is not a claim TMI makes at this Stage, and not one I can assess from a report.\n\nResponse.\n\nI would say: you have found what the scan is designed to reveal, and that takes real sensitivity. Now use it as designed. Keep the breath at the abdomen in peripheral awareness, explore the sensations where you find them, and ask one question of each: does it change with the breath? When perception is clearly sharper, go back to the nose and see what the breath is like with that sharper mind.\n\nAbout pushing. For milder manifestations of energy the Sixth Interlude says just letting it be is certainly the best advice, since it is so easy to get caught up in trying to control and manipulate it, and Stage Seven says of such phenomena: don't chase them, and don't push them away. Those passages address later Stages. Applying them here is my judgement.\n\nI would leave the kundalini question open, and say that the practice with these sensations is the same whatever they are called.",
    "rubric": [
     "Credits the sensitivity and normalises with the chapter: subtle breath-related sensations in every part of the body are the scan's expected yield and what terms like prāṇa, inner winds and qi refer to; lingering and exploring is his instruction.",
     "Identifies what has gone off course: the scan serves sustained, clear attention to the usual object, with a return to the nose whenever perception is heightened; and it asks for perceiving and searching, not for producing or pushing sensations.",
     "States what a report leaves open: whether the 'current' is breath-related sensation or an early instance of what the book places with later Stages, and whether exhilaration has displaced alertness and peripheral awareness.",
     "Handles 'kundalini' accurately: the Sixth Interlude lists it among traditional names for this energy; that something is 'awakening' is not a claim TMI makes at this Stage or one a report can settle.",
     "Weighting: teachers differ on how far to engage with energy frameworks, from 'note it and let it be' to working with the energy actively; a good answer says which it chooses, and marks its use of later-Stage advice at Stage Five as the answerer's own."
    ]
   },
   {
    "q": "A student at Stage Five reports: 'Since reading about moments of consciousness I have been trying to see them. I stare at the breath looking for the gaps between frames, and I try to catch the non-perceiving moments as they go by so that I can count how dull I am. I cannot see any of it. My sits have become a strain, I get a tight band across my forehead, and I spend half the time thinking about the model. Either I am not concentrated enough or the model is wrong. Which is it?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nNeither, most likely, and I would begin by saying that the impulse is a good one: this student wants to check the model against experience instead of taking it on trust. But the Interlude also says what kind of thing the model is, and the student is using it for a job it is not offered for.\n\nThree points from the text. First, its standing. Culadasa says not to bother deciding whether the description is literally true; it is there to help make sense of experience and of the instructions, and there will be plenty of time to judge it as skills mature. Second, timing. He says the experience of distinct moments arising and passing is one the reader will have in the later Stages, and that the model will help long before then. Not seeing moments at Stage Five is what the book predicts. Third, non-perceiving moments are defined as moments in which no perception occurs, because no sense provides them with content. My inference is that they cannot be caught going by, since there is nothing in them to perceive. What can be observed is their effect, and the chapter lists it: vividness and clarity declining, peripheral awareness fading, and a comfortable, pleasant feeling.\n\nTwo ordinary problems have come in with the project. The strain and the tight forehead look like force. Stage Four says brute force never works for long in meditation, and Stage Five asks for intention, not staring. And half a sit spent thinking about the model is discursive thought, however interesting. Stage Four's instruction for attractive ideas is a mental note and a return to the breath.\n\nWhat I don't know.\n\nWhether the tension comes from the staring. It is the likely cause, but a report cannot confirm it, and if it persists outside sits it is a matter for a doctor; that caution is mine. What the sits were like before: was this student stable at Stage Five, or has the reading run ahead of the practice? And what 'see them' means to them. Stage Five's own marker of clarity is experiencing individual breath sensations arising and passing away. That is about sensations. He does not say that mind moments themselves become visible at this Stage, and I would not let the student assume the two are the same.\n\nResponse.\n\nI would say: you are testing the model, which is right, but with the wrong instrument. Use it the way the chapter does. Set the intention to perceive the breath as clearly and vividly as you can, and the intention to know the state of your mind while you do. In the model's terms those intentions are what turn non-perceiving moments into perceiving ones. Then judge by what you can observe: is the breath more vivid, are sounds and the body still present in the background, and does that hold through the sit?\n\nDrop the hunt for frames for a month. When thoughts about the model come, note them and return. For thinking it through, he recommends analytical meditation as a separate session.\n\nAnd relax the forehead. A sign that the effort is right is that awareness stays open. If it narrows to a stare, the method has gone wrong, whatever the model says. That test is mine.\n\nOn whether the model is wrong: I don't know, and he does not ask anyone to decide yet.",
    "rubric": [
     "Credits the close reading and the wish to test it, and answers the either/or: neither conclusion follows from not seeing moments.",
     "Uses the Interlude's own framing: literal truth is not to be decided now; the model is for making sense of experience and instructions; the experience of discrete moments is placed in the later Stages.",
     "Explains how the model is used at Stage Five: non-perceiving moments have no content (with the inference that they cannot be observed directly), so dullness is known by its three characteristics, and the working tool is intention, judged by vividness and awareness.",
     "Names the two ordinary problems (straining as force; thinking about the model as discursive distraction, to be noted and taken up outside the sit), and states what a report leaves open: the cause of the tension, the student's prior stability, and what 'seeing' means to them.",
     "Weighting: teachers differ on whether an analytical student should set theory aside altogether for a while or be shown how to use it; a good answer says which it chooses, and marks its own inferences."
    ]
   },
   {
    "q": "A student who has an ADHD diagnosis reports: 'I can stay with the breath now, which I never thought I would manage. But peripheral awareness is hopeless. The moment I let sounds or the body in, attention chases them and I am off. I have read that mindfulness is a balance of attention and awareness, and I have decided my brain can do one or the other, not both. So my plan is to forget awareness and go all out for one-pointed focus. Does TMI allow that?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nThe first thing to say is how much has been done. Staying with the breath is something this student did not expect to manage, and they have managed it. Culadasa addresses the case directly, and I would read them the passage. In the Fourth Interlude he calls Attention Deficit Disorder 'basically a form of involuntary multi-tasking', and says people with it will definitely have a harder time increasing peripheral awareness in the earlier Stages, since their attention is so unstable to begin with. So the difficulty is the one he predicts, in the place he predicts it. He then says that by increasing the total number of perceiving mind moments they can generate enough moments of awareness to achieve a balance, and that they are 'as able as anyone to achieve a high level of mindfulness'.\n\nThat answers the plan. In the model, the solution to any loss of mindfulness is more total conscious power: converting non-perceiving moments into perceiving ones, so that there are enough for both attention and awareness. The student has concluded that the budget is fixed and must be spent on one side. The model's claim is that the budget grows.\n\nThe plan also has a cost that the book names. Stage Four calls forcing exclusive attention a big mistake at that Stage: you lose awareness and become more vulnerable to distraction and dullness. The Interlude says that without enough conscious power, as moments of attention increase, the moments of awareness must drop. And Stage Five describes where attention without awareness tends to end: in a pleasant dullness that passes for focus.\n\nWhat I don't know.\n\nWhich Stage this is. 'Attention chases them and I am off' could be a brief capture or losing the breath altogether, and the work differs. How the breath is being held: by relaxed interest, or by clamping, which would explain why opening up feels like falling. Whether 'letting sounds in' means allowing awareness or deliberately attending to sounds, which is moving attention. I don't know about medication or its timing, and it is not my place to advise on it. And I cannot verify 'as able as anyone'. It is his claim, stated without evidence, and I would offer it as encouragement and not as a promise.\n\nResponse.\n\nI would say: TMI does want exclusive attention eventually, at Stage Six, but with awareness still running, and it says the way there is through more power, not less awareness.\n\nThen make the task smaller. Don't 'let things in'. Keep attention on the breath and simply don't shut the background out: know that sound is there without going to it. A few seconds counts. When attention does chase something, that is where the training happens: notice, return gently, no verdict.\n\nLater, when gross distraction is rare, the tools that build power are Stage Five's: holding the intention to perceive vividly while staying aware of the mind, and the body scan, which keeps the breath at the abdomen in awareness while attention works elsewhere. That is the divided task this student finds hardest, in a graded form.\n\nShorter sits and more walking practice are adaptations I would consider. They are mine, not the Interlude's.",
    "rubric": [
     "Credits the achievement and normalises with the Interlude: Attention Deficit Disorder as 'involuntary multi-tasking'; a harder time increasing peripheral awareness in the earlier Stages; yet able to reach a balance by increasing total perceiving moments, 'as able as anyone'.",
     "Answers the plan from the model: the solution to any loss of mindfulness is more total conscious power, not giving up one faculty; without enough power, more moments of attention mean fewer moments of awareness.",
     "Names the cost in the chapters: forced exclusive attention loses awareness and invites distraction and dullness (Stage Four); attention without awareness can pass for focus (Stage Five); Stage Six's exclusive attention keeps awareness.",
     "States what a report leaves open: which Stage (brief capture or loss of the breath), clamping, what 'letting in' means, medication (not the teacher's to advise on), and that 'as able as anyone' is his claim, given without evidence.",
     "Weighting: teachers differ on how far to adapt the method for ADHD (shorter sits, more walking practice, delaying the body scan) as against holding the standard sequence; a good answer marks its adaptations as its own."
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
   },
   {
    "q": "In the Mind-System model, what carries out the executive functions, such as inhibiting a habitual response or deciding between conflicting intentions?",
    "options": [
     {
      "t": "The conscious mind, acting as the chairperson of the boardroom",
      "ok": false,
      "why": "In his metaphor the conscious mind is the boardroom itself, a passive space, and no one acts as chairperson."
     },
     {
      "t": "An executive sub-mind at the top of the discriminating hierarchy",
      "ok": false,
      "why": "He does describe a hierarchy in which sub-minds for values and self-image tend to dominate, but says plainly that no sub-mind acts as the executive."
     },
     {
      "t": "The narrating mind, which organises what the others have produced",
      "ok": false,
      "why": "The narrating mind combines conscious content into a story and projects it back, and he gives it no role as decision-maker."
     },
     {
      "t": "Many sub-minds reaching a working consensus through consciousness",
      "ok": true,
      "why": "He says there is no executive sub-mind in charge, and that executive functions are the result of many sub-minds communicating through consciousness to arrive at a working consensus."
     }
    ]
   },
   {
    "q": "In the Mind-System model, what makes an intention a conscious intention?",
    "options": [
     {
      "t": "It is projected into consciousness, where sub-minds can back or oppose it",
      "ok": true,
      "why": "He says all intentions are ultimately generated by unconscious sub-minds, and that a conscious intention is just one that has been projected into consciousness, where many sub-minds can support or oppose it before it produces an action."
     },
     {
      "t": "It arises in the conscious mind itself and not in any unconscious sub-mind",
      "ok": false,
      "why": "He says the conscious mind is not the source of its content, and that all intentions ultimately come from unconscious sub-minds."
     },
     {
      "t": "It comes from the sub-minds at the top of the hierarchy, such as values",
      "ok": false,
      "why": "Rank in the hierarchy is not his criterion, since an intention from any sub-mind is conscious once it has been projected into consciousness."
     },
     {
      "t": "It has been put into words, so that it can be known and then acted upon",
      "ok": false,
      "why": "He says a conscious intention may be subliminal or felt only as an impulse, and that putting things into words is a separate activity of another sub-mind."
     }
    ]
   },
   {
    "q": "According to the Fifth Interlude, what is the effect of repeatedly paying attention to your own state of mind?",
    "options": [
     {
      "t": "The mind habituates, and its states stop being presented to consciousness",
      "ok": false,
      "why": "Habituation is what he describes for content that is consistently ignored, and content that is attended to goes on being presented."
     },
     {
      "t": "Introspective awareness falls, as attention takes the moments it needs",
      "ok": false,
      "why": "That is the trade-off between attention and awareness at a given time, whereas his point here concerns what the sub-minds learn to present in future."
     },
     {
      "t": "Introspective awareness increases, as that field is flagged as important",
      "ok": true,
      "why": "He says repeatedly attending to any sensory field, introspective or extrospective, flags its contents as potentially important, so that introspective attention leads to an overall increase in introspective awareness."
     },
     {
      "t": "The thinking mind is pacified, because its activity is being observed",
      "ok": false,
      "why": "Pacification comes from consistently ignoring mental objects, and observing the mind's activity is not what he says quiets it."
     }
    ]
   },
   {
    "q": "In the Mind-System model, what most often makes for a decision that is later regretted?",
    "options": [
     {
      "t": "The emotional sub-minds outvoted the ones that reason and plan",
      "ok": false,
      "why": "He does not set emotion against reason here, and locates the fault in limited participation, whichever sub-minds were missing."
     },
     {
      "t": "Too few of the sub-minds with relevant input took part in it",
      "ok": true,
      "why": "He says that when sub-minds whose input is particularly relevant stay dormant or are preoccupied, a bad choice is more likely, and that the best decisions come from the fullest participation of every part of the mind-system."
     },
     {
      "t": "It was made at an unconscious level and not by conscious choice",
      "ok": false,
      "why": "He says every decision is a collective one made at an unconscious level, so that cannot be what separates good decisions from bad."
     },
     {
      "t": "The narrating mind credited it to an 'I' that had not made it",
      "ok": false,
      "why": "Attribution to an 'I' follows every decision in his account, good or bad, and is not offered as a cause of poor ones."
     }
    ]
   },
   {
    "q": "What does Culadasa say about the relation between the narrating mind and putting experience into words?",
    "options": [
     {
      "t": "It works only on verbal thoughts, binding them into connected stories",
      "ok": false,
      "why": "It takes in all the information projected by other sub-minds, such as an image, a recognised concept and a feeling, and not only verbal thought."
     },
     {
      "t": "It is the source of verbal thought, which is why it is called narrating",
      "ok": false,
      "why": "He warns against mistaking its activity for language, and the name refers to weaving conscious content into the episodes of a story."
     },
     {
      "t": "Its output is easily put into words, but another sub-mind does that",
      "ok": true,
      "why": "He says the output of the narrating mind is particularly easy to convert into words, but that putting something into words is a separate activity carried out by a completely different sub-mind."
     },
     {
      "t": "It stops working when verbal thought has been subdued in meditation",
      "ok": false,
      "why": "Its binding moments are what he says make up metacognitive awareness, which Stage Six cultivates while thoughts are being subdued."
     }
    ]
   },
   {
    "q": "How does the Fifth Interlude describe unification of mind?",
    "options": [
     {
      "t": "More and more sub-minds uniting around a single conscious intention",
      "ok": true,
      "why": "He says unification of mind happens because more and more sub-minds unite around a single conscious intention, the intention to meditate, and that it brings powerful feelings of happiness and contentment."
     },
     {
      "t": "The thinking mind falling silent as its thoughts stop being projected",
      "ok": false,
      "why": "That is pacifying the mind, and the Stage Six chapter says its completion brings you one giant step closer to unification, not that it is unification."
     },
     {
      "t": "Attention and peripheral awareness merging into one single faculty",
      "ok": false,
      "why": "He keeps attention and awareness distinct throughout, and defines unification by agreement among sub-minds."
     },
     {
      "t": "The narrating mind no longer producing an 'I' to hold the story",
      "ok": false,
      "why": "Seeing through the narrative 'I' belongs to his account of no-Self, whereas unification is defined by sub-minds sharing one intention."
     }
    ]
   },
   {
    "q": "Culadasa says the same factors are present in access concentration and in jhāna. What does he say distinguishes the two?",
    "options": [
     {
      "t": "A marked increase in joy and pleasure beyond the level of access",
      "ok": false,
      "why": "Joy and pleasure are already among the factors of access concentration, and he marks the difference by the shift into flow and not by their strength."
     },
     {
      "t": "A shift into flow: spontaneous, effortless, with a sense of control",
      "ok": true,
      "why": "He says what distinguishes access concentration from jhāna is the shift into a flow state characterised by conditions five to seven: spontaneity with no sense of a separate self, effortlessness, and a sense of successfully exercising control."
     },
     {
      "t": "The complete absence of thought, which access does not yet require",
      "ok": false,
      "why": "He says some thinking, investigation or evaluation still intrudes in the very light jhānas of this Stage."
     },
     {
      "t": "The fading of peripheral awareness as the absorption becomes total",
      "ok": false,
      "why": "He says absorption without metacognitive awareness is not really jhāna, and treats fading awareness as the opening for dullness."
     }
    ]
   },
   {
    "q": "What does Culadasa mean by calling the jhānas available at Stage Six 'very light'?",
    "options": [
     {
      "t": "Their joy and pleasure are faint beside those of the deeper jhānas",
      "ok": false,
      "why": "He calls them very enjoyable, and defines their lightness by the intrusion of thinking and not by a lack of pleasure."
     },
     {
      "t": "A bright inner light appears and then serves as the object of focus",
      "ok": false,
      "why": "An inner light used as the object belongs to the luminous jhānas taught later in the book, and 'light' here describes how shallow the absorption is."
     },
     {
      "t": "They last a few seconds at most before the mind drops out again",
      "ok": false,
      "why": "He expects the mind to slip out and return, but speaks of periods growing longer and of staying for up to fifteen minutes, so brevity is not what 'light' means."
     },
     {
      "t": "Some thinking or evaluation intrudes, which makes them unstable",
      "ok": true,
      "why": "He says the jhānas you can enter at this Stage are very light, meaning that some amount of thinking, investigation or evaluation will intrude and make the jhāna unstable."
     }
    ]
   },
   {
    "q": "How does Culadasa say to prepare for the whole-body jhāna, and when should this be done?",
    "options": [
     {
      "t": "Set pleasure aside until exclusive attention is completely stable",
      "ok": false,
      "why": "He asks for the pleasant qualities to be kept in awareness throughout every sitting as attention moves toward exclusivity, and not postponed."
     },
     {
      "t": "Move attention onto the pleasure itself, once it has become strong",
      "ok": false,
      "why": "Taking joy and pleasure as the object is the deeper jhāna of Stage Seven, and for now a shift of attention to pleasure is the signal to abandon the jhāna."
     },
     {
      "t": "Hold stillness, alertness and pleasure in awareness, every sitting",
      "ok": true,
      "why": "He says to prepare by purposely noticing and holding in awareness any feelings of stillness, alertness and pleasure, and that you should always do this, whether you intend to practise jhāna or not."
     },
     {
      "t": "Return to the nose and wait for the breath sensations to fade out",
      "ok": false,
      "why": "For this jhāna the meditator stays with the breath sensations in the whole body, and nothing in the instruction calls for them to fade."
     }
    ]
   },
   {
    "q": "At Stage Six the breath can seem to come apart from the body, for instance appearing off to one side of where the nose should be. Culadasa says experiences like this can bring profound Insight. On what condition?",
    "options": [
     {
      "t": "Attention is then turned onto the gap between breath and body shape",
      "ok": false,
      "why": "He says recombining them would take only a momentary shift of attention to the body's shape and position, and he does not ask for the gap to be examined."
     },
     {
      "t": "Subtle dullness is overcome and introspective awareness is powerful",
      "ok": true,
      "why": "He says such Insight cannot happen unless you have completely overcome subtle dullness and cultivated mindfulness with powerful introspective awareness."
     },
     {
      "t": "The experience recurs in jhāna, where it can be held for far longer",
      "ok": false,
      "why": "In jhāna he treats breath sensations that seem vague and disconnected from the body as a warning of dullness, and not as a ground for Insight."
     },
     {
      "t": "Thoughts have ceased entirely, in attention and in awareness as well",
      "ok": false,
      "why": "At this Stage thoughts are subdued and still intrude now and then, and the condition he states concerns dullness and introspective awareness."
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
   },
   {
    "q": "Explain the Mind-System model's basic picture as a teacher would need to at Stage Six.\n• Describe the two parts of the mind-system, and what the sensory and discriminating minds each produce.\n• Explain what the conscious mind is and does in this model, including why Culadasa says it 'doesn't actually do anything' and why it still matters.\n• State where the model comes from, and say where you would be careful in presenting it.",
    "model": "Two parts. He calls it the mind-system because what we speak of as one mind is many distinct, interconnected processes. It has two main parts. The conscious mind is what we experience directly. The unconscious mind, the much larger part, can be known only indirectly, through inference. The unconscious is divided into the sensory mind and the discriminating mind, each made up of many sub-minds that work simultaneously and autonomously, like the departments of a corporation.\n\nWhat they produce. The sensory mind has five sub-minds, one for each physical sense. Each turns raw sensory data into sense-percepts ('warmth', 'blue', a 'chirp'), recognises and evaluates them, and attaches a hedonic feeling of pleasant, unpleasant or neutral. Most of what they process never becomes conscious; he says it is filtered out at the level of subconscious awareness. They also run automatic reactions, which is why we are never conscious of an intention behind a reflex. The discriminating mind takes what reaches consciousness and builds more complex representations: perceptions, thoughts and ideas, and also emotions, which is why its greater part is called the thinking/emotional mind. Its sub-minds each keep their own evolving model of reality and produce their own hedonic feelings, which trigger desire and aversion and so become the source of intentions. They are arranged in a hierarchy and, unlike the sensory sub-minds, are continuously active, even in deep sleep.\n\nThe conscious mind. He compares it to a screen, or a space, onto which the sub-minds project the seven kinds of moments of consciousness. It is not the source of its content. Its function is to be an interface: a universal recipient, able to receive from every sub-mind, and a universal source, since whatever enters it becomes available to all of them at once. His image is a boardroom to which the departments send their reports. Only one sub-mind can present at a time, which is what creates single moments of consciousness. Key Point One says the conscious mind 'doesn't actually do anything': decisions, intentions, actions and even the sense of self come from the unconscious. He then blocks the obvious inference. Consciousness is not an incidental by-product. Without it the sub-minds could not work together to do their jobs.\n\nWhere it comes from. He attributes the model to the Yogācāra school of Buddhism, explained with ideas from modern cognitive psychology, with some new concepts added. He calls it a powerful tool: useful for what has been experienced so far and for what is to come, including metacognitive awareness, unification of mind and no-Self.\n\nWhere I would be careful. First, by his own account the unconscious is known only by inference. The sub-minds are a way of organising what is observed, and I would not present them as things anyone has found. Second, he says the picture may seem reductionist or even materialistic, asks the reader not to jump to that conclusion, and calls it only the beginning of the real story. I would pass that on as his, without claiming to know the rest. Third, the model's use at Stage Six is practical. It explains why distractions arrive unbidden, and why holding an intention and ignoring what lies outside it changes what the mind presents. That selection of what matters for this Stage is mine.",
    "rubric": [
     "Two parts: the conscious mind, experienced directly, and the much larger unconscious, known only by inference and divided into the sensory and discriminating minds, each made of many sub-minds working simultaneously and autonomously.",
     "Products: sensory sub-minds produce sense-percepts with a hedonic feeling, and automatic reactions; the discriminating (thinking/emotional) mind produces perceptions, thoughts, emotions and its own hedonic feelings, and through desire and aversion, intentions; its sub-minds are continuously active.",
     "Conscious mind: a screen or space that is not the source of its content; a universal recipient and universal source; the boardroom in which one sub-mind presents at a time.",
     "Key Point One and its limit: the conscious mind does nothing itself, since decisions, intentions and the sense of self come from the unconscious; yet it is no mere by-product, because without it the sub-minds could not work together.",
     "Source and care: Yogācāra restated through cognitive psychology with some added concepts, and offered as a tool; the answerer marks the unconscious as inferred, reports the 'not reductionist' assurance as his, and labels its own selection."
    ]
   },
   {
    "q": "Stage Six says the practice of exclusive attention is 'an exercise of executive function' that trains unconscious sub-minds to stop projecting distractions. Use the Fifth Interlude to explain what that means.\n• Distinguish top-down from bottom-up processes, and say what executive functions are and who performs them.\n• Explain what happens to content that is consistently ignored and to content that is attended to, and what this implies for the instruction to ignore distractions completely.\n• Explain how sub-minds are trained, including the part played by satisfaction and by repetition, and what remains true at Stage Six however well this has gone.",
    "model": "Two directions. Bottom-up: an individual sub-mind projects something into peripheral awareness, along with an intention for it to become an object of attention. If nothing opposes that intention, attention moves. He calls this stimulus-driven, and spontaneous movements of attention are his example. Top-down: an intention is projected into consciousness, where many sub-minds can support or oppose it, and an action follows only from their consensus. He says all intentions come from unconscious sub-minds; a conscious intention is simply one that has gone through this process. That is why the chapter calls it always stronger: it is an agreement among several sub-minds, not the push of one.\n\nExecutive functions. These are the higher-order tasks, such as inhibiting, planning and correcting errors, that are needed wherever pre-programmed behaviour is not sufficient. He is emphatic that there is no executive sub-mind and no chairperson. Executive function is what many sub-minds do together through consciousness: coordinate, communicate, discriminate between conflicting information, decide between conflicting intentions, integrate new information and program new behaviour. Resisting a tempting distraction in order to stay with the breath is his example of the inhibitory kind.\n\nIgnored and attended. When something appears in peripheral awareness, the mind-system as a whole makes a quick evaluation of the object and of the intention to attend to it. If the intention is blocked, the object may keep appearing in awareness but no longer vies for attention. Content that is consistently dismissed or ignored eventually stops being presented to the conscious mind; his everyday case is getting used to the water after jumping into a swimming pool. The converse also holds. Whatever is attended to goes on being presented, and what is attended to repeatedly, or for a long time, is flagged as significant, along with similar objects and even the whole sensory field. For the instruction this has a sharp consequence, which I draw myself: a distraction that is pushed at, argued with or checked on is being attended to. 'Completely ignore' is the working part of the instruction and not an exaggeration. The chapter's remark that any attention gives a thought energy says the same.\n\nTraining. Sub-minds change when new information is exchanged in consciousness and digested. He names two conditions. One is outcome. The results of an intended action are evaluated; a good result brings pleasure and satisfaction, and positive affect makes the activities and intentions of the sub-minds involved more likely to be repeated. A negative reaction has the opposite effect. The other is repetition. The more often the same conscious intention leads to the same action in the same situation, the more likely the sub-minds are to act automatically. His general principle is that conscious intentions, repeatedly acted upon, eventually give rise to automatic actions that no longer require conscious intention. Pacifying the mind is that principle applied to the thinking/emotional mind.\n\nWhat remains true. The discriminating sub-minds are continuously active, so thoughts go on being generated at an unconscious level. Staying on the breath requires an ongoing, uninterrupted consensus, and the chapter says that at this Stage distractions return as soon as the intention weakens. The training is real, and it is not complete until Stage Seven.\n\nFor teaching. The model leaves no need for talk of willpower. The student's part is to set the intention clearly, ignore fully, and let satisfaction register. That summary is mine.",
    "rubric": [
     "Directions: bottom-up intentions come from a single sub-mind and move attention automatically when unopposed; top-down conscious intentions are projected into consciousness and acted on by consensus, hence stronger; all intentions originate in unconscious sub-minds.",
     "Executive functions: higher-order tasks needed where programmed behaviour is not sufficient (inhibition is the meditation example), performed by many sub-minds interacting through consciousness, with no executive sub-mind.",
     "Ignored and attended: blocked or consistently ignored content stops vying for attention and eventually stops being presented (habituation); attended content keeps being presented and is flagged, with similar objects and whole fields; the consequence drawn for 'completely ignore' is marked as the answerer's.",
     "Training: positive affect after a result judged good reinforces the sub-minds' activity, and a negative reaction does the opposite; repetition turns conscious intentions into automatic actions; pacifying the mind is the application.",
     "Limits at Stage Six: discriminating sub-minds stay active unconsciously; an uninterrupted consensus is needed; distractions return when the intention weakens; pacification completes in Stage Seven."
    ]
   },
   {
    "q": "The Fifth Interlude gives an account of where the sense of being a self comes from. Explain it, and say how a teacher should handle it at Stage Six.\n• Describe what the narrating mind does, using his example of seeing a bird, and say what it does not do.\n• Explain how the 'I' and the 'it' arise and become a Self and a world, and what he says follows from that.\n• State what he invites the meditator to observe, and say what this account does and does not establish for a student who has only read it.",
    "model": "The narrating mind. It is a sub-mind of the discriminating mind with a special role. It takes in what other sub-minds have projected into consciousness, combines and organises it into a meaningful summary, and projects that back as a binding moment of consciousness. The result is a continuing chronicle of the mind's conscious activities, available to the whole system.\n\nHis example. The visual mind projects an image: colour, shape, contrast. In that seeing there is only the seen. The discriminating mind recognises it, say as an oriole, and projects the concept: in the recognising there is only the recognised concept. A hedonic feeling accompanies it: in the feeling there is only the felt pleasure. These are three separate moments of consciousness. The narrating mind then weaves them into causally connected episodes: I saw it, I recognised it, I enjoyed it.\n\nWhat it does not do. It does not speak. Its output is easy to put into words because language reflects its patterns, but putting things into words is the work of a different sub-mind. And on his account it does not produce the belief in a Self. It only tells the story.\n\nFrom story to Self. The 'I' is a fictional but convenient construct, the centre of gravity that holds the story together. The 'it' is another, imputed in order to link the parts; he says we never actually experience any entity corresponding to it, only image, concept, feeling and emotion. The error comes next and belongs to the discriminating mind, which takes the 'I' and the 'it' for actual entities. The narrative 'I' becomes an ego-Self with traits and a personal history, and the 'it' is seen as the cause of the feelings. From that misperception come intentions rooted in desire and aversion: I wanted it, I pursued it, I obtained it, and in the end I lost it and I grieved. Key Point Three says the contents of the conscious mind are always and only mental constructs. Key Point Four says the enduring sense of self is a useful but fictional construct of the narrating mind, reified by the discriminating mind.\n\nWhat he invites. Observation, not belief. Notice that the 'I' is imputed only after the fact. A memory arises, and only then comes 'I just remembered something'. Sadness can be present long before the thought 'I feel sad'. A decision appears, seemingly from nowhere, and then comes 'I have decided'. His image is a room full of people all named George, whose debate reaches you only as 'George said this' and 'George said that'.\n\nWhat it establishes. For a student who has only read it: an explanation, and a list of things to look for. It is not the Insight the Third Interlude describes, where such seeing has to sink in on an experiential level. That distinction is the book's; applying it to this chapter is my step. He himself expects resistance, since the sense of self feels very real.\n\nAt Stage Six. The account earns its place by explaining two things the meditator will meet: why a witness appears when attention is turned on the mind, and why 'the breath' turns out to be a concept built from other concepts. I would teach it for that, discourage hunting for the self in sits, and leave the larger claim to the Stages that address it. That policy is mine.",
    "rubric": [
     "Narrating mind: a sub-mind of the discriminating mind that integrates conscious content into episodes and projects them back as binding moments; the bird example with its three separate moments (seen, recognised, felt) woven into 'I saw it, I recognised it, I enjoyed it'.",
     "What it does not do: putting things into words is a separate sub-mind's work; the narrating mind tells the story and does not itself take the 'I' for real.",
     "From story to Self: 'I' and 'it' as convenient fictions; the discriminating mind reifies them into an ego-Self and a world, which gives rise to desire and aversion; Key Points Three and Four.",
     "Invitation: to observe the 'I' being imputed after the fact (memory, sadness, decision); the George image.",
     "Calibration: reading the account is not Insight; says how it is used at Stage Six (the witness, the conceptual breath), and marks that policy and the link to the Third Interlude as the answerer's own."
    ]
   },
   {
    "q": "Stage Six introduces meditative absorption through the idea of flow. Set out what a teacher needs to know before guiding a student into the whole-body jhāna.\n• Give the Seven Conditions for Achieving Flow, and say which of them mark the difference between access concentration and jhāna.\n• State the traditional factors he gives for access concentration, and why he says absorption becomes workable only now.\n• Describe how the whole-body jhāna is prepared for and entered, what 'very light' means, and what he says these jhānas are for.",
    "model": "Flow. He borrows the term from Csikszentmihalyi: concentration so focused that it amounts to complete absorption in an activity. Four conditions make flow possible. The activity is performed as an end in itself. Its goals are clear and its feedback immediate, the feedback carrying the message 'I have succeeded in my goal'. It is neither taxingly difficult nor too easy. And it requires complete focus of attention, leaving no room in the mind for anything else. Three more must arise for the activity to become flow. It becomes spontaneous, almost automatic, with no sense of a self apart from the activity. A feeling of effortlessness arises, though continuous skilled performance is required. And there is a sense of successfully exercising control, which he says is not the same as feeling that 'you' are in control.\n\nAccess and jhāna. Meditative absorptions are flow states that occur in meditation, traditionally called jhāna. The traditional factors he lists are directed and sustained attention, exclusive focus and unification of mind, and joy and pleasure. When these are present the meditator is in access concentration, the state that immediately precedes jhāna. Put more simply, he says, access requires exclusive focus of attention, joy and pleasure. The same factors are present in jhāna. What distinguishes jhāna is the shift into flow, marked by conditions five to seven.\n\nWhy now. Before Stage Six, becoming too absorbed in the object ended in dullness or distraction. With subtle dullness overcome and subtle distractions temporarily subdued, absorption can be entered without that happening. The acquired appearance of the breath is also a far more suitable object than the initial appearance.\n\nPreparation and entry. Prepare by cultivating joy: purposely notice, and hold in awareness, any feelings of stillness, alertness and pleasure. He says to do this in every sitting, whether or not jhāna is intended. The object is all the breath-related sensations in the whole body at once, and the one change from the usual practice is that you stay with them and do not return to the nose. Some background noise and occasional thought do not matter, provided there are periods of stable, exclusive attention in which the sensations are extremely clear, together with metacognitive awareness of pleasure. Follow the sensations as smoothly as possible, treating each moment of doing your best as a success. When everything is just right, the mind seems to slip into a groove and flow for a little while. It will slip out, and you return. He advises noticing exactly what was happening in the mind just before entry.\n\n'Very light'. Some thinking, investigation or evaluation will intrude, which makes the jhāna unstable. When the first can be held for up to fifteen minutes without interruption, the second can be begun, from Appendix D.\n\nWhat they are for. He says not to worry about practising all four. Jhānas are not an end in themselves, and for now their only purpose is to help master Stage Six and prepare for faster progress.\n\nTwo observations of my own. His first flow condition, an activity performed as an end in itself, sits oddly beside 'their only purpose is'. I read the first as the attitude within a sit and the second as the place of jhāna in the training, but he does not reconcile them. And the conclusion's description of mastery does not mention jhāna, so I treat it as a help and not a requirement.",
    "rubric": [
     "Seven conditions: four that make flow possible (an end in itself; clear goals with immediate feedback; challenge balanced with ability; complete focus) and three that mark it (spontaneity with no sense of a separate self; effortlessness; a sense of successfully exercising control).",
     "Access and jhāna: the traditional factors (directed and sustained attention; exclusive focus and unification of mind; joy and pleasure) define access concentration; jhāna has the same factors and is distinguished by the shift into flow, conditions five to seven.",
     "Why now: earlier absorption ended in dullness or distraction; subtle dullness is overcome and subtle distractions are subdued; the acquired appearance is a more suitable object.",
     "Preparation and entry: joy cultivated by holding stillness, alertness and pleasure in awareness, in every sitting; stay with the whole-body breath sensations and do not return to the nose; periods of stable exclusive attention with metacognitive awareness of pleasure; the mind slips into a groove, slips out, and is brought back.",
     "'Very light' and purpose: thinking or evaluation intrudes and makes the jhāna unstable; jhānas are not an end in themselves, their purpose now being to help master Stage Six; any tension noted between 'end in itself' and that purpose is marked as the answerer's observation."
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
   },
   {
    "q": "A student at Stage Six reports: 'I have been trying to get into jhāna for three weeks. I sit down, go straight to the whole body and wait for the click. Every few minutes I check whether this is it yet. Nothing happens. The sits feel flat and a bit desperate now, and I have stopped doing the ordinary practice at the nose because it seems pointless by comparison. A friend got in within two days. What am I doing wrong?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nFirst, nothing here is a failure of ability, and I would say so. The student can stay with the whole body through a sit, which is Stage Six work. But on Culadasa's account jhāna is a flow state, and the report describes, almost point by point, conditions under which flow does not arise.\n\nHe gives seven conditions. The first is that the activity is performed as an end in itself, not for any other purpose. Three weeks of sitting in order to get the click is the opposite. The second is clear goals with immediate feedback whose message is 'I have succeeded'. The student's only measure is whether jhāna has happened, so the feedback every few minutes is 'not yet'. His own instruction supplies a different measure: follow the sensations as smoothly as possible, and each moment of doing your best is a success. The marks of flow itself include spontaneity, effortlessness and no sense of a self apart from the activity. Checking 'is this it?' is a self standing apart from the activity. It is also the thinking and evaluation that he says make the light jhānas of this Stage unstable.\n\nThere is a second gap. Access to jhāna, put simply, requires exclusive focus together with joy and pleasure. He says to prepare by purposely noticing, and holding in awareness, feelings of stillness, alertness and pleasure, in every sitting. The report mentions waiting, flatness and desperation, and no pleasure at all.\n\nWhat I don't know.\n\nWhether the ground is there. He asks for periods of stable, exclusive attention in which the breath sensations in the whole body are extremely clear. Is that so, or is the student going straight to the whole body before attention has settled? The conclusion says that even at mastery it takes a little while for attention to stabilise. Whether subtle dullness is really behind them: flat sits can be dull sits. And what the friend entered. I cannot assess a report of getting in within two days, and Stage Five warns that pleasant dullness can pass for absorption.\n\nResponse.\n\nI would say: you are not doing the practice badly. You are doing a different practice, which is waiting.\n\nDrop jhāna as a target for two weeks. He says jhānas are not an end in themselves and that for now their only purpose is to help master Stage Six, and the conclusion's description of mastery does not mention them.\n\nGo back to the full exercise: abdomen, parts, whole body, then the nose, with the period of exclusive attention there that the whole-body work produces. He says that with practice exclusive focus at the nose can be sustained for longer and longer, so the return is the work and not a detour.\n\nIn every sit, look for what is already pleasant: stillness, alertness, the smoothness of the breath. Keep it in awareness, and leave attention on the breath sensations.\n\nStop checking. If 'is this it?' comes, it is a thought, and it is ignored like any other.\n\nLater, when sits contain clear stretches of exclusive attention with pleasure in the background, stay with the whole body instead of returning to the nose, and let the following itself be the measure. He says to practise jhāna whenever conditions are right for access. The work is the conditions.",
    "rubric": [
     "Reassures on ability and reads the report against the flow conditions: sitting for the sake of the click is not an activity done as an end in itself; the only feedback is 'not yet'; checking is a self apart from the activity and the evaluation that makes a light jhāna unstable.",
     "Identifies the missing preparation: access requires exclusive focus with joy and pleasure; stillness, alertness and pleasure are to be held in awareness in every sitting, and the report contains none.",
     "States what a report leaves open: whether there are periods of stable exclusive attention with clear whole-body sensations, whether attention is given time to settle, whether the flatness is dullness, and what the friend actually entered.",
     "Gives the corrections from the text: jhāna is a help toward mastering Stage Six and not an end; return to the full whole-body exercise, including the nose; keep pleasure in awareness; let each moment of smooth following be the success; practise jhāna when the conditions for access are present.",
     "Weighting: teachers differ on whether to take jhāna off the table for a while, to coach entry more closely, or not to teach it at this Stage at all; a good answer says which it chooses, and marks the two-week pause as the answerer's own."
    ]
   },
   {
    "q": "A student at Stage Six reports: 'The chapter on the mind-system has knocked me sideways. If there is no one in charge and the I is just a story the narrating mind tells, then who is meditating? I keep trying to catch the I in my sits and I end up dizzy and a bit frightened. And honestly, why make an effort at all if effort is just sub-minds voting? My practice has gone slack since I read it.' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nTwo different things, and I would separate them for the student. One is a reaction to an idea. The other is a change in what they are doing on the cushion.\n\nThe reaction is one Culadasa expects. He writes that you may object to the idea that your sense of being a self is a mere construct, since it feels very real, and that this view of the mind may at first seem reductionist or even materialistic. He asks the reader not to jump to those conclusions, and calls the model only the beginning of the real story. So the unease is no sign that anything is wrong with the student.\n\nThe slackness rests on a misreading. The model does not say effort is pointless. It says what effort is: a conscious intention, held by a consensus of sub-minds, which he says has a powerful programming effect on individual sub-minds. He says we are not entirely at the mercy of unconscious intentions. He says the conscious mind, though it does nothing itself, is no incidental by-product, because without it the sub-minds could not work together. As I read it, 'who is meditating?' has an answer in the model's own terms: the mind-system as a whole, to the extent that its parts agree. Setting an intention is how that agreement is built.\n\nThe change on the cushion is the more practical problem. Trying to catch the 'I' is not a Stage Six instruction. What he invites is noticing, in ordinary experience, that the 'I' is attributed after the fact: a memory arises, and then comes 'I just remembered'. And the Stage Six chapter says what happens when attention is turned on the mind's own activity: attention always involves the discriminating mind, which imputes a Self, so it feels as though there is a witness. Hunting for the 'I' with attention tends to produce one. My inference is that this is the loop the student is caught in.\n\nWhat I don't know.\n\nHow strong the fear is, and whether it stays on the cushion. A philosophical wobble is one thing. Persistent feelings of unreality, or fear that follows them through the day, would be another, and not something to manage with a model. I also don't know what the practice was like before: slack because of the idea, or already flagging when the idea supplied a reason.\n\nResponse.\n\nI would say: you have understood the chapter and it has unsettled you, which he anticipates. You don't have to settle the question. He presents the model as a tool, and its use at this Stage is narrow: it explains why distractions arrive unbidden, and why holding an intention and ignoring the rest changes what the mind presents.\n\nStop looking for the 'I' in sits. The Stage's two tasks are exclusive attention and awareness of the mind's state and activity, with attention kept on the breath. If 'who is watching?' arises, it is a thought, and thoughts are ignored.\n\nKeep the effort, and notice afterwards how the decision to sit actually came about.\n\nIf the fear persists or spreads, I would set the model aside, go back to practices that steady the student, and ask them to talk it through with an experienced teacher. Stage Four's advice for someone acutely disturbed, to ground yourself first, is the nearest the book comes to this case. Borrowing it here is my judgement.",
    "rubric": [
     "Separates the reaction to the idea from the change in practice, and normalises the first from the text: he expects the objection, says the view may seem reductionist, and asks the reader not to jump to that conclusion.",
     "Corrects the inference about effort from the model itself: a conscious intention is a consensus with a powerful programming effect; we are not at the mercy of unconscious intentions; the conscious mind is no mere by-product; the mind-system as a whole is what acts.",
     "Identifies hunting for the 'I' as outside Stage Six's instructions: he invites noticing the after-the-fact 'I' in ordinary experience, and attention turned on the mind produces a 'witness', with the inference that this explains the student's loop marked as such.",
     "States what a report leaves open: how strong and how persistent the fear is, whether it extends beyond sits, and the state of the practice before the reading.",
     "Weighting: teachers differ on when to introduce no-Self material, and on whether a shaken student should be steered away from it or helped to look more closely; a good answer says which it chooses, and marks its borrowing of Stage Four's advice as its own."
    ]
   },
   {
    "q": "A student at Stage Six reports: 'My mother died five weeks ago. In sits the grief keeps coming up. The Stage says to ignore everything outside the scope completely, so I have been shutting it out, and for a few days that worked. Now the sits feel brittle, like holding a door closed, and outside them I feel flat and far away from everyone. I was doing so well before. Am I failing at exclusive attention?' What's happening in TMI terms, and how would you respond?",
    "model": "What's happening.\n\nNo. And before anything about method I would say that I am sorry, and that five weeks is very recent.\n\nIn TMI's terms the student is applying the right instruction to the wrong object. Stage Six's 'completely ignore' is addressed to subtle distractions: thoughts and sensations with which attention briefly alternates while the breath stays the main focus. Grief that keeps coming up and has to be held out is not that. Culadasa's instructions for a strong emotion are in Stage Four. They begin the same way, ignore it for as long as you can, and then turn: when something becomes too strong to disregard, make it the meditation object. He says not to resist, avoid or reject it, because it will only go back into the unconscious and resurface later, and he gives acknowledging, allowing and accepting as the antidotes. His examples there are of material from the past. Applying the method to a fresh loss is my step, though he offers it as the technique for strong emotions generally.\n\nSo the book has two uses of ignoring, and the difference matters. In the Fifth Interlude, content that is consistently ignored eventually stops being presented, which is how the thinking mind is pacified. That describes material that fades when it gets no attention. 'Holding a door closed' is the student's description of something else: effort spent against something that is not fading. My reading is that this is the resisting Stage Four warns of. The book does not draw that line explicitly.\n\nGoing back to a Stage Four method is no demotion. The Overview says meditators move back and forth between Stages over weeks, days or a single session, and calls this perfectly normal.\n\nWhat I don't know.\n\nWhether the flatness and distance come from the shutting out, which is my suspicion, or from the grief itself, or from something that needs more than meditation advice. A report cannot tell me. I don't know what support the student has, how they are sleeping, or whether sitting is helping at all just now.\n\nResponse.\n\nI would say: you are not failing. You have used a tool for small things on something that is not small.\n\nFor now, let the Stage Six goal go. Sit with the breath as usual. When grief comes, let it be in the background if it will stay there. When it won't, turn toward it as Stage Four describes: know where you are and that you are safe, begin with how it feels in the body, name it as 'grief is arising', and let it be until it eases. Then return to the breath. Don't analyse it. He says the process is tiring and that you may take a break from the sit.\n\nShorter sits are fine. If it becomes overwhelming, he says to ground yourself: company, good food, exercise. If it stays overwhelming, he suggests loving-kindness practice, and after that professional help. I would say plainly that seeking help would not mean the practice had failed.\n\nI would also ask who they are talking to. He says someone who knows how to listen can be very helpful. The flatness is what I would watch, and I would ask to hear from them again within the week. That request is mine.",
    "rubric": [
     "Opens with condolence and a clear 'no', and identifies the misapplication: 'completely ignore' addresses subtle distractions, whereas grief that has to be held out is a strong emotion, for which the instructions are Stage Four's.",
     "Gives Stage Four's sequence: ignore while that is possible; when too strong, make it the object; do not resist, avoid or reject, since it only returns; acknowledge, allow and accept; present-moment safety, the body first, a verbal label, then back to the breath; no analysis.",
     "Distinguishes ignoring that lets content fade (pacification) from effort spent holding something out, marks that reading as inference, and treats the return to an earlier Stage's method as normal, as the Overview does.",
     "States what a report leaves open: whether the flatness comes from the shutting out, from the grief itself, or from something needing more than meditation advice; the student's support and sleep; whether sitting is helping at present.",
     "Weighting: teachers differ on whether a bereaved student should keep formal sits going, shorten them or switch to loving-kindness, and on how early to suggest outside support; a good answer names his exits (grounding, loving-kindness, professional help) and marks its own additions."
    ]
   }
  ]
 }
];
