const AppReducer = (state={showForm: false}, action) => {
    switch(action.type) {
        case 'TOGGLE_TASK': return {
            showForm: !state.showForm
        }
        default: return state
    }
}

export default AppReducer