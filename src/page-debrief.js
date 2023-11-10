/* Write the debrief in "doc/debrief.md" 
- then export html and move to "res/html/debrief.html" */
var page_debrief = {
    type: jsPsychExternalHtml,
    url: "res/html/debrief.html",
    cont_btn: "done",
    check_fn: function () { return true; },
    force_refresh: true,
    on_finish: progress_update,
};