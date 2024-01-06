import NavBar from "../../component/navbar"
import CatCard from "../../component/catCard";
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Cats(){

    return(
        
        <main>
            
            <div className="w-full bg-auto bg-indigo-950 bg-center">
            <NavBar></NavBar>
            <div className="w-full text-center text-5xl font-jose text-white ">
                <div className="mt-5">My Mightiest Cats Family</div>
            </div>
            
                <div className="flex flex-row font-jose text-slate-800 items-center justify-center mt-5 gap-7">
                    <CatCard
                    img="/Image/cats/cokePic.jpg"
                    name="Coke"
                    age="7"
                    ></CatCard>
                    <CatCard
                    img="/Image/cats/triangle.jpg"
                    name="Mr. Triangle"
                    age="3"
                    ></CatCard>
                    <CatCard
                    img="/Image/cats/placeholder.jpg"
                    name="Bin"
                    age="2"
                    ></CatCard>
                    <CatCard
                    img="/Image/cats/Som.jpg"
                    name="Som"
                    age="1"
                    ></CatCard>
                </div>
                <div className="flex flex-row font-jose text-slate-800 items-center justify-center mt-5 gap-7">
                    <CatCard
                    img="/Image/cats/Lai.jpg"
                    name="Lai"
                    age="3"
                    ></CatCard>
                    <CatCard
                    img="/Image/cats/Richy.jpg"
                    name="Mr. Triangle"
                    age="1"
                    ></CatCard>

                </div>
                {/* <div className="flex w-full items-center justify-center">
                    <div className="flex flex-row font-jose text-slate-800 w-[810px]">
                    <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CatCard
                                    img="/Image/cats/cokePic.jpg"
                                    name="Coke"
                                    age="7"
                                ></CatCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CatCard
                                    img="/Image/cats/cokePic.jpg"
                                    name="Coke"
                                    age="7"
                                ></CatCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CatCard
                                    img="/Image/cats/cokePic.jpg"
                                    name="Coke"
                                    age="7"
                                ></CatCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CatCard
                                    img="/Image/cats/cokePic.jpg"
                                    name="Coke"
                                    age="7"
                                ></CatCard>
                            </SwiperSlide>


                    </Swiper> */}
                    {/* </div> */}
                 {/* </div> */}
            </div>
        </main>
    )
}
export default Cats;