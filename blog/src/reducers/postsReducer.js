
export default (state = [], action) => {
  //              BAD
  // bad cause we reach out
  // return document.querySelector('input')
  // bad cause we reach out
  // return axios.get('/posts')

  //              GOOD
  // ONLY!!! return computation from 2 arg
  // return state + action


  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload
  // }
  // return state;


  // we usually use switch with reducers
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;

    default:
      return state;
  }
}

