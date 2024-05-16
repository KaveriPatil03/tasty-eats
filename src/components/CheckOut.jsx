import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, delItem } from "../redux/actions";

const initialState = {
  name: "",
  email: "",
  address: "",
  cardname: "",
  cardno: "",
  expiration: "",
  cvv: "",
};

const CheckOut = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.addItems);

  let [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  // const handlePayment = (id) => {
  //   dispatch(delItem(id)); // Dispatch action to remove item from Redux store
  //   const updatedCartItems = state.filter((cartItem) => cartItem.id !== id); // Remove item from local state
  //   localStorage.removeItem("reduxState", JSON.stringify(updatedCartItems)); // Update local storage
  //   // navigate('/success'); // Navigate to success page or any other desired page after payment
  // };

  useEffect(() => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.cardname ||
      !formData.cardno ||
      !formData.expiration ||
      !formData.cvv
    ) {
      return setErr("Please fill all the details");
    }
    return setErr("");
  }, [formData]);

  let total = 0;

  const itemList = (item) => {
    total = total + +item.price;
    // console.log(typeof(item.price))
    return (
      <div key={item.id} className="flex justify-between p-2 border">
        <h1 className="text-lg">{item.name}</h1>
        <h1 className="text-gray-500">₹ {item.price}</h1>
      </div>
    );
  };

  const handlePayment = (e) => {
   if(!err){
    e.preventDefault();
    dispatch(clearCart());
    navigate("/payment");

    setFormData({
      name: "",
      email: "",
      address: "",
      cardname: "",
      cardno: "",
      expiration: "",
      cvv: "",
    });
   }
  };

  return (
    <>
      <div className="max-w-[1640px] p-4 grid grid-cols-1 md:grid-cols-3 gap-0 mt-6 md:px-[150px] ">
        {/* FORM */}
        <div className="col-span-2 w-full flex justify-center bg-gray-50 py-6 px-10">
          <div>
            <div className="">
              <form class="max-w-sm">
                <h1 className="text-red-600">{err}</h1>
                <div class="mb-5">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-500 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-500 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="address"
                    class="block mb-2 text-sm font-medium text-gray-500 "
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    placeholder="Enter your address"
                    required
                  />
                </div>
                <div className="flex">
                  <div class="mb-5">
                    <label
                      for="name on card"
                      class="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardname"
                      value={formData.cardname}
                      onChange={(e) =>
                        setFormData({ ...formData, cardname: e.target.value })
                      }
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                      // placeholder="Enter "
                      required
                    />
                  </div>
                  <div class="mb-5 ml-5">
                    <label
                      for="name on card"
                      class="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNo"
                      name="cardno"
                      value={formData.cardno}
                      onChange={(e) =>
                        setFormData({ ...formData, cardno: e.target.value })
                      }
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                      // placeholder="Enter "
                      required
                    />
                  </div>
                </div>
                <div className="flex">
                  <div class="mb-5">
                    <label
                      for="expiration"
                      class="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      Expiration
                    </label>
                    <input
                      type="text"
                      id="expiration"
                      name="expiration"
                      value={formData.expiration}
                      onChange={(e) =>
                        setFormData({ ...formData, expiration: e.target.value })
                      }
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                      // placeholder="Enter "
                      required
                    />
                  </div>
                  <div class="mb-5 pl-5">
                    <label
                      for="cvv"
                      class="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      Enter CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={(e) =>
                        setFormData({ ...formData, cvv: e.target.value })
                      }
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                      // placeholder="Enter "
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="bg-orange-600 text-white border border-orange-600 font-medium text-sm w-full rounded-none sm:w-auto px-9 py-2.5 text-center"
                >
                  Make Payment
                </button>

                {/* <p className="pt-4 text-gray-500">
              <Link to={`/register`}>Don't have an account? <span className="text-orange-600 font-semibold">Sign Up</span></Link>
              </p> */}
              </form>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        {/* <h1>IMAGE</h1> */}
        <div className="w-full">
          <div className="flex justify-around">
            <h1 className="text-3xl">Your Cart</h1>
            <h1 className="bg-black text-white font-bold text-xl px-3 rounded-full pt-1">
              {state.length}
            </h1>
          </div>

          <div className=" m-5 ">
            {state.map(itemList)}
            {/* {state.map((item, index) => (
              <div key={index} className="flex justify-between p-2 border">
                <h1 className="text-lg">{item.name}</h1>
                <h1 className="text-gray-500">{item.price}</h1>
              </div>
            ))} */}
            <div className="flex justify-between p-2 border">
              <h1 className="text-xl font-bold">Total</h1>
              <h1 className="font-semibold">₹ {total}</h1>
            </div>
          </div>

          {/* <img className="w-full h-full object-cover rounded-ee-[80px] " src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
