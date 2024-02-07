import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className="bg-primary todo-btn">Add Task</button>
    </form>
  )
}
