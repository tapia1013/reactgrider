import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'


const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end Javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a lit JS Library foo'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating Components'
  }
]


const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]


export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropDown] = useState(true)

  return (
    <div>
      <button onClick={() => setShowDropDown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />) : null
      }
      <h1 style={{ color: `${selected.value}` }}>{selected.label}</h1>
    </div>
  )
}
