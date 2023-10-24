/* ----- Created with mk-personality.py ----- */
var likert_positive = [
	{value: 1, text: ' [ Very Inaccurate ] '},
	{value: 2, text: ' [ Moderately Inaccurate ] '},
	{value: 3, text: ' [ Neither Accurate Nor Inaccurate ] '},
	{value: 4, text: ' [ Moderately Accurate ] '},
	{value: 5, text: ' [ Very Accurate]'}
]

var likert_negative = [
	{value: 5, text: ' [ Very Inaccurate ] '},
	{value: 4, text: ' [ Moderately Inaccurate ] '},
	{value: 3, text: ' [ Neither Accurate Nor Inaccurate ] '},
	{value: 2, text: ' [ Moderately Accurate ] '},
	{value: 1, text: ' [ Very Accurate ] '}
]

var personalitytrial = {
	type: jsPsychSurvey,
	title: 'Personality questionnaire',
	button_label_next: 'Next page',
	button_label_previous: 'Previous page',
	button_label_finish: 'Submit',
	show_question_numbers: 'on',
	pages: [
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '001_+N1 ',
			type: 'likert',
			prompt: 'Worry about things ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '002_+E1 ',
			type: 'likert',
			prompt: 'Make friends easily ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '003_+O1 ',
			type: 'likert',
			prompt: 'Have a vivid imagination ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '004_+A1 ',
			type: 'likert',
			prompt: 'Trust others ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '005_+C1 ',
			type: 'likert',
			prompt: 'Complete tasks successfully ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '006_+N2 ',
			type: 'likert',
			prompt: 'Get angry easily ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '007_+E2 ',
			type: 'likert',
			prompt: 'Love large parties ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '008_+O2 ',
			type: 'likert',
			prompt: 'Believe in the importance of art ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '009_A2 ',
			type: 'likert',
			prompt: 'Use others for my own ends ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '010_+C2 ',
			type: 'likert',
			prompt: 'Like to tidy up ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '011_+N3 ',
			type: 'likert',
			prompt: 'Often feel blue ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '012_+E3 ',
			type: 'likert',
			prompt: 'Take charge ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '013_+O3 ',
			type: 'likert',
			prompt: 'Experience my emotions intensely ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '014_+A3 ',
			type: 'likert',
			prompt: 'Love to help others ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '015_+C3 ',
			type: 'likert',
			prompt: 'Keep my promises ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '016_+N4 ',
			type: 'likert',
			prompt: 'Find it difficult to approach others ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '017_+E4 ',
			type: 'likert',
			prompt: 'Am always busy ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '018_+O4 ',
			type: 'likert',
			prompt: 'Prefer variety to routine ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '019_A4 ',
			type: 'likert',
			prompt: 'Love a good fight ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '020_+C4 ',
			type: 'likert',
			prompt: 'Work hard ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '021_+N5 ',
			type: 'likert',
			prompt: 'Go on binges ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '022_+E5 ',
			type: 'likert',
			prompt: 'Love excitement ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '023_+O5 ',
			type: 'likert',
			prompt: 'Love to read challenging material ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '024_A5 ',
			type: 'likert',
			prompt: 'Believe that I am better than others ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '025_+C5 ',
			type: 'likert',
			prompt: 'Am always prepared ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '026_+N6 ',
			type: 'likert',
			prompt: 'Panic easily ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '027_+E6 ',
			type: 'likert',
			prompt: 'Radiate joy ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '028_+O6 ',
			type: 'likert',
			prompt: 'Tend to vote for liberal political candidates ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '029_+A6 ',
			type: 'likert',
			prompt: 'Sympathize with the homeless ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '030_C6 ',
			type: 'likert',
			prompt: 'Jump into things without thinking ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '031_+N1 ',
			type: 'likert',
			prompt: 'Fear for the worst ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '032_+E1 ',
			type: 'likert',
			prompt: 'Feel comfortable around people ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '033_+O1 ',
			type: 'likert',
			prompt: 'Enjoy wild flights of fantasy ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '034_+A1 ',
			type: 'likert',
			prompt: 'Believe that others have good intentions ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '035_+C1 ',
			type: 'likert',
			prompt: 'Excel in what I do ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '036_+N2 ',
			type: 'likert',
			prompt: 'Get irritated easily ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '037_+E2 ',
			type: 'likert',
			prompt: 'Talk to a lot of different people at parties ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '038_+O2 ',
			type: 'likert',
			prompt: 'See beauty in things that others might not notice ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '039_A2 ',
			type: 'likert',
			prompt: 'Cheat to get ahead ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '040_C2 ',
			type: 'likert',
			prompt: 'Often forget to put things back in their proper place ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '041_+N3 ',
			type: 'likert',
			prompt: 'Dislike myself ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '042_+E3 ',
			type: 'likert',
			prompt: 'Try to lead others ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '043_+O3 ',
			type: 'likert',
			prompt: 'Feel others’ emotions ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '044_+A3 ',
			type: 'likert',
			prompt: 'Am concerned about others ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '045_+C3 ',
			type: 'likert',
			prompt: 'Tell the truth ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '046_+N4 ',
			type: 'likert',
			prompt: 'Am afraid to draw attention to myself ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '047_+E4 ',
			type: 'likert',
			prompt: 'Am always on the go ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '048_O4 ',
			type: 'likert',
			prompt: 'Prefer to stick with things that I know ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '049_A4 ',
			type: 'likert',
			prompt: 'Yell at people ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '050_+C4 ',
			type: 'likert',
			prompt: 'Do more than what’s expected of me ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '051_N5 ',
			type: 'likert',
			prompt: 'Rarely overindulge ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '052_+E5 ',
			type: 'likert',
			prompt: 'Seek adventure ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '053_O5 ',
			type: 'likert',
			prompt: 'Avoid philosophical discussions ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '054_A5 ',
			type: 'likert',
			prompt: 'Think highly of myself ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '055_+C5 ',
			type: 'likert',
			prompt: 'Carry out my plans ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '056_+N6 ',
			type: 'likert',
			prompt: 'Become overwhelmed by events ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '057_+E6 ',
			type: 'likert',
			prompt: 'Have a lot of fun ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '058_+O6 ',
			type: 'likert',
			prompt: 'Believe that there is no absolute right or wrong ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '059_+A6 ',
			type: 'likert',
			prompt: 'Feel sympathy for those who are worse off than myself ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '060_C6 ',
			type: 'likert',
			prompt: 'Make rash decisions ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '061_+N1 ',
			type: 'likert',
			prompt: 'Am afraid of many things ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '062_E1 ',
			type: 'likert',
			prompt: 'Avoid contacts with others ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '063_+O1 ',
			type: 'likert',
			prompt: 'Love to daydream ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '064_+A1 ',
			type: 'likert',
			prompt: 'Trust what people say ',
			required: true,
			likert_scale_values: likert_positive,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '065_+C1 ',
			type: 'likert',
			prompt: 'Handle tasks smoothly ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '066_+N2 ',
			type: 'likert',
			prompt: 'Lose my temper ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '067_E2 ',
			type: 'likert',
			prompt: 'Prefer to be alone ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '068_O2 ',
			type: 'likert',
			prompt: 'Do not like poetry ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '069_A2 ',
			type: 'likert',
			prompt: 'Take advantage of others ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '070_C2 ',
			type: 'likert',
			prompt: 'Leave a mess in my room ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '071_+N3 ',
			type: 'likert',
			prompt: 'Am often down in the dumps ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '072_+E3 ',
			type: 'likert',
			prompt: 'Take control of things ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '073_O3 ',
			type: 'likert',
			prompt: 'Rarely notice my emotional reactions ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '074_A3 ',
			type: 'likert',
			prompt: 'Am indifferent to the feelings of others ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '075_C3 ',
			type: 'likert',
			prompt: 'Break rules ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '076_+N4 ',
			type: 'likert',
			prompt: 'Only feel comfortable with friends ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '077_+E4 ',
			type: 'likert',
			prompt: 'Do a lot in my spare time ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '078_O4 ',
			type: 'likert',
			prompt: 'Dislike changes ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '079_A4 ',
			type: 'likert',
			prompt: 'Insult people ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '080_C4 ',
			type: 'likert',
			prompt: 'Do just enough work to get by ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '081_N5 ',
			type: 'likert',
			prompt: 'Easily resist temptations ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '082_+E5 ',
			type: 'likert',
			prompt: 'Enjoy being reckless ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '083_O5 ',
			type: 'likert',
			prompt: 'Have difficulty understanding abstract ideas ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '084_A5 ',
			type: 'likert',
			prompt: 'Have a high opinion of myself ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '085_C5 ',
			type: 'likert',
			prompt: 'Waste my time ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '086_+N6 ',
			type: 'likert',
			prompt: 'Feel that I’m unable to deal with things ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '087_+E6 ',
			type: 'likert',
			prompt: 'Love life ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '088_O6 ',
			type: 'likert',
			prompt: 'Tend to vote for conservative political candidates ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '089_A6 ',
			type: 'likert',
			prompt: 'Am not interested in other people’s problems ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '090_C6 ',
			type: 'likert',
			prompt: 'Rush into things ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '091_+N1 ',
			type: 'likert',
			prompt: 'Get stressed out easily ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '092_E1 ',
			type: 'likert',
			prompt: 'Keep others at a distance ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '093_+O1 ',
			type: 'likert',
			prompt: 'Like to get lost in thought ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '094_A1 ',
			type: 'likert',
			prompt: 'Distrust people ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '095_+C1 ',
			type: 'likert',
			prompt: 'Know how to get things done ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '096_N2 ',
			type: 'likert',
			prompt: 'Am not easily annoyed ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '097_E2 ',
			type: 'likert',
			prompt: 'Avoid crowds ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '098_O2 ',
			type: 'likert',
			prompt: 'Do not enjoy going to art museums ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '099_A2 ',
			type: 'likert',
			prompt: 'Obstruct others’ plans ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '100_C2 ',
			type: 'likert',
			prompt: 'Leave my belongings around ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '101_N3 ',
			type: 'likert',
			prompt: 'Feel comfortable with myself ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '102_E3 ',
			type: 'likert',
			prompt: 'Wait for others to lead the way ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '103_O3 ',
			type: 'likert',
			prompt: 'Don’t understand people who get emotional ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '104_A3 ',
			type: 'likert',
			prompt: 'Take no time for others ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '105_C3 ',
			type: 'likert',
			prompt: 'Break my promises ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '106_N4 ',
			type: 'likert',
			prompt: 'Am not bothered by difficult social situations ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '107_E4 ',
			type: 'likert',
			prompt: 'Like to take it easy ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '108_O4 ',
			type: 'likert',
			prompt: 'Am attached to conventional ways ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '109_A4 ',
			type: 'likert',
			prompt: 'Get back at others ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '110_C4 ',
			type: 'likert',
			prompt: 'Put little time and effort into my work ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '111_N5 ',
			type: 'likert',
			prompt: 'Am able to control my cravings ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '112_+E5 ',
			type: 'likert',
			prompt: 'Act wild and crazy ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '113_O5 ',
			type: 'likert',
			prompt: 'Am not interested in theoretical discussions ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '114_A5 ',
			type: 'likert',
			prompt: 'Boast about my virtues ',
			required: true,
			likert_scale_values: likert_negative,
		},
	],
	[
		{
			type: 'html',
			prompt: 'Describe yourself as you generally are now, not as you wish to be in the future. \
					Describe yourself as you honestly see yourself, in relation to other people you \
					know of the same sex as you are, and roughly your same age. So that you can describe \
					yourself in an honest manner, your responses will be kept in absolute confidence. \
					Indicate for each statement whether it is 1. Very Inaccurate, 2. Moderately Inaccurate, \
					3. Neither Accurate Nor Inaccurate, 4. Moderately Accurate, or 5. Very Accurate as a \
					description of you. <br>\
					<b>(Click the appropriate statement for each question.)</b>',
		},
		{
			name: '115_C5 ',
			type: 'likert',
			prompt: 'Have difficulty starting tasks ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '116_N6 ',
			type: 'likert',
			prompt: 'Remain calm under pressure ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '117_+E6 ',
			type: 'likert',
			prompt: 'Look at the bright side of life ',
			required: true,
			likert_scale_values: likert_positive,
		},
		{
			name: '118_O6 ',
			type: 'likert',
			prompt: 'Believe that we should be tough on crime ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '119_A6 ',
			type: 'likert',
			prompt: 'Try not to think about the needy ',
			required: true,
			likert_scale_values: likert_negative,
		},
		{
			name: '120_C6 ',
			type: 'likert',
			prompt: 'Act without thinking ',
			required: true,
			likert_scale_values: likert_negative,
		}
    ]
]
};
timeline.push(personalitytrial);
/* ----- End of mk-personality.py
		finished with 0 errors ----- */
console.log("Loaded personality trials");
