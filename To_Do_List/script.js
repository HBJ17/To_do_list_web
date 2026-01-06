const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-btn");
const counter = document.getElementById("counter");

/* Add task on button click */
addBtn.addEventListener("click", addTask);

/* Add task on ENTER key */
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

/* Clear all tasks */
clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateCounter();
});

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
        updateCounter();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";
    updateCounter();
}

/* Update Completed / Total */
function updateCounter() {
    const total = taskList.children.length;
    const completed = document.querySelectorAll(".completed").length;

    counter.textContent = `Completed: ${completed} / Total: ${total}`;
}
