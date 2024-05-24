import React, { useState } from "react";
import { register } from "../helpers/api";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Register = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    

    const data = {
        name,
      email: email.toLocaleLowerCase(),
      password :  confirmPassword,
    };

    try {
        const response = await register(name, email, password
        );
        console.log(response);
        
        toast.success("Registration Successfull");
        navigate("/");
        }
        catch (error) {
            toast.error("Error Registering");
            console.log(error.response.data.message);
        }


    // console.log(data);
  };

  return (
    <div className="flex  flex-1  justify-center h-screen">
      <div className="m-auto flex flex-col gap-10 min-w-80 p-4 border border-gray-400 rounded-md">
        <h1 className="mx-auto text-3xl font-bold">Register</h1>

        <div className="mx-auto flex  w-full flex-col gap-4">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="p-2 px-4 border-2 border-gray-300 rounded-md"
            id="name"
            placeholder="Jhon doe"
          />
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
          <input
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="p-2 px-4 border-2 border-gray-300 rounded-md"
            id="confirmpassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="mx-auto w-full">
          <button
            type="submit"
            onClick={handleSubmit}
            className="p-2 bg-blue-500 text-white w-full rounded-md mx-auto"
          >
            Register
          </button>
          <div className="flex justify-center mt-2">
            <p className="flex">
              Already have an account?
              <Link to={"/"} className="text-blue-500 mx-auto ml-1"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
