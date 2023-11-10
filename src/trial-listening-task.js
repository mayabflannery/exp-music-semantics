/* ----- PreloadAudio Audio ----- */
var audioFiles = [
/* =====================  List all stimuli here  ========================== */
"res/audio/yes-tobeover.mp3",
"res/audio/yes-relayer.mp3",
"res/audio/systemofadown-atwa.mp3",
"res/audio/snarkypuppy-whataboutme.mp3",
"res/audio/sapnajahan-nigam,mohan.mp3",
"res/audio/rone-origami2.mp3",
"res/audio/rone-origami1.mp3",
"res/audio/rone-byebyemacadam2.mp3",
"res/audio/rone-byebyemacadam1.mp3",
"res/audio/robertmiles-children2.mp3",
"res/audio/robertmiles-children1.mp3",
"res/audio/pacificaquartet-bartokstringquartetno4.mp3",
"res/audio/opeth-prologueaprilethereal.mp3",
"res/audio/mcbaise-waterslide2.mp3",
"res/audio/mcbaise-waterslide1.mp3",
"res/audio/lorn-acidrain2.mp3",
"res/audio/lorn-acidrain1.mp3",
"res/audio/lordhuron-thenightwemet.mp3",
"res/audio/ladygaga-alejandro.mp3",
"res/audio/jheneaiko-theworst.mp3",
"res/audio/jacopastorius-fullalbum3.mp3",
"res/audio/jacopastorius-fullalbum2.mp3",
"res/audio/jacopastorius-fullalbum1.mp3",
"res/audio/interstellar-cornfieldchase2.mp3",
"res/audio/interstellar-cornfieldchase1.mp3",
"res/audio/inflames-theend.mp3",
"res/audio/inflames-moonshield.mp3",
"res/audio/icedearth-thephantomoperaghost2.mp3",
"res/audio/icedearth-thephantomoperaghost1.mp3",
"res/audio/grandson-bloodwater.mp3",
"res/audio/frozencrown-battlesinthenight.mp3",
"res/audio/eriknielsen-sketchesiiistaccato.mp3",
"res/audio/epiclowbrass-therainsofcastameregot.mp3",
"res/audio/dunwichbeach-autumn.mp3",
"res/audio/cannons-hurricane.mp3",
"res/audio/cannons-baddream.mp3",
"res/audio/brianeno-thursdayafternoon.mp3",
"res/audio/blur-fortomorrow.mp3",
"res/audio/billieeilish-badguy.mp3",
"res/audio/bach-organsonatano4.mp3",
"res/audio/arianagrande-positions.mp3",
"res/audio/apocalyptica-path.mp3",
"res/audio/agartumsaathho-yagnikandsingh.mp3",
"res/audio/abhimujhmeinkahin-sonunigam.mp3",
/* ========================  End stimuli list  ============================ */
];

var current_stimulus = null;
var replays = 0;

/*  PreloadAudio audio files  */
var preloadAudio = {
    type: jsPsychPreload,
    audio: audioFiles,
    show_progress_bar: true,
    message: "Please wait for the experiment to load.",
    error_message: "The experiment failed to load!",
    max_load_time: 10000,
    show_detailed_errors: true,
};
/* Add preloadAudio to -beginning- of timeline with unshift */
timeline.unshift(preloadAudio);

/* ----- Audio trials ----- */
var stimuli_list = []
for (i in audioFiles) {
	stimuli_list.push({
		stimulus: audioFiles[i],
	})
}

