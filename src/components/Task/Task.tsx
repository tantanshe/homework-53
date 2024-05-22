import React from 'react';

interface TaskProps {
    id: string;
    text: string;
}

const Task: React.FC<TaskProps> = ( {text} ) => {
  return (
    <div>
      <span>{text}</span>
      <button>Удалить</button>
    </div>
  );
};

export default Task;