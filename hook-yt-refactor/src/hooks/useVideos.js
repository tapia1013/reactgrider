import { useState, useEffect } from 'react';
import youtube from '../apis/youtube'
const KEY = 'AIzaSyBw9kVRvYeze2eGgYlz0g8lPzVZEtBZoH4'

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  const search = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    })
    setVideos(res.data.items);
  }

  return [videos, search];
}


export default useVideos


