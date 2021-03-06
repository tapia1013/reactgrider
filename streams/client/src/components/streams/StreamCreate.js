import React, { Component } from 'react';
// Field = component, reduxForm = function so its camelCase does the same as connect
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'
import StreamForm from './StreamForm'



// const StreamCreate = () => {
//   return (
//     <div>StreamCreate</div>
//   )
// }






// we use class component cause we want helper methods

class StreamCreate extends Component {
  // renderError({ error, touched }) {
  //   if (touched && error) {
  //     return (
  //       <div className="ui error message">
  //         <div className="header">
  //           {error}
  //         </div>
  //       </div>
  //     )
  //   }



  onSubmit = (formValues) => {
    // console.log(formValues);

    this.props.createStream(formValues)
  }






  // // we have to make the inputs here
  // renderInput(formProps) {
  //   console.log(formProps);
  //   return (
  //     <input {...formProps.input} />
  //   )
  // }

  // renderInput = ({ input, label, meta }) => {
  //   // console.log(meta);

  //   const className = `field ${meta.error && meta.touched ? 'error' : ''}`
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {this.renderError(meta)}
  //     </div>
  //   )
  // }






  // onSubmit = (formValues) => {
  //   // console.log(formValues);

  //   this.props.createStream(formValues)
  // }



  render() {
    // console.log(this.props);


    // return (
    //   <form
    //     onSubmit={
    //       this.props.handleSubmit(this.onSubmit)
    //     }
    //     className="ui form error"
    //   >
    //     <Field
    //       name="title"
    //       component={this.renderInput}
    //       label="Enter Title"
    //     />
    //     <Field
    //       name="description"
    //       component={this.renderInput}
    //       label="Enter Description"
    //     />
    //     <button className="ui button primary">
    //       Submit
    //     </button>
    //   </form>
    // )


    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}



// // formValues contains all the diff values that exist in our form
// const validate = (formValues) => {
//   const errors = {}

//   // check to see if value is empty
//   if (!formValues.title) {
//     // only run if the user did not enter title
//     errors.title = 'You must enter a title'
//   }

//   if (!formValues.description) {
//     errors.description = 'You must enter a description'
//   }

//   return errors;
// }




// // reduxForm is the same as connect but its from the redux-form lib, it passes alot of props from redux-form to our code.. once we use redux we have to connect()() but below this code is abetter example
// export default connect()(reduxForm({
//   form: 'streamCreate',
//   validate: validate
// })(StreamCreate));




// const formWrapped = reduxForm({
//   form: 'streamCreate',
//   validate: validate
// })(StreamCreate);




export default connect(null, { createStream })(StreamCreate)
