import React, {useState} from 'react';
import Button from './Button';

interface Task {
  id: number,
  title: string,
  completed: boolean
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addNewTask = () => {
    if(newTask.trim() === ('')) return

    setTasks((t) => [
      {id: Date.now(), title: newTask, completed: false}, ...t
    ])

    // const task: Task = {
    //   id: Date.now(),
    //   title: newTask,
    //   completed: false
    // };

    // setTasks([...tasks, task]);
    setNewTask("");
  }

  const checkCompleted = (id: number) => {
    setTasks(
      tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
    )
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return(
    <div>
      <h2>Todo List</h2>
      <input
        type='text'
        placeholder='Add new Task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button label='Add task to the list' onClick={addNewTask} />
      {/* <button onClick={addNewTask}>Add task to the list</button> */}
      <section>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type={'checkbox'}
                checked={task.completed}
                onChange={() => checkCompleted(task.id)}
              />
              {task.title} <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>

      </section>
    </div>
  )
}

export default TodoList;