import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w-full h-screen bg-bannerbg bg-center">
              <div className="max-w-screen-2xl h-[80px] mx-auto px-4 flex items-center justify-center bg-slate-900 text-white">
                {/* <h1 className="text-5xl font-extrabold pl-[60px] ">StorySwap</h1> */}
                 <ul className="hidden lg:inline-flex items- gap-8 uppercase text-sm font-semibold">
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Home</li>
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">About Me</li>
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Skills</li>
                  <li className="hover:text-hoverColor text-lg cursor-pointer duration-300  hover:text-yellow-300">Contact</li>
                  
                </ul>
             </div>
             <div className="flex flex-row w-full ">
                  <div className="flex-col w-2/4 h-full border-2">
                    <div className="text-white text-left ml-[200px]">
                      <div className="flex-row text-6xl">
                        Hello There,
                      </div>
                      <div className="flex-row text-6xl">
                        I'm Suppaphol
                      </div>
                      <div className="flex-row text-4xl">
                        a Frontend Developer
                      </div>
                    </div>
                  </div>
                <div className="flex-col w-2/4 h-full">tset2</div>
               </div> 
      </div>
      
      
      
        
    </div>
  );
}

export default App;
