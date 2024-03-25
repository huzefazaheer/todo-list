const projectdiv = document.querySelector(".project");

export function displayProject(project) {
  displayTask(project.taskList.Todo);
}

function displayTask(taskList) {
  taskList.forEach((task) => {
    const title = document.createElement("h3");
    title.innerText = task.title;

    const description = document.createElement("p");
    description.innerText = task.description;

    const dueDate = document.createElement("p");
    dueDate.innerText = task.dueDate;

    projectdiv.appendChild(title);
    projectdiv.appendChild(description);
    projectdiv.appendChild(dueDate);
  });
}
