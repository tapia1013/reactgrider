import React, { useState, useEffect } from 'react'



const Search = () => {
  const [term, setTerm] = useState('');


  console.log('I RUN WITH EVERY RENDER');

  // useEffect(() => {
  //   console.log('Second argument is [] so i only run once');
  // }, [])


  useEffect(() => {
    console.log('NO second argument so I run EVERY RENDER');
  })


  // VIDEO 154 @ 1:30S
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}


export default Search




