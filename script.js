// select elements


let input = document.getElementById("msg");
let button = document.getElementById("addItemBtn");
let tasksList = document.getElementById("taskList");

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
});