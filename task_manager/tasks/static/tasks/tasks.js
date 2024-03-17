$(document).ready(()=>{
    let $form = $('.new-task-container');
    console.log("READY")
    let $button = $('.new-task-button');
    $button.click(()=>{
        $form.toggle();
    })
    let taskName;
    let taskDes;
    let taskContainer = $('.tasks-container')
    let taskDiv = $('.task').clone()
    $form.submit(()=>{
        taskName = $('#taskName').text();
        taskDes = $('#taskDes').text();
    })
    let top = $(taskDiv > '.task-top');
    let title = $(top > '.task-title');
    title.text(taskName);
})