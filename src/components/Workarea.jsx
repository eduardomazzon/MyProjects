import React from 'react'
import { SlWallet } from 'react-icons/sl';
import { SlGrid } from 'react-icons/sl';
import { SlDrawer } from 'react-icons/sl';
import { SlBag } from 'react-icons/sl';

const Workarea = () => {
  return (
    <>
            <div className="w-full bg-[#09080d] ">
          <div className=" container px-2.5 w-full  pt-7 flex flex-col  md:w-[73rem] ">
            <span className="text-[1.0rem] px-4 font-semibold font-poppins text-[#5142fc]/[.8] ">HOW IT WORKS
              <hr className="w-[3rem] h-1 my-2 bg-[#5142fc]/[.8] translate-x-[9rem] -translate-y-[1.4rem]  border-0 md:w-12 md:h-[0.2rem] md:translate-x-[9rem]  "></hr>
            </span>
            <div className="flex w-full justify-between items-end  px-4">
              <span className="jost text-3xl text-white font-semibold">Create and sell your NFTs</span>   
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full text-white md:mb-20 ">
             
             <div className="flex flex-col w-full mt-8 px-4 md:w-[17.813rem] ">
               <SlWallet className="w-12 h-12 text-indigo-700 "/>
               <span className="jost my-6 text-2xl font-semibold">
                  Set up your wallet
               </span>
               <span className="text-poppins text-zinc-500">
                  Once you’ve set up your
                  wallet of choice, connect it to OpenSea by 
                  clicking the NFT Marketplace in the top right corner.
                  Learn about the wallets we support.
                </span>
             </div>
              
             <div className="flex flex-col w-full mt-8 px-4 md:w-[17.813rem] ">
               <SlGrid className="w-12 h-12 text-indigo-700 "/>
               <span className="jost my-6 text-2xl font-semibold">
                  Create your collection
               </span>
               <span className="text-poppins text-zinc-500">
                  Click Create and set up your collection.
                  Add social links, a description, profile & banner images,
                  and set a secondary sales fee.
                </span>
             </div>

             <div className="flex flex-col w-full mt-8 px-4 md:w-[17.813rem] ">
               <SlDrawer className="w-12 h-12 text-indigo-700 "/>
               <span className="jost my-6 text-2xl font-semibold">
                  Add your NFTs
               </span>
               <span className="text-poppins text-zinc-500">
                  Upload your work (image, video, audio, or 3D art),
                  add a title and description, and customize your NFTs
                  with properties, stats, and unlockable content.
                </span>
             </div>
             
             <div className="flex flex-col w-full mt-8 px-4 md:w-[17.813rem] ">
               <SlBag className="w-12 h-12 text-indigo-700 "/>
               <span className="jost my-6 text-2xl font-semibold">
                  List them for sale
               </span>
               <span className="text-poppins text-zinc-500 pb-20">
                  Choose between auctions, fixed-price listings,
                  and declining-price listings. You choose how you
                  want to sell your NFTs!
                </span>
             </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Workarea