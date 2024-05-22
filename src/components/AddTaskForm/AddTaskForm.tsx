import React from 'react';

interface AddTaskFormProps {
  taskText: string;
  onTaskTextChange: (text: string) => void;
  onAddTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({taskText, onTaskTextChange, onAddTask}) => {
  return (
    <div className="add-task-form">
      <input type="text" value={taskText} onChange={(e) => onTaskTextChange(e.target.value)}
             className="add-task-input"
      />
      <button className="add-task-button" onClick={onAddTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;