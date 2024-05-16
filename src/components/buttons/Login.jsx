import React, { useContext, useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../user/AuthContext";

const Login = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);

  // useEffect(() => {
  //   // Check local storage to see if user is logged in
  //   const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   setIsLoggedIn(loggedIn);
  // }, []);

  // const handleLogout = () => {
  //   // Simulate logging out
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      {!isLoggedIn ? (
        <Link
          to={`/login`}
          className="bg-black text-white hidden md:flex items-center py-2 rounded-full mr-2 px-3"
        >
          <BsPersonFill size={20} className="mr-2" />
          Login
        </Link>
      ) : (
        <Link
          to={`/login`}
          onClick={logout}
          className="bg-black text-white hidden md:flex items-center py-2 rounded-full mr-2 px-3"
        >
          <BsPersonFill size={20} className="mr-2" />
          Logout
        </Link>
      )}
    </>
  );
};

export default Login;
