/* ================ Overall experiment structure =============== */
var timeline = [];

timeline.push(welcome);
timeline.push(consent);
timeline.push(debrief);

/* Run the experiment (everything in timeline) */
jsPsych.run(timeline);

progress_total = jsPsych.getTimeline().length