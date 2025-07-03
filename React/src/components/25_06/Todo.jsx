import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { themeDetail } from "../../ContextThemeProvider";

const Todo = () => {
  const { theme, setTheme } = useContext(themeDetail);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const changeTaskState = (id) => {
    let arr = [...todos];
    arr.map((ele) => {
      if (ele.id === id) {
        ele.isDone = !ele.isDone;
      }
    });
    setTodos(arr);
  };

  const addTodo = () => {
    let arr = [...todos];
    const obj = {
      id: uuidv4(),
      value: input,
      isDone: false,
    };
    arr.push(obj);
    setInput("");
    setTodos(arr);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todos.map((ele) => {
          return (
            <div key={ele.id}>
              {ele.isDone ? (
                <del onClick={() => changeTaskState(ele.id)}>{ele.value}</del>
              ) : (
                <span onClick={() => changeTaskState(ele.id)}>{ele.value}</span>
              )}
            </div>
          );
        })}
      </div>

      <h1>Theme From the TODO APP : {theme}</h1>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default Todo;
