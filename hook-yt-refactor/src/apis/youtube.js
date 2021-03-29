// import axios from 'axios';

// const KEY = 'AIzaSyBw9kVRvYeze2eGgYlz0g8lPzVZEtBZoH4';


// export default axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     maxResults: 3,
//     key: KEY,
//     type: 'video'
//   }
// });

import axios from "axios";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});