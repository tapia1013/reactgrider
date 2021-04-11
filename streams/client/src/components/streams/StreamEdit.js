import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';



class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {

    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
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
    editStream: editStream
  }
)(StreamEdit);
























































// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchStream } from '../../actions';


// // refactor to class so we can solve the issue of redux not having a value at the start
// // const StreamEdit = (props) => {
// //   console.log(props);
// //   return (
// //     <div>StreamEdit</div>
// //   )
// // }



// class StreamEdit extends React.Component {
//   componentDidMount() {
//     this.props.fetchStream(this.props.match.params.id);
//   }

//   render() {
//     // console.log(this.props);

//     if (!this.props.stream) {
//       return <div>Loading...</div>
//     }
//     return (
//       <div>{this.props.stream.title}</div>
//     )
//   }
// }



// // ownProps is reference to StreamEdit component to get its props
// const mapStateToProps = (state, ownProps) => {
//   // console.log(ownProps);

//   return {
//     stream: state.streams[ownProps.match.params.id]
//   }
// }

// export default connect(
//   mapStateToProps,
//   { fetchStream: fetchStream }
// )(StreamEdit);