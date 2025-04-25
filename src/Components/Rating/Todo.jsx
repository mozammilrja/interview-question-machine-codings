import React, { useState } from "react";
// Add Todo
// Delete todo
// Edit todo
// Complete toddo

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleTodo = () => {
    if (inputVal.trim()) {
      setTodo([...todo, inputVal]);
    }
  };
  console.log("todo :>> ", todo);

  const handleDeleteTodo = (id) => {
    if (todo) {
      setTodo(todo.filter((item, index) => index !== id));
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputVal}
        name="inputVal"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleTodo}>Add</button>

      <ul>
        {todo.map((item, id) => (
          <li style={{ gap: "20px" }} key={id}>
            {item}
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
