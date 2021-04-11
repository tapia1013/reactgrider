import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'


class StreamDelete extends React.Component {
  componentDidMount() {
    // call the fetchStream we imported and connected and pass the id as an argument
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    // const id = this.props.match.params.id
    const { id } = this.props.match.params

    // <React.Fragment> the same as <> cause if we put a div it gives us styling problems
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    )
  }

  // so we dont have to do if() in render()
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
  }



  render() {
    // there might not be stream so we do this
    // if (!this.props.stream) {
    //   return <div>Loading...</div>
    // }

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}


export default connect(
  mapStateToProps,
  {
    fetchStream: fetchStream,
    deleteStream: deleteStream
  }
)(StreamDelete);


