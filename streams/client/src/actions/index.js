import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE__STREAM,
  EDIT_STREAM
} from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}




export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post('/streams', { ...formValues, userId })

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })

  // force navigation/programmatic navigation
  // to get the user back to the root route
  history.push('/');
}



//              For the REST actions

// show list of stream
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams')

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  })
}


// get single stream
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`)

  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  })
}


// put - edit stream
export const editStream = (id, formValues) => async (dispatch) => {
  // we use PATCH cause we want id, and edit/buttons cause we're not replacing all the props
  const response = await streams.patch(`/streams/${id}`, formValues)

  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  })

  history.push('/')
}


// DELETE stream... we get nothing back so we dont save into a variable
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`)

  dispatch({
    type: DELETE__STREAM,
    payload: id
  })
}







// VIDEO 366