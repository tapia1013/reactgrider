import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'



// NO <A></A> tags you have to use <Link to="">
const PageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">Navigate to Page 2</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>CLICK ME</button>
      <Link to="/">Navigate to Page 1</Link>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
}
// video 295

export default App;
