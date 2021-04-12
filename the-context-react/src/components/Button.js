import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'


//             NORMAL WAY / THIS.CONTEXT
// class Button extends Component {
//   // this is how we hookup a contxt object to a class component, has to be called "contextType"
//   // "static" adds a property/reference to the "class" itself, is the same as Button.contextType = LanguageContext in the outside class scope
//   static contextType = LanguageContext;

//   render() {
//     // console.log(this.context)

//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
//     return (
//       <button className="ui button primary">
//         {text}
//       </button>
//     )
//   }
// }



//               WITH CONSUMERS
class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  // to render button instead of having it all in there
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}







export default Button;