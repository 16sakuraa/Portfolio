import NavBar from "../../component/navbar"
function About(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
                <div className="flex flex-row w-full">
                    <div className="flex items-center justify-center w-2/4 h-[550px] ">
                        hello
                    </div>
                    <div className="flex items-center justify-center w-2/4 h-[550px] ">
                        hello
                    </div>

                </div>
            </div>
        </main>
    )
}
export default About;