import React, {useState} from "react";
import TodoItem from "./TodoItem";

function InputField() {
    const [content, setContent] = useState("");
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
    const [count, setCount] = useState(0)
    return (
    <>
    <input type="text" id="input" placeholder="Geben Sie hier Ihr TODO ein!" value={content} onChange={handleContentChange}/>
    <button id="addButton" onClick={() => {
        setCount(count + 1);
        TodoItem({id:count,task:content,completed:false});
    }}>Fügen Sie ein Todo ein!!</button>
    </>
    );
}

export default InputField;

/*
const [count, setCount] = useState(0)
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
*/