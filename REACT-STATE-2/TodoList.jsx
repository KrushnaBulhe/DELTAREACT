import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "eat", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let UpdateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let DeleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id)
    );
  };

  let ToUpperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let ToUpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let MarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let AllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={UpdateTodoValue}
      ></input>
      <br />
      <br />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />
      <hr></hr>
      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => DeleteTodo(todo.id)}>delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => ToUpperCaseOne(todo.id)}>
              upperCase todo
            </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => MarkAsDone(todo.id)}>MarkAsDone</button>
          </li>
        ))}
      </ul>
      <button onClick={ToUpperCaseAll}>Uppercase All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={AllDone}>Mark all as done</button>
    </div>
  );
}
