import React, { Component } from 'react';
//import addTaskActn from '.actions/AddTask'

class AddTasks extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this)
    this.id = 0;
  }
  addTask = (e) => {
    e.preventDefault();
    const data = {"pid":this.id++,"name":this.name.value,"desc":this.desc.value,"status":this.status.value} 
    this.props.addTask(e,data)
    document.getElementById("myForm").reset();
  }

  render(){
    return (
      <div className="padCls col-sm-12">
        <button className="btn btn-primary" onClick={this.props.toggleForm}>Add Tasks</button>
        <div>
        <form className={this.props.showForm? 'd-block':'d-none'} id="myForm">
          <div className="row">
            <label htmlFor="taskname" className="col-sm-2">Task: </label>
            <input type="text" className="form-control txt col-sm-4" name="taskname" ref={(input) => {this.name=input}} onChange={this.props.taskNameUpdate}/>
          </div>
          <div className="row">
            <label htmlFor="taskDesc" className="col-sm-2">Description: </label>
            <input type="text" className="form-control txt col-sm-4" name="taskDesc" ref={(input) => {this.desc=input}} onChange={this.props.taskDescUpdate}/>
          </div>
          <div className="row">
            <label htmlFor="status" className="col-sm-2">Status: </label>
            <select className="form-control col-sm-4" name="status" ref={(input) => {this.status=input}} onChange={this.props.changeStatus}>
              <option value="UnStarted">UnStarted</option>
            </select>
          </div>
          <div><button className="btn btn-primary" type="submit" onClick={this.addTask}>Submit</button></div>
        </form>
        </div>
      </div>
    )
  }
}
export default AddTasks