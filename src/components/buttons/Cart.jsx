import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import Login from "./Login";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const state = useSelector((state) => state.addItems);


  useEffect(() => {
    // Check local storage to see if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);



  // const handleLogout = () => {
  //   // Simulate logging out
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      {/* {!isLoggedIn ? (
        <Login />
      ) : ( */}
        <Link to={"/cart"}> <button className="bg-black text-white flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" />
          Cart <span className={!isLoggedIn?"hidden":"flex bg-orange-500 px-2 rounded-2xl absolute mt-[-25px] ml-[60px]"}>{state.length}</span>
        </button>
        </Link>
      {/* )} */}
    </>
  );
};

export default Cart;
