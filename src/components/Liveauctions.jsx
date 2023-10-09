import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import {Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Liveauctions = () => {
  return (
    <>
            <div className="w-full bg-[#09080d]">
          <div className=" container px-2.5 w-full h-[50rem] pt-24 flex flex-col  md:w-[73rem] md:h-[45rem]">
            <span className="text-[1.0rem] px-4 font-semibold font-poppins text-[#5142fc]/[.8] ">AUCTIONS
              <hr className="w-[3rem] h-1 my-2 bg-[#5142fc]/[.8] translate-x-[6.9rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:translate-x-[6.5rem]  "></hr>
            </span>
          <div className="flex w-full justify-between items-end  px-4">
            <span className="jost text-3xl text-white font-bold">Live Auctions</span>
            
            <div className="relative w-26 h-10 flex flex-col items-center justify-center group z-[10] overflow-hidden">
            <a className="flex  font-poppins font-semibold text-white hover:text-indigo-600 md:pr-0" href="http://localhost:5173/Explore/">View All 
            <FaArrowRight className="ml-2 mt-1  transition-[.5s] overflow-hidden group-hover:translate-x-4 " />
            <FaArrowRight className="ml-11 mt-1 transition-[.5s] ease-in mx-auto overflow-hidden absolute z-[1000] group-hover:translate-x-[1.6rem]" /></a>
            </div>
          </div>
          

          <Swiper   
            
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            
             slidesPerView={2}
             spaceBetween={64}
             loop={true}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
             pagination={{
               clickable: true,
             }}
             
             modules={[Autoplay, Pagination]}
             className="mySwiper text-white container pt-6 px-0.5 h-[39rem]  md:container md:px-[8rem] "  

            >

             <SwiperSlide className="w-full md:w-full md:ml-5" >
              <div className="card-1  bg-[#16151a] rounded-lg p-6 ml-3 w-[22rem] h-[32.88rem] md:h-[27rem] md:w-[15.92rem] hover:-translate-y-2 duration-700">
                <a href="#">
                  <div style={{backgroundImage: 'url(/src/assets/auction/auction_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] rounded-lg  md:w-[207px] md:h-[207px] "></div>  
                </a>
                <div className=" w-76 h-44 w-full">
                <a href="#">
                  <h5 className="text-[1.2rem] pt-12">Timeless Characters</h5>
                </a>
                <div className="avatar my-2 flex items-center  ">
                  <a href="#">
                   <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[48px] h-[48px] rounded-full "></div>
                  </a>
                  <a href="#">
                   <span className="text-[1rem] ml-2 text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Jhon Deo</span>
                  </a>
                </div>

                <div className="flex justify-between text-[#8e8e8e] mt-6 ">
                  <span>4.3 ETH</span>
                  <span>1 of 5</span>
                </div>
               </div>
              </div>

             </SwiperSlide>

             <SwiperSlide className="w-full md:w-full " >
              <div className="card-2 bg-[#16151a] rounded-lg p-6 ml-3 w-[22rem] h-[32.88rem] md:h-[27rem] md:w-[15.92rem] hover:-translate-y-2 duration-700">
                <a href="">
                  <div style={{backgroundImage: 'url(/src/assets/auction/auction_2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] rounded-lg  md:w-[207px] md:h-[207px] "></div>
                </a>
                  <div className=" w-76 h-44 w-full">
                <a href="#">
                  <h5 className="text-[1.2rem] pt-12">The Block Art</h5>
                </a>
                <div className="avatar my-2 flex items-center  ">
                  <a href="#">
                   <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[48px] h-[48px] rounded-full "></div>
                  </a>
                  <a href="#">
                   <span className="text-[1rem] ml-2 text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Richard</span>
                  </a>
                </div>

                <div className="flex justify-between text-[#8e8e8e] mt-6 ">
                  <span>2.2 ETH</span>
                  <span>1 of 1</span>
                </div>
               </div>
              </div>

             </SwiperSlide>

             <SwiperSlide className="w-full md:w-full" >
              <div className="card-3 bg-[#16151a] rounded-lg p-6 ml-3 w-[22rem] h-[32.88rem] md:h-[27rem] md:w-[15.92rem] hover:-translate-y-2 duration-700">
                <a href="">
                  <div style={{backgroundImage: 'url(/src/assets/auction/auction_3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] rounded-lg  md:w-[207px] md:h-[207px] "></div>                </a>
                  <div className=" w-76 h-44 w-full">
                <a href="#">
                  <h5 className="text-[1.2rem] pt-12">Women and Weapons</h5>
                </a>
                <div className="avatar my-2 flex items-center  ">
                  <a href="#">
                   <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[48px] h-[48px] rounded-full "></div>
                  </a>
                  <a href="#">
                   <span className="text-[1rem] ml-2 text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Yasmin</span>
                  </a>
                </div>

                <div className="flex justify-between text-[#8e8e8e] mt-6 ">
                  <span>3.7 ETH</span>
                  <span>1 of 5</span>
                </div>
               </div>
              </div>
              
             
             </SwiperSlide>

             <SwiperSlide className="w-full md:w-full" >
              <div className="card-4 bg-[#16151a] rounded-lg p-6 ml-3 w-[22rem] h-[32.88rem] md:h-[27rem] md:w-[15.92rem] hover:-translate-y-2 duration-700">
                <a href="">
                  <div style={{backgroundImage: 'url(/src/assets/auction/auction_4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] rounded-lg  md:w-[207px] md:h-[207px] "></div>                </a>
                  <div className=" w-76 h-44 w-full">
                <a href="#">
                  <h5 className="text-[1.2rem] pt-12">Robotos Official</h5>
                </a>
                <div className="avatar my-2 flex items-center  ">
                  <a href="#">
                   <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[48px] h-[48px] rounded-full "></div>
                  </a>
                  <a href="#">
                   <span className="text-[1rem] ml-2 text-white font-semibold font-poppins hover:text-indigo-600 duration-700">SpaceMan</span>
                  </a>
                </div>

                <div className="flex justify-between text-[#8e8e8e] mt-6 ">
                  <span>2.3 ETH</span>
                  <span>1 of 1</span>
                </div>
               </div>
              </div>
             
              </SwiperSlide>

             <SwiperSlide className="w-full md:w-full " >
              <div className="card-5 bg-[#16151a] rounded-lg p-6 ml-3 w-[22rem] h-[32.88rem] md:h-[27rem] md:w-[15.92rem] hover:-translate-y-2 duration-700">
                <a href="">
                  <div style={{backgroundImage: 'url(/src/assets/auction/auction_5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] rounded-lg  md:w-[207px] md:h-[207px] "></div>                </a>
                  <div className=" w-76 h-44 w-full">
                <a href="#">
                  <h5 className="text-[1.2rem] pt-12">The Flower Girls</h5>
                </a>
                <div className="avatar my-2 flex items-center  ">
                  <a href="#">
                   <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[48px] h-[48px] rounded-full "></div>
                  </a>
                  <a href="#">
                   <span className="text-[1rem] ml-2 text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Monas</span>
                  </a>
                </div>

                <div className="flex justify-between text-[#8e8e8e] mt-6 ">
                  <span>0.69 ETH</span>
                  <span>1 of 1</span>
                </div>
               </div>
              </div>
              
              </SwiperSlide>

             <SwiperSlide className="w-full md:w-full" >
              <div className="card-6 bg-[#16151a] rounded-lg p-6 ml-3 w-[22rem] h-[32.88rem] md:h-[27rem] md:w-[15.92rem] hover:-translate-y-2 duration-700">
                <a href="">
                  <div style={{backgroundImage: 'url(/src/assets/auction/auction_6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] rounded-lg  md:w-[207px] md:h-[207px] "></div>                </a>
                  <div className=" w-76 h-44 w-full">
                <a href="#">
                  <h5 className="text-[1.2rem] pt-12">CryptoDickbutts</h5>
                </a>
                <div className="avatar my-2 flex items-center  ">
                  <a href="#">
                   <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[48px] h-[48px] rounded-full "></div>
                  </a>
                  <a href="#">
                   <span className="text-[1rem] ml-2 text-white font-semibold font-poppins hover:text-indigo-600 duration-700">ArtNox</span>
                  </a>
                </div>

                <div className="flex justify-between text-[#8e8e8e] mt-6 ">
                  <span>3.2 ETH</span>
                  <span>1 of 5</span>
                </div>
               </div>
              </div>
             </SwiperSlide>
           </Swiper>
          </div>
        </div>
    </>
  )
}

export default Liveauctions