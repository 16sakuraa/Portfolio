import NavBar from "../../component/navbar"
function Skills(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
            <div className="flex items-center justify-center">
            <div className="flex flex-col w-3/4">
                <div className="flex flex-row w-full border-2 mt-[20px]">
                    <div className="font-jose text-white text-4xl">
                        Web Application Development : TravellerTale
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
        </main>
    )
}
export default Skills;