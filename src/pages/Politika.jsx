import React from 'react'
import PostComponent from '../components/PostComponent'

const Politika = ({category}) => {
  return (
    <div>
      <div className='title-flex'>
        <h1 className='title-center'>Politika</h1>
      </div>
    <PostComponent category='Politika'/>
    </div>
  )
}

export default Politika