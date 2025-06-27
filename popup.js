document.getElementById("addBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    taskInput.value = "";
  }
});

function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

displayTasks();
