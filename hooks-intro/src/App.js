import React from 'react';
import Accordion from './components/Accordion';


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


export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

