import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: ""
};

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (
    
        !formData.email ||
        !formData.password
      ) {
        return setErr("Please fill all the details");
      }
      return setErr("");
    }, [formData]);


    const handleSubmit = (e) => {
      e.preventDefault();
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      
      if (!err) {
          let loggedUser = JSON.parse(localStorage.getItem("form"));
          if (loggedUser) {
              if (formData.email === loggedUser.email && formData.password === loggedUser.password) {
                  localStorage.setItem('isLoggedIn', 'true');
                  setIsLoggedIn(true);
                  alert("Login successful");
                  navigate(`/menu`);
                  window.location.reload(true);
              } else {
                  alert("Invalid email or password");
              }
          } else {
              alert("Please register");
          }
      }
  }
  

  return (
    <>
      <div className="max-w-[1640px] p-4 grid grid-cols-1 md:grid-cols-2 gap-0 mt-6 md:px-[100px]">
        {/* FORM */}
        <div className="w-full flex justify-center bg-gray-50 py-6 shadow-md rounded-ss-[80px]">
         <div>
         <h1 className="text-2xl sm:text-2xl lg:text-3xl pb-4 text-orange-600">
            <>Best<span className="font-bold text-black">Eats</span></>
            </h1>
          <h3 className="text-lg font-bold">Welcome Back</h3>
          <p className="text-base text-gray-700 pb-6">Sign in with your email address and password</p>

          <div>
            <form class="max-w-sm">
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
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-500 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
                  class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {/* <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div> */}
              <button
                onClick={handleSubmit}
                class="text-orange-600 hover:bg-orange-600 border border-orange-600 font-medium text-sm w-full rounded-none sm:w-auto px-9 py-2.5 text-center dark:bg-white dark:hover:bg-orange-600 hover:text-white"
              >
                Sign In
              </button>

              <p className="pt-4 text-gray-500">
              <Link to={`/register`}>Don't have an account? <span className="text-orange-600 font-semibold">Sign Up</span></Link>
              </p>
            </form>
          </div>
         </div>
        </div>

        {/* IMAGE */}
        {/* <h1>IMAGE</h1> */}
        <div className="w-full h-full ">
        <img className="w-full h-full object-cover rounded-ee-[80px] " src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
