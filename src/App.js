import TaskCreator from "./components/TaskCreator";
import { useState } from "react";
import "./App.css";

const App = () => {

  const [tasksItems, setTaskItems] = useState([
    {name: "mi primer tarea" , done: false}
  ])

  function createTask(taskValue){
    if(!tasksItems.find(task =>task.name === taskValue)){
      
      setTaskItems([...tasksItems, {name:taskValue, done:false}])
    }else(
      alert("Tarea repetida")
    )


  }

  return (
    <div>
      <TaskCreator createTask={createTask} />
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
            tasksItems.map((task )=>(
              <tr key={task.name}>
                <td>
                {task.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
};

export default App;
