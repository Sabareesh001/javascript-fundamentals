// get input field
const taskInput = document.querySelector('input[type="text"]');

// add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// add new task to list
function addTask() {
  const taskInput = document.querySelector('input[type="text"]');
  const taskList = document.getElementById("task-list");

  // only add if input is not empty
  if (taskInput.value.trim() !== "") {
    // create task item container
    const taskItem = document.createElement("div");
    taskItem.appendChild(document.createElement("input")).type = "checkbox";

    // create label with task text
    const label = document.createElement("label");
    label.textContent = taskInput.value;
    taskItem.appendChild(label);

    // add styling and insert into list
    taskItem.classList.add("task-item");
    taskList.appendChild(taskItem);

    // clear input field
    taskInput.value = "";
  }
}

// remove all tasks from list
function clearTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
}
