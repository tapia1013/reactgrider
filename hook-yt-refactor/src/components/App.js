import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'

// const KEY = 'AIzaSyBw9kVRvYeze2eGgYlz0g8lPzVZEtBZoH4'


const App = () => {
  // const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedvideo] = useState(null)

  // useEffect(() => {
  //   onTermSubmit('buildings')
  // }, []);

  // setSelectedvideo(res.data.items[0])


  // const onTermSubmit = async (term) => {
  //   const res = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //       part: "snippet",
  //       maxResults: 5,
  //       type: 'video',
  //       key: KEY
  //     }
  //   })

  //   setVideos(res.data.items);
  // }


  // const onVideoSelect = (video) => {
  //   setSelectedvideo(video)
  // }


  const [videos, search] = useVideos('cars')

  useEffect(() => {

    setSelectedvideo(videos[0])

  }, [videos]) // each time we get a new list of videos we're going to change run the useEffect func

  return (
    <div className='ui container'>
      <SearchBar
        onFormSubmit={search}
      />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail
              video={selectedVideo}
            />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={video => setSelectedvideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}





// class App extends React.Component {
//   state = { videos: [], selectedVideo: null }

//   componentDidMount() {
//     this.onTermSubmit('cars')
//   }


//   onTermSubmit = async (term) => {
//     const res = await youtube.get('/search', {
//       params: {
//         q: term,
//         part: "snippet",
//         maxResults: 5,
//         type: 'video',
//         key: KEY
//       }
//     })

//     this.setState({
//       videos: res.data.items,
//       selectedVideo: res.data.items[0]
//     })
//   }

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video })
//   }

//   render() {
//     return (
//       <div className='ui container'>
//         <SearchBar
//           onFormSubmit={this.onTermSubmit}
//         />
//         <div className='ui grid'>
//           <div className='ui row'>
//             <div className='eleven wide column'>
//               <VideoDetail
//                 video={this.state.selectedVideo}
//               />
//             </div>
//             <div className='five wide column'>
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }




export default App;