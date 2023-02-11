import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Delete } from "@mui/icons-material";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [Input, setInput] = useState("");

  // getTodos
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setTodoList(items);
    });
  }, []);

  // addTodo
  const addTodo = async (e) => {
    e.preventDefault(e);
    if (Input === "") return;
    else {
      await addDoc(collection(db, "todos"), {
        text: Input,
        completed: false,
      });
      setInput("");
    }
  };

  // updateqTodo
  const updateTodo = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // deleteTodo
  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id));
  };

  return (
    <div className="App">
      <div className="todoCard">
        <h1>Todo List</h1>
        <div className="row">
          <input
            type="text"
            placeholder="Enter Todo"
            className="todoInput"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="addBtn" onClick={addTodo}>
            Add
          </button>
        </div>
        <div className="todoList">
          {todoList.map((todo, index) => (
            <div className="todoItem" key={index}>
              <div>
                <input
                  type="checkbox"
                  onClick={() => updateTodo(todo)}
                  checked={todo.completed ? "checked" : ""}
                />
                <p
                  onClick={() => updateTodo(todo)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.text}
                </p>
              </div>
              <button className="deleteBtn" onClick={() => deleteTodo(todo)}>
                <Delete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
