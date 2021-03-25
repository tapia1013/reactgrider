import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';


class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    // import axios.create
    const res = await youtube.get('/search', {
      // pass in q cause we didnt in yt.js
      params: {
        q: term
      }
    })

    this.setState({ videos: res.data.items })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar
          onFormSubmit={this.onTermSubmit}
        />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}




export default App;