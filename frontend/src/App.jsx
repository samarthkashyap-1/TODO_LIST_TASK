import { useState, useLayoutEffect, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserContext from "./helpers/userContext";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("TaskGenie")) {
      setUser(JSON.parse(localStorage.getItem("TaskGenie")).user);
      navigate("/tasks");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("TaskGenie")) {
      setUser(JSON.parse(localStorage.getItem("TaskGenie")).user);
    }
  }, [localStorage]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="flex w-screen flex-col justify-center min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      <ToastContainer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
