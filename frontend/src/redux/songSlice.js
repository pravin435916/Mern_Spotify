import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    songs: [],
    plays: '',
  },
  reducers: {
    addItem: (state, action) => {
      state.songs.push(action.payload);
    },
    addPlay: (state, action) => {
        state.plays = action.payload;
    },
    removeItem: (state, action) => {
        state.songs = state.songs.filter(item => item.name !== action.payload);
      },    
  },
});

export const { addItem , removeItem , addPlay } = songSlice.actions;

export const selectCartItems = (state) => state.song.songs;

export default songSlice.reducer;
