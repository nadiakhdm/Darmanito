import React from 'react'
import { Link } from 'react-router-dom'

import downloadb from '../../assets/Image/downloadb.png'
import downloada from "../../assets/Image/downloada.png"
import mobile from '../../assets/Image/mobile.png'

import downloads from "../../assets/Image/downloads.png"
export default function Section_fouree() {
    return (
        <>
            <section>
                <div className=" bg-blue-500 h-auto mx-auto  my-12">
                    <div className="Background-one  lg:flex md:flex block  ">
                        <div className="mt-12 w-full lg:mx-32 md:mx-12 ">
                            <div className="py-4 lg:mx-0 md:mx-0 mx-8">
                                <h3 className="text-3xl lg:text-right md:text-right text-center text-white mt-10 mb-8">دانلود اپلیکیشن درمانیتو</h3>
                                <h6 className="text-white lg:text-right md:text-right text-center text-sm mb-4">برای دریافت لینک دانلود شماره تماس خود راوارد کنید</h6>
                            </div>
                            <div className="relative lg:ml-12 md:mx-0 sm:mx-12 mx-8">
                                <input type="text"
                                    placeholder="شماره همراه خود را وارد کنید ۰۹۱۲۶۱۳۶۹۰۰"
                                    className=" focus:outline-none p-3 w-full my-8 bg-green-50 rounded-lg text-xs focus:ring focus:border-blue-300" />
                                <button className="absolute left-1 top-9 bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">بفرست</button>
                            </div>

                            <div className="lg:flex md:flex block  text-left mt-8 lg:mb-32 mb-4">
                                <Link href="" className="ml-4 text-center">

                                    <img src={downloada} className=" mx-auto" />

                                </Link>
                                <Link href="" className="lg:mx-4 ">

                                    <img src={downloadb} className="mx-auto " />

                                </Link>
                                <Link href="" className="mx-4">

                                    <img src={downloads} className="  mx-auto" />

                                </Link>

                            </div>
                        </div>
                        <div className=" w-full">
                            <img src={mobile} className="mt-32 wow mx-auto lg:w-auto md:w-auto w-full animate__animated animate__shakeX" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
