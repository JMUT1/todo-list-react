import TaskRow from "./TaskRow"


const TaskTable = ({tasks, toogleTask}) => {
  return (
    <table>
        <thead>
        <tr>
          <td>
            Task
          </td>
        </tr>
        </thead>
        <tbody>
          {
            tasks.map((task )=>(
              <TaskRow key={task.name} task ={task} toogleTask={toogleTask}/>
            ))
          }
        </tbody>
      </table>

  )
}

export default TaskTable