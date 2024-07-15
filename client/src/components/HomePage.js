import React from 'react'
import Sidebar from './Sidebar'
import ProfileCard from './ProfileCard'

const HomePage = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-blue-300 flex flex-col md:flex-row'>
      <Sidebar/>
      <ProfileCard/>
    </div>
  )
}

export default HomePage
