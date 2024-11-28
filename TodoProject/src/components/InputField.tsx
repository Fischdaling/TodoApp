import {useState} from "react";

function InputField() {
    const [content, setContent] = useState("");
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
    return (
    <>
    <input type="text" id="input" placeholder="Geben Sie hier Ihr TODO ein!" value={content} onChange={handleContentChange}/>
    <button id="addButton" onClick={() => console.log(content)}>Fügen Sie ein Todo ein!!</button>
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