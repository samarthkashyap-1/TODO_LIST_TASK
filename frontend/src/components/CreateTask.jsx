import React, { useState } from "react";
import { createTask } from "../helpers/api";
import { toast } from "react-toastify";

const CreateTask = ({ setTasks, tasks }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "to-do",
    dueDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const response = await createTask(task);
      setTasks([...tasks, response]);

      toast.success("Task Created Successfully");
    } catch (error) {
      toast.error("Error Creating Task");
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex-1 flex flex-col rounded-lg">
      <h1 className="text-white bg-blue-500 w-full rounded-lg text-center text-xl py-2 font-semibold">
        New Task
      </h1>

      <div className="mx-auto p-5 flex w-full flex-col gap-4">
        <input
          type="text"
          className="p-2 px-4 border-2 border-gray-300 rounded-md"
          id="title"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          className="p-2 px-4 border-2 border-gray-300 rounded-md"
          id="description"
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <select
          className="p-2 px-4 border-2 border-gray-300 rounded-md"
          id="status"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="to-do">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <input
          type="date"
          className="p-2 px-4 border-2 border-gray-300 rounded-md"
          id="dueDate"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white w-full text-lg rounded-md mx-auto"
          onClick={handleSubmit}
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
