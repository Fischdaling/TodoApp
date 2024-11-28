import TodoItem from "./TodoItem";
import {useState} from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Learn React", completed: false },
        { id: 2, task: "Build a Todo App", completed: false },
        { id: 3, task: "Master TypeScript", completed: false },
    ]);

    const addTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            task: "task",
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <h1>TODO APP</h1>
            <button onClick={addTodo}>Add Todo</button>
            <div>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} task={todo.task} completed={todo.completed}/>
                ))}
            </div>
        </>
    );
}

export default TodoList;
