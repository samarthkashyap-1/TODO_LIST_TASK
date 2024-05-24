import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
console.log(BASE_URL);



const token = localStorage.getItem("TaskGenie")
  ? JSON.parse(localStorage.getItem("TaskGenie")).token
  : null;

//   console.log(token);

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    });

export const register = async (name, email, password) => {
    const { data } = await api.post('/api/user/register', {
        name,
        email,
        password,
    });
    return data;
}
export const login = async (email, password) => {
    const { data } = await api.post("/api/user/login", {
      email,
      password,
    });
    return data;
}

export const getAllTasks = async () => {
    const { data } = await api.get("/api/task");
    return data;
}

export const getUserTask = async (id) => {
    const { data } = await api.get(`/api/task/user/${id} `);
    return data;
}

export const getTask = async (id) => {
    const { data } = await api.get(`/api/task/${id}`);
    return data;
}

export const createTask = async (task) => {
    const { data } = await api.post("/api/task", 
      task
    );
    return data;
}

export const updateTask = async (id, task) => {
    const { data } = await api.put(`/api/task/${id}`, task);
    return data;
}

export const deleteTask = async (id) => {
    const { data } = await api.delete(`/api/task/${id}`);
    return data;
}



// Path: frontend/src/helpers/auth.js

