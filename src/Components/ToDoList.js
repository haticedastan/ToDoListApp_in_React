import React, { Component } from 'react'

export default class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task=>{
                    return(
                        <div key={task.id}>
                            <li className={task.done ? "done" : ""}
                            onClick={()=>this.props.cizToDo(task.name)}>
                             {task.name} 
                            </li> 
                            <button className="delete" onClick={()=>this.props.removeToDo(task.name)}>-</button>
                        </div>
                    )
                })}
            </ul>
        )
    }
}
