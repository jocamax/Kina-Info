import React from 'react'
import PostComponent from '../components/PostComponent'

const Zanimljivosti = ({category}) => {
  return (
    <div>
      <h1 className='title-center'>Zanimljivosti:</h1>
      <PostComponent category= "Zanimljivosti" />
    </div>
  )
}

export default Zanimljivosti