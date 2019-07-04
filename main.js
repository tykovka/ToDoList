var newTaskInput = document.querySelector('.newtask__input');
var newTaskButtonAdd = document.querySelector('.newtask__button');

var taskList = document.querySelector('.tasks__list');
var taskListItem = document.querySelector('.tasks__list-item');
var taskListInput = document.querySelector('.tasks__list-input')
var taskListLabel = document.querySelector('.tasks__list-label');
var allTasks = document.querySelector('.tasks');
var taskListButtonDelete = document.querySelector('.tasks__list-deleteButton');

var finishedTaskListItem = document.querySelector('.finished-tasks__list-item');
var finishedtaskListInput = document.querySelector('.finished-tasks__list-input');
var finishedtaskListLabel = document.querySelector('.finished-tasks__list-label');
var finishedtaskListButtonDelete = document.querySelector('.finished-tasks__list-deleteButton');

function createNewTask(task) {
  var listItem = document.createElement('li');
  listItem.classList.add('tasks__list-item');
  var listInput = document.createElement('input');
  listInput.classList.add('tasks__list-input');
  listInput.type = 'checkbox';
  var listLabel = document.createElement('label');
  listLabel.classList.add('tasks__list-label');
  listLabel.innerText = task;
  var listButtonDelete = document.createElement('button');
  listButtonDelete.classList.add('tasks__list-deleteButton');
  listButtonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#231F20" d="M20.513 1.414L19.099 0l-8.843 8.842L1.414 0 0 1.414l8.842 8.842L0 19.098l1.414 1.414 8.842-8.842 8.843 8.842 1.414-1.414-8.842-8.842z"/></svg>';
  listItem.appendChild(listInput);
  listItem.appendChild(listLabel);
  listItem.appendChild(listButtonDelete);

return listItem;
};

function addNewTask() {
  if (newTaskInput.value) {
    var listItem = createNewTask(newTaskInput.value);
    taskList.appendChild(listItem);
    allTasks.appendChild(taskList);
    newTaskInput.value = '';
    var taskListButtonDelete = document.querySelector('.tasks__list-deleteButton');
    taskListButtonDelete.addEventListener('click', deleteTask);
    
  }
}

function deleteTask() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
  console.log('1');
}

newTaskButtonAdd.addEventListener('click', addNewTask);





