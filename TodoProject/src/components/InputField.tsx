import React, { useState } from "react";

interface InputFieldProps {
    addTodo: (task: string) => void; // Function to add todo
}

const InputField: React.FC<InputFieldProps> = ({ addTodo }) => {
    const [content, setContent] = useState(""); // To store the input value

    // Handle the input field change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    // Handle the button click to add a new todo
    const handleAddClick = () => {
        addTodo(content); // Call the addTodo function passed from TodoList
        setContent(""); // Clear the input field after adding
    };

    return (
        <div>
            <input
                type="text"
                value={content}
                onChange={handleInputChange}
                placeholder="Enter new task"
            />
            <button id="addButton" onClick={handleAddClick}>
                Fügen Sie ein Todo ein!!
            </button>
        </div>
    );
};

export default InputField;
