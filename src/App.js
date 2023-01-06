import TaskCreator from "./components/TaskCreator";
import { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
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
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  function createTask(taskValue) {
    // con el ! te dice "si te devuelve undefinde"
    if (!tasksItems.find((task) => task.name === taskValue)) {
      // ESTRUCTURA DE LOS VALORES RECIBIDOS EN EL INPUT
      setTaskItems([...tasksItems, { name: taskValue, done: false }]);
    } else alert("Tarea repetida");
  }

  // DELETE TASKS
  const cleanTask = () =>{
    setTaskItems(tasksItems.filter(task => !task.done)) 
    setShowTaskDone(false)
  }

  return (
    <div className="App">
      <TaskCreator createTask={createTask} />
      <TaskTable toogleTask={toogleTask} tasks={tasksItems} />

      <VisibilityControl isChecked={showTaskDone} setShowTaskDone={(checked)=> setShowTaskDone(checked)} cleanTask = {cleanTask} />
      {
        showTaskDone && (<TaskTable toogleTask={toogleTask} tasks={tasksItems} showCompleted= {showTaskDone}/>)

      }


    </div>
  );
};

export default App;
