import React from "react";


// Task component
const Task = ({ task, onDelete, onUpdate}) => {

   task.date = task.date.split("T")[0];

   




  return (
    <div
      className={`p-4 mb-4 rounded shadow-lg ${
        task.important
          ? "bg-red-100 border-l-4 border-red-500"
          : "bg-green-100 border-l-4 border-green-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`text-lg font-semibold ${
            task.important ? "text-red-700" : "text-green-700"
          }`}
        >
          {task.content}
        </h2>
        <span className="text-sm text-gray-600">{task?.date}</span>
      </div>
      {task.important && (
        <p className="mt-2 text-sm text-red-600">Important Task</p>
      )}
      <div className="mt-2 flex justify-end space-x-2">
        <button
          onClick={onUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
