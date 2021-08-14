import React from 'react'

import person from "../../assets/Image/person.png"
import loc from '../../assets/Image/loc.png'

export default function Section_one() {
    return (
        <>
            <div className="container mx-auto">
                <div className="lg:flex md:flex block lg:px-12 md:px-2 px-8 my-20">
                 <div className="block   w-full   lg:order-1 md:order-2 order-1">
                        <div className="  hover:box-shadow  rounded-3xl box-shadow  lg:w-3/5  md:w-4/5 w-full px-3 mb-4">
                            <a className="flex relative mx-auto py-2">
                                <img src={person} className="px-1 h-10 my-3" ></img>
                                <div className="block ">
                                    <h3 className="m-2 font-bold text-sm">نام داروخانه شما</h3>
                                    <div className="flex">
                                        <img src={loc} className="px-1 h-1/3" ></img>
                                        <p className="text-xs text-gray-500">درمانیتو ، سرویس داروخانه ، داروخانه شما</p>

                                    </div>
                                </div>
                                <span className="bg-blue-500 rounded-3xl text-white absolute lg:top-2 md:top-2 top-3 left-2 text-xs p-1">شبانه روزی</span>

                            </a>


                        </div>
                        <div className="lg:block md:block hidden  hover:box-shadow rounded-3xl box-shadow  lg:w-3/5  md:w-4/5 w-full mx-auto opacity-50  mb-4">
                            <a className="flex relative mx-auto py-2">
                                <img src={person} className="px-2  h-12 my-3" ></img>
                                <div className="block ">
                                    <h3 className="m-4 font-bold text-sm">نام داروخانه شما</h3>
                                    <div className="flex">
                                        <img src={loc} className="px-2 h-1/2" ></img>
                                        <p className="text-xs text-gray-500">درمانیتو ، سرویس داروخانه ، داروخانه شما</p>

                                    </div>
                                </div>

                            </a>


                        </div>
                        <div className=" lg:block md:block hidden  hover:box-shadow  hover:box-shadow rounded-3xl box-shadow  lg:w-3/5  md:w-4/5 w-full mr-auto  opacity-25 mb-4">
                            <a className="flex relative  p-3">
                                <img src={person} className="px-2 h-10 my-3" ></img>
                                <div className="block ">
                                    <h3 className="m-4 font-bold text-sm">نام داروخانه شما</h3>
                                    <div className="flex">
                                        <img src={loc} className="px-2 h-1/2" ></img>
                                        <p className="text-xs text-gray-500">درمانیتو ، سرویس داروخانه ، داروخانه شما</p>
                                    </div>
                                </div>
                                <span className="bg-blue-500 rounded-3xl text-white absolute top-1 left-2 text-xs p-1">شبانه روزی</span>
                            </a>
                        </div>
                    </div>
                   
                <div className=" lg:my-2 md:my-2 my-8 w-full">
                        <h2 className="my-6 text-blue-500 lg:text-2xl text-lg  font-bold lg:px-12 md:px-2 px-4 leading-relaxed ">شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h2>
                        <p className="mb-8 text-gray-800 lg:text-sm md:text-xs  text-xs lg:px-12 md:px-2 px-4  leading-relaxed">با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید</p>
                        <div className="relative lg:px-10 md:px-2 px-3 lg:hidden md:hidden sm:hidden flex ">
                            <input type="text"
                                placeholder="شماره همراه خود را وارد کنید "
                                className="focus:outline-none p-3 py-4 w-full my-8 bg-gray-100 rounded-lg text-xs focus:ring focus:border-blue-300 " />
                            <button className="absolute lg:left-12 lg:top-10  md:left-4 md:top-10  left-6 top-10  bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>
                          
                        </div>
                        <div className="relative lg:flex md:flex sm:flex hidden lg:px-10 md:px-2 px-3 ">
                            <input type="text"
                                placeholder="شماره همراه خود را وارد کنید ۰۹۱۲۶۱۳۶۹۰۰"
                                className="focus:outline-none p-3 py-4 w-full my-8 bg-gray-100 rounded-lg text-xs focus:ring focus:border-blue-300 " />
                            <button className="absolute lg:left-12 lg:top-10  md:left-4 md:top-10  left-6 top-10  bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>

                        </div>
                    </div>
                  
                </div>
            </div>

        </>
    )
}