/* This is displayed before the stimulus plays */
var pretest = {
	type: jsPsychHtmlKeyboardResponse,
	stimulus: '<div style="font-size:50px;">Please listen carefully.</div>',
	choices: "NO_KEYS",
/* ===========  Set trial_duration equal to stimulus length (ms) ========== */
	trial_duration: 2000, //async function () {
        //audioLength = await jsPsych.pluginAPI.getAudioBuffer(jsPsych.timelineVariable('stimulus'))
        //       .then((buffer) => {
        //           al = (buffer['duration'] - 2) * 1000;
        //           console.log("Audio length", al, "ms");
        //           return al;
        //       });
        //return audioLength;
    //},
	on_load: function () {
        replays = 0;
        current_stimulus = jsPsych.timelineVariable('stimulus');
		console.log("The current stimulus is: ", current_stimulus);
		context = jsPsych.pluginAPI.audioContext();
		jsPsych.pluginAPI.getAudioBuffer(current_stimulus)
		.then(function(buffer){
			audio = context.createBufferSource();
			audio.buffer = buffer;
			audio.connect(context.destination);
			audio.start(context.currentTime);
		})
		.catch(function(err){
			console.error('Audio file failed to load');
		})
	},
};


likert_labels = ["1", "2", "3", "4", "5"];

function replayStimulus (stim) {
    console.log("Replaying", stim);
    audio.stop();
	jsPsych.pluginAPI.getAudioBuffer(stim)
	.then(function(buffer){
		audio = context.createBufferSource();
		audio.buffer = buffer;
		audio.connect(context.destination);
		audio.start(context.currentTime);
        replays++;
	})
	.catch(function(err){
		console.error('Audio file failed to load');
	})
}

/* Play the stimulus and prompt for response */
/*add progress bar*/
var test = {
	type: jsPsychSurvey,
	title: "Please rate the musical clip by selecting from the options below.",
    pages: [
		[{
            name: "replay",
            type: "html",
            prompt: "Note: you may select more than one response.<br>\
                    Click here to see the <a href='res/html/terms.html' target='_blank'>musical term definitions</a>\
                    (they will open in a new tab).<br><br>\
                    <button onclick='replayStimulus(current_stimulus)'>Replay the clip</button><br>"

        },
         {
			name: "rate_tempo",
			type: "multi-select",
			prompt: "The speed is:",
			options: ["Very slow", "Slow", "Medium", "Fast", "Very fast"],
            columns: 5,
			required: true,
		},
		{
			name: "rate_dynamic",
			type: "multi-select",
			prompt: "The loudness is:",
			options: ["Very soft", "Soft", "Medium", "Loud", "Very loud"],
            columns: 5,
			required: true,
		},
		{
			name: "rate_register",
			type: "multi-select",
			prompt: "The register is:",
			options: ["Very low", "Low", "Medium", "High", "Very high"],
            columns: 5,
			required: true,
		},
		{
			name: "rate_articulation",
			type: "multi-select",
			prompt: "The articulation is:",
			options: ["Very smooth", "Smooth", "Medium", "Spiky", "Very spiky"],
            columns: 5,
			required: true,
		},
		{
			name: "rate_texture",
			type: "multi-select",
			prompt: "The texture is:",
			options: ["Very dense", "Dense", "Medium", "Sparse", "Very sparse"],
            columns: 5,
			required: true,
		},
		{
			name: "rate_timbre",
			type: "multi-select",
			prompt: "The sound-colour is:",
			options: ["Very dark", "Dark", "Medium", "Bright", "Very bright"],
            columns: 5,
			required: true,
		},
       	{
			name: `described`,
			type: `text`,
			prompt: `How else might you describe the music? (optional)`,
			placeholder: `Type descriptive words here`,
			textbox_columns: 50,
			textbox_rows: 1,
			required: false
		},
        {
            name: "space",
            type: "html",
            prompt: "<br>"

        }]
	],
	button_label_finish: 'Continue',
	show_question_numbers: 'onPage',
	required_error: "Please provide an answer to this question.",
	data: {
		sound: jsPsych.timelineVariable('stimulus'),
	},
    on_finish: function () {
        // Add number of replays to data
        jsPsych.data.write({"replays": replays});
        progress_update();
    }
};


/* Combine pretest and test */
var trial_listening_task = {
	timeline: [pretest, test],
	timeline_variables: stimuli_list,
	repetitions: 1,
	randomize_order: true
};
