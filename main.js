import {addHighPriorityTask, addLowPriorityTask, addAnyTask, deleteTaskBtn,  doneTask, taskDescription} from './view.js';









addHighPriorityTask.onsubmit = function() {
    
    divHighTask = document.querySelector('#currentTaskTextHigh')
    newElementTask   = divHighTask.cloneNode(true);
    newElementTask.querySelector('p').innerHTML = valueInputHighTask;
    divHighTask.before(newElementTask);
    return false;
  };

  addLowPriorityTask.onsubmit = function() {
    let valueInputLowTask = document.querySelector('.addTaskInputLowTask').value;
    let divLowTask = document.querySelector('#currentTaskTextLow')
    newElementTask = divLowTask.cloneNode(true);
    newElementTask.querySelector('p').innerHTML = valueInputLowTask;
    divLowTask.before(newElementTask);
    return false;
  };



    let newElementTask;

    addAnyTask[0].addEventListener("click", function () {
      
        let valueInputHighTask = document.querySelector('.addTaskInputHighTask').value;
        let divHighTask = document.querySelector('#currentTaskTextHigh')
        newElementTask = divHighTask.cloneNode(true);
        newElementTask.querySelector('p').innerHTML = valueInputHighTask;
        divHighTask.before(newElementTask);
        return newElementTask;
    })
      
    addAnyTask[1].addEventListener("click", function () {
          let valueInputLowTask = document.querySelector('.addTaskInputLowTask').value;
          let divLowTask = document.querySelector('#currentTaskTextLow')
          newElementTask = divLowTask.cloneNode(true);
          newElementTask.querySelector('p').innerHTML = valueInputLowTask;
          divLowTask.before(newElementTask); 
          newElementTask.querySelector('#deleteTask').addEventListener('click', deleteTask)
          return newElementTask;
      })

        
    function deleteTask () {
       this.parentElement.remove()
    }
     
    for (let task of deleteTaskBtn) {
      task.addEventListener ('click', deleteTask)
    }

    
   
           
      
  






















/*let idTask = 0;
const list = [
    { 
        id: ++idTask,
        name: 'create a post', 
        status: 'ToDo', 
        priority: 'low'  
    },
    { 
        id: ++idTask,
        name: 'great a task', 
        status: 'In progress', 
        priority: 'high'  
    }, 
    { 
        id: ++idTask,
        name: 'make a bed', 
        status: 'Done', 
        priority: 'low'  
    },    
]

const changeStatus = (task, changeTaskStatus) => {
  let item = list.findIndex(item => item.name == task)
    if (item !== -1) {
        list[item].status = changeTaskStatus;
    } 
}
const addTask = (name, priority = 'low', status = 'In progress') => {
  
    list.push({ 
    id:  ++idTask,
    name,
    status,
    priority,
  });
}
const oldDeleteTask = (task) => {
  let item = list.findIndex(item => item.name == task)
    if (item !== -1) {
        list.splice(item, 1)    
        } 
}
const showList = () => {
    let toDoTask = 'ToDo:\n';
    let inProgress = 'In progress:\n';
    let doneTask = 'Done:\n';
for (let i = 0; i < list.length; i++) {
  if (list[i].status === 'ToDo') {
    toDoTask += list[i].name + '\n';
  }
  if (list[i].status === 'In progress') {
    inProgress += list[i].name + '\n';
  }
  if (list[i].status === 'Done') {
    doneTask += list[i].name + '\n';
  }
 }
 
  console.log(toDoTask, inProgress, doneTask)
 };

*/

