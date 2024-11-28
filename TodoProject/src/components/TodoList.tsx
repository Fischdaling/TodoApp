import { useState } from "react";
import InputField from "./InputField";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Learn React", completed: false },
        { id: 2, task: "Build a Todo App", completed: false },
        { id: 3, task: "Master TypeScript", completed: false },
    ]);
    const [count, setCount] = useState(4);

    // Function to add a new todo
    const addTodo = (task: string) => {
        if (task.trim() === "") return;

        const newTodo = { id: count, task, completed: false };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setCount((prevCount) => prevCount + 1);
    };

    const toggleComplete = (id: number) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <h1>TODO APP</h1>
            <InputField addTodo={addTodo} />
            <div>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
                ))}
            </div>
        </>
    );
}

export default TodoList;
