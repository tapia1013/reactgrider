import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from "../actions";




class SongList extends Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
          </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      )
    })
  }

  // video 240 @ 4:00
  render() {
    // mapStateToProps is doing this
    //this.props === {songs: state.songs}

    // console.log(this.props.songs);


    // console.log(this.props);
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

// WE WILL USE THE CONNECT IN HERE CAUSE ITS ONLY THIS COMPONENT THAT CREATE A CONNECT FUNCTION THAT WILL REACH UP AND GET THAT LIST OF SONGS
/**
 * example of connect()
 *
 * function connect() {
 *   return function() {
 *     return 'Hi there!'
 *   }
 * }
 *
 * connect()() // second () outputs "Hi there!"/calls/invokes
 */


// by convention we call it mapStateToProps
const mapStateToProps = (state) => {
  // console.log(state);
  // return state;

  return { songs: state.songs }
}



export default connect(mapStateToProps, {
  selectSong
})(SongList);