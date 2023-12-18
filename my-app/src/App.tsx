import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div style={{ position: "relative" }}>
    <img
      src="../Image/bookbg.jpg"
      alt="bookBG"
      className="w-full opacity-100"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
    <div className="absolute flex flex-row w-full h-[100px] bg-white bg-opacity-100 items-center justify-center">
      <div className="flex flex-col font-light  pl-[20px] text-orange-400 text-3xl">
        Swap
      </div>
      <div className="flex flex-col font-bold  pl-[20px] text-orange-600 text-5xl">
        StorySwap
      </div>
      <div className="flex flex-col font-light pl-[20px] text-orange-400 text-3xl">
        Swap
      </div>
    </div>
  </div>
      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="font-bold text-center text-6xl text-teal-500">
          Fuck it we ball
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
