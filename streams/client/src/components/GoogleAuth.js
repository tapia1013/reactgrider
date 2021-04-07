import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'


class GoogleAuth extends Component {
  // state = { isSignedIn: null }


  componentDidMount() {
    // callback runs only if oauth is a success
    window.gapi.load('client:auth2', () => {
      // .init returns a Promise so we chain .then
      window.gapi.client.init({
        clientId: '567147132459-0nh4fjqrah399aq4oc5bplj6hasd4j1m.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()

          // this.setState({
          //   isSignedIn: this.auth.isSignedIn.get()
          // })
          this.onAuthChange(this.auth.isSignedIn.get())

          // this.onAuthChange()
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }


  // arrow fuctions if used as callbacks so it binds
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }



  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />
        Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon' />
        Sign In with Google
        </button>
      )
    }
  }



  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}


export default connect(
  mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth);