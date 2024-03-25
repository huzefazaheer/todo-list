const { displayProject } = require("./util/displayproject");
const { project } = require("./util/project");
const { task } = require("./util/tasks");

tasks = [
  new task("Eat", "Get fat", "Today"),
  new task("Sleep", "Zzzzzz", "Today"),
  new task("Grind", "They don't know me son", "Today"),
  new task("Eat", "In my mind, I am always the best", "Today"),
];

home = new project("Home", tasks);

displayProject(home);
