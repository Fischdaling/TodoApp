import { useEffect, useState } from "react";
import InputField from "./InputField";
import TodoItem from "./TodoItem";
import TodoService, { Todo, AddTodo } from "../service/TodoService";

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos = await TodoService.getTodos();
                setTodos(todos);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        fetchTodos();
    }, []);

    // Add a new Todo
    const aTodo = async (task: string) => {
        if (task.trim() === "") return;

        try {
            const newTodo: AddTodo = { task, completed: false };
            const addedTodo = await TodoService.addTodo(newTodo);
            setTodos([...todos, addedTodo]);
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    // Toggle a Todo's completion status
    const toggleComplete = async (id: number) => {
        try {
            const todo = await TodoService.getTodoById(id);
            const updatedTodo = await TodoService.updateTodo(id, {
                task: todo.task,
                completed: !todo.completed,
            });
            setTodos(
                todos.map((t) => (t.id === id ? { ...t, completed: updatedTodo.completed } : t))
            );
        } catch (error) {
            console.error(`Error toggling completion for todo with id ${id}:`, error);
        }
    };

    // Delete a Todo
    const dTodo = async (id: number) => {
        try {
            await TodoService.deleteTodo(id);
            setTodos(todos.filter((t) => t.id !== id));
        } catch (error) {
            console.error(`Error deleting todo with id ${id}:`, error);
        }
    };

    return (
        <>
            <h1>TODO APP</h1>
            <InputField addTodo={aTodo} />
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        deleteTodo={dTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </div>
        </>
    );
}

export default TodoList;
