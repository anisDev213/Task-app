// Get the selectors

// add todo button
const addBtn = document.querySelector("#addBtn");

// add todo input
const taskInput = document.querySelector("#taskInput");

// tasks container
const tasksContainer = document.querySelector(".tasks");

// filter tasks input
const filterInput = document.querySelector("#filterTasks");

// clear button
const clear = document.querySelector("#clear");

// add message div when you add or remove task
const alertBox = document.querySelector(".alert");

// tasks
let tasks = [];

// time
let time = 1500;

// Event Listener

addBtn.addEventListener("click", addTask);
filterInput.addEventListener("keyup", filterTasks);
clear.addEventListener("click", clearTasks);

// functions
// add task function
function addTask(e) {
  // remove submit event
  e.preventDefault();

  // check if there is value in the input
  if (taskInput.value === "") {
    alertBox.innerHTML = `<h2>Please Filed Input</h2>`;
    alertBox.classList.remove("hide");
    alertBox.classList.add("alert-error");

    setTimeout(() => {
      alertBox.classList.add("hide");
      alertBox.classList.remove("alert-error");
      alertBox.innerHTML = "";
    }, time);
  } else {
    // add success message when you add task
    alertBox.innerHTML = `<h2>Task Added Successfuly !</h2>`;
    alertBox.classList.remove("hide");
    alertBox.classList.add("alert-success");

    setTimeout(() => {
      alertBox.classList.add("hide");
      alertBox.classList.remove("alert-success");
      alertBox.innerHTML = "";
    }, time);
    // add success message when you add task

    // create new task
    // add li
    let li = document.createElement("li");
    li.classList.add("task");
    // add text
    let h3 = document.createElement("h3");
    h3.innerText = taskInput.value;
    h3.classList.add("task-text");
    li.appendChild(h3);
    // add task control
    let div = document.createElement("div");
    div.classList.add("task-controls");

    // add check btn
    let checkBtn = document.createElement("i");
    checkBtn.className = "fas fa-check";
    div.appendChild(checkBtn);

    // add trash button
    let trashBtn = document.createElement("i");
    trashBtn.className = "fas fa-trash";
    div.appendChild(trashBtn);

    li.appendChild(div);

    tasksContainer.appendChild(li);

    // clear input value
    taskInput.value = "";

    // tasks controls functions

    li.addEventListener("click", (e) => {
      let edited = false;
      const taskValue = e.target.parentElement.previousElementSibling;
      switch (e.target.className) {
        // complete task
        case "fas fa-check":
          taskValue.classList.toggle("completed");
          li.classList.toggle("completed");
          break;

        // remove task
        case "fas fa-trash":
          li.remove();
          alertBox.classList.remove("hide");
          alertBox.classList.add("alert-error");
          alertBox.innerHTML = `<h2>Task Was Deleted</h2>`;
          setTimeout(() => {
            alertBox.classList.add("hide");
          }, time);
          break;
      }
    });
  }
}

// filterTasks function
function filterTasks(e) {
  let tasksContents = tasksContainer.querySelectorAll("li");

  tasksContents.forEach((content) => {
    const filterValue = e.target.value.toLowerCase();
    const value = content.firstElementChild.innerHTML.toLowerCase();
    if (value.indexOf(filterValue) > -1) {
      content.style.display = "";
    } else {
      content.style.display = "none";
    }
  });
}

// clear tasks
function clearTasks() {
  tasksContainer.innerHTML = "";
  alertBox.classList.remove("hide");
  alertBox.classList.add("alert-error");
  alertBox.innerHTML = `<h2>All Tasks Was Deleted</h2>`;
  setTimeout(() => {
    alertBox.classList.add("hide");
  }, time);
}
