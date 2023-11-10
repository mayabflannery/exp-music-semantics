/* Variables to track the study's progress */
var timeline = [];


var progress_current = 0;
var progress_total = 0;

var progress_update = function() {
  progress_current++;  
  jsPsych.setProgressBar(progress_current / progress_total);
  console.log("Progress: %d/%d", progress_current, progress_total);
}