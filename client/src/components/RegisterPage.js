import React, { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link} from "react-router-dom";

import { UserContext } from "../context/UserContext";


const RegisterPage = () => {

  const {registerUser,error}=useContext(UserContext)


  const [user_firstname,setfirstname] =useState("")
  const [user_email,setemail]=useState("") 
  const [user_password,setpassword]=useState("") 
  const [user_phone,setphone]=useState("")


  const [showPassword, setShowPassword] = useState(false);
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const userdata={
      user_firstname,
      user_email,
      user_password,
      user_phone,
      user_lastname:"Default",
      user_city:"Hyderabad",
      user_zipcode: "535145"
    }

   registerUser(userdata)

   setfirstname("")
   setemail("")
   setpassword("")
   setphone("")



  };

  return (
     <section id="login" className="w-full bg-blue-200 flex justify-center py-2 md:py-9">
      <div className="bg-white px-3 md:px-8 py-7 md:py-8 rounded-2xl w-[90vw] md:w-[32vw] shadow-lg">
        <form className="w-full" onSubmit={handleSubmit}>
          <label>
            <div className="w-full flex justify-center">
              <FaRegUserCircle className="md:h-32 md:w-40 h-16 w-24 text-blue-700" />
            </div>
          </label>
          <label className="block text-gray-900 font-semibold text-md">
            Name :
          </label>
          <input
            type="text"
            className="h-9 w-full mt-1 outline-none border border-gray-300 rounded-lg px-2 pb-0.5"
            placeholder="Name"
            value={user_firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />

          <label className="block text-gray-900 font-semibold text-md mt-2">
            Email :
          </label>
          <input
            type="text"
            className="h-9 w-full mt-1 outline-none border border-gray-300 rounded-lg px-2 pb-0.5"
            placeholder="Email"
            value={user_email}
            onChange={(e) => setemail(e.target.value)}
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
              onChange={(e) => setpassword(e.target.value)}
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

          <label className="block text-gray-900 font-semibold text-md mt-4">
            Phone Number:
          </label>
          <div className="flex items-center relative">
            <input
              type="text"
              className="h-9 w-full mt-1 outline-none border border-gray-300 rounded-lg pl-3 pr-14 pb-0.5"
              placeholder="Phone Number"
              value={user_phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 rounded-full px-8 pb-1.5 pt-1 text-white mx-auto block mt-5 hover:bg-blue-700 hover:scale-110 transition-all"
          >
            Signup
          </button>
          {error && <span className="text-red-500">{error}</span>}
          <div className="text-center md:text-left">
            <p className="text-gray-900 font-semibold text-md mt-2">
              Already have an account ?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Login{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage
