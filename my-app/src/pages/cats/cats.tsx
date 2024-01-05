import NavBar from "../../component/navbar"
import CatCard from "../../component/catCard";
function Cats(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
            <div className="w-full text-center text-5xl font-jose text-white ">
                <div className="mt-5">My Mightiest Cats Family</div>
            </div>
            
            <div className="flex flex-row font-jose text-slate-800 items-center justify-center mt-5 gap-3">
                <CatCard
                img="/Image/cats/cokePic.jpg"
                name="Coke"
                age="7 Years"
                ></CatCard>
                <CatCard
                img="/Image/cats/cokePic.jpg"
                name="Coke"
                age="7 Years"
                ></CatCard>
                
            </div>
            </div>
        </main>
    )
}
export default Cats;