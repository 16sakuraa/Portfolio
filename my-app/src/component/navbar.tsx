import React from 'react'

const navbar = () => {

  return (
    <div className="max-w-screen-2xl h-[80px] mx-auto px-4 flex items-center justify-center bg-slate-900 text-white">
                {/* <h1 className="text-5xl font-extrabold pl-[60px] ">StorySwap</h1> */}
                 <ul className="hidden lg:inline-flex items- gap-8 uppercase text-sm font-semibold">
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Home</li>
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">About Me</li>
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Skills</li>
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Contact</li>
                  
                </ul>
             </div>
  )
}; 

export default navbar