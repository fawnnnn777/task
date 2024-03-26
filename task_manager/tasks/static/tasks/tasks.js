$(document).ready(()=>{
    let $form = $('.new-task-container');
    console.log("READY")
    let $button = $('.new-task-button');
    $button.click(()=>{
        $form.toggle();
    })
    let $submit = $('#submit');
    let taskName;
    let taskDes;
    $submit.on('click', ()=>{
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
            console.log(result)
            $('.tasks-container').append(`
                        <div id="${result.id}" class="task">
                            <div class="task-top">
                                <h2 class="task-title">${result.title}</h2>
                                <div class="task-progress">
                                    <span data-id="${result.id}" class="material-symbols-outlined done">
                                        check_circle
                                    </span>
                                    <span data-id="${result.id}" class="material-symbols-outlined notdone">
                                        cancel
                                    </span>
                                </div>
                            </div>
                            <div class="task-bottom">
                                <p>${result.description}</p>
                            </div>
                        </div>
                    `);
        })        .catch(error => {
            console.error('Error adding new task:', error);

        });
        
    })
    

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

        $('.done').on('click', function(){
            var id = $(this).attr('data-id')
            task = $(`#${id}`);
            task.css("animation", "done 0.5s")
            task.css({
                "background-color": "lightgreen",
                "opacity": "0.5"
            })
            fetch(`doneTask/${id}`,{
                method: "PUT",
                body: JSON.stringify({
                    id: id
                })
            })
            .then(response => response.json())
            .then(result =>{
                console.log(result)
            })
        })

})