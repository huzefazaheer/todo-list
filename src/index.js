const { displayProject } = require("./util/displayproject");
const { project } = require("./util/project");
const { task } = require("./util/tasks");

const projectdiv = document.querySelector(".project");
const tododiv = document.createElement("div");
const doingdiv = document.createElement("div");
const donediv = document.createElement("div");
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
  let isDone = false;
  while (isDone == false) {
    title = prompt("Enter title name");
    if (title != "") {
      isDone = true;
    }
  }
  isDone = false;
  while (isDone == false) {
    description = prompt("Enter description");
    if (description != "") {
      isDone = true;
    }
  }

  home.addTask(new task(title, description, "Today"));
  displayProject(home);
}

btnaddtask.addEventListener("click", (e) => {
  addTask();
  addListeners();
});

function addListeners() {
  projectdiv.childNodes.forEach((tasklist) => {
    tasklist.childNodes.forEach((taskitem, index) => {
      taskitem.addEventListener("click", (e) => {
        console.log(tasklist.classList);
        home.incrementTask(tasklist.classList, index);
        displayProject(home);
        addListeners();
      });
    });
  });
}

addListeners();
