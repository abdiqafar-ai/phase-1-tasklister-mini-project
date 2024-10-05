document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const taskDescription = document.getElementById('new-task-description').value;
      const taskPriority = document.getElementById('task-priority').value;

      if (taskDescription) {
          addTask(taskDescription, taskPriority);
          form.reset(); // Clear the form input
      }
    });
  
  function addTask(description, priority) {
      const taskItem = document.createElement('li');
      taskItem.textContent = description;
      taskItem.className = priority; // Add priority as a class for styling

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          taskItem.remove(); // Remove the task from the list
      });
    
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  }
});


