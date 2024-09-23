document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const todoList = document.getElementById("todo-list");

    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value;
        if (task) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            displayTasks();
        }
    });

    function displayTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        todoList.innerHTML = tasks.map((task, index) => `
            <li>
                ${task}
                <button onclick="deleteTask(${index})">Delete</button>
            </li>`).join("");
    }

    window.deleteTask = function(index) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    };

    displayTasks();
});
