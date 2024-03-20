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

    function handleDone(id){
        console.log(id)
    }

    $('.notdone').on('click', function() {
        var id = $(this).attr('data-id');
        task = $(`#${id}`)
        fetch(`removeTask/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                id: id
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log(result);
            task.remove()
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
    
    
})