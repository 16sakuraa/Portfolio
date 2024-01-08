import React from 'react';
import logo from './logo.svg';
import NavBar from './component/navbar';
import './App.css';
import { Link } from 'react-router-dom';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
function App() {
  const [text] = useTypewriter({
    words: [
      "A Frontend Developer",
    ],
    loop: false,
    typeSpeed: 20,
    deleteSpeed: 30,
    delaySpeed: 2000,
});
  return (
    <div className="App">
      <div className="w-full h-screen bg-bannerbg bg-center">
             <NavBar></NavBar>
             <div className="flex flex-row w-full font-jose">
                  <div className="flex items-center justify-center w-2/4 h-[550px] ">
                    <div className="flex flex-col text-white">
                      <div className="flex flex-row text-8xl  mt-2 text-left">
                        Hello There,
                      </div>
                      <div className="flex flex-row text-8xl  mt-2 text-left">
                        <div>I'm</div><div className="text-yellow-400 ml-[15px]">Suppaphol</div>
                      </div>
                      <p className="flex flex-row text-5xl  mt-2 text-left">
                          {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
                      </p>
                      <div className="flex flex-row mt-3">

                        <Link to={"https://www.facebook.com/16sakuraa/"} target="_blank"><img className="w-[40px] h-[40px]" src="./Image/fbIcon.png"></img></Link>
                        <Link to={"https://www.instagram.com/16sakuraa/"} target="_blank"><img className="w-[40px] h-[40px] ml-[20px]" src="./Image/igIcon.png"></img></Link>
                        <Link to={"https://github.com/16sakuraa"} target="_blank" ><img className="w-[40px] h-[40px] ml-[20px]" src="./Image/githubIcon.png"></img></Link>
                        
                      </div>
                      <button type="button" onClick={() => window.location.href = 'https://drive.google.com/uc?export=download&id=1wGbsQ3DbkbvTxCoySSr9HVHxYJ7Fg5RK'}> 
                                <div className="w-[220px] bg-green-600 rounded-lg hover:bg-green-800 mt-4">
                                        <div className="flex flex-row text-white text-lg  ml-2 mr-2 mt-2 ">
                                            Download Resume (.pdf)
                                        </div>
                                </div>
                          </button>
                    </div>
                  </div>
                <div className="flex flex-col items-center justify-center w-2/4 h-[550px]">
                  <div className="flex flex-row">
                  <img className="w-[450px]" src="./Image/profilePic.png"></img>
                  </div>
                  <div className="flex flex-row  text-white">
                    
                  </div>
                </div>
               </div> 
               <div className="flex flex-col items-center justify-center w-full h-[60px] font-jose">
                <div className="flex flex-row text-white ">
                    This website is made using React, TypeScript, Tailwind and 💓
                </div>
                <Link to={"https://github.com/16sakuraa/Portfolio"} target="_blank" >
                  <div className="flex flex-row text-white underline hover:text-yellow-300">
                      See source code 
                  </div>
                </Link>

               </div>
      </div>
      
      
      
        
    </div>
  );
}

export default App;
