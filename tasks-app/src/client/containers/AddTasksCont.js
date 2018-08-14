
import AddTasks from '../components/AddTasks'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    showForm: state.AppReducer.showForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleForm: () => {
      return dispatch({type: 'TOGGLE_TASK'})  
    },
    taskNameUpdate: (e) => {
      return dispatch({type: 'UPDATE_TASKNAME', taskName: e.target.value})      
    },
    taskDescUpdate: (e) => {
      return dispatch({type: 'UPDATE_TASKDESC', desc: e.target.value})      
    },
    addTask: (e,data) => {
      e.preventDefault();
      return dispatch({type: 'ADD_TASK', data:data})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTasks);
