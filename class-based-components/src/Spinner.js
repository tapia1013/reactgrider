import React from 'react'


const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  )
}

// Define a default for spinner text if none
Spinner.defaultProps = {
  message: 'Loading...'
}


export default Spinner;