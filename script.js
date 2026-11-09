function createNewTask() {
  //All the elements that will be added when a task is added
  const listItemDiv = document.getElementById("task_list");
  //The div that holds both divs
  const taskContainer = document.createElement("div");

  //First flex div
  const div1 = document.createElement("div");
  const taskHeaders = document.createElement("h2");
  const radioDoneButton = document.createElement("input");
  const divider = document.createElement("hr");

  //Second flex div
  const div2 = document.createElement("div");
  const priorityDescription = document.createElement("p");
  const deleteButton = document.createElement("button");

  //Getting the elements that will be used to take the text content out of
  const taskInput = document.getElementById("task-title");
  const proritySelection = document.getElementById("task-priority");

  //Appending them to the div that will hold all the content of the task

  listItemDiv.append(taskContainer);
  taskContainer.classList.add("taskContainer");
  div1.append(taskHeaders);
  div1.append(radioDoneButton);
  div1.append(divider);
  taskContainer.append(div1);
  div2.append(priorityDescription);
  div2.append(deleteButton);
  taskContainer.append(div2);

  radioDoneButton.type = "checkbox";
}

createNewTask();
