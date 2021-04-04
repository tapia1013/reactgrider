import jsonPlaceholder from '../apis/jsonPlaceholder'



// // async await BAD APPROACH!!!
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts')
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   }
// }




export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}



// fetch user action creator
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: "FETCH_USER", payload: response.data })
}

