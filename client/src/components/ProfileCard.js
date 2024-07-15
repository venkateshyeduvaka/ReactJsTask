import React, { useContext, useEffect } from 'react';

import profile from "../images/profile.png";
import Cover_photo from "../images/Cover_photo.png"

const ProfileCard = () => {
  
    const usedata=JSON.parse(localStorage.getItem("user"))
    


  return (
    <div className='mt-1 bg-white flex flex-col rounded-lg relative  overflow-x-clip'>
      <div className='relative flex flex-col align-center justify-center w-full'>
        <img src={Cover_photo} className='w-full rounded-lg' alt="Cover"/>
        <img src={profile} className='w-32 h-32 rounded-full absolute -bottom-10 left-[42%] mb-2' alt="Profile"/>
      </div>
      <div className="flex flex-col mt-8 items-center">
      <h5 className='self-center text-orange-500 text-base'>My Profile</h5>
      </div>
      <div className='flex flex-col gap-2'>
        <hr className='w-96 self-center border-2 border-solid border-blue-500'/>
        <div className='flex self-center gap-2 w-80 justify-around items-center'>
          <div className='flex flex-col  gap-1'>
            <p><span className='font-bold'>FirstName</span>:{usedata?.user_firstname}</p>
            <p><span className='font-bold'>Email</span>:{usedata?.user_email}</p>
            <p><span className='font-bold'>UseId</span>:{usedata?.user_id}</p>
          </div>
          <div className='h-20 border-l-2 border-solid border-gray-500'></div>
          <div className='flex flex-col  gap-1'>
          <p><span className='font-bold'>Phone</span>:{usedata?.user_phone}</p>
          <p><span className='font-bold'>LastName</span>:{usedata?.user_lastname}</p>
          <p><span className='font-bold'>Address</span>:{usedata?.user_city},{usedata?.user_zipcode}</p>
          </div>
        </div> 
        <hr className='w-96 border-2 self-center border-solid border-slate-500'/>
      </div>

      <div className='self-center mt-8 w-[50vw]'>
        <h1 className='text-slate-800 font-bold'>Welcom To Our Community....</h1>
        <p className='text-teal-600 ml-10'>Fuse Helps Developers To Build Organized And Well Coded Dashboards Full Of Beautifull And Rich Modules Join Us And Start Building Your Application Today.</p>
        <span className='font-bold text-blue-500 ml-64'>Thank You</span>
      </div>
    </div>
  );
}


export default ProfileCard;
