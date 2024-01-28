import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import LeftBar from './LeftBar';
import Music from './Music';
import { removeItem } from '../redux/songSlice';
import { MdDelete } from "react-icons/md";
<MdDelete />
const Home = () => {
  const dispatch = useDispatch();
  const songList = useSelector(state => state.song.songs);
  const removeFromLike = (name) => {
    dispatch(removeItem(name));
  };
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row">
      <LeftBar />
      <div className='flex flex-col w-full overflow-hidden'>
        <Navbar />
        <div className='w-full h-full bg-gray-900 flex flex-col p-10 text-white overflow-auto'>
          <h1 className='text-3xl font-serif mb-8'>Liked Songs</h1>
          <div className="flex flex-col gap-4">
            <div className='w-full  flex justify-between items-center gap-4 pr-5'>
              <span>Img</span>
              <span>Song Name</span>
              <span>Description</span>
              <span>Remove</span>
            </div>
            {songList.map((song, index) => (
              <div key={index} className='w-full  flex justify-between items-center border gap-4 pr-5 text-white'>
                <img className='w-16 h-16 object-cover rounded-lg m-4' src={song.img} alt={song.name} />
                <h2 className='text-lg font-bold mb-1'>{song.name}</h2>
                <p className='text-sm text-center'>{song.des}</p>
                <span onClick={() => removeFromLike(song.name)} className='text-3xl cursor-pointer'><MdDelete/></span>
              </div>
            ))}
          </div>
        </div>
        <Music />
      </div>
    </div>
  );
}

export default Home;
