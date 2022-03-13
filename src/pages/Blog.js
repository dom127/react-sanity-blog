import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
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
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
    <section className="px-5 sm:max-w-xl md:mx-auto xl:max-w-2xl 2xl:mx-auto ">
      <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-4xl lg:text-6xl">
        Blog page
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1">
        {posts.map((post) => (
          <article key={post.slug.current} className="mt-8">
            <img src={post.mainImage.asset.url} alt={post.title} />
            <h2 className="text-3xl mt-8">{post.title}</h2>
            <h5 className="pb-5 pt-5">By {post.author.name}</h5>
            <div>
              <BlockContent blocks={post.body} projectId="yntearao" dataset="production" />
            </div>
            <button className="mt-8 mb-10">
              <Link
                to={`/blog/${post.slug.current}`}
                className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
              >
                Read Full Article
              </Link>
            </button>
          </article>
        ))}
      </div>
    </section>
  </>
  )
}