import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="max-w-[1640px] p-4 grid grid-cols-1 md:grid-cols-2 gap-0 mt-16 md:px-[100px]">
        {/* FORM */}
        <div className="w-full flex justify-center bg-gray-50 py-6 shadow-md rounded-ss-[80px]">
         <div>
         <h1 className="text-2xl sm:text-2xl lg:text-3xl pb-4 text-orange-600">
            <>Best<span className="font-bold text-black">Eats</span></>
            </h1>
          <h3 className="text-lg font-bold">Login</h3>
          {/* <p className="text-base text-gray-700 pb-6">Sign in with your email address and password</p> */}

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
                  class="w-96 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
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
                  class="w-96 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="role"
                  class="block mb-2 text-sm font-medium text-gray-500 "
                >
                  Role
                </label>
                <select class="w-96 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500" name="" id="">
                    <option  value="Admin">Admin</option>
                    <option value="Restaurant">Restaurant</option>
                </select>
               
              </div>
              
              <button
                type="submit"
                class="text-orange-600 hover:bg-orange-600 border border-orange-600 font-medium text-sm w-full rounded-none sm:w-auto px-9 py-2.5 text-center dark:bg-white dark:hover:bg-orange-600 hover:text-white"
              >
                Sign In
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
        <div className="w-full h-full ">
        <img className="w-full h-full object-cover rounded-ee-[80px] " src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
