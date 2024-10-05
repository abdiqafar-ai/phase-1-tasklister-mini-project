document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');

  // attach event listener to the the submit event of the form ,
  //when the submit button is clicked, the callback function inside the event is executed
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the page from reloading
      addTask();
  });
});

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('new-task-description');//find element by unique id('new-task-description') and store it in a variable taskInput
  const prioritySelect = document.getElementById('priority');//find element by unique id('priority') and store it in a variable prioritySelect

  const taskList = document.getElementById('taskList');//find element by unique id('taskList') and store it in a variable taskList
  const newTask = document.createElement('li');//createElement method generates a new DOM element, and the newly created list item is stored in the variable newTask

  
  const taskText = document.createElement('span');
  taskText.textContent = taskInput.value;
  taskText.className = prioritySelect.value; // Set color based on priority

  
  const deleteButton = document.createElement('button');//hold the text of th task description,stored in a variable taskText
  deleteButton.textContent = 'Delete';//
  deleteButton.onclick = () => {
      taskList.removeChild(newTask); // Remove task when clicked
  };

  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = () => editTask(taskText); // Edit task when clicked

  
  newTask.appendChild(taskText);
  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

 
  taskInput.value = '';
}


function editTask(taskText) {
  const newDescription = prompt("Edit task description:", taskText.textContent);
  if (newDescription) {
      taskText.textContent = newDescription; // Update task text
  }
}


function sortTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = Array.from(taskList.children);

  
  tasks.sort((a, b) => {
      const priorityA = a.querySelector('span').className;
      const priorityB = b.querySelector('span').className;
      return priorityA.localeCompare(priorityB);
  });

  taskList.innerHTML = ''; // Clear the list
  tasks.forEach(task => taskList.appendChild(task)); // Re-add sorted tasks
}
