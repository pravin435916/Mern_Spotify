import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
function Navbar() {
  return (
    <div className='flex w-full h-1/10 sticky p-5 justify-between items-center bg-gray-800 text-gray-400'>
         <div className='flex gap-4 text-3xl cursor-pointer '>
            <span className='hover:text-white'> <Link to='/'><FaChevronLeft /></Link></span>
            <span className='hover:text-white'><FaChevronRight /></span>
         </div>
         <div className='flex gap-4 cursor-pointer'>
            <span className='rounded-full text-black  font-bold bg-white py-1 px-2'> <Link to="/upload">Upload Song</Link></span>
            <span className='text-2xl hover:text-white'><IoNotifications /></span>
            <span className='text-2xl hover:text-white'><HiUserGroup /></span>
            <span className='text-2xl hover:text-white'><FaRegCircleUser /></span>
         </div>
    </div>
  )
}

export default Navbar