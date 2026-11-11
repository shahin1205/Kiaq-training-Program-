import { useState } from "react"


function TaskForm({onAddTask}) {

    const [taskId, setTaskId] = useState("");
    const [name, setName] = useState("");
    const [taskName, setTaskName] = useState("")
    const [error, setError] = useState("");
    // const [taskList, setTaskList] = useState([])
    function hendleTask(event) {
        event.preventDefault();

        if (!name.trim() || !taskId.trim() || !taskName.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        const newTask = {
            taskId: taskId.trim(),
            name: name.trim(),
            taskName: taskName.trim()
        }

        onAddTask(newTask);

        // setTaskList([...taskList, onAddTask]);
        // console.log([...taskList, onAddTask]);
        setTaskId("");
        setName("");
        setTaskName("");
        setError("");

    }

    return (
        <div>

            {error && <p style={{ color: "red" }}>{error} </p>}
            <form onSubmit={hendleTask}>
                <label htmlFor="taskId">Task Id</label>
                <input id="taskId" type="number" value={taskId} onChange={(event) => setTaskId(event.target.value)} placeholder='task Id' />
                <br />
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='name' />
                <br />
                <label htmlFor="taskName">Task Name</label>
                <input id="taskName" type="text" value={taskName} onChange={(event) => setTaskName(event.target.value)} placeholder='task name' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TaskForm