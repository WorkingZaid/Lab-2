function createNewTask() {
  //All the elements that will be added when a task is added
  const listItemSection = document.getElementById("task_list");
  const taskContainers = document.createElement("div");
  const taskHeaders = document.createElement("h2");
  const priorityDescription = document.createElement("p");
  const radioDoneButton = document.createElement("input");
  const deleteButton = document.createElement("button");
  const divider = document.createElement("hr");
  
  //Appending them to the div that will hold all the content of the task

  listItemSection.append(taskContainers);
  taskContainers.classList.add("taskContainers");
  taskContainers.append(taskHeaders);
}

createNewTask();
