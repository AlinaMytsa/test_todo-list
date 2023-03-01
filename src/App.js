import React, {useState} from "react";
import Form from './components/Form'
import ToDo from "./components/ToDo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks)

  const addTask = (name, description) => {
    const newTask = {id: `${Date.now().toString()}`, name, description, completed: false}
    setTasks([...tasks,newTask])
  }

  const toggleTaskCompleted = (id) => {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) return {...task, completed: !task.completed}
      return task
    })
    setTasks(updatedTask);
  }


  const setTodo = tasks.map((task) => (
    <ToDo
      id={task.id}
      key={task.id}
      name={task.name}
      description={task.description}
      completed={task.completed}>
      <div>ID:{task.id}</div>
      <div>{task.name}</div>
      <div>{task.description}</div>
      <div>Status:</div>
      <input type="checkbox"
             checked={task.completed}
             onChange={toggleTaskCompleted}
      />
    </ToDo>
  ));

  return (
    <div className='todoApp'>
      <Form addTask={addTask}/>
      <ul style={{listStyleType:'none'}} className='todo-list'>
        {setTodo}
      </ul>
    </div>
  );
}


export default App;
