const projectdiv = document.querySelector(".project");

export function displayProject(project) {
  const tododiv = document.createElement("div");
  const headingTodo = document.createElement("h3");
  headingTodo.innerText = "To Do";
  tododiv.appendChild(headingTodo);
  projectdiv.appendChild(tododiv);
  displayTask(project.taskList.Todo, tododiv);

  const doingdiv = document.createElement("div");
  const headingDoing = document.createElement("h3");
  headingDoing.innerText = "Doing";
  doingdiv.appendChild(headingDoing);
  projectdiv.appendChild(doingdiv);
  displayTask(project.taskList.Doing, doingdiv);

  const donediv = document.createElement("div");
  const headingDone = document.createElement("h3");
  headingDone.innerText = "Done";
  donediv.appendChild(headingDone);
  projectdiv.appendChild(donediv);
  displayTask(project.taskList.Done, donediv);
}

function displayTask(taskList, parentdiv) {
  taskList.forEach((task) => {
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task");

    const title = document.createElement("h3");
    title.innerText = task.title;

    const description = document.createElement("p");
    description.innerText = task.description;

    const dueDate = document.createElement("p");
    dueDate.innerText = task.dueDate;

    taskdiv.appendChild(title);
    taskdiv.appendChild(description);
    taskdiv.appendChild(dueDate);
    parentdiv.appendChild(taskdiv);
  });
}
