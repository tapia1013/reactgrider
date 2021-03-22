import React, { Component } from 'react';
import ReactDOM from 'react-dom'


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
  // constructor belongs to JS langauge not really React
  constructor(props) {
    // super lets us borrow/extends to other components
    super(props)

    // Init state
    this.state = {
      lat: null,
      errMsg: ''
    }


    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errMsg: err.message })
      }
    )
  }


  /************** VIDEO 60 ***********/


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

  // React requires us to define render!!!
  render() {
    const isShown = this.state.lat !== null ? `Latitide: ${this.state.lat}` :
      `${this.state.errMsg}`



    return (
      <div>
        <div>{isShown}</div>
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

