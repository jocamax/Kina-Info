import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from 'react-router-dom'
import './singlepost.css'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
  return builder.image(source)
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null)
  const {slug} = useParams()
  const [postData, setPost] = useState(null)

  useEffect(()=>{
     sanityClient
     .fetch(`*[_type == "bigpost"] | order(id asc){...}[0..2]`)
     .then((data)=> setPost(data))
     .catch(console.error)
  }, [])

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
    <div className='singlePost-container'>
      <div className="singlePost">
      <h1>{singlePost.title}</h1>
      <img src={urlFor(singlePost.mainImage.asset.url).url()} alt="" /> 
      <div>
        <BlockContent 
        blocks={singlePost.body} 
        projectId='78ct684z' 
        dataset='production'/>
      </div>
      </div>

      <div className='posts-container-mini'>
        <h3 className='title-center'>Novo</h3>
      {postData && postData.map((post, index) => (
      <div className='post-mini-sp' key={index}>
        <Link className='link-mini-sp' to={`/post/${post.slug.current}`} key={post.slug.current}> 
        <div className='image-div'>
          <img className='mini-image-sp' src={urlFor(post.mainImage).url()} alt="" />
        </div>

        <h2 className='h2-sp'>
          {post.title}
        </h2>
        </Link>
        <div className='category-flex-sp'>
          <p className='category-name-mini-sp'>{post.kategorija}</p>
          <p className='category-name-mini-sp'>{post.publishedAt}</p>
        </div>
        </div>
        ))}
        </div>
      </div>
  )
}

export default SinglePost

