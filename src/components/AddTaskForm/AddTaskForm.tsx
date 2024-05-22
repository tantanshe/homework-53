import React from 'react';

interface AddTaskFormProps {
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;

}

const AddTaskForm: React.FC<AddTaskFormProps> = ({taskText, setTaskText}) => {
  return (
    <div>
      <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}
      />
      <button>Add</button>
    </div>
  );
};

export default AddTaskForm;