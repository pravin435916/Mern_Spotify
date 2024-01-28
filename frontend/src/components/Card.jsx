import React,{useState} from "react";
import { FaPlayCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addPlay , addItem } from '../redux/songSlice';
import '../App.css'
export const Card = ({name,des,img,song,item}) => {
  const [filled, setFilled] = useState(false);
  const dispatch = useDispatch();
  const addToLike = (item) => {
      dispatch(addItem(item));
      setFilled(!filled);
      alert("song is  Liked")
    };
  const addToPlay = (item) => {
      dispatch(addPlay(item));
      setFilled(!filled);
    };
  return (
    <div className="boxx w-56 p-5 h-72 flex flex-col border-white hover:shadow-sm relative hover:opacity-90 cursor-pointer" >
    <span className="icon text-green-400 cursor-pointer absolute text-4xl top-36 left-28 p-2  hidden "
    onClick={()=> addToPlay(item)}
    ><FaPlayCircle /></span>
    <span 
      className='icon text-red-400 cursor-pointer absolute text-4xl top-36 left-36 p-2 pl-4 hidden'
      onClick={()=> addToLike(item)}
    >
      {filled ? <FaHeart /> : <CiHeart/>}
    </span>
      <img className="w-60 h-72  object-cover bg-cover" src={img} alt="poster" />
      <span className="text-xl font-bold">{name}</span>
      <span>Artist</span>
      <span>{des}</span>
    </div>
  );
};
