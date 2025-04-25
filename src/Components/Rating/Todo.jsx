import React, { useState } from "react";
// Add Todo
// Delete todos
// Edit todos
// Complete toddo

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [edit, setEdit] = useState(null);

  const handleAddOrEdit = () => {
    if (inputVal.trim()) {
      if (edit !== null) {
        //update todos
        const updateTodos = [...todos];
        updateTodos[edit] = inputVal;
        setTodos(updateTodos);
        setEdit(null);
      } else {
        //add todo
        setTodos([...todos, inputVal]);
      }
    }
  };
  console.log("todos :>> ", todos);

  //Delete
  const handleDeleteTodo = (id) => {
    if (todos) {
      setTodos(todos.filter((item, index) => index !== id));
    }
  };

  const handleEditTodo = (id) => {
    setInputVal(todos[id]);
    setEdit(id);
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
      <button onClick={handleAddOrEdit}>
        {edit !== null ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((item, id) => (
          <li
            key={id}
            style={{
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span> {item}</span>
            <button onClick={() => handleEditTodo(id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
