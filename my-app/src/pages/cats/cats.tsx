import NavBar from "../../component/navbar"
function Cats(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
            <div className="flex flex-row font-jose text-slate-800 items-center justify-center">
                <div className="flex flex-col bg-slate-100 h-[400px] w-[300px] rounded-lg text-3xl items-center justify-center">
                    <div className="">
                        <img src="/Image/cats/cokePic.jpg" className="h-[300px] rounded-lg"></img>
                    </div>
                    <div className="flex flex-row text-4xl mt-2">
                        Coke
                    </div>
                    <div className="flex flex-row">
                        Age : 7 Years
                    </div>
                </div>
                

            </div>
            </div>
        </main>
    )
}
export default Cats;