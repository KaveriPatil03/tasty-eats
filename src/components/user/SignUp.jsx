import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const initialState = {
  name:"",
  email:"",
  number:"",
  password:""
}

const SignUp = () => {

  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.password
    ) {
      return setErr("Please fill all the details");
    }
    return setErr("");
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!err) {
      // setData((data) => ([...data, formData]))
      // localStorage.setItem("form", JSON.stringify(data));
      localStorage.setItem("form", JSON.stringify(formData));

      setFormData({
        name: "",
        email: "",
        number: "",
        password: "",
      });
      navigate(`/login`);
    } else {
      alert("not registered");
    }
  };


  return (
    <>
      <div className="max-w-[1640px] p-4 grid grid-cols-1 md:grid-cols-2 gap-0 mt-6 md:px-[100px]">
        {/* IMAGE */}
        {/* <h1>IMAGE</h1> */}
        <div className="w-full h-full ">
          <img
            className="w-full h-full object-cover rounded-ss-[80px] md:rounded-es-[80px]"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        {/* FORM */}
        <div className="w-full md:pl-24 bg-gray-50 py-6 shadow-md rounded-ee-[80px] md:rounded-se-[80px]">
          
          <div>
            <h1 className="text-2xl sm:text-2xl lg:text-3xl pb-4 text-orange-600">
              <>
                Best<span className="font-bold text-black">Eats</span>
              </>
            </h1>
            <p className="text-red-500">{err}</p>
            {/* <h3 className="text-lg font-bold">Welcome Back</h3>
          <p className="text-base text-gray-700 pb-6">Sign in with your email address and password</p> */}

            <div>
              <form class="max-w-sm">
                <div class="mb-5">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-500 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    
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
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="mobile"
                    class="block mb-2 text-sm font-medium text-gray-500 "
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="number"
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    placeholder="Enter your mobile number"
                    
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
                    class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:right-4 focus:outline-none focus:ring-gray-500 focus:border-orange-600 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your password"
                    
                  />
                </div>
                {/* <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    
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
                  Sign Up
                </button>

                <p className="pt-4 text-gray-500">
                  <Link to={`/login`}>
                    Already have an account?{" "}
                    <span className="text-orange-600 font-semibold">
                      Sign In
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
