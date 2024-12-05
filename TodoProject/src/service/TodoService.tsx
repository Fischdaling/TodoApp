import axios from 'axios';

// Define the structure of a Todo item.
export type Todo = {
    id: number;
    task: string;
    completed: boolean;
};

// Define the structure of the new Todo that will be sent in the request body.
export type AddTodo = {
    task: string;
    completed: boolean;
};

// Define the base API URL
const BASE_URL = 'https://localhost:5241/api/todos';

class TodoService {
    // Get all Todo items from the API
    async getTodos(): Promise<Todo[]> {
        try {
            const response = await axios.get<Todo[]>(BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
    }

    // Get a single Todo item by its ID
    async getTodoById(id: number): Promise<Todo> {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching todo with id ${id}:`, error);
            throw error;
        }
    }

    // Add a new Todo item
    async addTodo(newTodo: AddTodo): Promise<Todo> {
        try {
            const response = await axios.post(BASE_URL, newTodo);
            return response.data;
        } catch (error) {
            console.error('Error adding new todo:', error);
            throw error;
        }
    }

    // Update an existing Todo item by ID
    async updateTodo(id: number, updatedTodo: AddTodo): Promise<Todo> {
        try {
            const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
            return response.data;
        } catch (error) {
            console.error(`Error updating todo with id ${id}:`, error);
            throw error;
        }
    }

    // Delete a Todo item by ID
    async deleteTodo(id: number): Promise<void> {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
        } catch (error) {
            console.error(`Error deleting todo with id ${id}:`, error);
            throw error;
        }
    }
}

export default new TodoService();
