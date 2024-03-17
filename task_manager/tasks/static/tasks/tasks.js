$(document).ready(()=>{
    let $form = $('.new-task-container');
    console.log("READY")
    let $button = $('.new-task-button');
    $button.click(()=>{
        $form.toggle();
    })
    let taskName;
    let taskDes;
    $form.submit(()=>{
        taskName = $('#taskName').val();
        taskDes = $('#taskDes').val();
        fetch('newtask',{
            method: "POST",
            body: JSON.stringify({
                taskName: taskName,
                taskDes: taskDes,
            })
        })
        .then(response => response.json())
        .then(result => {
    
        })
    })
})