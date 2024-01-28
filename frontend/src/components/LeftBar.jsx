import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialSpotify } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiHeartSquare } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
function LeftBar() {
  return (
    <div className='h-24 sm:h-screen flex flex-col  gap-4  w-full sm:w-1/5 bg-black text-gray-300  justify-start items-start pt-10 pl-10 overflow-hidden'>
    <div className='flex  gap-4 text-gray-200 hover:text-white cursor-pointer'>
    <span className='text-5xl'><SlSocialSpotify /></span>
    <span className='font-bold text-3xl'>Spotify</span>
    </div>
    <div className='text-xl flex flex-col gap-4 pt-6 cursor-pointer'>
      <div className='flex items-center gap-2 text-xl hover:text-white'>
       <span ><IoMdHome /> </span>
       <span><Link to="/">Home</Link> </span>
      </div>
      <div className='flex items-center gap-2 text-xl hover:text-white'>
       <span ><IoSearchOutline /></span>
       <span> <Link to="/Search">Search</Link></span>
      
      </div>
      <div className='flex items-center gap-2 text-xl hover:text-white'>
       <span ><MdOutlineVideoLibrary /> </span>
       <span>Your library</span>
      </div>
      <div className='flex items-center gap-2 text-xl hover:text-white'>
       <span ><FaPlusCircle /> </span>
       <span>Create Playlist</span>
      </div>
      <div className='flex items-center gap-2 text-xl hover:text-white'>
       <span ><BiHeartSquare /> </span>
       <span><Link to='/liked'>Liked Song</Link></span>
      </div>
      <div className='flex items-center gap-2 text-xl hover:text-white'>
       <span ><FaPlusCircle /> </span>
       <span><Link to='/upload'>Upload Song</Link></span>
      </div>
    </div>
</div>
  )
}

export default LeftBar