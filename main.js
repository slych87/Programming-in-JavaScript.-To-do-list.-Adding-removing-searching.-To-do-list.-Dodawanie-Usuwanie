const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const searchBtn = document.querySelector('.search')

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    taskNumber.textContent = listItems.length - 1;
    toDoList.splice(index, 1);

    //Regenerate array with valid indexes
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usuń</button>"
    toDoList.push(task);

    input.value = "";

    renderList();

    // ul.appendChild(task);
    // const liItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}


const searchText = (e) => {
    e.preventDefault();
    const searchText = input.value.toLowerCase();
    const searchList = toDoList.filter(li => li.textContent.toLowerCase().includes(searchText));

    ul.textContent = "";
    searchList.forEach(li => ul.appendChild(li));
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}

form.addEventListener('submit', addTask);
input.addEventListener('input', searchText);