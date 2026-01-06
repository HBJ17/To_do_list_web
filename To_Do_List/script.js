const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent marking completed
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";
}

