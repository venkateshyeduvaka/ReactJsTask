
import React, { createContext, useState} from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const navigate=useNavigate()
    //const [user, setUser]= useState({ user_firstname:"",user_email:"",user_phone:"",user_password:"",user_lastname:"",user_city:"",user_zipcode: ""});
    //const [loginData, setLoginData] = useState({ user_email:"", user_password:""});
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
  

    const registerUser = async (user) => {
        setError("");
        if (!user.user_firstname || !user.user_email || !user.user_phone || !user.user_password || !user.user_lastname ||!user.user_city || !user.user_zipcode) {
            setError("All fields are required except address");
            return;
        }
        setIsSubmitting(true);
        try {
            console.log("check--R-->",user)
            const response = await axios.post("https://syoft.dev/Api/user_registeration/api/user_registeration", user);
            console.log("Registration successful:", response);
            toast.success("Register User Successfully", { position: "bottom-right" });
            navigate("/login");
        } catch (err) {
            setError("Registration failed");
            console.error("Registration error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };


    const loginUser = async (loginData) => {
        setError("");

        if (!loginData.user_email || !loginData.user_password) {
            setError("All fields are required");
            return;
        }

        setIsSubmitting(true);

        try {
            console.log("check--1",loginData)
            const response = await axios.post("https://syoft.dev/Api/userlogin/api/userlogin", loginData);
            console.log("Login successful:", response.data.user_data[0]);
            localStorage.setItem("user", JSON.stringify(response.data.user_data[0]));
            toast.success("Login Successfully", { position: "bottom-right" });
            navigate("/");
        } catch (err) {
            setError("Invalid credentials");
            console.error("Login error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    
    return (
        <UserContext.Provider value={{
            error, isSubmitting,registerUser, loginUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};
