import React from 'react'
import {Link} from "react-router-dom"

export default function Homepage() {
  return (
      <>
   <section className="flex items-center flex-col justify-center text-center h-screen">
       <h1 className="uppercase font-bold text-gray-800 text-4xl tracking-wide mb-7 md:text-6xl lg:text-8xl">My blog</h1>
       <button>
           <Link to="/blog" className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-gray-800 font-bold">Read my posts</Link>
       </button>
   </section>
    </>
  )
}
