const { displayProject } = require("./util/displayproject");
const { project } = require("./util/project");
const { task } = require("./util/tasks");

const btnaddtask = document.getElementById("btnaddtask");

tasks = [
  new task("Eat", "Get fat", "Today"),
  new task("Sleep", "Zzzzzz", "Today"),
  new task("Grind", "They don't know me son", "Today"),
  new task("Repeat", "In my mind, I am always the best", "Today"),
];

home = new project("Home", tasks);

displayProject(home);

function addTask() {
  title = prompt("Enter title name");
  description = prompt("Enter description");

  home.addTask(new task(title, description, "Today"));
  displayProject(home);
}

btnaddtask.addEventListener("click", (e) => {
  addTask();
});
