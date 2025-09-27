// select elements


let input = document.getElementById("msg");
let button = document.getElementById("addItemBtn");
let tasksList = document.getElementById("taskList");
let strike = document.getElementsByName("strike");
let bulkCompleteBtn = document.getElementById("bulkComplete");

// function to add a new task
function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }
}

// add new task list item


button.addEventListener("click", () => {
  let newTask = document.createElement("li");
  newTask.innerText = input.value;

  // Create a delete button for this task
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => {
    tasksList.removeChild(newTask);
  });

  newTask.appendChild(deleteBtn);
  tasksList.appendChild(newTask);
  input.value = "";
  // create a complete button
  let completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.addEventListener("click", () => {
    newTask.style.textDecoration = "line-through";
  });
  newTask.appendChild(completeBtn);

  // create a bulk complete button
  bulkCompleteBtn.addEventListener("click", () => {
    let tasks = tasksList.getElementsByTagName("li");
    for (let task of tasks) {
      task.style.textDecoration = "line-through";
    }
  });
});
