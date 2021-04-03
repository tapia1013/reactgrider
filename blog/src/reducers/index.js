import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

export default combineReducers({
  // dummy reducer to remove error 
  // replaceMe: () => 'hi there'

  posts: postsReducer
})
