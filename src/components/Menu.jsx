import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';



const Menu = () => {
  const navbar = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [Search, setSearch] = useState(false);
  const [MenuMobile, setMenuMobile] = useState(false);

  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () =>  {
    if (lastScrollY < window.scrollY) {

      nav.classList.add("nav--hidden");

    } else {

      nav.classList.remove("nav--hidden");

      

    }
  }); 
  
  return (
    <>


           
      <div id="preloader" className="preloader-loaded flex items-center justify-center h-screen bg-black hidden">
        <div className="preloader-animation w-36 h-56 opacity-100 transition-[.3s] ease-out ">
          <div className="spinner w-36 h-36 mt-[3.5rem] z-[1000] mr-auto mb-0 ml-auto border-4 border-[#f9f9f9] border-t-indigo-700 solid rounded-[50%] bg-transparent animate-spin duration-[.3s] ease-linear ">
          </div>
            <div className="w-36 h-6  mt-[3.5rem] ">
              <span className="text-[1rem] text-[#8e8e8e] tracking-[0.5rem] pl-3.5">LOADING</span>
            </div>
        </div>
      </div> 


    <div className="nav w-full bg-[#121117] md:full fixed z-[999999]">
      <div className=" py-5 px-6 ">
        <nav className="
         container flex items-center justify-between px-12 ">
          <a href="http://localhost:5173/">
            <img className="w-10 h-12 ml-7 my-5 md:w-10 md:h-12 md:ml-0 md:my-0 " src="https://netstorv.theme-land.com/wp-content/uploads/2021/12/logo.png" alt="#" />
          </a>
            <ul className="flex items-center  text-[0.95rem] text-[#f5f5f5] font-['poppins'] tracking-[.05rem]">
                <li className="px-4 py-2  font-semibold hover:text-indigo-700 duration-500"><a href="" >Home</a></li>
                <li className="px-4 py-2  font-semibold hover:text-indigo-700 duration-500"><a href="" >Explore</a></li>
                <li className="px-4 py-2  font-semibold hover:text-indigo-700 duration-500"><a href="" >Activity</a></li>
                <li className="px-4 py-2  font-semibold hover:text-indigo-700 duration-500"><a href="" >Community</a></li>
                <li className="px-4 py-2  font-semibold hover:text-indigo-700 duration-500"><a href="" >Pages</a></li>
                <li className="px-4 py-2  font-semibold hover:text-indigo-700 duration-500"><a href="" >Contact</a></li>
              <div className=" px-4 py-2  font-semibold hover:text-indigo-700 duration-500 cursor-pointer">

            < TfiSearch className="w-4 h-4 "/>
              </div>
            </ul>
        </nav>
      </div>
    </div>
    

      

    </>
  )
}

export default Menu