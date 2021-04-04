import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder'



export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // we have to call fetchPosts but manually wrap in dispatch...we add await keyword cause we have to wait for the fetchPosts to get data so we wont do other things till this is done
  // console.log('about to fetch posts');
  await dispatch(fetchPosts());

  // console.log(getState().posts);
  // lodash version of .map, it loops through posts and pulls out userId, -.uniq returns unique id so it wont be calling the same id over and over like before
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // console.log(userIds);

  userIds.forEach(id => dispatch(fetchUser(id)))



  // this does the same as above
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   // .value = executes()
  //   .value()

}



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




// // fetch user action creator
// export const fetchUser = (id) => (dispatch) => {
//   // WE COPY THIS CODE TO THE NEW PRIVATE FUNC
//   // const response = await jsonPlaceholder.get(`/users/${id}`)

//   // dispatch({ type: "FETCH_USER", payload: response.data })


//   // call memoize version of fetch user, we have to pass in the id and dispatch to the private func
//   _fetchUser(id, dispatch)
// }


// // _fetchUser means its a private func and no touch
// // FOR MEMOIZE TO WORK WE HAVE TO DO IT OUT HERE
// const _fetchUser = _.memoize(
//   async (id, dispatch) => {
//     // this makes out req and dispatches and action
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({ type: "FETCH_USER", payload: response.data })
//   }
// )





// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(
//   async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data
//     })
//   }
// )




export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}






























// MEMOIZE LODASH example why it doesnt work
// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data
//     })
//   })
// }


