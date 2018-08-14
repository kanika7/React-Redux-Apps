const TaskReducer = (state = {showForm:false, showTaskPane: false, tasks:[], taskName:'', desc:'', status:['UnStarted','InProgress','Completed']}, action) => {
    const tasks = state.tasks;
    let id = tasks.length;
    
    switch(action.type) {
        case 'ADDED_TASK': return {
                tasks: action.payload,
                showTaskPane: true
        }
        case 'UPDATE_TASKNAME': return {
                taskName: action.taskName,
                desc: state.desc,
                tasks: state.tasks,
                showTaskPane: state.showTaskPane
            }
        case 'UPDATE_TASKDESC': return {
                taskName: state.taskName,
                desc: action.desc,
                tasks: state.tasks,
                showTaskPane: state.showTaskPane
            }
        
        default: return state
    }
}

export default TaskReducer