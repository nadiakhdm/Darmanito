import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Image/logo.png"
export default function Header() {
    const [show, setShow] = useState(false)
    const handleclick = () => {
        setShow(true);
    };

    const handleclose = () => {
        setShow(false);
    };
    return (
        <>
            <div className="px-2 my-4">
                <div className="flex relative">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden md:hidden ">

                        {!show ? <button type="button"
                            onClick={handleclick}
                            className="transition ease-in-out duration-700 npm startinline-flex mx-3 items-center justify-center p-2 rounded-lg text-gray-400  bg-lightithem  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button> : <button className="mx-4  px-2 transition ease-in-out duration-700 rounded-md bg-lightithem w-6 " onClick={handleclose}>X</button>}
                    </div>
                    <div className="lg:mx-auto md:mx-auto mx-2 ">
                        <Link to="/" className="flex mx-5">
                            <img className="hidden lg:block h-12 w-auto " src={logo} alt="درمانیتو" />
                            <div className=" mx-3 hidden lg:block">
                                <p className="font-bold text-lg mb-1">درمانیتو</p>
                                <p className="lg:text-sm md:text-xs">همراه شما در درمان </p>
                            </div>
                        </Link>
                        <Link to="/" className="flex mx-3">
                            <img className="block lg:hidden h-12 w-auto " src={logo} alt="درمانیتو" />
                            <div className="block lg:hidden mx-3 mt-1">
                                <p className="font-bold text-sm mb-1">درمانیتو</p>
                                <p className="text-xs">همراه شما در درمان </p>
                            </div>
                        </Link>

                    </div>
                    <div className="ml-auto lg:flex md:flex sm:hidden hidden">

                        <Link to="#" className=" lg:text-sm md:text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" aria-current="page">صفحه اصلی</Link>
                        <Link to="#" className=" lg:text-sm md:text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" >درباره ما</Link>
                        <Link to="#" className="lg:text-sm md:text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" >تماس با ما</Link>
                        <Link to="#" className=" lg:text-sm md:text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" >عضویت در داروخانه</Link>


                    </div>

                    <div className="ml-auto lg:flex md:flex sm:hidden hidden">
                        <Link className="lg:w-36 w-24 lg:text-sm md:text-xs bg-lightithem lg:py-3  md:py-4 rounded-md text-center blue-them transition duration-500 ease-in-out  hover:bg-bluethem transform hover:-translate-1 hover:scale-110">
                            دانلود درمانیتو
                       </Link>

                    </div>
                </div>
                {show ? <div className="animate__animated animate__fadeIn w-full transition ease-in-out duration-700" id="mobile-menu">
                    <div className="px-8 py-4">

                    <Link to="#" className="block text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" aria-current="page">صفحه اصلی</Link>
                        <Link to="#" className="block text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" >درباره ما</Link>
                        <Link to="#" className="block text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" >تماس با ما</Link>
                        <Link to="#" className="block text-xs lg:my-4  lg:mx-6 m-4 transition ease-in-out duration-700 rounded text-gray-700 pr-1  border-r-4 border-transparent  hover:border-blue-500  hover:text-blue-400" >عضویت در داروخانه</Link>

                    </div>
                </div> : ""}
            </div>
        </>
    )
}
