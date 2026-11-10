/*

===========================================================================

🏛️ SCIT Web Programming - AI DISCLOSURE BLOCK

===========================================================================

File Name:      [script.js]

Student Name:   [Zaid Burrell]

Student ID:     [2505162]

Assignment:     [Lab #2 - Interactive Task Manager]

Date:           [10/11/2026]

 

-----------------------------------------------------------------------------

🤖 GENERIC AI TOOL UTILISED (Check all that apply):

[ ] GitHub Copilot     [ ] ChatGPT     [ ] Claude     [ ] Gemini     [X] None

-----------------------------------------------------------------------------

 

📝 SCOPE OF WORK & DEBUGGING LOG:

1. Specific Bug/Error Encountered:

   [Paste compiler error or describe the runtime logic bug you faced]

 

2. Exact Prompt Sent to AI Tool:

   "[Paste the exact text prompt you fed to the AI engine here]"

 

3. Resolution/Fix Applied:

   [Briefly explain what structural syntax or comment changes you made based

    on the AI feedback. Do not paste massive code blocks here.]

 

-----------------------------------------------------------------------------

⚠️ INTEGRITY VERIFICATION DECLARATION:

By submitting this file, I certify that the core algorithmic logic, program

architecture, and data structures implemented herein are entirely my own

authentic work. AI assistance was restricted strictly to debugging and/or

generating explanatory documentation comments in full compliance with the

course syllabus.

 

Student Electronic Signature: Z.Burrell

===========================================================================

*/

function createNewTask(e) {
  e.preventDefault();

  const taskTitle = document.getElementById("task-title");
  taskTitleValue = taskTitle.value.trim();
  console.log(taskTitleValue);
  //This stops the program from creating a task with no title
  if (taskTitleValue.length == 0) {
    return;
  }

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
    if (taskHeaders.classList.contains("finished")) {
      taskHeaders.classList.remove("finished");
    } else {
      taskHeaders.classList.add("finished");
    }
  });
}

const addTaskButton = document.getElementById("add-btn");

addTaskButton.addEventListener("click", createNewTask);
