import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}


// Default arg.. when our REDUX app first boots up our reducer get called one time to initialize, WE NEED a value so it WONT BE UNDEFINED
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      // copy/take out old values and add new
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state;
  }
}