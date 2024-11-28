import TodoItem from "./TodoItem";
import {useState} from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Learn React", completed: false },
        { id: 2, task: "Build a Todo App", completed: false },
        { id: 3, task: "Master TypeScript", completed: false },
    ]);

    const addTodo = (task:string) => {
        const newTodo = {
            id: todos.length + 1,
            task: task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setTaskInput("");
    };


    const [taskInput, setTaskInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    };

    return (
        <>
            <h1>TODO APP</h1>
            <input
                type="text"
                value={taskInput}
                onChange={handleInputChange}
                placeholder="Enter new task"
            />
            <button onClick={() => addTodo(taskInput)}>
                Add Todo
            </button>

            <div>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} task={todo.task} completed={todo.completed}/>
                ))}
            </div>
        </>
    );
}

export default TodoList;
