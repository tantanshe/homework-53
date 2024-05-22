import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([
    {id: '1', text: 'First task'},
    {id: '2', text: 'Second task'},
    {id: '3', text: 'Third task'}
  ]);

  const [taskText, setTaskText] = useState<string>('');

  const taskTextChange = (text: string) => {
    setTaskText(text);
  };

  const addTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: taskText
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setTaskText('');
    }
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm
        taskText={taskText}
        onTaskTextChange={taskTextChange}
        onAddTask={addTask}
      />
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onRemoveTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
