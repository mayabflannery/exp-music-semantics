/* Display welcome page */
var page_welcome = {
    type: jsPsychExternalHtml,
    url: "res/html/welcome.html",
    cont_btn: "start",
    check_fn: function () { return true; },
    force_refresh: true,
    on_finish: progress_update,
};