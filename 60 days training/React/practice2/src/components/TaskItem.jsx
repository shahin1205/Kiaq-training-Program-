import { useContext, useEffect, useState } from "react";

import {dataShare} from "../App";

function TaskItem({searchName}){
    const getTaskData= useContext(dataShare);

    const [taskItem, setTaskItem]= useState([]);

    useEffect(()=>{
        if(getTaskData!==undefined && getTaskData!== null){
        setTaskItem((prev)=> [...prev,getTaskData])
        }
    },[getTaskData])
    

    const filterTask=taskItem.filter((item)=>{
        if(searchName || String(searchName).trim()==="" ){
            return true
        }
        if(!item || !item.taskName){
            return false;
        }
        const taskName1=String(item.taskName).toLowerCase();
        const searchName1=String(searchName).toLowerCase().trim();
        
           return taskName1.includes(searchName1)
             
        
        
});
    return(
        <>
        <h1>this Task Item</h1>
        {
            filterTask.map((item,index)=>
            (
                <div key={index}>
                    <h1>{item.taskName}</h1>
                    <p>{item.priority}</p>
                </div>
            ))
           
        }
        
        </>
    )
}

export default TaskItem