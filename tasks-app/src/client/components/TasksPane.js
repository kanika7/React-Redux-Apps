import React, { Component } from 'react';
import Task from './Task'

const listWrap = {
    display: 'flex'
}


class TasksPane extends Component {
    constructor(props) {
        super(props);
        this.changedStatus = this.changedStatus.bind(this)
    }
    changedStatus = (e, id) => {
        this.props.changedStatus(e, id)
    }
    render() {
        return ((this.props.showTaskPane)?
            (<div className="row padCls col-sm-12" style={listWrap}>
                <div className="col-sm-4 col-sm-offset-2 task-box">
                    <h2 className="text-center">UnStarted</h2>
                    { 
                    this.props.tasks.map((t,index) => {
                        return((t.status === 'UnStarted') ? (<Task t={t} key={index} changedStatus={this.changedStatus}></Task>) : null )
                    }) 
                    }
                </div>
                <div className="col-sm-4 task-box">
                    <h2 className="text-center">In Progress</h2>
                    { 
                    this.props.tasks.map((t,index) => {
                        return((t.status === 'In Progress') ? (<Task t={t} key={index} changedStatus={this.changedStatus}></Task>) : null )
                    }) 
                    }
                </div>
                <div className="col-sm-4 task-box">
                    <h2 className="text-center">Completed</h2>
                    { 
                    this.props.tasks.map((t,index) => {
                        return((t.status === 'Completed') ? (<Task t={t} key={index} changedStatus={this.changedStatus}></Task>) : null )
                    }) 
                    }
                </div>
            </div>):null
        )
    }
}

export default TasksPane