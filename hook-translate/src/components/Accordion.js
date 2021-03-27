import React, { useState } from 'react';



// we need a helper function, if we wouldve done this in a class component it wouldve been easy so we do this instead...
const Accordion = ({ items }) => {

  // HOOKs
  const [activeIndex, setActiveIndex] = useState(null)


  // helper function
  const onTitleClick = (index) => {
    // use HOOKS
    setActiveIndex(index);
  }



  const renderedItems = items.map((item, index) => {
    // decide to add active classname
    const active = index === activeIndex ? 'active' : ''



    // React.Fragment is to remove the double line we have above the jsx it had cause we used div.
    // When ()=>onTitle(index) it runs and passes index to the function helper above
    return (
      <React.Fragment key={item.title}>
        <div
          onClick={() => onTitleClick(index)}
          className={`title ${active}`}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}


export default Accordion;