import React from 'react';



class SearchBar extends React.Component {
  // uncontrolled
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  // controlled
  state = { term: '' }


  onFormSubmit = (e) => {

    this.props.onSubmit(this.state.term)

    e.preventDefault()
  }

  // VIDEO 115
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







