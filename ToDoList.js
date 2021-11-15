const list = [
    { 
        id: 1,
        name: 'create a post', 
        status: 'ToDo', 
        priority: 'low'  
    },
    { 
        id: 2,
        name: 'great a task', 
        status: 'In progress', 
        priority: 'high'  
    }, 
    { 
        id: 3,
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
const addTask = (task, priority = 'low', status = 'In progress') => {
  let findLastId = list.findIndex(item => item.id == list.length) 
  let NewIdTask = list[findLastId].id + 1;
    list.push({ 
    id:  NewIdTask,
    name: task,
    status: status,
    priority: priority,
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
showList()
console.log(list)

