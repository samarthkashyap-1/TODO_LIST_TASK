import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../helpers/userContext";
import TaskShow from "../components/TaskShow";
import CreateTask from "../components/CreateTask";
import { getUserTask } from "../helpers/api";

const Tasks = () => {
  const { user } = React.useContext(UserContext);
  const [tasks, setTasks] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const user_id = JSON.parse(localStorage.getItem("TaskGenie")).user.id;


    useEffect(() => {
      const fetchTasks = async () => {
          
        try {
          const response = await getUserTask(user_id);
          setTasks(response);
        } catch (error) {
          console.log(error);
        }
      };
      fetchTasks();
    }, [count]);


  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex-1 flex gap-10 p-3 md:flex-col  ">
      <CreateTask  setTasks={setTasks} tasks={tasks}/>
      <TaskShow tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;
