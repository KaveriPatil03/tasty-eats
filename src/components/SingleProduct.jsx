import React, { useContext, useEffect, useState } from "react";
import { data } from "../data/data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addItem, delItem} from '../redux/actions/index';
import Login from "./buttons/Login";
import { AuthContext } from "./user/AuthContext";

const SingleProduct = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {isLoggedIn, logout} = useContext(AuthContext);

  // const state = useSelector((state) => state.addItems);

   const [cartBtn, setCartBtn] = useState("Add to Cart");

  const proId = useParams();
  const proDetail = data.filter((x) => x.id == proId.id);
  const product = proDetail[0];
  console.log(product);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check local storage to see if user is logged in
  //   const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   setIsLoggedIn(loggedIn);
  // }, []);
  

  const handleCart = (prod) => {
     if(isLoggedIn){
      if(cartBtn === "Add to Cart"){
        dispatch(addItem(prod));
        setCartBtn("Remove from Cart");
        
    }else{
        dispatch(delItem(prod));
        setCartBtn("Add to Cart");
    }
     }else{
      // setCartBtn("Please Login");
      alert("Please Login to Order")
     }
  }

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="text-center py-4">
          <h1 className="font-bold text-3xl text-orange-600">Food Details</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-5 mt-6 gap-16">
          {/* IMAGE */}
          <div className="w-[100%] md:pl-16">
            <img src={product.image} alt={product.title} className="rounded-xl w-full h-[480px] object-cover"/>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h1 className="text-2xl pb-5 font-semibold">{product.name}</h1>
            <hr />
            <h3 className="text-2xl pt-5">₹ {product.price}</h3>
            <p className="text-gray-600 pt-4">{product.desc}</p>

            <button className="mt-5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            onClick={() => handleCart(product)}>
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
