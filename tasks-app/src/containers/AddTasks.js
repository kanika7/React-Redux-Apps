import React from 'react'
import { connect } from 'react-redux'

const AddTasks = ({dispatch}) => {
    return(
        <div className="container"> 
            <form onSubmit={e => {
                e.preventDefault;
                if(!this.val.value.trim()){
                    return;
                }
                dispatch(this.val.value)
            }}>
                <input type="text" ref={input => this.val = input}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default connect()(AddTasks)