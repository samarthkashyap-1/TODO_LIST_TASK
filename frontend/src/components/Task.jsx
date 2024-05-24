import React from "react";

// Task component
const Task = ({ task, onDelete, onUpdate,loader }) => {
  // Extracting the due date and formatting it
  const dueDate = new Date(task.dueDate);
  const formattedDueDate = dueDate.toLocaleDateString();

  return (
    <div
      className={`p-4 mb-4 rounded shadow-lg ${
        task.status === "to-do"
          ? "bg-red-100 border-l-4 border-red-500"
          : task.status === "in-progress"
          ? "bg-yellow-100 border-l-4 border-yellow-500"
          : "bg-green-100 border-l-4 border-green-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`text-lg font-semibold ${
            task.status === "to-do"
              ? "text-red-700"
              : task.status === "in-progress"
              ? "text-yellow-700"
              : "text-green-700"
          }`}
        >
          {task.title}
        </h2>
        <span className="text-sm text-gray-600">{formattedDueDate}</span>
      </div>
      <p className="text-sm text-gray-700">{task.description}</p>
      {task.status === "to-do" && (
        <p className="mt-2 text-sm text-red-600">To Do</p>
      )}
      {task.status === "in-progress" && (
        <p className="mt-2 text-sm text-yellow-600">In Progress</p>
      )}
      {task.status === "done" && (
        <p className="mt-2 text-sm text-green-600">Done</p>
      )}
      <div className="mt-2 flex justify-end space-x-2">
        <button
          onClick={onUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loader}
        >
          Update
        </button>
        <button
          onClick={onDelete}
          disabled={loader}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
