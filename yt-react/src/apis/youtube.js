import axios from 'axios';

const KEY = 'AIzaSyAt2CmoO8auXFvAA6GtQGqxVpMu3dVVmo8';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
});

