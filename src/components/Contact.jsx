import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import Footer from './Footer'


const Contact = () => {
  return (
    <>
      <div className="w-full md:w-full bg-[#09080d] relative">
        <div className="container absolute z-[100] md:container  md:translate-y-14">
          <div className=" flex flex-col  items-center justify-center mt-2  py-24 px-5 md:flex md:flex-col md:items-center md:justify-center md:mt-2 md:px-0 md:translate-x-[4rem] md:mx-10 md:pb-24 md:pt-14">
            <span className="jost font-extrabold text-[2.5rem] text-indigo-700 md:text-[4rem] ">Contact</span>
            <div className="flex pt-9 items-center justify-center">
             <a className="font-poppins text-[#8e8e8e] font-semibold hover:text-indigo-700 duration-700" href="/src/components/Home.jsx/">Home</a>
            <div className="flex items-center ml-2">
              < FiChevronRight  className="text-[#8e8e8e] mr-1  w-3 h-3"/>
              <span className="poppins font-semibold  text-indigo-700">Contact</span>
            </div>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: 'url(/src/assets/home.desktop/blog.jpg)', backgroundSize:  'cover', BackgroundPosition: 'center center'}} className="w-auto h-[351px] bg-[#09080d] opacity-10 md:h-[420px] "></div>
      </div>

      <div className="w-full bg-[#09080d] pb-[6rem] md:pb-[8rem]">
        <div className="container px-2.5 md:w-7/12 ">
          <div className="container px-2.5">
            <div className="container px-3.5">
              <div className="flex justify-center pt-[5.63rem]">
               <span className="poppins text-indigo-700 font-semibold text-base tracking-[0.02rem]">CONTACT</span>
              </div>
              <div className="flex justify-center mt-4">
               <span className="font-['jost'] text-[#f5f5f5] text-[2rem] font-semibold">Get In Touch</span>
              </div>
              <div className="flex md:px-5 ">
                <span className="text-[#8e8e8e] text-center mt-6 mb-[3.2rem]">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit. 
                  Laborum obcaecati dignissimos 
                  quae quo ad iste ipsum officiis 
                  deleniti asperiores sit.
                </span>
              </div>
              <div className="container md:w-[39.7rem] h-full ">
                <div className="contact container bg-[#16151a] rounded-lg px-5 py-10 md:py-[3.13rem] md:px-[1.9rem]">
                  <div className="flex flex-col px-3.5 h-[5.1rem] justify-center ">
                    <input type="name" className="bg-[#09080d] rounded-sm w-full h-[3.13rem] outline-none placeholder-[#8e8e8e] p-3.5 text-[#8e8e8e] font-semibold" placeholder="Name*" id="Name" />
                  </div>
                  <div className="flex flex-col px-3.5 h-[5.1rem] justify-center ">
                    <input type="email" className="bg-[#09080d] rounded-sm w-full h-[3.13rem] outline-none placeholder-[#8e8e8e] p-3.5 text-[#8e8e8e] font-semibold" placeholder="Email*" id="Email" />
                  </div>
                  <div className="flex flex-col px-3.5 h-[5.1rem] justify-center ">
                    <input type="text" className="bg-[#09080d] rounded-sm w-full h-[3.13rem] outline-none placeholder-[#8e8e8e] p-3.5 text-[#8e8e8e] font-semibold" placeholder="Subject" id="Subject" />
                  </div>
                  <div className="flex flex-col px-3.5 h-[20rem] justify-center md:h-[20rem]  ">
                    <textarea id="messege" className="bg-[#09080d] block rounded-sm w-full h-[18rem] outline-none placeholder-[#8e8e8e] p-3.5 text-[#8e8e8e] font-semibold md:h-[18rem]" placeholder="Massege*" />
                  </div>
                  <div className="flex w-full pb-7 px-3.5 mt-6 md:px-3.5 md:pb-7 md:mt-6 ">
                    <button type="button" className="jost border-none rounded-full py-3 w-full font-semibold  text-lg flex items-center text-[#f5f5f5]  bg-gradient-to-r from-purple-900 from-20% via-indigo-700 via-80% to-indigo-700 to-1% duration-200  flex justify-center" >Send Messege</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="footer">
        <Footer />
        </div>
    </>
  )
}

export default Contact