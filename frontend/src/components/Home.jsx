// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import Playlist from './Playlist';
import jubin from '../img/jubin.jpeg'
import arijit from '../img/arijit.jpeg'
import sachet from '../img/sachet.jpeg'
import LeftBar from './LeftBar';
import Music from './Music';
import satranga from '../songs/Satranga.mp3'
const Home = () => {
  const ArijitSongs = [
    {
        "name": "Satranga",
        "des": "Catchy and upbeat tune for a good mood.",
        "img": 'https://pagalfree.com/images/128Satranga%20-%20Animal%20128%20Kbps.jpg',
        "song" : satranga
      },
      {
        "name": "Channa mereya",
        "des": "Melodic and soothing melody for tranquility.",
        "img": "https://tse1.mm.bing.net/th?id=OIP.wVS13qf3RH9kHVthOmzZmAHaHa&pid=Api&P=0&h=180",
        "song" : satranga
      },
      {
        "name": "Hawayein",
        "des": "Funky rhythm for a dance party atmosphere.",
        "img": "https://tse4.mm.bing.net/th?id=OIP.MFgM8VTWiDCcVZyCLu7B5wHaHa&pid=Api&P=0&h=180",
        "song" : satranga
      },
      {
        "name": "Om deva deva",
        "des": "Emotional and powerful anthem for inspiration.",
        "img": "https://tse1.mm.bing.net/th?id=OIP.1vtC9Hs6IWLjW73n2SR5rQHaHa&pid=Api&P=0&h=180",
        "song" : satranga
      },
      {
        "name": "Bekhayali",
        "des": "Experimental  for sad  experience.",
        "img": "https://tse2.mm.bing.net/th?id=OIP.QHwe4eV_z-gojPe-zxpg5AHaG4&pid=Api&P=0&h=180",
        "song" : satranga
      },
];
const JubinSongs = [
  {
    "name": "Tum Hi Aana",
    "des": "Soulful and emotional ballad for romantic moments.",
    "img": "https://tse1.mm.bing.net/th?id=OIP.58WT6nKV1MFF-WNc4lWh8wHaHa&pid=Api&P=0&h=180"
  },
  {
    "name": "Dil Galti Kar",
    "des": "Romantic track with a touch of nostalgia and love.",
    "img": "https://tse3.mm.bing.net/th?id=OIP.QZhFOYitMEVhZZEpRuT65wHaHa&pid=Api&P=0&h=180"
  },
  {
    "name": "Meri Aashiqui",
    "des": "Upbeat and lively song for celebration and joy.",
    "img": "https://www.moviesmedia.net/wp-content/uploads/2020/05/101197063_271483027541288_1834479497196371698_n.jpg"
  },
  {
    "name": "Mere ghar Ram Aayein hai",
    "des": "Melancholic and heart-touching melody for introspection.",
    "img": "https://tse3.mm.bing.net/th?id=OIP.O4w3wplD0TUOBRX6v7MLkAHaHa&pid=Api&P=0&h=180"
  },
  {
    "name": "Chhitthi",
    "des": "Energetic and adventurous tune for a journey theme.",
    "img": "https://tse2.mm.bing.net/th?id=OIP.e1vQAXs-0ZPVZBmkh85nSwHaHa&pid=Api&P=0&h=180"
  },
];
const SachetParamparaSongs = [
  {
    "name": "Chandni",
    "des": "Powerful and emotional track for intense moments.",
    "img": "https://tse3.mm.bing.net/th?id=OIP.payJSAnYn7MLapYoDXN4lgHaEK&pid=Api&P=0&h=180"
  },
  {
    "name": "Chura Liya",
    "des": "Energetic and peppy song for a lively atmosphere.",
    "img": "https://tse2.mm.bing.net/th?id=OIP.XAbbauKnlNAHtWORIYmbogHaEK&pid=Api&P=0&h=180"
  },
  {
    "name": "Malang Sajana",
    "des": "Romantic and soothing melody for love and romance.",
    "img": "https://tse1.mm.bing.net/th?id=OIP.lz4xYQlA2igI7NnvvqPN2gHaEK&pid=Api&P=0&h=180"
  },
  {
    "name": "Chhor denge",
    "des": "Catchy and upbeat tune for a joyful mood.",
    "img": "https://tse2.mm.bing.net/th?id=OIP.A2f8dQ8q1ubMHMrslZH3xAHaEK&pid=Api&P=0&h=180"
  },
  {
    "name": "Takada Rawaan",
    "des": "Heartfelt and emotional ballad for deep emotions.",
    "img": "https://tse3.mm.bing.net/th?id=OIP.vw5iCuZMcZxFNWl28mTQzgHaEK&pid=Api&P=0&h=180"
  },
];
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col sm:flex-row">
     <LeftBar/>
      <div className='h-full w-full sm:w-4/5 overflow-hidden'>
      <div>
        <Navbar/>
      </div>
        <div className='w-full h-screen bg-gray-900 flex flex-col gap-8 p-10 text-white overflow-auto'>
          <span className='text-3xl font-serif'>Top Picks</span>
          <Playlist title={"Arijit Singh"} img={arijit} CardsData={ArijitSongs}/>
          <Playlist title={"Jubin Nutiyal"} img={jubin} CardsData={JubinSongs}/>
          <Playlist title={"Sachet-Parampara"} img={sachet} CardsData={SachetParamparaSongs}/>
        </div>
        <Music/>
      </div>
    </div>
  );
}

export default Home;
