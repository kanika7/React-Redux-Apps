let newTask = 0
const AddTask = (newTask) => ({
    type: 'ADD_TASK',
    id: nextTaskId++,
    newTask
})