// reducers/songs.js
const initialState = {
    selectedSong: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_SONG':
        return {
          ...state,
          selectedSong: action.payload,
        };
      default:
        return state;
    }
  };
  