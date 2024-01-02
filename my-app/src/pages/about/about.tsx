import NavBar from "../../component/navbar"
function About(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col items-center justify-center w-2/4 h-[550px] ">
                        hello
                    </div>
                    <div className="flex flex-col  w-2/4 h-[550px] mt-[30px]">
                        <div className="flex flex-row text-white text-5xl font-jose">About Me</div>
                            <div className="flex flex-col w-[680px] bg-slate-800 bg-opacity-50 mt-[15px] rounded-lg">
                                <div className="flex flex-row text-white text-lg font-jose ml-[30px] mt-[5px]">
                                    - Third Year Student from King Mongkut's Institute of Technology Ladkrabang
                                </div>
                                <div className="flex flex-row text-white text-lg font-jose ml-[15px]">
                                    Bachelor of Engineering, Computer Major
                                </div>
                                <div className="flex flex-row text-white text-lg font-jose ml-[30px] ">
                                    - Stay hungry, Stay Foolish
                                </div>
                                
                                
                            </div>
                        
                        </div>

                    </div>
             </div>
        </main>
    )
}
export default About;