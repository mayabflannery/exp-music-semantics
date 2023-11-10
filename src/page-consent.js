/* Write the consent in "doc/consent.md" 
- then export html and move to "res/html/consent.html" */
var page_consent = {
    type: jsPsychExternalHtml,
    url: "res/html/consent.html",
    cont_btn: "submit",
    check_fn: function (elem) {
        if (document.getElementById('check_consent').checked) {
            return true;
        } else {
            alert(
                "You did not agree to the consent. If you would like more \
                information about the study, please contact one of the \
                administrators.");
            return false;
        }
    },
    force_refresh: true,
    data: { consent: "complete", },
    on_finish: progress_update,
};