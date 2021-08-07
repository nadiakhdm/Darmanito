import React from 'react'

import person from "../../assets/Image/person.png"
import loc from '../../assets/Image/loc.png'

export default function Section_one() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-4 lg:px-12 md:px-12 px-8 my-20">
                    <div className=" lg:my-2 md:my-2 my-8 ">
                        <h2 className="mb-12 text-blue-500 lg:text- md:text-2xl text-xl font-bold lg:px-12 md:px-12 px-4 leading-relaxed ">شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h2>
                        <p className="mb-8 text-gray-800 lg:text-sm md:text-sm text-xs lg:px-12 md:px-12 px-4  leading-loose">با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید</p>
                        <div className="relative lg:px-10 md:px-10 px-3 ">
                            <input type="text"
                                placeholder="شماره همراه خود را وارد کنید"
                                className="focus:outline-none p-3 py-4 w-full my-8 bg-blue-50 rounded-lg text-xs focus:ring focus:border-blue-300" />
                            <button className="absolute lg:left-12 lg:top-10  md:left-12 md:top-10  left-6 top-10  bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>

                        </div>
                    </div>
                    <div className="block order-first sm:order-last ">
                        <div className="  hover:box-shadow -inner rounded-lg box-shadow -md lg:w-3/5  md:w-3/5 w-full px-3 mb-4">
                            <a className="flex relative mx-auto py-2">
                                <img src={person} className="px-2 h-14 my-3" ></img>
                                <div className="block ">
                                    <h3 className="m-4 font-bold text-sm">نام داروخانه شما</h3>
                                    <div className="flex">
                                        <img src={loc} className="px-2 h-1/2" ></img>
                                        <p className="text-xs text-gray-500">درمانیتو ، سرویس داروخانه ، داروخانه شما</p>

                                    </div>
                                </div>
                                <span className="bg-blue-500 rounded-3xl text-white absolute top-2 left-2 text-xs p-2">شبانه روزی</span>

                            </a>


                        </div>
                        <div className="lg:block md:block hidden  hover:box-shadow -inner rounded-lg box-shadow -md  lg:w-3/5  md:w-3/5 w-full mx-auto opacity-50  mb-4">
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
                        <div className=" lg:block md:block hidden  hover:box-shadow -inner rounded-lg box-shadow -md lg:w-3/5  md:w-3/5 w-full mr-auto  opacity-25 mb-4">
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
                </div>
            </div>

        </>
    )
}
