
const TaskRow = ({task, toogleTask}) => {
  return (
    
    <tr key={task.name}>
    <td>
    {task.name}
    <input type="checkbox"
    checked={task.done}
    onChange={()=> toogleTask(task)}
    
    />
    </td>
  </tr>


    )
}

export default TaskRow