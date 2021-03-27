import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  // console.log(results);

  // console.log('I RUN WITH EVERY RENDER');



  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 1000)

    // clean up function to cancel timer eachtime someone key presses
    return () => {
      clearTimeout(timerId)
    }

  }, [term])




  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      })
      // updates the results its kinda like setSTate
      setResults(data.query.search)
    }

    search();
  }, [debouncedTerm])




  // useEffect(() => { 
  //   // detect if its first time loading in 
  //   if (term && !results.length) {
  //     searchWiki()
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         searchWiki()
  //       }
  //     }, 800)
  //     // clean up 
  //     return () => {
  //       clearTimeout(timeoutId)
  //     }
  //   }
  // // review of waht useEffect can do for you
  // console.log('Initial rendered or term changed')
  // // we are only allowed to return another func
  // return () => {
  //   console.log('CLEAN UP');
  // }
  // }, [term, results.length])





  const renderedResults = results.map((res) => {
    return (
      <div key={res.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {res.title}
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: res.snippet }}
          >
          </span>
        </div>
      </div>
    )
  })

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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}


export default Search














































































































// useEffect

// [], used often along with [text]
// useEffect(() => {
//   console.log('Second argument is [] so i only run once');
// }, [])


// empty second param, not really used
// useEffect(() => {
//   console.log('NO second argument so I run EVERY RENDER');
// })


// used as much like [1,2] it also has multiple, it runs + 1 cause the first run you dont really think about so if its clicked 3 times there would be 4 cause yuo have to count the first inital render
// useEffect(() => {
//   console.log('Run at init, and each time term changes');
// }, [term])














/** 3 ways to use axios async await in useEff */

//               1
// useEffect(() => {
//   const searchWiki = async () => {
//     await axios.get('websute')
//   }
//   // have to call it
//   searchWiki()
// }, [term])



//               2  IIFE ()()
// useEffect(() => {
//   (async () => {
//     await axios.get('websute')
//   })();
// }, [term])



//              3 PROMISES
// useEffect(() => {
//   axios.get('assa')
//     .then((res) => {
//       console.log(res.data);
//     })
// }, [term])




















// cancel a setTimeout, we get a number, like 116 and thats a timer id
// setTimeout(() => console.log('Hi'), 1000)

// clear timer and pass in id
// clearTimeout(116)
