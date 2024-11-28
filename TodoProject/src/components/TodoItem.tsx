type Todo = {
    id: number;
    task: string;
    completed: boolean;
};


function TodoItem(todo: Todo) {
    return (
        <>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={()=>{}} // call somthing
            />

            <p
                style={{
                    flex: 1,
                    textDecoration: todo.completed ? "line-through" : "none",
                    margin: 0,
                }}
            >
                {todo.task}
            </p>

            <button onClick={() => {}}>
                Delete
            </button>
        </>
    );
}

export default TodoItem;
