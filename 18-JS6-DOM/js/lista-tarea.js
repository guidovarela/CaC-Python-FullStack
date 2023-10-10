// Obtener elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Función para agregar una tarea a la lista
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Limpiar el campo de entrada después de agregar una tarea
    taskInput.value = '';
}

// Agregar una tarea cuando se hace clic en el botón "Agregar"
addTaskButton.addEventListener('click', addTask);

// Agregar una tarea cuando se presiona la tecla "Enter" en el campo de entrada
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
