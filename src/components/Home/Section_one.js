import React from 'react'
import ReactWOW from 'react-wow'
import img1 from "../../assets/Image/img1.png"

import doctor_two_color from "../../assets/Image/doctor_two_color.svg"
import 'animate.css';

export default function Section_one() {


    return (
        <>
            <section>
                <div className="my-12 ">
                    <div className="lg:flex md:flex block lg:px-1 md:px-12 px-1">
                        <div className='wow animate__animated animate__fadeInUp lg:order-1 md:order-1 order-2 lg:hidden md:hidden block mx-auto'>  <img src={doctor_two_color} className="mx-auto" /></div >
                        <div className='wow animate__animated animate__fadeInUp lg:order-1 md:order-1 order-2 lg:block md:block hidden'>  <img src={img1} /></div >
                        <div className="m-24 lg:m-32  wow animate__animated  animate__fadeInDown mx-auto">
                            <h3 className="mt-12 text-blue-400 font-bold lg:text-4xl md:text-3xl  text-xl lg:text-right text-center">اپلیکیشن درمانیتو</h3>
                            <h5 className="my-8 lg:text-lg md:text-lg text-sm lg:text-right text-gray-700 text-center">درمانیتو سامانه هوشمند سلامت</h5>
                            <div className="lg:flex md:flex block lg:space-s-4 md:space-s-4 ">
                                <button className="m-2 px-3 py-2 w-36 mx-auto block lg:text-sm text-xs text-center bg-blue-400 hover:bg-blue-50  text-white border-2 border-blue-400 rounded-lg hover:text-blue-400  transition duration-500 ease-in-out   hover:border-2 hover:border-blue-600 transform hover:-translate-1 hover:scale-110 ">
                                    دانلود درمانیتو
                            </button>
                                <button className="m-2 px-3 py-2 w-36 block mx-auto lg:text-sm text-xs text-center rounded-lg border-2 border-blue-400 text-blue-400 transition duration-500 ease-in-out  hover:bg-blue-50 transform hover:-translate-1 hover:scale-110 ">
                                    عضویت در داروخانه
                           </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
