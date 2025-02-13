/* Define instructions trial */
var instruct_demographic = {
	type: jsPsychInstructions,
	pages: [
		'The following section is a demographic questionnaire.<br>\
		Please answer each question to the best of your ability.<br>',
		'If you do not want to answer a question, either select<br>\
		<b>n/a</b> or leave the textbox <b>blank</b>',
		'When you are ready, click <b>continue</b> and<br>\
		the questionnaire will begin.'
	],
	button_label_next: "Continue",
	button_label_previous: "Back",
	show_clickable_nav: true,
  on_finish: progress_update,
};
