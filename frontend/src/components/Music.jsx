import React,{useState,useRef,useEffect} from 'react'
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { CiRepeat } from "react-icons/ci";
import { CiShuffle } from "react-icons/ci";
import '../App.css'
import { useSelector } from 'react-redux';
import satranga from '../songs/Satranga.mp3'
function Music() {
  const songPlays = useSelector(state => state.song.plays);
  const audioRef = useRef(new Audio(songPlays.song));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setProgress(value);
    audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
  };
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const nextPlay = () => {
    const newTime = audioRef.current.currentTime + 10;
    const newProgress = (newTime / audioRef.current.duration) * 100;
    if (newTime <= audioRef.current.duration) {
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };
  const prevPlay = () => {
    const newTime = audioRef.current.currentTime - 10;
    const newProgress = (newTime / audioRef.current.duration) * 100;
    if (newTime <= audioRef.current.duration) {
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };
  
  useEffect(() => {
    // Update progress bar during playback
    const updateProgress = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    };
    // Set up event listeners
    audioRef.current.addEventListener('timeupdate', updateProgress);

    // Clean up event listeners on component unmount
    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  return (
    <div className=' flex w-full h-20 sticky p-5 justify-center bottom-0 items-center bg-black flex-col'>
      <div className='w-64 none h-20 bg-white sm:absolute left-0'>
      <div className='w-full h-20 bg-white absolute left-0'>
        {songPlays ? (
          <div className='w-full h-full flex justify-between items-center border gap-4 pr-5'>
            <img className='w-16 h-16 object-cover rounded-lg m-2' src={songPlays.img} alt={songPlays.name} />
            <div className='flex flex-col'>
              <h2 className='text-xl font-bold mb-1 ml-1'>{songPlays.name}</h2>
              <p className='text-xs text-center'>{songPlays.des}</p>
            </div>
          </div>
        ) : (
          <span className='font-bold text-2xl text-gray-800'>No item currently playing</span>
        )}
      </div>
      </div>
      <div className='w-1/2 absolute mb-8 sm:ml-[12rem]'>
        <div className="progress-bar bg-white" style={{ width: `${progress}%` }}></div>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleChange}
          className="slider"
        />
      </div>
      <div className='flex gap-6 text-white text-3xl mt-0 sm:mt-8 ml-0 sm:ml-[12rem]'>
        <span className='text-gray-600'><CiShuffle /></span>
        <span onClick={prevPlay} className='cursor-pointer'><GrChapterPrevious /></span>
        <span onClick={togglePlay} className='cursor-pointer'>{isPlaying ? <FaCirclePause /> : <FaCirclePlay />}</span>
        <span onClick={nextPlay} className='cursor-pointer'><GrChapterNext /></span>
        <span className='text-gray-600'><CiRepeat /></span>
      </div>
    </div>
  )
}

export default Music