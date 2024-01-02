import React from 'react';
import logo from './logo.svg';
import NavBar from './component/navbar';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="w-full h-screen bg-bannerbg bg-center">
             <NavBar></NavBar>
             <div className="flex flex-row w-full ">
                  <div className="flex items-center justify-center w-2/4 h-[550px] ">
                    <div className="flex flex-col text-white">
                      <div className="flex flex-row text-8xl font-jose mt-2 text-left">
                        Hello There,
                      </div>
                      <div className="flex flex-row text-8xl font-jose mt-2 text-left">
                        <div>I'm</div><div className="text-yellow-400 ml-[15px]">Suppaphol</div>
                      </div>
                      <div className="flex flex-row text-5xl font-jose mt-2 text-left">
                        A Frontend Developer
                      </div>
                      {/* <div className="flex flex-row text-3xl font-jose mt-2 text-left">
                        Third Year Student From KMITL
                      </div> */}
                      <div className="flex flex-row mt-3">

                        <Link to={"https://www.facebook.com/16sakuraa/"} target="_blank"><img className="w-[40px] h-[40px]" src="./Image/fbIcon.png"></img></Link>
                        <Link to={"https://www.instagram.com/16sakuraa/"} target="_blank"><img className="w-[40px] h-[40px] ml-[20px]" src="./Image/igIcon.png"></img></Link>
                        <Link to={"https://github.com/16sakuraa"} target="_blank" ><img className="w-[40px] h-[40px] ml-[20px]" src="./Image/githubIcon.png"></img></Link>
                        
                      </div>
                    </div>
                  </div>
                <div className="flex flex-col items-center justify-center w-2/4 h-[550px]">
                  <div className="flex flex-row">
                  <img className="w-[380px] h-[380px]" src="./Image/profilePic.png"></img>
                  </div>
                  <div className="flex flex-row font-jose text-white">
                    
                  </div>
                </div>
               </div> 
               <div className="flex flex-col items-center justify-center w-full h-[60px]">
                <div className="flex flex-row text-white font-jose">
                    This website is made using React, TypeScript, Tailwind and 💓
                </div>
                <Link to={"https://github.com/16sakuraa/Portfolio"} target="_blank" >
                  <div className="flex flex-row text-white font-jose underline hover:text-yellow-300">
                      See source code 
                  </div>
                </Link>

               </div>
      </div>
      
      
      
        
    </div>
  );
}

export default App;
