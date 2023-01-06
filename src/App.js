import TaskCreator from "./components/TaskCreator";
import { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";
import "./App.css";

const App = () => {
  // USESTATE
  const [tasksItems, setTaskItems] = useState([]);
  const [showTaskDone, setShowTaskDone] = useState(false)

  // USE EFFECT & LOGALSTORAGE

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  // TOOGLE TASK FUNCION
  const toogleTask = (task) => {
          // USAS MAP en las tareas, primero revisas si la tarea que te pasan existe, si existe usas los ... para copiar las tareas existentes y modificas el valor de la propiedad done al valor seleccionado
    setTaskItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  function createTask(taskValue) {
    // con el ! te dice "si te devuelve undefinde"
    if (!tasksItems.find((task) => task.name === taskValue)) {
      // ESTRUCTURA DE LOS VALORES RECIBIDOS EN EL INPUT
      setTaskItems([...tasksItems, { name: taskValue, done: false }]);
    } else alert("Tarea repetida");
  }

  return (
    <div className="App">
      <TaskCreator createTask={createTask} />
      <TaskTable toogleTask={toogleTask} tasks={tasksItems} />

      <div>
        <input type="checkbox" onChange={(e) => setShowTaskDone(!showTaskDone)}></input> <label>Tasks completed</label>
      </div>

      {
        showTaskDone && (<TaskTable toogleTask={toogleTask} tasks={tasksItems} showCompleted= {showTaskDone}/>)

      }


    </div>
  );
};

export default App;
