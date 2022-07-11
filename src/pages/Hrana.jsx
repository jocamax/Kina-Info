import React from 'react'
import PostComponent from '../components/PostComponent'

const Hrana = ({category}) => {
  return (
    <div>
            <div className='title-flex'>
        <h1 className='title-center'>Hrana</h1>
      </div>
      <PostComponent category='Hrana'/>
    </div>
  )
}

export default Hrana