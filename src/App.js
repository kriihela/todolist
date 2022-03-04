import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);
  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <div class="header">
      <h1>Todo list</h1>
      </div>
      <form onSubmit={addTodo}>
        <b>Description:
          <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
          Date:
          <input type="date" name="date" value={todo.date} onChange={inputChanged} />
          <input type="submit" value="Add" />
        </b>
      </form>
      <br></br>
      <table>
        <td>Date</td>
        <td>Description</td>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
