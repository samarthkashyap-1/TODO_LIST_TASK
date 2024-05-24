import React, {useEffect, useState} from 'react'
import { createTask } from '../helpers/api';
import { toast } from "react-toastify";


const CreateTask = ({setTasks, tasks}) => {

    const [task, setTask] = useState({
        content: "",
        date: "",
        important: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await createTask(task.content, task.date, task.important);
            // console.log(response);
            setTasks([...tasks, response]);
            
            toast.success("Task Created Successfully");
        } catch (error) {
            toast.error("Error Creating Task");
            console.log(error.response.data.message);
        }
    }


  return (
    <div className="flex-1 flex flex-col  rounded-lg">
      <h1 className="  text-white bg-blue-500 w-full rounded-lg text-center text-xl py-2 font-semibold ">New Task</h1>

      <div className="mx-auto  p-5 flex  w-full flex-col gap-4">
        <input
          type="text"
          className="p-2 px-4 border-2 border-gray-300 rounded-md"
          id="name"
          placeholder="Task"

          onChange={(e) => {
            setTask({ ...task, content: e.target.value });

          }}
        />
        <input
          type="date"
          className="p-2 px-4 border-2 border-gray-300 rounded-md"
          id="date"
          placeholder="Date"
            onChange={(e) => {
                setTask({ ...task, date: e.target.value });
            }}
        />

        {/* create a check box for important or not */}

        <div className="flex items-center gap-2 ">
          <input
            type="checkbox"
            id="important"
            name="important"
            value="important"
            onChange={(e) => {
              setTask({ ...task, important: e.target.checked });
            }}
          />
          <label htmlFor="important">Important Task ?</label>
        </div>

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
}

export default CreateTask
