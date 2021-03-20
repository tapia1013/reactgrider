// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'


const App = () => {
  // we can use string
  // const buttonText = 'Click Me!!!'

  // we can use nums
  // const buttonText = 12345; // button>123

  // we can use arrays
  // const buttonText = [10, 20] // btn>1020

  // with object it gives us error, so we call it wiith .text, its like the object here is inside the {} that refers to as doing JS
  const buttonText = { text: 'Click Me' }

  // we can store the enter name here and display the var
  const labelText = "Enter name: "
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  )
}


// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
)




// video 24














// // Import the React and ReactDOM libraries
// import React from 'react';
// import ReactDOM from 'react-dom'


// // we can create functions here also, we use these by calling it with () with inside the App function we dont need to () just the variable name
// function getButtonText() {
//   return 'Click on me!!!'
// }


// // Create a react Component
// // 1) class have to be written as className
// // 2) style needs to be written style={{color:'red', font:'roboto'}}
// // 3) reference varaibles in JSX
// const App = () => {
//   // reference varaibles in JSX
//   // const buttonText = 'Click Me!!!'

//   return (
//     <div>
//       <label className="label" for="name">Enter name:</label>
//       <input id="name" type="text" />
//       <button style={{ backgroundColor: "blue", color: "white" }}>
//         {getButtonText()}
//       </button>
//     </div>
//   )
// }


// // Take the react component and show it on the screen
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )




























