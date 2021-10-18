import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo'
import ToDoList from './ToDoList'

export default class ToDoApp extends Component {
    state ={
        tasks: [
            {id:1 , name :"task1", done:false},
            {id:2 , name:"task2", done:false}
        ]
    }

    addToDo=(newInput)=>{
        if(newInput===""){
            alert("Görev girmeyi unuttunuz")
        }else if(this.state.tasks.find(task=>task.name===newInput)){
            alert("Bunu daha önce girmiştin")
        }else{
            const  newTask={
                id:uuidv4(),
                name:newInput,
                done:false

            }
            this.setState({
                tasks:[...this.state.tasks,newTask]
            })
        }
    }
    render() {
        return (
            <div>
                <ToDo addToDo={this.addToDo} />  
                <ToDoList tasks={this.state.tasks} />
            </div>
        )
    }
}
