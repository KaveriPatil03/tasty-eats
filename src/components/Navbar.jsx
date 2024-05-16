import React, { useContext, useEffect, useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillSave2Fill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends, FaHome, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "./buttons/Cart";
import Login from "./buttons/Login";
import { FaBowlFood, FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "./user/AuthContext";


const Navbar = () => {
  
 

  const [nav, setNav] = useState(false);

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
      <div className="max-w-[1640px] m-x-auto flex justify-between items-center p-4 bg-gray-100">
        {/* left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="flex md:hidden cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>

          
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-orange-600">
            <Link to={"/"}>Tasty<span className="font-bold text-black">Eats</span></Link>
            </h1>
          

          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="hidden bg-gray-200 rounded-full md:hidden items-center px-2 w-[200px] sw:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={20} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>
        <div className="">
         <ul className="hidden md:flex ">
          <li className="font-bold text-lg px-3">
          <Link to={'/'}>Home</Link>
          </li>

          <li className="font-bold text-lg px-3">
          <Link to={'/service'}>Services</Link>
          </li>

          <li className="font-bold text-lg px-3">
          <Link to={'/menu'}>Menu</Link>
          </li>
         </ul>
        </div>

     <div className="flex">
       {/* Login Button */}
       <Login />

{/* Cart button */}
<Cart />

     </div>
        {/* Mobile Menu */}

        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-400%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(false)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </h2>

          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaHome size={25} className="mr-4 mt-1" />
                <Link to={'/'}>Home</Link>
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <FaSeedling size={25} className="mr-4 mt-1" />
                <Link to={'/service'}>Services</Link>
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <FaBowlFood size={25} className="mr-4 mt-1" />
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <FaCartShopping size={25} className="mr-4 mt-1" />
                <Link to={'/cart'}>Cart</Link>
              </li>
             {
              (!isLoggedIn) ?  <li className="md:hidden text-xl py-4 flex cursor-pointer" >
              <FaUserFriends size={25} className="mr-4 mt-1" />
             <Link to={'/login'}>Login</Link>
            </li> : <li className="md:hidden text-xl py-4 flex cursor-pointer" onClick={logout}>
                <FaUserFriends size={25} className="mr-4 mt-1" />
                Logout
              </li>
             }
              
              {/* <li className="text-xl py-4 flex cursor-pointer">
                <MdHelp size={25} className="mr-4 mt-1" />
                Help
              </li> */}
              {/* <li className="text-xl py-4 flex cursor-pointer">
                <AiFillTag size={25} className="mr-4 mt-1" />
                Promotions
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <BsFillSave2Fill size={25} className="mr-4 mt-1" />
                Best Ones
              </li>
              <li className="text-xl py-4 flex cursor-pointer">
                <FaUserFriends size={25} className="mr-4 mt-1" />
                Invite Friends
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
