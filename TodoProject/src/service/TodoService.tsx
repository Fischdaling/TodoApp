import axios from 'axios';

const API_URL = 'https://localhost:5001/api/todo'; // Update with your backend URL

// Get all todos
export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new todo
export const addTodo = async (task) => {
    const newTodo = { task, completed: false };
    const response = await axios.post(API_URL, newTodo);
    return response.data;
};

// Update a todo
export const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
