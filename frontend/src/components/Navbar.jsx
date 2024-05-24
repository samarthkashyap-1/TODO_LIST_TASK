import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../helpers/userContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logged Out Successfully");
    setUser(null);
    localStorage.removeItem("TaskGenie");
    navigate("/");
  };
  return (
    <div className="h-12 bg-blue-500 flex">
      <h1 className="font-semibold text-3xl text-white my-auto ml-2">Task Genie</h1>
        {user ? (
          <button className="ml-auto text-blue-500 font-medium bg-white h-fit p-2 rounded-lg my-auto mr-2" onClick={handleLogout}>Logout</button>
        ) : null}
    </div>
  );
};

export default Navbar;
