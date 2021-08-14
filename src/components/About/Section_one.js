import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ten from "../../assets/Image/ten.png"
import twoe from "../../assets/Image/twoe.png"
import eleven from "../../assets/Image/eleven.png"
import nine from "../../assets/Image/nine.png"
import { Link } from 'react-router-dom';




export default function Section_one() {
  const [taggl, setTaggl] = useState(1)
  const taggleTab = (e) => {
    setTaggl(e);
  }
  const handleclose = () => {
    setShow(false);
  };
  const [show, setShow] = useState(false)
  const handleclick = () => {
    setShow(true);
  };


  return (
    <>
      <section>
        <div className="bg-blue-500 text-center ">
          <h1 className="py-6 text-center font-bold  text-white text-3xl">سوالات متداول  </h1>
        </div>

        <div className="container mr-auto">

          <div className=" border-r-4 border-green-400 md:mx-8 mx-16 lg:mx-12 ">
            <h3 className=" text-blue-500 font-bold px-3 my-12">سوال شما درباره کدوم سرویس هست؟</h3>
          </div>
          <div className=" w-full mx-auto " >


            <Swiper
              // spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='py-4 lg:mr-12 md:mx-0 mx-12'>
                <Link className='about-slider block p-12  text-center'>
                  <a >
                    <img src={nine}></img>
                    <span className="mx-auto  hover:text-blue-500 text-xs">داروخانه</span>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mx-0 md:mx-0 mx-12'>
                <Link className='about-slider block p-12 text-center img-deactive'>
                  <a
                  >
                    <img className="" src={ten}></img>
                    <span className="mx-auto hover:text-blue-500 text-xs">فروشگاه</span>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mx-0 md:mx-0 mx-12'>
                <Link className='about-slider block p-12 relative text-center img-deactive'>
                  <a
                  >
                    <span className='bg-gray-400 text-white rounded-3xl absolute py-1 px-3 top-2 text-xs left-12'>به زودی</span>
                    <img className="" src={eleven}></img>
                    <span className="mx-auto hover:text-blue-500 text-xs">ویزیت   </span>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mx-0 md:mx-0 mx-12'>
                <Link className='about-slider block p-12 relative text-center img-deactive'>
                  <a >
                    <span className='bg-gray-400 text-white rounded-3xl absolute text-xs py-1 px-3 top-2 left-12'>به زودی</span>

                    <img className="" src={twoe}></img>
                    <span className="mx-auto hover:text-blue-500 text-xs">وزیت آنلاین</span>
                  </a>
                </Link>

              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mr-12 md:mx-0 mx-12'>
                <Link className='about-slider block p-12  text-center'>
                  <a >
                    <img src={nine}></img>
                    <span className="mx-auto  hover:text-blue-500 text-xs">داروخانه</span>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mx-0 md:mx-0 mx-12'>
                <Link className='about-slider block p-12 text-center img-deactive'>
                  <a
                  >
                    <img className="" src={ten}></img>
                    <span className="mx-auto hover:text-blue-500 text-xs">فروشگاه</span>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mx-0 md:mx-0 mx-12'>
                <Link className='about-slider block p-12 relative text-center img-deactive'>
                  <a
                  >
                    <span className='bg-gray-400 text-white rounded-3xl absolute py-1 px-3 top-2 text-xs left-12'>به زودی</span>
                    <img className="" src={eleven}></img>
                    <span className="mx-auto hover:text-blue-500 text-xs">ویزیت   </span>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='py-4 lg:mx-0 md:mx-0 mx-12'>
                <Link className='about-slider block p-12 relative text-center img-deactive'>
                  <a >
                    <span className='bg-gray-400 text-white rounded-3xl absolute text-xs py-1 px-3 top-2 left-12'>به زودی</span>

                    <img className="" src={twoe}></img>
                    <span className="mx-auto hover:text-blue-500 text-xs">وزیت آنلاین</span>
                  </a>
                </Link>

              </SwiperSlide>

            </Swiper>

          </div>

        </div>


        <div className="content-active my-16 lg:px-0 md:px-0 px-2">
          <div className="container mx-auto lg:px-24 md:px-32 px-4 rounded-xl ">
            <section className="box-shadow">
              <article className="border-t border-b cursor-pointer ">
                {!show ? <div
                  onClick={handleclick}
                  className="border-2 border-transparent">
                  <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none ">
                    <span className="text-grey-darkest font-thin text-xl flex mx-3 text-blue-500">
                      +
                    </span>
                    <p className="text-blue-500 text-xs font-bold mt-1">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>

                  </header>
                </div> : <div
                  onClick={handleclose}
                  className="border-2 border-transparent">
                  <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
                    <span className="animate__animated animate__fadeIn text-grey-darkest font-thin text-xl flex mx-3 text-blue-500">
                      -
                    </span>
                    <p className="text-blue-500 text-xs font-bold mt-1">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>

                  </header>
                </div>}
              </article>
              {show ? <article className="border-b animate__animated animate__fadeIn">
                <div className=" bg-grey-lightest border-indigo">

                  <div>
                    <div className="pl-8 pr-8  text-grey-darkest">
                      <div className=" border-r-4 border-green-400 lg:mx-12 md:mx-4 mx-4">
                        <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
                : ""}

            </section>

          </div>



        </div>

      </section>

    </>
  )
}
