export class project {
  constructor(title, taskList) {
    this.title = title;
    this.taskList = {
      Todo: taskList,
      Doing: null,
      Done: null,
    };
  }

  addTask(task) {
    this.taskList.Todo.push(task);
  }

  getTasks() {
    return this.taskList;
  }
}
