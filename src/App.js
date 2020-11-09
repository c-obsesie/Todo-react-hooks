import "./App.css";

import React, { useState } from "react";

function Todo({ todo, index, addToDepartment }) {
 
  // const drop =e=>{
  //   e.preventDefault()
  //   const card_id=e.dataTransfer.getData('card_id')

  // }
  return (
    <div className="todo">
      <h1>{todo.text}</h1>
      <p>index is {index}</p>
      <p>Task List </p>
      <ul>{todo.tasks.map((tas)=>(<li key={index + Math.random()} >{tas}</li>))}</ul>
      <ToDoDepartment
        index={index}
        addToDepartment={addToDepartment}
      ></ToDoDepartment>
    </div>
  );
}

function ToDoDepartment({ addToDepartment, index }) {
  // for each department
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!department) return;
    addToDepartment(department, index);
    setDepartment(" ");
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>index for input {index}</p>
      <input
        placeholder="Enter task name"
        type="text"
        value={department}
        index={index}
        onChange={(e) => setDepartment(e.target.value)}
      ></input>
    </form>
  );
}

function TodoForm({ addTodo }) {
  // to introduce department
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Column name"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function App() {
  const [todos, SetTodo] = useState([
    { text: "Marketing", tasks: [] },
    { text: "Media", tasks: [] },
    { text: "PR", tasks: [] },
  ]);

  const addTodo = (text, tasks) => {
    const NewTodos = [...todos, { text, tasks: [] }];
    SetTodo(NewTodos);
  };

  const addToDepartment = (text, index) => {
    // console.log("the text is " +text)
    let newDepartament = todos[index].tasks.push(text);
    let copyState = [...todos, newDepartament].slice(
      0,
      [...todos, newDepartament].length - 1
    );
    SetTodo(copyState);
  };

  return (
    <div className="app">
      List of Departments
      <p className="addtodo">Add to Do</p>
      <TodoForm addTodo={addTodo}></TodoForm>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            addToDepartment={(text, index) => addToDepartment(text, index)}
            key={index}
            index={index}
            todo={todo}
          ></Todo>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default App;
