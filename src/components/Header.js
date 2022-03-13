import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between  bg-gray-900 text-white p-5">
      <div className="logo">
        <Link to="/"><h2 className="font-bold text-xl md:text-2xl lg:text-3xl">Dom's blog</h2></Link>
      </div>
      <nav>
        <ul className="flex">
        <li className="mr-5 lg:text-lg">
        <button><Link to="/">Home</Link></button>
        </li>
        <li className="lg:text-lg">
        <button><Link to="/blog">Blog</Link></button>
        </li>
        </ul>
        </nav>
    </header>
    </>
  )
}
