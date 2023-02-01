import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/all.min.css";

function App() {
    const [items, setItems] = useState([
        { thing: "Item 1", completed: false },
        { thing: "Item 2", completed: true },
        { thing: "Item 3", completed: false }
    ]);
    const [left, setLeft] = useState(1);

    const handleSubmit = event => {
        event.preventDefault();
        const todoItem = event.target.todoItem.value;
        setItems([...items, { thing: todoItem, completed: false }]);
        setLeft(left + 1);
    };

    return (
        <div className="App">
            <h1>Todo List:</h1>
            <ul className="todoItems">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        {item.completed ? (
                            <span className="completed">{item.thing}</span>
                        ) : (
                            <span>{item.thing}</span>
                        )}
                        <span className="fa fa-trash"></span>
                    </li>
                ))}
            </ul>

            <h2>Left to do: {left}</h2>

            <h2>Add A Todo:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Thing To Do" name="todoItem" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
