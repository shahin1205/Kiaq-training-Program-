import { createContext, useRef, useState } from "react";
import TaskItem from "./TaskItem";


function TaskForm({setShareTask}){

    const [taskName , setTaskName]= useState("");
    const [priority, setPriority] = useState("Low");

    
    

    function addTask(event){
        event.preventDefault();
        
        if(!taskName.trim()){
            return "pleas enter the task name"
        }

        const newTask={
            taskName: taskName.trim(),
            priority:priority
        };

        setShareTask(newTask);

        


        console.log(newTask);
        setTaskName("");
        setPriority("Low")

        

    }

    return (
        
        <div >
            
            <form action="" onSubmit={addTask}>
                <label htmlFor="taskName">Task name</label>
                <input type="text" placeholder="Task name" value={taskName} onChange={(event)=>setTaskName(event.target.value)} />
                <label htmlFor="priyarity">priyarity</label>
                <select name="" id="priyarity"
                  value={priority} onChange={(event) => setPriority(event.target.value)}
                >
                    <option >Low</option>
                    <option >Medium</option>
                    <option >High</option>
                </select>
                <button type="submit"> Add Task</button>
            </form>
            
        </div>

       
    );

}

export default TaskForm

 