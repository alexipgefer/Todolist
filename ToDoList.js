const list = {
    'great a task': 'In progress',
    'make a bed': 'Done',
    'write a post': 'ToDo',
}
const changeStatus = (taskName, changeTaskStatus) => {
    if (taskName in list) {
        list[taskName] = changeTaskStatus;
    }
}

const addTask = (taskName) => {
    list[taskName] = '';
}

const deleteTask = (taskName) => {
    delete list[taskName];
}

const showList = () => {
    let toDoTask = 'ToDo: \n';
    let inProgress = 'In progress: \n';
    let doneTask = 'Done: \n';
      for (let key in list) {
          if (list[key] === 'ToDo') {
        toDoTask += [key] + ',\n' ;
        }
        if (list[key] === 'In progress') {
        inProgress += [key] + ',\n';
        }
        if (list[key] === 'Done') {
        doneTask += [key] + ',\n';
        }
      }
      console.log(toDoTask, inProgress, doneTask);
  }
  addTask('drink water')
  addTask('have a walk')
  changeStatus('have a walk', 'Done')
  changeStatus('drink water', 'In progress')
  console.log(list);
  showList();
