import NavBar from "../../component/navbar"
function Contact(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
                <div className="flex flex-row justify-center items-center w-full mt-[200px]">
                    <div className="flex flex-col w-[500px] items-center font-jose text-white bg-slate-800 bg-opacity-50 rounded-lg">
                        <div className="text-5xl mt-5">
                            Contact Me
                        </div>
                        <div className="text-2xl mt-2 mb-2">
                            Email : suppaphol.ar@gmail.com<br></br>
                            Tel : 0993924254
                        </div>
                        <div className="text-md mb-3">
                            Thank you for checking out my portfolio
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Contact;