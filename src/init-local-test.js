const jsPsych = initJsPsych({
    show_progress_bar: true,
    auto_update_progress_bar: false,
    // message_progress_bar: 'Completion',
    /* TODO: Comment on_finish after testing */
    on_finish: function (data) {
        /* Uncomment if we want to see data at end of experiment */
        jsPsych.data.displayData();
    }
  }
);