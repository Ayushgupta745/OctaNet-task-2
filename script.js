    function addTask() {
        const taskInput = document.getElementById('new-task');
        const taskList = document.getElementById('task-list');
        const taskText = taskInput.value.trim();

    if (taskText === '') return;

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
    
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-button');
        completeButton.onclick = () => {
            li.classList.toggle('completed');
        };

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit-button');
    editButton.onclick = () => {
        const newTaskText = prompt('Edit task:', span.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            span.textContent = newTaskText.trim();
        }
    };

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.classList.add('delete-button');
      deleteButton.onclick = () => {
          taskList.removeChild(li);};

      li.appendChild(span);
      li.appendChild(completeButton);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';}
