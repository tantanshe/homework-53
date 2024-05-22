import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';
import './App.css';

const App = () => {

  const [tasks] = useState([
    {id: 1, text: 'First task'},
    {id: 2, text: 'Second task'},
    {id: 3, text: 'Third task'}
  ]);

  const [taskText, setTaskText] = useState<string>('');

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm taskText={taskText} setTaskText={setTaskText} />
      <div>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default App;
