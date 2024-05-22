import React from 'react';

interface TaskProps {
  task: {
    id: number;
    text: string;
  };
}

const Task: React.FC<TaskProps> = ( {task} ) => {
  return (
    <div>
      <span>{task.text}</span>
      <button>Удалить</button>
    </div>
  );
};

export default Task;