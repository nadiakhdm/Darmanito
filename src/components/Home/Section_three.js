import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
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
                    <div className="lg:mx-16 md:mx-2 mx-8 py-12">
                        <div className="lg:mx-8 md:mx-1 mx-1  border-r-4 border-green-400 m-3">
                            <h3 className=" text-blue-500 font-bold px-3 my-12">امکانات  درمانیتو</h3>
                        </div>
                        <div className="lg:flex md:flex block w-full order-first sm:order-last">
                        <div className='lg:hidden md:hidden flex'>
                                    <Swiper
                                        // spaceBetween={20}
                                        slidesPerView={2}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        <SwiperSlide className='py-6'>
                                            <Link className="Web-1366-8  block text-center hover:text-blue-400 img-deactive lg:m-8 md:m-1 mx-auto">
                                                <img className="lg:w-32 md:w-24 w-64 " src={nine}></img>
                                                <span className="text-xs  "> داروخانه </span>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className='py-6'>
                                            <Link className="Web-1366-8 text-center  img-deactive  block hover:text-blue-400 lg:m-8 md:m-1 mx-auto">
                                                <img className=" lg:w-32 md:w-24 w-64 " src={ten}></img>
                                                <span className="text-xs  "> فروشگاه</span>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className='py-6'>
                                            <Link className="Web-1366-8  block text-center hover:text-blue-400 img-deactive  lg:m-8 md:m-1 mx-auto">
                                                <img className="lg:w-32 md:w-24 w-64 " src={eleven}></img>
                                                <span className="text-xs  ">وزیت آنلاین</span>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className='py-6'>
                                            <Link className="Web-1366-8 text-center block hover:text-blue-400 img-deactive lg:m-8 md:m-1 mx-auto">
                                                <img className=" lg:w-32 md:w-24 w-64 " src={twoe}></img>
                                                <span className="text-xs  ">نوبت دهی</span>
                                            </Link>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                              
                            <div className="lg:block md:block hidden lg:mt-2 md:mt-20 ">
                                <div className="flex">
                                    <Link className="Web-1366-8  block text-center hover:text-blue-400 img-deactive lg:m-8 md:m-1 mx-auto">
                                        <img className="lg:w-32 md:w-24 w-64 " src={nine}></img>
                                        <span className="text-xs  "> داروخانه </span>
                                    </Link>
                                    <Link className="Web-1366-8 text-center  img-deactive  block hover:text-blue-400 lg:m-8 md:m-1 mx-auto">
                                        <img className=" lg:w-32 md:w-24 w-64 " src={ten}></img>
                                        <span className="text-xs  "> فروشگاه</span>
                                    </Link>
                                </div>
                                <div className="lg:flex md:flex  lg:mt-2 md:mt-12 ">
                                    <Link className="Web-1366-8  block text-center hover:text-blue-400 img-deactive  lg:m-8 md:m-1 mx-auto">
                                        <img className="lg:w-32 md:w-24 w-64 " src={eleven}></img>
                                        <span className="text-xs  ">وزیت آنلاین</span>
                                    </Link>
                                    <Link className="Web-1366-8 text-center block hover:text-blue-400 img-deactive lg:m-8 md:m-1 mx-auto">
                                        <img className=" lg:w-32 md:w-24 w-64 " src={twoe}></img>
                                        <span className="text-xs  ">نوبت دهی</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="block lg:mx-4 lg:pr-12 md:pr-2 pr-0 md:mx-2 ">
                                <h3 className="my-4  font-bold  lg:px-1 md:px-1 px-4 text-bold ">داروخانه  آنلاین</h3>
                                <p className=" mb-8 text-xs leading-loose lg:pl-4 md:px-2 px-2">  در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید </p>

                                <div >

                                    <div className="block ">
                                        <div className="flex " >
                                            <div className=" befor">
                                                <img src={arrow} className="px-2 my-1" />
                                            </div>
                                            <h4 className="mt-9 font-bold text-sm">قدم اول</h4>
                                        </div>
                                        <p className="mr-12 text-xs">  وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید</p>
                                    </div>
                                    <div className="block ">
                                        <div className="flex " >
                                            <div className=" befor">
                                                <img src={arrow} className="px-2 my-1" />
                                            </div>
                                            <h4 className="mt-9 font-bold text-sm">قدم دوم</h4>
                                        </div>
                                        <p className="mr-12 text-xs">وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید </p>
                                    </div>
                                    <div className="block ">
                                        <div className="flex " >
                                            <div className=" befor">
                                                <img src={arro} className="px-2 my-1" />
                                            </div>
                                            <h4 className="mt-9 font-bold text-sm">قدم سوم</h4>
                                        </div>
                                        <p className="mr-12 text-xs">  وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید</p>
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
