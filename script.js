document.querySelector('#push').onclick = function () {

    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter something you want");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete"><i class="fa-solid fa-trash"></i>
            <button>
        </div> 
        `;
    }
    const theTask = document.querySelectorAll(".delete");

    for (let i = 0; i < theTask.length; i++) {
        theTask[i].onclick = function () {
            this.parentNode.remove();
        }
    }
    var task = document.querySelectorAll(".task");
    for (var i = 0; i < task.length; i++) {
        task[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newtask input").
        value = " ";
};

