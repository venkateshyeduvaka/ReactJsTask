
import React, { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";

const LoginPage = () => {
 
  const {loginUser,error}=useContext(UserContext)

  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const logindata={
      user_email,
      user_password,
    }
   
    loginUser(logindata)

    setEmail("")
    setPassword("")


  };


  return (
    <section
      id="login"
      className="w-full h-[100vh] flex bg-blue-200 justify-center items-center py-12 md:py-16"
    >
        <div className="bg-white px-4 md:px-8 py-8 md:py-10 rounded-2xl w-[90vw] md:w-[32vw] shadow-lg">
        <div className="w-full flex justify-center">
          <FaRegUserCircle className="h-32 w-40 text-blue-700" />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <label className="block text-gray-900 font-semibold text-md">
            Email :
          </label>
          <input
            type="text"
            className="h-9 w-full mt-1 outline-none border border-gray-300 rounded-lg px-3 pb-0.5"
            placeholder="Email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-gray-900 font-semibold text-md mt-4">
            Password :
          </label>
          <div className="flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              className="h-9 w-full mt-1 outline-none border border-gray-300 rounded-lg pl-3 pr-14 pb-0.5"
              placeholder="Password"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {showPassword ? (
              <BsFillEyeSlashFill
                className="h-5 w-5 absolute right-5 mt-1"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BsFillEyeFill
                className="h-5 w-5 absolute right-5 mt-1"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 rounded-full px-8 pb-1.5 pt-1 text-white mx-auto block mt-4 md:mt-2 hover:bg-blue-700 hover:scale-110 transition-all"
          >
            Login
          </button>
          {error && <span className="text-red-500">{error}</span>}
          <div className="text-center md:text-left">
            <p className="text-gray-900 font-semibold text-md mt-4">
              Don't have an account ?{" "}
              <Link
                to="/register"
                className="text-red-500 hover:underline"
              >
                Sign up{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginPage
