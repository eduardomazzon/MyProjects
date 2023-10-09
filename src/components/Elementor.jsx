import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { BsHandbag } from 'react-icons/bs';


const Elementor = () => {
  return (
    <>
            <div className="w-full  bg-[#09080d] h-[168rem] md:h-[50rem] ">
          <div className=" container px-2.5 w-full h-[50rem] pt-24 flex flex-col  md:w-[73rem] md:h-[45rem]">
            <span className="text-[1.0rem] px-4 font-semibold font-poppins text-[#5142fc]/[.8] ">EXPLORE
              <hr className="w-[3rem] h-1 my-2 bg-[#5142fc]/[.8] translate-x-[6rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:translate-x-[5.5rem]  "></hr>
            </span>
            <div className="flex w-full justify-between items-end  px-4">
              <span className="jost text-3xl text-white font-bold">Exclusive Assets</span>
              <a className="flex items-center  font-poppins font-semibold text-white hover:text-indigo-600 md:pr-0" href="http://localhost:5173/Explore/">View All<FaArrowRight className="ml-2 animate-bounce" /></a>
            </div>

              <div className="card-exclusive  w-full mt-7 md:mx-5  md:ml-0">
                 <div className="card  grid grid-cols-1 md:grid-cols-4  mx-4 my-4 rounded-lg  md:ml-0 md:mr-4 ">
                 
                  <div className="bg-[#16151a] h-[35rem] p-6 rounded-lg md:w-[15.97rem] md:h-[28.8rem]  md:mx-4 hover:-translate-y-2 duration-700">
                    <a href="">
                      <div style={{backgroundImage: 'url(/src/assets/auction/auction_7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] md:w-[207px] md:h-[207px] rounded-lg "></div>
                    </a>
                    
                    <div className="pt-9">
                      <a className="" href="">
                        <span className="jost text-xl font-bold text-white hover:text-indigo-600 duration-700">Walking On Air</span>
                      </a>
                    </div>
                    <div className="my-4">
                      <span className="text-[1rem] text-[#8e8e8e] ">Owned By </span>
                     <a href="">
                      <span className="jost text-white ml-1 text-[1rem] font-medium hover:text-indigo-600 duration-700">Johnson</span> 
                     </a>
                    </div>

                    <div className="flex justify-between text-[#8e8e8e]">
                      <span>1.5 ETH</span>
                      <span>1 of 5</span>
                    </div>

                    <div className="my-4">
                    <a className="" href="#">
                      <button type="button" className="poppins text-neutral-200 border-2 rounded-full h-11 px-6  text-[0.8rem] font-bold flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1%  duration-200"><BsHandbag className="w-4 h-4 mr-2 "/>Place a Bid</button>
                    </a>
                    </div>
                  </div>
                  
                  <div className="bg-[#16151a] w-[21.89rem] h-[35rem] p-6 mt-8 rounded-lg md:w-[15.97rem] md:h-[28.8rem] md:mt-0 md:mx-5 hover:-translate-y-2 duration-700">
                    <a href="">
                      <div style={{backgroundImage: 'url(/src/assets/auction/auction_8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] md:w-[207px] md:h-[207px] rounded-lg "></div>
                    </a>
                    
                    <div className="pt-9">
                      <a className="" href="">
                        <span className="jost text-xl font-bold text-white hover:text-indigo-600 duration-700">Domain Names</span>
                      </a>
                    </div>
                    <div className="my-4">
                      <span className="text-[1rem] text-[#8e8e8e] ">Owned By </span>
                     <a href="">
                      <span className="jost text-white ml-1 text-[1rem] font-medium hover:text-indigo-600 duration-700">John Deo</span> 
                     </a>
                    </div>

                    <div className="flex justify-between text-[#8e8e8e]">
                      <span>2.7 ETH</span>
                      <span>1 of 1</span>
                    </div>

                    <div className="my-4">
                    <a className="" href="#">
                      <button type="button" className="poppins text-neutral-200 border-2 rounded-full h-11 px-6  text-[0.8rem] font-bold flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1%  duration-200"><BsHandbag className="w-4 h-4 mr-2 "/>Place a Bid</button>
                    </a>
                    </div>
                  </div>
                  
                  <div className="bg-[#16151a] w-[21.89rem] h-[35rem] p-6 mt-8 rounded-lg md:w-[15.97rem] md:h-[28.8rem] md:mt-0 md:mx-6 hover:-translate-y-2 duration-700">
                    <a href="">
                      <div style={{backgroundImage: 'url(/src/assets/auction/auction_9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] md:w-[207px] md:h-[207px] rounded-lg "></div>
                    </a>
                    
                    <div className="pt-9">
                      <a className="" href="">
                        <span className="jost text-xl font-bold text-white hover:text-indigo-600 duration-700">Trading cards</span>
                      </a>
                    </div>
                    <div className="my-4">
                      <span className="text-[1rem] text-[#8e8e8e] ">Owned By </span>
                     <a href="">
                      <span className="jost text-white ml-1 text-[1rem] font-medium hover:text-indigo-600 duration-700">Arham</span> 
                     </a>
                    </div>

                    <div className="flex justify-between text-[#8e8e8e]">
                      <span>2.3 ETH</span>
                      <span>1 of 1</span>
                    </div>

                    <div className="my-4">
                    <a className="" href="#">
                      <button type="button" className="poppins text-neutral-200 border-2 rounded-full h-11 px-6  text-[0.8rem] font-bold flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1%  duration-200"><BsHandbag className="w-4 h-4 mr-2 "/>Place a Bid</button>
                    </a>
                    </div>
                  </div>
                  
                  <div className="bg-[#16151a] w-[21.89rem] h-[35rem] p-6 my-8 rounded-lg md:w-[15.97rem] md:h-[28.8rem] md:mt-0 md:mx-7 hover:-translate-y-2 duration-700">
                    <a href="">
                      <div style={{backgroundImage: 'url(/src/assets/auction/auction_10.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[302px] h-[302px] md:w-[207px] md:h-[207px] rounded-lg "></div>
                    </a>
                    
                    <div className="pt-9">
                      <a className="" href="">
                        <span className="jost text-xl font-bold text-white hover:text-indigo-600 duration-700">Industrial Revolution</span>
                      </a>
                    </div>
                    <div className="my-4">
                      <span className="text-[1rem] text-[#8e8e8e] ">Owned By </span>
                     <a href="">
                      <span className="jost text-white ml-1 text-[1rem] font-medium hover:text-indigo-600 duration-700">Victor</span> 
                     </a>
                    </div>

                    <div className="flex justify-between text-[#8e8e8e]">
                      <span>1.8 ETH</span>
                      <span>1 of 1</span>
                    </div>

                    <div className="my-4">
                    <a className="" href="#">
                      <button type="button" className="poppins text-neutral-200 border-2 rounded-full h-11 px-6  text-[0.8rem] font-bold flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1%  duration-200"><BsHandbag className="w-5 h-4 mr-2 "/>Place a Bid</button>
                    </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2 md:flex md:translate-x-[27.2rem]">
                    <a className="" href="#">
                      <button type="button" className="poppins text-neutral-200 border-2 rounded-full h-14 px-9  text-[1rem] font-bold flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1%  duration-200">Load More</button>
                    </a>
                  </div>
                 </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Elementor