import React from 'react';

interface AddTaskFormProps {
  taskText: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ taskText}) => {
  return (
    <div>
      <input
        type="text"
        value={taskText}
      />
      <button>Add</button>
    </div>
  );
};

export default AddTaskForm;