const { default: displayMenu } = require("./util/displaymenu");
const { displayTasks } = require("./util/displaytasks");
const { project } = require("./util/project");
const { task } = require("./util/tasks");

const projectdiv = document.querySelector(".project");
const menubtn = document.querySelector(".hamburger")
const btnaddtask = document.getElementById("btnaddtask");
const btnaddproject = document.getElementById("btnaddproject");
const projlist = document.getElementById("projectlist")

days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

projectlist = []

tasks = [
  new task("Eat", "Get fat", "Today"),
  new task("Sleep", "Zzzzzz", "Today"),
  new task("Grind", "They don't know me son", "Today"),
  new task("Repeat", "In my mind, I am always the best", "Today"),
];

home = new project("Home", tasks);

projectlist.push(home)

let currproj = 0

menubtn.addEventListener("click", (e) => {
  displayMenu()
});


displayTasks(home);

function addTask(project) {
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

  isDone = false;
  while (isDone == false) {
    duedate = prompt("Enter due date")
    
    if(duedate == ""){
      date = new Date()
    }else date = new Date(duedate)
    console.log(date)
    if (date != "Invalid Date"){
      isDone = true
    }
  }

  

  project.addTask(new task(title, description, days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getFullYear()));
  displayTasks(project);
}

function getProj(proj){
  return projectlist.indexOf(proj, 0)
}

function getProjByName(name){
  for (let index = 0; index < projectlist.length; index++) {
    const element = projectlist[index];
    if (element.title == name){
        return index
    }
  }
}

function addProject() {
  let isDone = false;
  while (isDone == false) {
    title = prompt("Enter project name");
    if (title != "") {
      isDone = true;
    }
  }

  proj = new project(title, [])
  projectlist.push(proj)
  currproj = getProj(proj)
  displayTasks(proj);
  const projhtml = document.createElement("li");
  projhtml.innerText = proj.title;
  projlist.appendChild(projhtml)
  }

btnaddtask.addEventListener("click", (e) => {
  addTask(projectlist[currproj]);
  addListeners();
});

btnaddproject.addEventListener("click", (e) => {
  console.log("project new")
  addProject();
  addListeners();
});


function addListeners() {
  projectdiv.childNodes.forEach((tasklist) => {
    tasklist.childNodes.forEach((taskitem, index) => {
      taskitem.addEventListener("click", (e) => {
        projectlist[currproj].incrementTask(tasklist.classList, index);
        displayTasks(projectlist[currproj]);
        addListeners();
      });
    });
  });

  projlist.childNodes.forEach((projbtn) => {
    projbtn.addEventListener("click", (e) => {
      console.log(e.target.innerText)
      displayTasks(projectlist[getProjByName(e.target.innerText)])
      
    });
  });
}

addListeners();
