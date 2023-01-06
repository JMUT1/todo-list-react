import { useState } from "react"

const TaskCreator = ({createTask}) => {
  const [newTaskName, setTaskName] = useState("")

  const handleSubmite = (e)=>{
    e.preventDefault()
    createTask(newTaskName)
    setTaskName("")
  }
  
  return (
    <div className="App" onSubmit={handleSubmite}>
      <form>
        <input type="text" onChange={(e)=>setTaskName(e.target.value)} value={newTaskName} placeholder="Enter text"/>
        <button>Click Me</button>
      </form>
    </div>
  )
}

export default TaskCreator