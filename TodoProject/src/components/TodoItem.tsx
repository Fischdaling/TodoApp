export type Todo = {
    id: number;
    task: string;
    completed: boolean;
};

// // An attempt to make a class for Inputfield's useability, to no avail.
// class Todo {
//     id: number;
//     task: string;
//     completed: boolean;
//
//     "constructor"(number: number, string: string, boolean: boolean) {
//         this.id = number;
//         this.task = string;
//         this.completed = boolean
//     };
// };


function TodoItem({task, completed}: Todo) {
    return (
        <>
            <input
                type="checkbox"
                checked={completed}
                onChange={()=>{}} // call somthing
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

            <button onClick={() => {}}>
                Delete
            </button>
        </>
    );
}

export default TodoItem;
