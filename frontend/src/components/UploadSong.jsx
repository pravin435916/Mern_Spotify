import React, { useState } from 'react';
import axios from 'axios';
import LeftBar from './LeftBar';
import Navbar from './Navbar';

const Uploadsong = () => {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!songName || !artist || !selectedFile) {
        alert('Please fill in all the fields before uploading.');
        return;
      }

      const formData = new FormData();
      formData.append('name', songName);
      formData.append('artist', artist);
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:8000/api/auth/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        console.log(response.data.message);
        setSongName('')
        setArtist('')
        setSelectedFile(null)
      } else {
        console.error('Upload failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error uploading song:', error);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden flex">
      <LeftBar />
      <div className='h-full w-4/5 '>
        <div>
          <Navbar />
        </div>
        <div className='w-full h-screen bg-gray-900 flex flex-col gap-8 p-10 text-white overflow-auto'>
          <span className='text-3xl font-serif'>Upload Song</span>
          <form>
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Song Name:</label>
          <input
            type="text"
            onChange={(e) => setSongName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full bg-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Artist:</label>
          <input
            type="text"
            onChange={(e) => setArtist(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full bg-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Select an Image:</label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
            <button
              type="button"
              onClick={handleUpload}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Uploadsong;
