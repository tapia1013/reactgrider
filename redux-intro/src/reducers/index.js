import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    { title: 'Umbrella', duration: '4:05' },
    { title: 'right now', duration: '2:35' },
    { title: 'End of World', duration: '5:23' },
    { title: 'Barbie', duration: '3:11' }
  ]
}


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}



export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})


