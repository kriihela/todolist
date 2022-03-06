import React from "react";

export default function TodoTable(props) {
    return (
        <div>
            <table>
                <td>Date</td>
                <td>Description</td>
                <tbody>
                    {
                        props.todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.desc}</td>
                                <td><button onClick={props.deleteTodo} id={index}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}