import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'
import './post.css'

const PostComponent = (prop) => {
  const [postData, setPost] = useState(null)
  useEffect(()=>{
     sanityClient
     .fetch(`*[_type == "post" && kategorija == "${prop.category}"]{
       title,
       slug,
       kategorija,
       publishedAt,
       mainImage{
         asset->{
           _id,
           url
         },
         alt
       }
     }`)
     .then((data)=> setPost(data))
     .catch(console.error)

  }, [])

  return (
    <div>
      <div className='posts-container'>
      {postData && postData.map((post, index) => (
      <div className='post' key={index}>
        <Link 
        className='link' 
        to={`/post/${post.slug.current}`} 
        key={post.slug.current}
        onClick={()=> {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}> 
        <img src={post.mainImage.asset.url} alt="" />
        <h2>
          {post.title}
        </h2>
        </Link>
        <div>
          <p className='category-name'>{post.kategorija}</p>
          <p>{post.publishedAt}</p>
        </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default PostComponent