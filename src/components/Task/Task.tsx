import React from 'react';

interface TaskProps {
  task: {
    id: string;
    text: string;
  };
  onRemoveTask: (taskId: string) => void;
}

const Task: React.FC<TaskProps> = ( {task, onRemoveTask} ) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button className="remove-task-button" onClick={() => onRemoveTask(task.id)}>Remove</button>
    </div>
  );
};

export default Task;