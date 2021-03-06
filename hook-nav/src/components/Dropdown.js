import React, { useState, useEffect, useRef } from 'react';



const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()



  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setOpen(false)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])





  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  })


  // console.log(ref.current);

  // we want to useRef on most parent element
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
