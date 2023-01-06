import TaskCreator from "./components/TaskCreator";
import { useState, useEffect} from "react";
import "./App.css";

const App = () => {

  // USESTATE
  const [tasksItems, setTaskItems] = useState([])

  // USE EFFECT

useEffect(()=>{
  let data = localStorage.getItem("tasks")
  if(data){
    setTaskItems(JSON.parse(data))
  }
}, [])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasksItems))
  }, [tasksItems])


  function createTask(taskValue){
    // con el ! te dice "si te devuelve undefinde"
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
