import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

const Zanimljivosti = () => {
  const [postData, setPost] = useState(null)
  useEffect(()=>{
     sanityClient
     .fetch(`*[_type == "post" && kategorija == "Zanimljivosti"]{
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
      <h1>Zanimljivosti</h1>

      <div className='posts-container'>
      {postData && postData.map((post, index) => (
      <div className='post' key={index}>
        <Link className='link' to={`/post/${post.slug.current}`} key={post.slug.current}> 
        <img src={post.mainImage.asset.url} alt="" />
        <h2>
          {post.title}
        </h2>
        </Link>
        <div>
          <p>{post.kategorija}</p>
          <p>{post.publishedAt}</p>
        </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Zanimljivosti