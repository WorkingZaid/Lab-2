function createNewTask(e) {
  e.preventDefault();
  //All the elements that will be added when a task is added
  const listItemDiv = document.getElementById("task_list");
  //The div that holds both divs
  const taskContainer = document.createElement("div");

  //First flex div
  const div1 = document.createElement("div");
  const taskHeaders = document.createElement("h2");
  const radioDoneButton = document.createElement("input");

  //Second flex div
  const div2 = document.createElement("div");
  const priorityDescription = document.createElement("p");
  const deleteButton = document.createElement("button");

  //Getting the elements that will be used to take the text content out of
  const taskInput = document.getElementById("task-title");
  const prioritySelection = document.getElementById("task-priority");

  //Getting the text content from both different intputs and putting using them for the display
  taskHeaders.innerText = taskInput.value;
  priorityDescription.innerText = prioritySelection.value;

  //Appending them to the div that will hold all the content of the task
  listItemDiv.append(taskContainer);
  taskContainer.classList.add("task-item");
  if (prioritySelection.value == "Low Priority") {
    taskContainer.classList.add("low");
  } else if (prioritySelection.value == "Medium Priority") {
    taskContainer.classList.add("medium");
  } else if (prioritySelection.value == "High Priority") {
    taskContainer.classList.add("high");
  }
  //Div 1
  taskContainer.append(div1);
  div1.append(taskHeaders);
  div1.append(priorityDescription);

  div1.classList.add("flex1");

  //Div 2

  div2.append(radioDoneButton);
  div2.classList.add("flex2");
  div2.append(deleteButton);
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  taskContainer.append(div2);
  radioDoneButton.id = "doneCheckbox";
  radioDoneButton.type = "checkbox";
  //Making the delete button delete the div
  deleteButton.addEventListener("click", (e) => taskContainer.remove());
  radioDoneButton.addEventListener("click", (e) => {
    if (taskHeaders.classList.contains("finished")){
      taskHeaders.classList.remove("finished");
    }
    else{
      taskHeaders.classList.add("finished");
    }
  });
}

const addTaskButton = document.getElementById("add-btn");

addTaskButton.addEventListener("click", createNewTask);

/*To-do list
1. Fix the spacing on each class
2. Submit the project
*/
