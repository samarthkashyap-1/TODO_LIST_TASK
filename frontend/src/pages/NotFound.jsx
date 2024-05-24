// src/components/NotFound.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Cleanup the timer if the component is unmounted before the timer ends
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">Redirecting to the home page...</p>
    </div>
  );
};

export default NotFound;
