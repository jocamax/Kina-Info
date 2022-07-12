import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import './bignews.css'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
  return builder.image(source)
}

const BigNews = () => {
  const [postData, setPost] = useState(null)
  useEffect(()=>{
     sanityClient
     .fetch(`*[_type == "bigpost"] | order(id asc){...}[0..2]`)
     .then((data)=> setPost(data))
     .catch(console.error)
  }, [])


  return (
    
    <div>
      <div className='title-flex'>
        <h1 className='title-center'>Najnovije vesti</h1>
      </div>
      <div className='posts-container-big'>
      {postData && postData.map((post, index) => (
      <div className='post-big' key={index}>
        <Link className='link' to={`/post/${post.slug.current}`} key={post.slug.current}> 
        <img src={urlFor(post.mainImage).url()} alt="" />
        <h2>
          {post.title}
        </h2>
        </Link>
        <div>
          <p className='category-name'>{post.kategorija}</p>
          <p >{post.publishedAt}</p>
        </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default BigNews