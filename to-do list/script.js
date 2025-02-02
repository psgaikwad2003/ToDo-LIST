document.addEventListener('DOMContentLoaded', function () {
  const taskContainer = document.getElementById('task-container');
  const newTaskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task');

  // Add new task
  addTaskButton.addEventListener('click', function () {
      const taskText = newTaskInput.value.trim();

      if (taskText === "") return;

      const li = document.createElement('li');
      li.classList.add('show');
      
      // Checkbox for task completion
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.classList.add('task-checkbox');

      // Task label
      const label = document.createElement('label');
      label.textContent = taskText;

      // Remove button (with delete image)
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove');
      const img = document.createElement('img');
      img.src = 'https://img.icons8.com/ios/452/delete-forever.png'; // Delete icon image
      img.alt = 'Delete';
      removeButton.appendChild(img);

      // Append elements to the list item
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(removeButton);

      // Append list item to the task container
      taskContainer.appendChild(li);

      // Clear the input field
      newTaskInput.value = "";

      // Add event listeners
      checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
              li.classList.add('completed');
          } else {
              li.classList.remove('completed');
          }
      });

      removeButton.addEventListener('click', function () {
          li.classList.add('fadeOut');
          setTimeout(() => li.remove(), 500); // Remove after animation
      });
  });
});
