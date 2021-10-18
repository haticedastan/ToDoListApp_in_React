import React, { Component } from 'react'

export default class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task=>{
                    return(
                        <div key={task.id}>
                            <li>
                                {task.name}
                                <button>Delete</button>
                            </li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}
