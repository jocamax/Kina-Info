import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import Logo from '../../assets/kinaimage.png'
import { useEffect, useState } from 'react'
import sanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
  return builder.image(source)
}

const Footer = () => {

  const [postData, setPost] = useState(null)
  useEffect(()=>{
     sanityClient
     .fetch(`*[_type == "bigpost"] | order(id asc){...}[0..2]`)
     .then((data)=> setPost(data))
     .catch(console.error)
  }, [])

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <Link to='/' className="footer-logo">
          <img src={Logo} alt="" /> 
          <h2>KinaInfo</h2>
        </Link>
        <Link 
        to='/'  
        onClick={()=> {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Početna</Link>
        <Link 
        to='/politika'
         onClick={()=> {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Politika</Link>
        <Link 
        to='/zanimljivosti'
        onClick={()=> {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Zanimljivosti</Link>
        <Link 
        to='/hrana'
        onClick={()=> {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Hrana</Link>
      </div>

      <div className="footer-news">
        <h3 className='title-footer'>Pročitaj i ovo</h3>
      <div className='posts-container-mini'>
      {postData && postData.map((post, index) => (
      <div className='post-mini' key={index}>
        <Link 
        className='link-mini' 
        to={`/post/${post.slug.current}`} 
        key={post.slug.current}
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}> 
        <img src={urlFor(post.mainImage).url()} alt="" />
        <h2>
          {post.title}
        </h2>
        </Link>
        <div className='category-flex'>
          <p className='category-name-mini'>{post.kategorija}</p>
          <p className='category-name-mini'>{post.publishedAt}</p>
        </div>
        </div>
        ))}
        </div>

      </div>
    </div>
  )
}

export default Footer