import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'
import PostComponent from '../components/PostComponent'

const Zanimljivosti = ({category}) => {
  return (
    <div>
      <h1>Zanimljivosti</h1>
      <PostComponent category= "Zanimljivosti" />
    </div>
  )
}

export default Zanimljivosti