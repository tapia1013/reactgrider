import React from 'react'
import ReactDOM from 'react-dom'
// import history from '../history'




// POPUP MODALS using REACTDOM PORTALS
const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    // we need a 2nd arg when using portals to refernce the id="modal" we made in index.html
    document.querySelector('#modal')
  )
}

export default Modal;








