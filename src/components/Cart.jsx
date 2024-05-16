import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { clearCart } from "../redux/actions/index";
import { Link } from "react-router-dom";
import { AuthContext } from "./user/AuthContext";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const {isLoggedIn, logout} = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check local storage to see if user is logged in
  //   const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   setIsLoggedIn(loggedIn);
  // }, []);

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="text-center font-semibold text-3xl text-gray-600 py-[248px] md:py-[197px]">
          Please Login to access your cart
        </div>
      ) : (
        <div className="max-w-[1640px] m-auto md:px-14">
          {state.length === 0 ? (
            <div className="text-center text-gray-600 text-5xl py-48 md:py-44">
              OOPS!!! YOUR CART IS EMPTY
            </div>
          ) : (
            state.map((item) => (
              <div
                className="bg-gray-50 rounded-lg my-10 py-10"
                key={item.dispatch}
              >
                <div className="container">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
                    <div className="px-6 flex md:justify-center items-center md:pl-48">
                      <img
                        className="h-48 w-52 object-cover shadow-xl"
                        src={item.image}
                      />
                    </div>
                    <div className="px-5 md:pr-20">
                      <h1 className="text-3xl font-semibold">{item.name}</h1>
                      <h3 className="text-xl text-gray-600 leading-10 font-bold">
                      ₹ {item.price}
                      </h3>
                      <p className="text-justify text-gray-700">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Itaque ipsa mollitia iure, accusamus, alias
                        laudantium natus asperiores, optio quaerat nulla
                        aspernatur maiores. Doloremque non minima, harum
                        exercitationem expedita laudantium eligendi!
                      </p>
                      <button
                        onClick={() => handleClose(item)}
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="text-center py-4">
            {state.length !== 0 && (
              <Link to={"/checkout"}>
                <button className="{state.length === 0}? hide : show bg-orange-500 border-orange-500 text-white font-semibold px-12 py-2">
                  {" "}
                  Proceed to Checkout{" "}
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
