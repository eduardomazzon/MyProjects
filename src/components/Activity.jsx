import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'
import Footer from './Footer';
import All from './All';
import Recent from './Recent';
import Purchase from './Purchase';


const Activity = () => {
  const navigate = useNavigate();

  const [Menu, setMenu] = useState(0);

  


  return (
    <>
        <div className="w-full md:w-full bg-[#09080d] relative">
          <div className="container absolute z-[100] md:container  md:translate-y-14">
            <div className=" flex flex-col  items-center justify-center mt-2  py-24 px-5 md:flex md:flex-col md:items-center md:justify-center md:mt-2 md:px-0 md:translate-x-[4rem] md:mx-10 md:pb-24 md:pt-14">
              <span className="jost font-extrabold text-[2.5rem] text-indigo-700 md:text-[4rem] ">Activity</span>
              <div className="flex pt-9 items-center justify-center">
               <a className="font-poppins text-[#8e8e8e] font-semibold hover:text-indigo-700 duration-700" href="/src/components/Home.jsx/">Home</a>
              <div className="flex items-center ml-2">
                < FiChevronRight  className="text-[#8e8e8e] mr-1  w-3 h-3"/>
                <span className="poppins font-semibold  text-indigo-700">Activity</span>
              </div>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: 'url(/src/assets/home.desktop/blog.jpg)', backgroundSize:  'cover', BackgroundPosition: 'center center'}} className="w-auto h-[351px] bg-[#09080d] opacity-10 md:h-[420px] "></div>
        </div>


        <div className="w-full bg-[#09080d]">
          <div className="container px-2.5 md:px-12">
            <div className="container px-2.5 pt-[5.63rem] md:pt-[8.13rem] md:pb-10 ">
              <div className="flex flex-col ">
                <span className="text-[1.0rem] font-semibold font-poppins text-indigo-700 ">CREATIVE
                  <hr className="w-[3rem] h-1 my-2 bg-indigo-700 transform translate-x-[6rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:transform md:translate-x-[6.5rem]  "></hr>                
                </span>
                <span className="jost font-semibold text-[2rem] text-[#f5f5f5] pb-5">Activity</span>
              </div>


              <div className="conatiner  md:w-[46.8rem] ">
                <ul
                  className="md:mb-4 flex list-none md:flex-row md:flex-wrap border-b-2 border-neutral-700/[.2] pl-0">
                  <li>
                    <button
                      onClick={() => setMenu(0)}
                      className={`border-x-0 border-b-2 border-t-0 py-2.5 px-2.5 text-[1.2rem] font-['jost'] font-semibold leading-tight  
                      ${Menu == 0 ? 'border-b-2 text-indigo-700 border-indigo-700' : 'text-[#f5f5f5] border-transparent duration-700'}
                      `}
                      > All</button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(1)}
                      className={`border-x-0 border-b-2 border-t-0 py-2.5 px-2.5 text-[1.2rem] font-['jost'] font-semibold leading-tight  
                      ${Menu == 1 ? 'border-b-2 text-indigo-700 border-indigo-700' : 'text-[#f5f5f5] border-transparent duration-700'}
                      `}
                
                      > Recent</button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(2)}
                      className={`border-x-0 border-b-2 border-t-0 py-2.5 px-2.5 text-[1.2rem] font-['jost'] font-semibold leading-tight  
                      ${Menu == 2 ? 'border-b-2 text-indigo-700 border-indigo-700' : 'text-[#f5f5f5] border-transparent duration-700'}
                      `}
                      
                      > Purchase</button>
                  </li>
                </ul>
                  
                  
                <div className="md:flex">
                  <div>

                    {Menu == 0 && <div><All /></div>}
                    {Menu == 1 && <div><Recent /></div>}
                    {Menu == 2 && <div><Purchase /></div>}
                  </div>

                  <div className="flex-col md:-translate-y-20 md:translate-x-20">
                      <div className="flex mt-[3rem]">
                        <form className="w-full h-[3.13rem] md:w-auto md:pr-3">
                         <input className="w-[14.5rem] h-[3.13rem] px-4 py-[0.7rem]  bg-transparent border border-neutral-700 rounded-sm text-[#8e8e8e] font-medium block outline-0 md:w-[14.06rem] placeholder-[#8e8e8e]" placeholder="Search ... "  type="search" />
                        </form>
                         <button className="w-[8.25rem] px-2.5 font-semibold border border-indigo-700 rounded-sm text-indigo-700 hover:text-[#f5f5f5] hover:bg-indigo-700 md:w-[6.07rem]">Search</button>
                      </div>
                      <div className="flex mb-6 pt-14">
                      <span className="jost text-[#F5F5F5] text-2xl font-medium ">Collections</span>
                      </div>
                    <div className="flex flex-col text-[#8e8e8e] w-full pb-24 mt-6 md:pb-24 ">
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">Adidas Originals</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">Art Blocks</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">CloneX</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">Cool Cats</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">CryptoPunks</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">Doodles</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">The Sandbox</a>
                      <a className="my-1 py-2 px-4 border border-neutral-700 rounded-sm hover:border-indigo-700 hover:text-indigo-700 duration-500" href="#">Town Star</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>

    </>
  )
}

export default Activity