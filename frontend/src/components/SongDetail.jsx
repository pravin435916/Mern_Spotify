// components/SongList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedSong } from '../actions/songs';

const SongDetail = ({ songs }) => {
  const dispatch = useDispatch();

  const handleSongClick = (songId) => {
    dispatch(setSelectedSong(songId));
  };

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id} onClick={() => handleSongClick(song.id)}>
          {song.title}
        </li>
      ))}
    </ul>
  );
};

export default SongDetail;
