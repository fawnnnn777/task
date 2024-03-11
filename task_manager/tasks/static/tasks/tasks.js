document.addEventListener('DOMContentLoaded', ()=> {
    console.log("hello world")
    const task = document.querySelector('.task');
    const done = document.querySelector('.done');
    done.addEventListener('click', function(){
        console.log('done');
        task.style.background = 'rgb(173,255,47, 0.5)';
        task.style.filter = 'blur(2px)'
        task.style.animation = 'done 0.5s'
    });

})