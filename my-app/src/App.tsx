import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div style={{ position: "relative" }}>
    <img
      src="../Image/bgcrop.jpg"
      alt="bookBG"
      className="w-full opacity-100"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
    <div className="w-full h-20 lg:h-28 text-white opacity-100" >
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
      <h1 className="text-5xl font-extrabold pl-[60px] ">StorySwap</h1>
        <ul className="hidden lg:inline-flex items- gap-8 uppercase text-sm font-semibold pr-[80px]">
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">Home</li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">How it works?</li>
          <li className="hover:text-hoverColor cursor-pointer duration-300  hover:text-yellow-300">About Us</li>
        </ul>
         
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
