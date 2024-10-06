document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortButton = document.getElementById("sort-tasks");
  let tasks = [];

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const taskDescription = document.getElementById("new-task-description").value;
    const user = document.getElementById("user").value;
    const duration = document.getElementById("duration").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const newTask = {
      description: taskDescription,
      user: user,
      duration: duration,
      dueDate: dueDate,
      priority: priority,
    };

    tasks.push(newTask);
    renderTasks();
    taskForm.reset();
  });

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = `${task.description} (User: ${task.user}, Duration: ${task.duration}, Due: ${task.dueDate})`;
      li.style.color = getColorByPriority(task.priority);
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => {
        tasks.splice(index, 1);
        renderTasks();
      };

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.onclick = () => editTask(index);

      li.appendChild(deleteButton);
      li.appendChild(editButton);
      taskList.appendChild(li);
    });
  }

  function getColorByPriority(priority) {
    switch (priority) {
      case "high": return "red";
      case "medium": return "yellow";
      case "low": return "green";  
    }
  }

  sortButton.addEventListener("click", () => {
    tasks.sort((a, b) => {
      return a.priority.localeCompare(b.priority);
    });
    renderTasks();
  });

  function editTask(index) {
    const task = tasks[index];
    document.getElementById("new-task-description").value = task.description;
    document.getElementById("user").value = task.user;
    document.getElementById("duration").value = task.duration;
    document.getElementById("due-date").value = task.dueDate;
    document.getElementById("priority").value = task.priority;

    tasks.splice(index, 1);
    renderTasks();
  }
});
