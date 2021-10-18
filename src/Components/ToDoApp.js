import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo'
import ToDoList from './ToDoList'

export default class ToDoApp extends Component {
    state ={
        tasks: [
           
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
    removeToDo = (name)=>{
        const filtered = this.state.tasks.filter(task=>task.name!==name)
            this.setState({
                tasks:filtered
            })
    }

    cizToDo=(name)=>{
        const yeni=this.state.tasks.map(task=>{
            if(task.name===name){
                task.done=!task.done
            }
            return task
        })
        this.setState({
            tasks:yeni,
        })
    }
    render() {
        return (
            <div>
                <ToDo addToDo={this.addToDo} />  
                <ToDoList cizToDo={this.cizToDo}
                removeToDo={this.removeToDo} 
                tasks={this.state.tasks} />
            </div>
        )
    }
}
