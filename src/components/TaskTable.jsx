import TaskRow from "./TaskRow"


const TaskTable = ({tasks}) => {
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
              <TaskRow key={task.name} task ={task}/>
            ))
          }
        </tbody>
      </table>

  )
}

export default TaskTable