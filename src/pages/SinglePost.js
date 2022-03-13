import React from 'react'
import {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"


export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {slug} = useParams()

  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        title,
        body,
        author -> { name },
        mainImage {
          asset -> {
            _id,
            url
          }, 
          alt
        }
      }`
    )
    .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>    
    {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
     <section className="px-5  sm:mx-auto md:max-w-3xl xl:max-w-4xl">
       <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1">
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl text-center mt-5">{singlePost.title}</h1>
        {singlePost.author && (
            <div className="pb-5 pt-2">By {singlePost.author.name}</div>
        )}
        
        {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t"
            />
          )}
          <div className="px-10 mt-8 text-justify">
              <BlockContent blocks={singlePost.body} projectId="yntearao" dataset="production" />
            </div>
         
              <button className="mt-5 mb-10">
                <Link
                  to={"/blog"}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                >
                  Go Back
                </Link>
              </button>        
      </div>
    </section> 
     )}
              </>   
  )
}
