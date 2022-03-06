import React, { useState } from "react";
import TodoTable from "./TodoTable";

export default function TodoList(props) {

    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }
    const deleteTodo = (event) => {
        event.preventDefault();
        setTodos(todos.filter((todo, index) => parseInt(event.target.id) !== index));
    }

    return (
        <div className="App">
            <div class="header">
                <h1>Todo list</h1>
            </div><br />
            <form onSubmit={addTodo}>
                <b>Description:
                    <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
                    Date:
                    <input type="date" name="date" value={todo.date} onChange={inputChanged} />
                    <input type="submit" value="Add" />
                </b>
            </form>
            <br></br>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}