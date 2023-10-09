import React from 'react'
import { LiaFacebookF } from 'react-icons/lia';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { BiLogoDiscord } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
             <div className="footer w-full py-24 bg-[#121117]">
          <div className="container px-2.5 w-full  flex flex-col  md:w-[73rem] md:h-[16rem] md:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full  text-white ">

              <div className="flex flex-col w-full  px-4 md:w-[17.813rem]">
                <a href="#">
                  <div style={{backgroundImage: 'url(/src/assets/logo/logo.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[41.25px] h-[50px]"></div>
                </a>
                <span className="font-poppins font-medium text-[#8e8e8e] my-6 w-full text-1xl w-[16.5rem] -tracking-[0.01rem]">
                  Lorem ipsum dolor sit amet, 
                  consectetur adipisicing elit.
                  Quis non, fugit totam vel laboriosam vitae.
                </span>

                <div className="social-icons flex  text-white h-[3rem] w-[16.41rem] ">
                  <div className="facebook flex flex-col m-1 items-center justify-center bg-[#222222] rounded">
                    <button className=" flex items-center justify-center">
                      <a href="https://www.facebook.com/" target="_blank">
                        <div className="relative w-10 h-10 flex flex-col items-center justify-center group z-[10] overflow-hidden">
                          <LiaFacebookF className=" fill-white text-[1.125rem] duration-300 ease-in-out mx-auto group-hover:-translate-y-[3rem]" />
                          <LiaFacebookF className=" fill-white text-[1.125rem] duration-300 ease-in-out absolute transform translate-y-[3rem] z-[1000] group-hover:translate-y-[0rem]" />
                        </div>
                      </a>
                    </button>
                  </div>

                  <div className="twitter flex flex-col m-1 items-center justify-center bg-[#222222] rounded"> 
                    <button className=" flex items-center justify-center">
                      <a href="https://twitter.com/" target="_blank">
                        <div className="relative w-10 h-10 flex flex-col items-center justify-center group z-[10] overflow-hidden">
                          <FaTwitter className=" fill-white text-[1.125rem] duration-300 ease-in-out mx-auto group-hover:-translate-y-[3rem]" />
                          <FaTwitter className=" fill-white text-[1.125rem] duration-300 ease-in-out absolute transform translate-y-[3rem] z-[1000] group-hover:translate-y-[0rem]" />
                        </div>
                      </a>
                    </button>
                  </div>

                  <div className="telegram flex flex-col m-1 items-center justify-center bg-[#222222] rounded">
                    <button className=" flex items-center justify-center">
                      <a href="https://web.telegram.org/" target="_blank">
                        <div className="relative w-10 h-10 flex flex-col items-center justify-center group z-[10] overflow-hidden">
                          <FaTelegram className=" fill-white text-[1.125rem] duration-300 ease-in-out mx-auto group-hover:-translate-y-[3rem]" />
                          <FaTelegram className=" fill-white text-[1.125rem] duration-300 ease-in-out absolute transform translate-y-[3rem] z-[1000] group-hover:translate-y-[0rem]" />
                        </div>
                      </a>
                    </button>
                  </div>

                  <div className="discord flex flex-col m-1 items-center justify-center bg-[#222222] rounded">
                    <button className=" flex items-center justify-center">
                      <a href="https://discord.com/" target="_blank">
                        <div className="relative w-10 h-10 flex flex-col items-center justify-center group z-[10] overflow-hidden">
                          <BiLogoDiscord className=" fill-white text-[1.4rem] duration-300 ease-in-out mx-auto group-hover:-translate-y-[3rem]" />
                          <BiLogoDiscord className=" fill-white text-[1.4rem] duration-300 ease-in-out absolute transform translate-y-[3rem] z-[1000] group-hover:translate-y-[0rem]" />
                        </div>
                      </a>
                    </button>
                  </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex flex-col px-4">
                  <span className="jost text-2xl font-semibold mb-6">Useful Links</span>
                    <nav>
                      <ul className="text-base text-zinc-500 ">
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">All NFTs</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">How It Works</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Create</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Explore</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Privacy & Terms</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="w-full  ">
                  <div className="flex flex-col px-4">
                  <span className="jost text-2xl font-semibold mb-6">Community</span>
                    <nav>
                      <ul className="text-base text-zinc-500 ">
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">All NFTs</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Partners</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Suggestions</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Blog</a></li>
                        <li className="my-2 text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium "><a href="">Newsletter</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="w-full  ">
                  <div className="md:hidden flex flex-col px-4  ">
                  <span className="jost text-2xl font-semibold mb-6 mt-6">Popular Tags</span>
                    <nav className="">
                      <ul className="flex text-base pt-0 mt-3 md:flex ">
                        <li>
                          <a className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Arts</a>
                        </li>

                        <li>
                          <a className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Bids</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Bitcoin</a>
                        </li>
                        
                        <li >
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Crypto</a>
                        </li>
                      </ul>
                            
                      <ul className="flex text-base my-5 ">
                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Digital</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Marketplace</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Minting</a>
                        </li>
                      </ul>

                      <ul className="flex text-base my-5">
                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">NFT</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Token</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Wallet</a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="hidden md:flex md:flex-col md:px-4  ">
                  <span className="jost text-2xl font-semibold mb-6 ">Popular Tags</span>
                    <nav className="">
                      <ul className="flex text-base pt-0 mt-3 md:flex ">
                        <li>
                          <a className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Arts</a>
                        </li>

                        <li>
                          <a className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Bids</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Bitcoin</a>
                        </li>
                        
                      </ul>
                            
                      <ul className="flex text-base my-5 ">
                        <li >
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Crypto</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Digital</a>
                        </li>
                      </ul>

                      <ul className="flex text-base my-5">
                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Marketplace</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Minting</a>
                        </li>
                      </ul>

                      <ul className="flex text-base my-5">
                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">NFT</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Token</a>
                        </li>

                        <li>
                          <a  className="text-[#8e8e8e] duration-700 hover:text-indigo-700 font-medium border border-zinc-600 hover:border-indigo-700 rounded mx-1 px-4 py-1 " href="">Wallet</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="footer copyright w-full bg-[#16151a] ">
            <div className=" container  flex items-center justify-center p-4  text-[#8e8e8e] md:w-[73rem]">©2022 NetStorm, All Rights Reserved.</div>
          </div>
    </>
  )
}

export default Footer