import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>WARNING!!!</h4>
          Are you sure?
      </div>

      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="vee"
          timeAgo="Today at 4:20PM"
          content="Exposed Lzzzz!!!"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="jay"
          timeAgo="Today at 2:13AM"
          content="Up by 1 Lzzzzzzzz"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="cookie"
          timeAgo="Yesteday at 9:40PM"
          content="Your mom must be proud"
          img={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))




