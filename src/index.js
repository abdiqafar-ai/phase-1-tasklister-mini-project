document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-task-form');
    const task = document.getElementById('tasks');
  
    form.addEventListener('submit', (event) => {
              event.preventDefault(); 
              const taskDescription = document.getElementById('new-task-description').value;
              const taskPriority = document.getElementById('task-priority').value;
              if (taskDescription) {
                addTask(taskDescription, taskPriority);
                form.reset(); 
        }
      });
    
    function addTask(description, priority) {
        const taskItem = document.createElement('li');
        taskItem.textContent = description;
        taskItem.className = priority;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskItem.remove(); 
        });
      
        taskItem.appendChild(deleteButton);
        task.appendChild(taskItem);
    }
  });