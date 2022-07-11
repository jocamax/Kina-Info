import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client.js'
import imageUrlBuilder from '@sanity/image-url'
import './singlepost.css'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
  return builder.image(source)
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null)
  const {slug} = useParams()

  useEffect(()=>{
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      kategorija,
    }`).then((data)=> setSinglePost(data[0])).catch(console.error)
  }, [slug])
  if(!singlePost) return <div>Loading....</div>
  return (
    <div>
      <p>{singlePost.title}</p>
      <img src={urlFor(singlePost.mainImage.asset.url).url()} alt="" /> 
      </div>
  )
}

export default SinglePost