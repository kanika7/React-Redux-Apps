import React, { Component } from 'react';

const listItems = {
    border: '1px solid #a8a8a8',
    padding: '0.5rem',
    borderRadius: '4px',
    margin: '1rem auto'
}
class Task extends Component {
    constructor(props){
        super(props);
        this.status=["UnStarted","In Progress","Completed"]
        this.changeTaskStatus = this.changeTaskStatus.bind(this)
    }
    changeTaskStatus = (e) => {
        const data = {"pid":this.props.t.pid,"status":e.target.value}
        this.props.changedStatus(data)
    }
    render() {
        return (
            <div style={listItems}>
                <div>TASK NAME: {this.props.t.name}</div>
                <div>DESCRIPTION: {this.props.t.desc}</div>
                <div>
                    <span>STATUS: </span>
                    <select name="taskStatus" onChange={this.changeTaskStatus}>
                        {
                         this.status.map((st, index) => {
                            return(<option key={index} selected={this.props.t.status === st} value={st}>{st}</option>)
                         })   
                        }
                    </select>
                </div>
            </div>   
        )
    }
}

export default Task