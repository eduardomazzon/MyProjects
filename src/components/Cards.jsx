import React from 'react'

const Cards = () => {
  return (
    <>
            <div className="w-full  bg-[#09080d]">
          <div className=" container px-2.5 w-full pt-24 flex flex-col  md:w-[73rem]">
            <span className="text-[1.0rem] px-4 font-semibold font-poppins text-[#5142fc]/[.8] ">CREATIVE ARTIST
              <hr className="w-[3rem] h-1 my-2 bg-[#5142fc]/[.8] translate-x-[9.8rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:translate-x-[9.5rem]  "></hr>
            </span>
            <div className="flex w-full justify-between items-end  px-4">
             <span className="jost text-3xl text-white font-bold">Top Sellers</span>
            </div>

            <div className="card  grid gird-cols-1 md:grid-cols-3 w-full mt-8 ">

              <div className="flex  p-6 m-4 bg-[#16151a] rounded-lg">
                <a className=" " href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                </a>
                <div className="flex flex-col justify-between pl-4 py-1 font-medium text-[#8e8e8e] ">
                  <a className="" href="#">
                    <span className="text-1xl text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Monas</span>
                  </a>
                  <span>4.7 BNB</span>
                </div>
              </div>

              <div className="flex  p-6 m-4 bg-[#16151a] rounded-lg">
                <a className=" " href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                </a>
                <div className="flex flex-col justify-between pl-4 py-1 font-medium text-[#8e8e8e] ">
                  <a className="" href="#">
                    <span className="text-1xl text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Richard</span>
                  </a>
                  <span>3.2 BNB</span>
                </div>
              </div>

              <div className="flex  p-6 m-4 bg-[#16151a] rounded-lg">
                <a className=" " href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                </a>
                <div className="flex flex-col justify-between pl-4 py-1 font-medium text-[#8e8e8e] ">
                  <a className="" href="#">
                    <span className="text-1xl text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Sara</span>
                  </a>
                  <span>1.9 BNB</span>
                </div>
              </div>

              <div className="flex  p-6 m-4 bg-[#16151a] rounded-lg">
                <a className=" " href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                </a>
                <div className="flex flex-col justify-between pl-4 py-1 font-medium text-[#8e8e8e] ">
                  <a className="" href="#">
                    <span className="text-1xl text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Johnson</span>
                  </a>
                  <span>2.5 BNB</span>
                </div>
              </div>

              <div className="flex  p-6 m-4 bg-[#16151a] rounded-lg">
                <a className=" " href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                </a>
                <div className="flex flex-col justify-between pl-4 py-1 font-medium text-[#8e8e8e] ">
                  <a className="" href="#">
                    <span className="text-1xl text-white font-semibold font-poppins hover:text-indigo-600 duration-700">Yasmin</span>
                  </a>
                  <span>2.3 BNB</span>
                </div>
              </div>

              <div className="flex  p-6 m-4 bg-[#16151a] rounded-lg">
                <a className=" " href="#">
                  <div style={{backgroundImage: 'url(/src/assets/avatar/avatar_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] rounded-full "></div>
                </a>
                <div className="flex flex-col justify-between pl-4 py-1 font-medium text-[#8e8e8e] ">
                  <a className="" href="#">
                    <span className="text-1xl text-white font-semibold font-poppins hover:text-indigo-600 duration-700">ArtNox</span>
                  </a>
                  <span>1.5 BNB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards