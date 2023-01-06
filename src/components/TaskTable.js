import TaskRow from "./TaskRow"


const TaskTable = ({ tasks, toogleTask, showCompleted = false }) => {

  const taskTableRows = (doneValue) => {
    return (
      tasks
      .filter(task => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toogleTask={toogleTask} />
      ))
    )
  }
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <td>
            Task
          </td>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>

  )
}

export default TaskTable