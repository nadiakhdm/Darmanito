import React from 'react'

import two from '../../assets/Image/two.png'
export default function Section_five() {
    return (
        <>
            <section>
                <div className="bground-two lg:p-12 md:p-5 p-1 rounded-lg mb-12">
                    <div className="lg:mx-12 md:mx-8 mx-4  box-shadow -lg bg-white lg:flex md:flex block rounded-lg">
                        <div className="lg:order-1 md:order-1 order-2   lg:w-1/2 md:w-1/2 w-full">
                            <img src={two} className="mt-5 wow animate__animated animate__jello mx-auto" />
                        </div>
                        <div className="lg:p-12 md:p-8 p-8 lg:mt-0 md:mt-4 mt-0 lg:w-1/2 md:w-1/2 w-full">
                            <h3 className=" text-blue-500 font-bold my-4 border-r-4  px-3 border-green-400 ">من داروخانه یا مرکز درمانی هستم</h3>
                            <p className="my-4 text-gray-700 text-sm leading-loose text-justify ">اگر شما داروخانه یا مرکز درمانی هستید و قصد دارید در روند  درمان هموطن هامون و کسب کار خودتون تغییری ایجاد کنید درمانیتو منتظر شماست </p>
                            <div className="relative lg:block  hidden">
                                <input type="text"
                                    placeholder="شماره همراه خود را وارد کنید ۰۹۱۲۶۱۳۶۹۰۰"
                                    className=" focus:outline-none p-3 w-full my-8 bg-gray-100 border-none rounded-lg text-xs focus:ring focus:border-blue-300" />
                                <button className="absolute left-1 top-9 bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>
                            </div>
                            <div className="relative lg:hidden   block">
                                <input type="text"
                                    placeholder="شماره همراه خود را وارد کنید"
                                    className="  focus:outline-none p-3 w-full my-8 bg-gray-100 rounded-lg text-xs border-none  focus:ring focus:border-blue-300" />
                                <button className="absolute left-1 top-9 bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>
                            </div>
                        </div>

                    </div>
               
                </div>

            </section>
        </>
    )
}
