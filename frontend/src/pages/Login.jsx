import React, { useState, useContext, useEffect } from "react";
import { login } from "../helpers/api";
import UserContext from "../helpers/userContext";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      setLoader(true);
      const response = await login(email, password);
      console.log(response);
      
      toast.success("Login Successfull");

      setUser(response.user);
      localStorage.setItem("TaskGenie", JSON.stringify(response));
      navigate("/tasks");
      window.location.reload();
      setLoader(false);


    } catch (error) {
      setLoader(false);

      toast.error("Error Logging In");
      console.log(error.response.data.message);
    }
  };


  return (
    <div className="flex flex-1 justify-center ">
      <div className="m-auto flex flex-col gap-10 min-w-80 p-4 border border-gray-400 rounded-md">
        <h1 className="mx-auto text-3xl font-bold">Login</h1>

        <div className="mx-auto flex  w-full flex-col gap-4">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="p-2 px-4 border-2 border-gray-300 rounded-md"
            id="email"
            placeholder="jhondoe@example.com"
          />

          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="p-2 px-4 border-2 border-gray-300 rounded-md"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mx-auto w-full">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loader}
            className="p-2 bg-blue-500 text-white w-full rounded-md mx-auto"
          >
            Login
          </button>
          <div className="flex justify-center mt-2">
            <p className="flex">
              Don't have an account?
              <Link to={"/register"} className="text-blue-500 mx-auto ml-1"> Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
