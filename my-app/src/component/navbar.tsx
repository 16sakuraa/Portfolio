import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {

  return (
    <div className="max-w-screen-2xl h-[80px] mx-auto px-4 flex items-center justify-center bg-slate-900 text-white">
                {/* <h1 className="text-5xl font-extrabold pl-[60px] ">StorySwap</h1> */}
                 <ul className="hidden lg:inline-flex items- gap-8 uppercase text-sm font-semibold">
                 
                  <Link to={"/"}><li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Home</li></Link>
                  <Link to={"/pages/about"}><li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">About Me</li></Link>
                  <Link to={"/pages/skills"}><li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Skills</li></Link>
                  <Link to={"/pages/cats"}><li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">My Cats</li></Link>
                  <Link to={"/pages/contact"}><li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Contact</li></Link>
                  
                  
                </ul>
             </div>
  )
}; 

export default navbar