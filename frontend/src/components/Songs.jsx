import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import girl from '../img/girl.png'
const Songs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/admin/users")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold  ml-4 pt-2 text-white">Uploaded Songs</h1>
      <div className="flex justify-start items-center w-full h-full gap-3 sm:gap-2 p-5 text-white flex-wrap">
        {users.map((user) => (
      <Link to='/:id'>
          <div key={user._id} className="w-52 p-5 h-72 flex flex-col border border-white hover:shadow-sm relative hover:opacity-90">
            <img className="w-60 h-72 aspect-auto  object-cover bg-cover" src={girl} alt="poster" />
            {/* <img className="w-60 h-72  object-cover bg-cover" src={`/uploads/${user.filename}`} alt="poster" /> */}
            <span className="text-xl font-bold">{user.name}</span>
            <span>{user.artist}</span>
            <span>Melodious Song</span>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
};

export default Songs;
