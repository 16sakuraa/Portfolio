import NavBar from "../../component/navbar"
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function About(){
    return(
        <main>
            <div className="w-full h-screen bg-bannerbg bg-center">
            <NavBar></NavBar>
                <div className="flex flex-row w-full font-jose ">
                    <div className="flex w-1/2 items-center justify-center ">
                        <div className="flex flex-row w-1/2 ">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide>
                                <img src="/Image/cats/placeholder.jpg" className="h-[530px] rounded-xl"></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Image/cats/placeholder.jpg" className="h-[530px] rounded-xl"></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Image/cats/placeholder.jpg" className="h-[530px] rounded-xl"></img>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                    <div className="flex flex-col  w-2/4 h-[550px] mt-[30px] text-white">
                        <div className="flex flex-row text-white text-5xl">About Me</div>
                            <div className="flex flex-row w-full">
                                <div className="flex bg-slate-800 rounded-lg">
                                    <div className="ml-2 mr-2 mt-1 text-2xl">Education</div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[680px] bg-slate-800 bg-opacity-50 mt-[10px] rounded-lg text-white text-lg ">
                                <div className="flex flex-row ml-[30px] mt-[5px]">
                                    - Suppaphol Areewattanawong, 21. Nickname's Oat
                                </div>
                                <div className="flex flex-row ml-[30px] ">
                                - Third Year Student from King Mongkut's Institute of Technology Ladkrabang
                                </div>
                                <div className="flex flex-row ml-[15px]">
                                    Bachelor of Engineering, Computer Major
                                </div>
                                <div className="flex flex-row ml-[30px] ">
                                - GPA 3.06
                                </div>
                                
                            </div>
                            <div className="flex flex-row w-full mt-[10px]">
                                <div className="flex bg-slate-800 rounded-lg">
                                    <div className="ml-2 mr-2 mt-1 text-2xl">Tools Use</div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[680px] bg-slate-800 bg-opacity-50 mt-[10px] rounded-lg text-white text-lg ">
                                <div className="flex flex-row ml-[30px] mt-[5px]">
                                    - Suppaphol Areewattanawong, 21. Nickname's Oat
                                </div>
                                <div className="flex flex-row ml-[30px] ">
                                - Third Year Student from King Mongkut's Institute of Technology Ladkrabang
                                </div>
                                <div className="flex flex-row ml-[15px]">
                                    Bachelor of Engineering, Computer Major
                                </div>
                                <div className="flex flex-row ml-[30px] ">
                                - GPA 3.06
                                </div>
                                
                            </div>
                            <button type="button">
                                <div className="w-[165px] bg-green-600 rounded-lg hover:bg-green-800 mt-5">
                                        <div className="flex flex-row text-white text-lg  ml-2 mr-2 mt-2 ">
                                            Download Resume
                                        </div>
                                </div>
                            </button>
                        
                        </div>

                    </div>
             </div>
        </main>
    )
}
export default About;