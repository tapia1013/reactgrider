/****** REPLACING REDUX WITH CONTEXT *********/
import React from 'react';


// NEED TO USE CAPITAL C FOR CONTEXT
const Context = React.createContext('english');



export class LanguageStore extends React.Component {
  state = { language: 'english' }

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


export default Context;