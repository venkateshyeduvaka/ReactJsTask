

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoSearchSharp, IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {

    const usedata=JSON.parse(localStorage.getItem("user"))

    
    const navigate=useNavigate()

    const HandleLogout=()=>{
        localStorage.removeItem("user")
        navigate("/login")
    }
  
    return (
        <div className='flex md:flex-col w-full md:w-[22vw] md:h-[100vh] h-[200px] justify-around shadow bg-slate-800 px-1 items-center'>
            <div className='mb-5 mt-5'>
                <span className='text-orange-400 text-3xl font-bold'>Developers<br/><span className='text-white'>Communicty</span></span>
            </div>
            <div className='flex items-center m-2 hidden md:flex'>
                <input
                    className='h-9 w-[16vw]  bg-transparent outline-none border-gray-300 border-2 border-r-0 rounded-l-full px-3 pb-0.5'
                    type='search'
                />
                <div className='bg-white h-9 w-12 flex justify-center items-center rounded-r-full'>
                    <IoSearchSharp className='h-5 w-5 ' />
                </div>
            </div>

            <div className='flex  md:flex-col h-[25vh] w-[15vw] p-5 hidden md:flex'>
                <div className='flex gap-2 items-center mt-2 mb-7'>
                    <IoHomeOutline className=' md:w-8 md:h-8 text-white' />
                    <span className='text-white'>Home</span>
                </div>
               
               
                <div className='flex  gap-2 items-center'>
                    <CgProfile className=' md:h-8 md:w-8 text-white' />
                    <span className='text-white'>Profile</span>
                </div>
                

            </div>

            <div className='flex-col mt-auto mb-3'>
                <hr className="my-4 border-t-2 border-gray-300 w-[19vw] hidden md:flex" />
                <div className='flex md:flex-col items-center pr-2'>
                    <CgProfile className='text-white h-8 w-8 hidden md:flex' />
                    <span className='text-white hidden md:flex'>{usedata?.user_firstname}</span>
                </div>
                <button
                onClick={HandleLogout}
                    className='ml-20 bg-blue-800 h-10 w-16 hover:bg-blue-900 text-white px-3 rounded-md'
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
