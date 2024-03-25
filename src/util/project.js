export class project {
  constructor(title, taskList) {
    this.title = title;
    this.taskList = taskList;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  getTasks() {
    return this.taskList;
  }
}
