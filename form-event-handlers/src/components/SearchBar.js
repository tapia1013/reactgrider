import React from 'react';



class SearchBar extends React.Component {
  // uncontrolled
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  // controlled
  state = { term: '' }


  // regular functions have problems with "this"
  // onFormSubmit(e) {
  //   e.preventDefault()

  //   console.log();
  // }


  // WE NEED TO USE ARROWS TO SOLVE PROBLEM WITH "THIS"
  onFormSubmit = (e) => {
    e.preventDefault()

    console.log(this.state.term);
  }

  // THE OTHER WAY TO SOLVE IS TO MAKE ARROW FUNC AND INVOKE()... {e => this.onFormSubmit(e)}
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;



// ********** VIDEO 90




