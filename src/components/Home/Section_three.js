import React from 'react'

import { Link } from 'react-router-dom'
import nine from "../../assets/Image/nine.png"
import ten from "../../assets/Image/ten.png"
import eleven from "../../assets/Image/eleven.png"
import twoe from "../../assets/Image/twoe.png"
import arrow from '../../assets/Image/arrow.png'
import arro from '../../assets/Image/arro.png'
export default function Section_three() {

    return (
        <>
            <section>
                <div className="container mx-auto">
                    <div className="mx-12 py-12">
                        <div className=" border-r-4 border-green-400 m-8">
                            <h3 className=" text-blue-500 font-bold px-3 my-12">امکانات  درمانیتو</h3>
                        </div>
                        <div className="lg:flex md:flex block mx-8 order-first sm:order-last">
                            <div className="w-full lg:block md:block hidden">
                                <div className="lg:flex md:flex block ">
                                    <Link className="Web-1366-8 ">
                                        <img className="lg:w-32 md:w-32 w-64 img-deactive" src={nine}></img>
                                        <span className="text-xs">داروخانه</span>
                                    </Link>
                                    <Link className="Web-1366-8">
                                        <img className="lg:w-32 md:w-32 w-64 img-deactive" src={ten}></img>
                                        <span className="text-xs">فروشگاه </span>
                                    </Link>
                                </div>
                                <div className="lg:flex md:flex block mt-12">
                                    <Link className="Web-1366-8">
                                        <img className="lg:w-32 md:w-32 w-64 img-deactive" src={eleven}></img>
                                        <span className="text-xs">وزیت آنلاین</span>
                                    </Link>
                                    <Link className="Web-1366-8">
                                        <img className=" lg:w-32 md:w-32 w-64 img-deactive" src={twoe}></img>
                                        <span className="text-xs">نوبت دهی</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="block lg:ml-32 md:ml-2">
                                <h3 className="my-4  font-bold  lg:px-1 md:px-1 px-4 text-bold ">داروخانه  آنلاین</h3>
                                <p className=" mb-8 text-sm leading-loose ">  در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید </p>

                                <div className=" text-sm">

                                    <div className="block ">
                                        <div className="flex " >
                                            <div className=" befor">
                                                <img src={arrow} className= "px-2 my-2" />
                                            </div>
                                            <h4 className="mt-9 font-bold">قدم اول</h4>
                                        </div>
                                        <p className="mr-12 text-sm">  وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید</p>
                                    </div>
                                    <div className="block ">
                                        <div className="flex " >
                                            <div className=" befor">
                                                <img src={arrow} className="px-2 my-2" />
                                            </div>
                                            <h4 className="mt-9 font-bold">قدم دوم</h4>
                                        </div>
                                        <p className="mr-12 text-sm">وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید </p>
                                    </div>
                                    <div className="block ">
                                        <div className="flex " >
                                            <div className=" befor">
                                                <img src={arro} className="px-2 my-2" />
                                            </div>
                                            <h4 className="mt-9 font-bold">قدم سوم</h4>
                                        </div>
                                        <p className="mr-12 text-sm">  وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}
