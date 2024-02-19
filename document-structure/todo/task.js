const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

button.addEventListener('click', (e) => {
    e.preventDefault();

// получаем введенные значения из input
    const taskInput = document.getElementById('task__input');
    const tasks = taskInput.value;

// если поле пустое, то задача не добавится
    if (!tasks) return;

// создаем родительский элемент task и добавляем его в tasks__list
    const task = document.createElement('div');
    task.className = 'task';
    tasksList.appendChild(task);

// создаем дочерний элемент task__title и добавляем новую задачу
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    task.appendChild(taskTitle);

    taskTitle.innerHTML = tasks;

// Очищаем поле после ввода задачи для возможности ввода новой задачи
    taskInput.value = "";

// Удаление отдельной задачи
    const taskRemove = document.createElement('a');
    taskRemove.className = 'task__remove';
    task.appendChild(taskRemove);

    taskRemove.innerHTML = '&times;';
    taskRemove.addEventListener('click', () => {
        task.remove();
    })
});