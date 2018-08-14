
import {connect} from 'react-redux';
import TasksPane from '../components/TasksPane'

const mapStateToProps = (state) => {
  return {
    showTaskPane: state.TasksReducer.showTaskPane,
    tasks: state.TasksReducer.tasks,
    status: state.TasksReducer.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changedStatus: (data) => dispatch({type: 'STATUS_CHANGED', data})
  }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(TasksPane);
