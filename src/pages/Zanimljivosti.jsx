import React from 'react'
import PostComponent from '../components/PostComponent'

const Zanimljivosti = ({category}) => {
  return (
    <div>
           <div className='title-flex'>
        <h1 className='title-center'>Zanimljivosti</h1>
      </div>
      <PostComponent category= "Zanimljivosti" />
    </div>
  )
}

export default Zanimljivosti