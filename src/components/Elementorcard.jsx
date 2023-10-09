import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


const Elementorcard = () => {
  return (
    <>
            <div className="w-full h-[225rem] bg-[#09080d] md:h-[55rem]">
          <div className=" container px-2.5 w-full h-[50rem] pt-24 flex flex-col  md:w-[73rem] md:h-[45rem]">
            <span className="text-[1.0rem] px-4 font-semibold font-poppins text-[#5142fc]/[.8] ">MOST POPULAR
              <hr className="w-[3rem] h-1 my-2 bg-[#5142fc]/[.8] translate-x-[9rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:translate-x-[9rem]  "></hr>
            </span>
            <div className="flex w-full justify-between items-end  px-4">
             <span className="jost text-3xl text-white font-bold">Popular Collections</span>
              <a className="flex items-center  font-poppins font-semibold text-white hover:text-indigo-600 md:pr-0" href="http://localhost:5173/Explore/">Explore Mode<FaArrowRight className="ml-2 animate-bounce" /></a>
            </div>
            
            <div className="card bg-[#09080d] grid grid-cols-1 md:grid-cols-4 w-full mt-8 text-white ">
             
              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg md:w-[89%] md:h-[19.9rem] ">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className=" py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold  text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Art Blocks</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-729</span>
                </div>
              </div>
              
              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg mt-7 md:w-[89%] md:h-[19.9rem] md:mt-0">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">CloneX</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-522</span>
                </div>
              </div>

              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg mt-7 md:w-[89%] md:h-[19.9rem] md:mt-0">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">CryptoPunks</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-495</span>
                </div>
              </div>
              
              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg mt-7 md:w-[89%] md:h-[19.9rem] md:mt-0">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">Doodles</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-873</span>
                </div>
              </div>

              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg mt-7 md:w-[89%] md:h-[19.9rem] md:mb-7">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">Cool Cats</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-397</span>
                </div>
              </div>
               
              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg mt-7 md:w-[89%] md:h-[19.9rem] md:mb-7">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">Adidas Originals</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-403</span>
                </div>
              </div>
              
              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg mt-7 md:w-[89%] md:h-[19.9rem] md:mb-7">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">The SandBox</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-687</span>
                </div>
              </div>
              
              <div className="author-card bg-[#16151a] w-[92%] h-[24.3rem] p-6 mx-4 rounded-lg my-7 md:w-[89%] md:h-[19.9rem] md:mb-7">
                <div style={{backgroundImage: 'url(/src/assets/most.author/author_8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[226.5px] md:w-[207px] md:h-[155.25px] rounded-lg "></div>
                <div className="seller flex justify-center w-20 h-20 border-2 border-[#f9f9f9]/[.3] rounded-full translate-x-28 -translate-y-10 z-[1000] drop-shadow-md md:translate-x-16">
                  <a className="py-[0.34rem]" href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                  </a>
                </div>
                <div className="flex flex-col items-center -translate-y-5 gap-1">
                  <a href="#">
                  <span className="jost text-xl font-semibold text-white font-semibold font-poppins hover:text-indigo-600 duration-700 ">Town Star</span>
                  </a>
                  <span className="text-[#8e8e8e] ">ERC-972</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Elementorcard