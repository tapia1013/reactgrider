import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// HOW ARE WE GOING TO USE THE CURRENTLOCATION IN THE JSX? THATS HOW WE KNOW WE NEED A CLASS BASED COMPONENT, THERES A WAY NOW TO DO THIS WITH FUNCTION COMPONENTS BUT THATS A BIT MORE ADVANCED ITS CALLED HOOKS
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (err) => {
//       console.log(err);
//     }
//   )


//   return (
//     <div>Latitude: </div>
//   )
// }




// WE USE STATE TO SOLVE THE ABOVE PROBLEM
class App extends Component {
  // // constructor belongs to JS langauge not really React
  // constructor(props) {
  //   // super lets us borrow/extends to other components
  //   super(props)

  //   // Init state
  //   this.state = {
  //     lat: null,
  //     errMsg: ''
  //   }

  // }


  // Refactor - this works like state in constructor()
  state = { lat: null, errMsg: '' }




  // componentDidMount() {
  //   // 1st log
  //   console.log('Did Mount so it rendered to screen');
  // }

  // componentDidUpdate() {
  //   // 2nd log
  //   console.log('Component was just updated and re-rendered');
  // }

  // componentWillMount() {

  // }





  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        return this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        return this.setState({ errMsg: err.message })
      }
    )
  }


  // Helper function - not really good to have multiple if statements in the render
  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg};</div>
    }
    if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Allow access to Location" />
  }


  // React requires us to define render!!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

// <div>
//   Latitude: {this.state.lat}
//   <br />
//         Error: {this.state.errMsg}
// </div>

ReactDOM.render(<App />, document.getElementById('root'))

