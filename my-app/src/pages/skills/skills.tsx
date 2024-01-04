import NavBar from "../../component/navbar"
import ImageSelect from "../../component/imageSelect";
import { Link } from "react-router-dom";
function Skills(){
    return(
        <main>
            <div className="w-full bg-auto bg-indigo-950 bg-center">
            <NavBar></NavBar>
            <div className="flex items-center justify-center">
            <div className="flex flex-col w-3/4">
                <div className="flex flex-row w-full mt-[20px] font-jose text-white text-4xl">
                        Web Application Development : TravellerTale
                </div>
                <div className="flex flex-row ">
                        <ImageSelect
                        imgSrc1="/Image/skills/test1.png"
                        imgSrc2="/Image/skills/test2.jpg"
                        imgSrc3="/Image/skills/test3.png"
                        imgSrc4="/Image/skills/test4.jpg"
                        ></ImageSelect>
                </div>
                <div className="flex w-full bg-slate-900 bg-opacity-50 mt-[15px] rounded-lg">
                    <div className="flex flex-row w-full mt-[10px] ml-7 font-jose text-white text-2xl ">
                        - A travelling website made by using Next.js, React and Typescript.<br></br>
                        - My role in this project creating Frontend, connect to Backend using Axios and deploying website.<br></br>
                        - Features included are Login/Register, Rating and Review.
                    </div>
                </div>

                <div className="flex flex-row w-full mt-[20px] font-jose text-white text-4xl">
                        Web Application Development : Password Game
                </div>
                <div className="flex flex-col items-center justify-center mt-4">
                    <img src="/Image/skills/tocScreenshot.png" alt="imageAlt" className="w-[720px] rounded-xl" ></img>
                    <div className="flex text-white mt-[3px] font-jose underline">
                    <Link to={"https://16sakuraa.github.io/PasswordGame/"} target="_blank" >Try the game!</Link><br></br>
                    </div>
                </div>
                <div className="flex w-full bg-slate-900 bg-opacity-50 mt-[15px] rounded-lg">
                    <div className="flex flex-row w-full mt-[10px] ml-7 font-jose text-white text-2xl ">
                        - A password game made by using HTML and Javascript.<br></br>
                        - My role in this website is creating a Javascript and deploy using GitHub.<br></br>
                    </div>
                </div>
                <div className="flex flex-row w-full mt-[20px] font-jose text-white text-4xl">
                        Working in Progress : Unity Game Project
                </div>
                <div className="flex w-full bg-slate-900 bg-opacity-50 mt-[15px] rounded-lg">
                    <div className="flex flex-row w-full mt-[10px] ml-7 font-jose text-white text-2xl ">
                        - My personal project.<br></br>
                        - Create by using Unity and C# Script.<br></br>
                        - Also made by my curiosity and passion.
                    </div>
                </div>

               
            </div>
            </div>
            </div>
        </main>
    )
}
export default Skills;