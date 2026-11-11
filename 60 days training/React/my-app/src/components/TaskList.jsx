

function TaskList({task , onDeleteTask}) {

    return (
        <ul>
            {task.map((task,index)=>(
                <li key={index}>
                    <h2>{task.name}</h2>
                    <p>{task.taskName}</p>
                    <button onClick={()=>onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
export default TaskList;
