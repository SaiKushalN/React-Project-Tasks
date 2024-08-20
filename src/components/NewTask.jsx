import { useState } from 'react';
export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if(enteredTask.trim() === '')
        return;
    onAdd(enteredTask);
    setEnteredTask('');
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        className="w-64 px-2 py01 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
