// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import HomePage from './components/HomePage';

import ProtectedRoute from './components/ProtectedRoute';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
        <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}  />
        <Route path="/" element={<ProtectedRoute element={HomePage}/>}/>
      </Routes>
    </div>
  );
}

export default App;
