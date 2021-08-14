import React from 'react'
import { Link } from 'react-router-dom'
import store from '../../assets/Image/store.png'
import health from "../../assets/Image/health.png"
export default function Section_three() {
    return (
        <>
            <div className="container mx-auto">
                <div className="block lg:mx-24 md:mx-8 mx-14 pt-24">
                    <h3 className=" border-r-4 border-green-400 px-2  text-blue-500 lg:text-lg md:text-lg  text-sm font-bold">در درمانیتو چه خدمات ارائه خواهید داد؟</h3>
                    <p className="text-gray-700  text-xs lg:mt-4 md:mt-4 mt-4">(خدمت مورد نظر خود را برای ثبت نام انتخاب کنید)</p>
                </div>
                <div className="flg:flex md:flex block lg:mx-0 md:mx-0 mx-12">
                    <Link className="block text-center lg:w-1/2 md:w-1/2 w-full md:mx-12 lg:mx-24  mx-auto box-shadow  hover:box-shadow  m-16 rounded-2xl">
                        <img src={health} className="mx-auto p-8"></img>
                        <p className='text-right px-8 py-4 text-sm font-bold text-blue-500'>داروخانه</p>
                        <p className="px-8  text-xs  leading-loose  text-justify">
                            مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم
                    </p>
                        <button className="px-12  py-2 my-8 bg-blue-500 text-white rounded-xl transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110"> ثبت نام</button>
                    </Link>
                    <Link to="" className="block text-center lg:w-1/2 md:w-1/2 w-full mx-auto md:mx-12 lg:mx-24 box-shadow -xl hover:box-shadow  m-16 rounded-2xl">
                    <img src={store} className="mx-auto p-8"></img>
                    <p className='text-right px-8 py-4 text-sm font-bold text-blue-500'>فروشگاه آرایشی و بهداشتی</p>
                     
                        <p className="px-8  text-xs  leading-loose text-justify">
                            مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم
                        </p>
                        <button className="px-12  py-2 my-8 bg-blue-500 text-white rounded-xl transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110"> ثبت نام</button>
                    </Link>

                </div>

            </div>
        </>
    )
}
