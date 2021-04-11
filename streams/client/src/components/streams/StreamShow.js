import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';





class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef()
  }

  componentDidMount() {
    const { id } = this.props.match.params

    this.props.fetchStream(id);

    // this is for video stream only nothing to do with fetchStream above
    // this.player = flv.createPlayer({
    //   type: 'flv',
    //   url: `http://localhost:8000/live/${id}.flv`
    // })
    // this.player.attachMediaElement(this.videoRef.current)
    // this.player.load()


    this.buildPlayer()

  }

  // cause the didMount will be called once so we need to check if its still there, if it re-renders it wont give us an error
  componentDidUpdate() {
    this.buildPlayer();
  }


  // unMount is for when we go back to homepage the stream is ended, this cleans up when we move to another page, error: mediasourceEnded
  componentWillUnmount() {
    // tells player to stop attempting to stream video
    this.player.destroy();
  }



  buildPlayer() {
    const { id } = this.props.match.params

    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()

  }


  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: '100%' }}
          controls={true}
        />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}



// mapStateToProps lets us take stream out of reduxstore and use it inisde our component
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}


export default connect(
  mapStateToProps, {
  fetchStream
}
)(StreamShow);
