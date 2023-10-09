import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import Footer from './Footer'

const WalletConnect  = () => {
  return (
    <>
        <div className="w-full md:w-full bg-[#09080d] relative">
            <div className="container absolute z-[100] md:container  md:translate-y-14">
              <div className=" flex flex-col  items-center justify-center mt-2  py-24 px-5 md:flex md:flex-col md:items-center md:justify-center md:mt-2 md:px-0 md:translate-x-[4rem] md:mx-10 md:pb-24 md:pt-14">
                  <span className="jost font-extrabold text-[2.5rem] text-indigo-700 md:text-[4rem] ">Wallet Connect</span>
                <div className="flex pt-9 items-center justify-center">
                    <a className="font-poppins text-[#8e8e8e] font-semibold hover:text-indigo-700 duration-700" href="/src/components/Home.jsx/">Home</a>
                  <div className="flex items-center ml-2">
                    < FiChevronRight  className="text-[#8e8e8e] mr-1  w-3 h-3"/>
                    <span className="poppins font-semibold  text-indigo-700">Wallet Connect</span>
                  </div>
                </div>
              </div>
            </div>
          <div style={{backgroundImage: 'url(/src/assets/home.desktop/blog.jpg)', backgroundSize:  'cover', BackgroundPosition: 'center center'}} className="w-auto h-[351px] bg-[#09080d] opacity-10 md:h-[420px] "></div>
        </div>

        <div className="w-full bg-[#09080d] pb-[6rem] md:pb-[8rem]">
          <div className="container px-2.5 ">
            <div className="container px-2.5">
              <div className="container px-3.5">
                <div className="flex justify-center pt-[5.63rem]">
                 <span className="poppins text-indigo-700 font-semibold text-base tracking-[0.02rem]">WALLET CONNECT</span>
                </div>
                <div className="flex justify-center mt-4">
                 <span className="font-['jost'] text-[#f5f5f5] text-[2rem] font-semibold">Connect Your Wallet</span>
                </div>
                <div className="flex md:px-5 md:w-7/12 md:translate-x-[15.2rem]">
                  <span className="text-[#8e8e8e] text-base text-center mt-6 mb-[3.2rem]">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Laborum obcaecati dignissimos 
                    quae quo ad iste ipsum officiis 
                    deleniti asperiores sit.
                  </span>
                </div>

                <div className="container w-full">
                  <div className="grid gird-cols-1 md:grid-cols-3">
                    
                    <div className="flex mt-[1.875rem]  md:w-ful md:px-4 ">
                      <a className="cursor-pointer group" href="https://metamask.io/" target="_blank" >
                        <div className="w-[20.5rem] h-[17.8rem] bg-[#16151a] rounded-lg p-6 flex flex-col items-center  md:w-full  md:h-[19rem] hover:-translate-y-2 duration-1000 block">
                          <div style={{backgroundImage: 'url(/src/assets/wallet-images/metamask.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] md:w-[80px] md:h-[83.19px] "></div>
                          <div className="mt-6 md:mt-4">
                            <span className="jost text-2xl text-[#f5f5f5] font-semibold cursor-pointer group-hover:text-indigo-700 duration-700" >MetaMask</span>
                          </div>
                          <div className="text-[#8e8e8e] my-6 text-center text-base">
                            A browser extension with great flexibility.
                            The webs most popular wallet
                          </div>
                        </div>
                      </a>
                    </div>


                    <div className="flex mt-[1.875rem] md:w-full md:px-4" >
                      <a className="cursor-pointer group" href="https://authereum.com/" target="_blank" >
                        <div className="w-[20.5rem] h-[17.8rem] bg-[#16151a] rounded-lg p-6 flex flex-col items-center md:w-full md:h-[19.7rem] hover:-translate-y-2.5 duration-1000 block">
                          <div style={{backgroundImage: 'url(/src/assets/wallet-images/authereum.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] md:w-[80px] h-[89.91px] "></div>
                          <div className="mt-6 md:mt-3">
                            <span className="jost text-2xl text-[#f5f5f5] font-semibold cursor-pointer group-hover:text-indigo-700 duration-700" >Authereoum</span>
                          </div>
                          <div className="text-[#8e8e8e] my-6 text-center">
                            A user-friendly wallet that allows you to sign
                            up with your phone number on any device
                          </div>
                        </div>
                      </a>
                    </div>


                    <div className="flex mt-[1.875rem] md:w-full md:px-4">
                      <a className="cursor-pointer group" href="https://walletconnect.com/ " target="_blank" >
                        <div className="w-[20.5rem] h-[17.8rem] bg-[#16151a] rounded-lg p-6 flex flex-col items-center md:w-full md:h-[19rem] hover:-translate-y-2 duration-1000 block">
                          <div style={{backgroundImage: 'url(/src/assets/wallet-images/walletconnect.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] "></div>
                          <div className="mt-6 md:mt-4">
                            <span className="jost text-2xl text-[#f5f5f5] font-semibold cursor-pointer group-hover:text-indigo-700 duration-700" >WalletConnect</span>
                          </div>
                          <div className="text-[#8e8e8e] my-6 text-center">
                           Pair with Trust, Argent MetaMask & more.
                           Works from any browser, without an extension
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                    
                  <div className="grid grid-cols-1 md:grid-cols-2 md:mr-[12.2rem] md:ml-[12.2rem]">

                    <div className="flex mt-[1.875rem] md:w-full md:px-4">
                      <a className="cursor-pointer group" href="https://www.meetdapper.com/" target="_blank" >
                        <div className="w-[20.5rem] h-[17.8rem] bg-[#16151a] rounded-lg p-6 flex flex-col items-center md:w-full md:h-[19rem] hover:-translate-y-2 duration-1000 block">
                          <div style={{backgroundImage: 'url(/src/assets/wallet-images/dapper.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] "></div>
                          <div className="mt-6">
                            <span className="jost text-2xl text-[#f5f5f5] font-semibold cursor-pointer group-hover:text-indigo-700 duration-700" >Dapper</span>
                          </div>
                          <div className="text-[#8e8e8e] my-6 text-center">
                            A security-focused cloud wallet with pin
                            codes and multi-factor authentication
                          </div>
                        </div>
                      </a>
                    </div>


                    <div className="flex mt-[1.875rem] md:w-full md:px-4 ">
                      <a className="cursor-pointer group" href="https://docs.kaikas.io/" target="_blank" >
                        <div className="w-[20.5rem] h-[17.8rem] bg-[#16151a] rounded-lg p-6 flex flex-col items-center md:w-full md:h-[19rem] hover:-translate-y-2 duration-1000 block">
                          <div style={{backgroundImage: 'url(/src/assets/wallet-images/kaikas.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[64px] h-[64px] md:w-[80px] md:h-[80px]"></div>
                          <div className="mt-6">
                            <span className="jost text-2xl text-[#f5f5f5] font-semibold cursor-pointer group-hover:text-indigo-700 duration-700" >Kaikas</span>
                          </div>
                          <div className="text-[#8e8e8e] my-6 text-center">
                            A simple-to-use wallet that works on both
                            mobile and through a browser extension
                          </div>
                        </div>
                      </a>
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

export default WalletConnect