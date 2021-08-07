import React from 'react'
import { Link } from 'react-router-dom'
import store from '../../assets/Image/store.png'
import health from "../../assets/Image/health.png"
export default function Section_three() {
    return (
        <>
            <div className="container mx-auto">
                <div className="lg:flex md:flex block lg:mx-24 md:mx-24 mx-14 pt-24">
                    <h3 className=" border-r-4 border-green-400 px-2  text-blue-500 lg:text-xl md:text-lg  text-md font-bold">در درمانیتو چه خدمات ارائه خواهید داد؟</h3>
                    <p className="text-gray-700 text-sm lg:mt-0 md:mt-0 mt-4">(خدمت مورد نظر خود را برای ثبت نام انتخاب کنید)</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 ">
                    <Link className="block text-center w-2/3 mx-auto box-shadow -xl hover:box-shadow -inner m-16 rounded-2xl">
                        <img src={health} className="mx-auto p-8"></img>
                        <p className="px-8 text-sm mb-4 leading-loose">
                            مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم
                    </p>
                        <button className="px-12  py-2 mb-8 bg-blue-500 text-white rounded-xl transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110"> ثبت نام</button>
                    </Link>
                    <Link to="" className="block text-center w-2/3 mx-auto box-shadow -xl hover:box-shadow -inner m-16 rounded-2xl">
                        <img src={store} className="mx-auto p-8"></img>
                        <p className="px-8 text-sm mb-4 leading-loose">
                            مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم
                        </p>
                        <button className="px-12  py-2 mb-8 bg-blue-500 text-white rounded-xl transition duration-500 ease-in-out   transform hover:-translate-1 hover:scale-110"> ثبت نام</button>
                    </Link>

                </div>

            </div>
        </>
    )
}
