export class project {
  constructor(title, taskList) {
    this.title = title;
    this.taskList = {
      Todo: taskList,
      Doing: taskList,
      Done: taskList,
    };
  }

  addTask(task) {
    this.taskList.Todo.push(task);
  }

  getTasks() {
    return this.taskList;
  }
}
