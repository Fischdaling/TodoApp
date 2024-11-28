import React from "react";
export type Todo = {
    id: number;
    task: string;
    completed: boolean;
};

interface TodoItemProps extends Todo {
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({id, task, completed, toggleComplete, deleteTodo}) => {
    return (
        <div style={{ display: "flex", alignItems: "center", width:"16.2%"}}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleComplete(id)}
            />
            <p
                style={{
                    flex: 1,
                    textDecoration: completed ? "line-through" : "none",
                    margin: 0,
                }}
            >
                {task}
            </p>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
