import React from 'react'
import { SlRocket } from 'react-icons/sl';
import { SlNote } from 'react-icons/sl';
import Footer from './Footer';
import Workarea from './Workarea';
import Elementor from './Elementor';
import Elementorcard from './Elementorcard';
import Cards from './Cards';
import Liveauctions from './Liveauctions';

const Home = () => {
  return (
  <>
        <div className="w-full ">
          <div className="flex flex-col relative ">
            <div className="md:hidden flex flex-col w-auto">
              <div style={{backgroundImage: 'url(/src/assets/home.desktop/image-01.png.png)', backgoundSize: 'cover', backgroundPosition: 'center center'}} className="w-auto shrink-100 h-[600px]"></div>
            </div>

            <div className="hidden md:flex md:flex-col">
              <img className="w-full h-[650px]" src="/src/assets/home.desktop/image-01.png.png" alt="" />
            </div>

            <div className="flex  transform translate-y-[6rem] absolute pl-7 md:flex md:flex-col md:pl-[6.5rem] md:transform md:translate-y-[8rem]">
              <span className="text-[1.0rem] font-semibold font-poppins text-indigo-700">NETSTORM
              <hr className="w-[3rem] h-1 my-2 bg-indigo-700 transform translate-x-[6.9rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:transform md:translate-x-[6.5rem]  "></hr>
              </span>
            </div>
            <div className=" flex flex-col transform translate-y-[9rem] pl-6  absolute">
              <span className="jost text-[3rem] text-white font-extrabold leading-[3.5rem] tracking-[0.0rem] md:text-[4rem] md:w-6/12 md:leading-[4.5rem] md:transform md:translate-y-[2rem] md:translate-x-[5rem] ">
                Discover, collect, and sell extraordinary NFTs
              </span>
            </div>
            <div className="flex flex-col transform translate-y-[25rem] pl-6  absolute">
              <span className="poppins text-xl text-[#8e8e8e]  font-poppins md:my-6 md:transform md:translate-x-[5.1rem] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="button flex  transform translate-y-[30rem] pl-5 gap-4 md:translate-x-[5.1rem] absolute ">
              <a href="../components/Explore.jsx/">
                <button type="button" className="jost text-neutral-200 border-2 rounded-full py-3 px-9 text-lg flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1%  duration-200"><SlRocket className="w-5 h-4 mr-2 "/> Explore</button>
              </a>
              <a href="../components/Explore.jsx/">
                <button type="button" className="jost text-neutral-200 border-2 rounded-full py-3 px-9  text-lg flex items-center hover:text-white hover:border-transparent hover:bg-gradient-to-r from-indigo-700 from-20% via-violet-900 via-80% to-purple-900 to-1% duration-200 "><SlNote className="w-6 h-4 mr-1"/> Create</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Liveauctions />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Elementorcard/>
        </div>
        <div>
          <Elementor />
        </div>
        <div>
          <Workarea />
        </div>
        <div>
          <Footer />
        </div>

        
  </>  
  )
}

export default Home