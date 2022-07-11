import React from 'react'
import BigNews from '../containers/bignews/BigNews'
import Posts from '../containers/posts/Posts'
import './flexbox.css'

const Home = () => {
  return (
    <div className='flexbox'>
      <BigNews/>
      <div className='title-flex'>
      <h1 className='title-center'>Sve vesti</h1>
      </div>
 
      <Posts/>
    </div>
  )
}

export default Home