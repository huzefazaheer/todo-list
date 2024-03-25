export class project {
  constructor(title, taskList) {
    this.title = title;
    this.taskList = {
      Todo: taskList,
      Doing: [],
      Done: [],
    };
  }

  addTask(task) {
    this.taskList.Todo.push(task);
  }

  getTasks() {
    return this.taskList;
  }

  //TODO: Make dom part seperate to game logic
  incrementTask(classlist, index) {
    if (classlist.contains("todo")) {
      this.taskList.Doing.push(this.taskList.Todo[index - 1]);
      this.taskList.Todo.splice(index - 1, 1);
    } else if (classlist.contains("doing")) {
      this.taskList.Done.push(this.taskList.Doing[index - 1]);
      this.taskList.Doing.splice(index - 1, 1);
    } else {
      this.taskList.Todo.push(this.taskList.Done[index - 1]);
      this.taskList.Done.splice(index - 1, 1);
    }
  }
}
