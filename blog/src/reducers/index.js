import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'


export default combineReducers({
  // dummy reducer to remove error 
  // replaceMe: () => 'hi there'

  posts: postsReducer,
  users: usersReducer
})
