let idTask = 0;
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
const deleteTask = (task) => {
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

changeStatus('make a bed', 'In progress')
addTask('fggg', 'low', 'ToDo')
deleteTask('make a bed')
addTask('ahaha')
showList()
console.log(list)

