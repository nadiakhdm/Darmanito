import React from 'react'
import { Link } from 'react-router-dom'
import support from '../assets/Image/support.png'
import bazar from '../assets/Image/bazar.png'
import logo from "../assets/Image/logo.png"
import sibapp from '../assets/Image/sibapp.png'
import instagram from '../assets/Image/instagram.png'
import tweet from '../assets/Image/tweet.png'
import linkd from '../assets/Image/linkd.png'
export default function Footer() {
    return (
        <>
            <div className="bg-blue-500 py-12">
                <div className="lg:flex md:flex block lg:my-0 md:my-0 my-4">
                    <div className="lg:flex md:flex block mx-auto lg:text-right md:text-right text-center mt-4">
                        <h3 className="text-white text-bold lg:text-2xl md:text-xl text-lg mb-4 font-bold">پشتیبانی درمانیتو</h3>
                        <h5 className="text-white lg:text-sm text-xs lg:mt-2 md:mt-2 mt-0 lg:mx-4 md:mx-4 mx-0">پاسخگویی در روزهای کاری ۹ صبح الی ۹ شب</h5>
                    </div>
                    <div className="mx-auto"></div>
                    <div className="mx-auto lg:text-right md:text-right text-center  mt-4">
                        <Link to="tel:021-44219671" className=" flex w-64 py-3 rounded-lg mx-auto text-center text-white bg-blue-900 transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110 ">
                            <img src={support} className="mr-10 ml-2" />
                            پشتیبانی
                            :۴۴۲۱۹۶۷۱-۰۲۱
                           </Link>
                    </div>
                </div>

            </div>
            <footer className="footer bg-white relative pt-1 border-b-2  lg:px-1 md:px-1 px-12">
                <div className="lg:flex md:flex block my-16 mx-auto  container">
                    <div className="text-center mr-auto w-full ">
                        <div className="px-4 lg:px-8 md:px-4 sm:px-6 ">
                            <Link to="/" className="flex  mb-8 wow animate__animated animate__fadeIn">
                                <img className="block  h-12 w-auto " src={logo} alt="درمانیتو" />
                                <div className="block  mx-1 mt-1">
                                    <p className="font-bold text-sm text-right -mr-0 mb-1">درمانیتو</p>
                                    <p className="text-xs">همراه شما در درمان </p>
                                </div>
                            </Link>
                            <p className="lg:text-sm md:text-sm  text-right font-bold"> سوپر اپلیکیشن حوزه درمان وسلامت</p>
                            <p className="lg:text-sm md:text-sm my-8 text-xs  lg:my-4 md:my-4  text-right leading-loose">تمام حقوق مادی و معنوی این وبسایت مربوط به درمانیتو است</p>
                            <div className="flex lg:p-3 p-4 ">
                                <Link href="" className="px-4 mx-2 " >
                                    <img src={linkd} className="transition img-deactive hover:img-active  duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110 " />
                                </Link>
                                <Link href="" className="px-4 mx-2 ">
                                    <img src={instagram} className="transition img-deactive hover:img-active  duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110 " />
                                </Link>
                                <Link href="" className="px-4 mx-2 ">
                                    <img src={tweet} className="transition img-deactive hover:img-active  duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110 " />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center  flex w-full ">
                        <div className="lg:flex lg:flex-col md:flex md:flex-col hidden mx-auto ">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2 lg:text-md  text-sm">خدمات درمانیتو</span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 text-sm lg:text-sm text-xs border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">داروخانه آنلاین</Link></span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 text-sm lg:text-sm text-xs border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">وزیت آنلاین</Link></span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 text-sm lg:text-sm text-xs border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">پرونده پزشکی </Link></span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 text-sm lg:text-sm text-xs border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">فروشگاه آنلاین</Link></span>
                        </div>

                        <div className="lg:flex lg:flex-col md:flex md:flex-col hidden  mx-auto ">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2 lg:text-md  text-sm">صفحات درمانیتو</span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 lg:text-sm text-xs md:text-sm border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">تماس با ما</Link></span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 lg:text-sm text-xs md:text-sm border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">درباره ما</Link></span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 lg:text-sm text-xs md:text-sm border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">سوالات متداول</Link></span>
                            <span className="my-3"><Link href="#" className="transition ease-in-out duration-700 rounded text-gray-700 lg:text-sm text-xs md:text-sm border-r-4 border-transparent px-3 hover:border-blue-500  hover:text-blue-500">قوانین وشرایط</Link></span>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-col md:flex md:flex-col hidden mx-auto w-full">
                        <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-6 lg:text-md text-sm">دانلود درمانیتو</span>
                        <div className="flex  mt-4">
                            <Link href="" className="px-4" >
                                <img src={bazar} className="w-36 transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110 " />
                            </Link>
                            <Link href="" className="px-4">
                                <img src={sibapp} className="w-36 transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110 " />
                            </Link>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
