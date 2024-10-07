document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const newTask = createTask(taskDescription, priority);
    taskList.appendChild(newTask);
    taskForm.reset();
  });

  function createTask(description, priority) {
    const li = document.createElement("li");
    li.textContent = description;
    li.className = priority; 

    
    switch (priority) {
      case 'high':
        li.style.color = 'red';
        break;
      case 'medium':
        li.style.color = 'yellow';
        break;
      case 'low':
        li.style.color = 'green';
        break;
    }

   
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(li));
    li.appendChild(editButton);

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => li.remove());
    li.appendChild(deleteButton);

    return li;
  }

  function editTask(taskItem) {
    const newDescription = prompt("Edit your task:", taskItem.firstChild.textContent);
    if (newDescription) {
      taskItem.firstChild.textContent = newDescription; // Update task description
    }
  }

  
  const sortButton = document.createElement("button");
  sortButton.textContent = "Sort Tasks by Priority";
  sortButton.addEventListener("click", sortTasks);
  document.getElementById("main-content").appendChild(sortButton);

  function sortTasks() {
    const tasksArray = Array.from(taskList.children);
    tasksArray.sort((a, b) => {
      const priorityA = getPriorityValue(a.className);
      const priorityB = getPriorityValue(b.className);
      return priorityA - priorityB;
    });
    taskList.innerHTML = ''; 
    tasksArray.forEach(task => taskList.appendChild(task)); 
  }

  function getPriorityValue(priority) {
    switch (priority) {
      case 'high':
        return 3;
      case 'medium':
        return 2;
      case 'low':
        return 1;
      default:
        return 0;
    }
  }
});
