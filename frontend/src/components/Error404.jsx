import React from 'react';
import { SlSocialSpotify } from "react-icons/sl";
import Navbar from './Navbar';
import LeftBar from './LeftBar';
const Error404 = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <LeftBar />
      <div className='h-full w-4/5 '>
        <div>
          <Navbar />
        </div>
        <div className='w-full h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 p-10 text-white overflow-auto'>
          <div className="text-center">
            <div className='flex gap-4 items-center'>
              <span className='text-6xl'><SlSocialSpotify /></span>
              <h1 className="text-6xl font-bold  mb-4"> 404</h1>
            </div>
            <p className="text-2xl ">Page not found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
