import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions'


class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    const { user } = this.props

    if (!user) {
      return null
    }

    return (
      <div className="header">
        {user.name}
      </div>
    )
  }
}

// we can use ownProps to gain access to whats going to be passed above class as props  
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps, {
  fetchUser: fetchUser
})(UserHeader);


// VIDEO 277 @ 5:49s