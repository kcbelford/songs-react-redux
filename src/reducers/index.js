import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Ti Amo', duration: '3.25' },
    { title: 'Lights Out', duration: '3.49' },
    { title: 'Coffee', duration: '4.29' },
    { title: 'Chinese Satellite', duration: '3.37' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
