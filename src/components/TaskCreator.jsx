import { useState } from "react"

const TaskCreator = ({createTask}) => {
  const [newTaskName, setTaskName] = useState("")

  const handleSubmite = (e)=>{
    e.preventDefault()
    createTask(newTaskName)
    setTaskName("")
  }
  
  return (
      <form onSubmit={handleSubmite} className= "my-2 row"> 
      <div className="col-9">
      <input type="text" onChange={(e)=>setTaskName(e.target.value)} value={newTaskName} placeholder="Enter text" className="form-control"/>
      </div>
    <div className="col-3">
    <button className="btn btn-primary btn-sm">Click Me</button>

    </div>
      </form>
  )
}

export default TaskCreator