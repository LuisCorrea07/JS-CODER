// Info fecha

const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Tasks Container

const taskContainer = document.getElementById('TasksContainer');

const setDate = () =>{
    dateNumber.textContent = date.toLocalString('es', {day:'numeric'});
    dateText.textContent = date.toLocalString('es', {weekday:'long'});
    dateMonth.textContent = date.toLocalString('es', {month:'numeric'});
    dateYear.textContent = date.toLocalString('es', {year:'numeric'});
};

const AddNewTask = event =>{
    event.preventDefault();
    const{ value } = event.target.taskText;
    if(!value) return;
    const task = document.createEvent('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event =>{
    event.target.classList.toggle('done');
}

const order = () =>{
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach( el =>{
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = ()=>{
    order().forEach(el => taskContainer.appendChild(el))
}

setDate();