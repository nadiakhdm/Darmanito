import React from 'react'

import 'animate.css';

export default function Section_one() {


    return (
        <>
            <section>
                <div className="bg-blue-500 text-center">
                    <h1 className="py-6 text-center font-bold  text-white text-xl lg:text-3xl md:text-3xl ">تماس با ما</h1>
                </div>
                <div className="lg:flex md:flex block m-12" >
                    <div className="mx-auto lg:order-2 md:order-2 order-1 w-full rounded-lg relative ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            className="iframe rounded-lg lg:px-12 md:px-4 w-full relative "
                        />
                        <div className="absolute  lg:flex md:flex block rounded-xl bg-white  lg:mx-16  mx-6  lg:bottom-4 md:bottom-4 -bottom-20 box-shadow -md">
                            <div className="block lg:p-4 md:p-4 pt-2 px-4">
                                <h1 className="font-bold text-xs mb-3 ">ایمیل:</h1>
                                <p className="text-blue-700 mb-3 text-xs">info@nahiraTech.com</p>
                                <h1 className="font-bold text-xs mb-3">شماره ثابت:</h1>
                                <p className="text-blue-700  mb-3 text-xs">۰۲۱-۴۴۲۱۹۶۷۱</p>
                            </div>
                            <div className="block lg:p-4 md:p-4 pb-3 px-4">
                                <h1 className="font-bold text-xs mb-3">آدرس:</h1>
                                <p className="text-xs leading-relaxed"> تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی، بن‌بست پنجم، پلاک 15، واحد 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto lg:order-1 md:order-1 order-2 w-full mt-36 lg:mt-0 md:mt-0">
                        <div className="lg:px-20 md:px-10 px-4">

                            <form action="https://api.web3forms.com/submit" method="POST" id="form ">
                                <div className="mb-6">
                                    <label for="name" className="block mb-1 text-sm text-gray-600 dark:text-gray-400">نام ونام خانوادگی</label>
                                    <input type="text" name="name" id="name" placeholder="نام ونام خانوادگی" required className="w-full px-3 py-2 placeholder-gray-300 text-sm border border-gray-300 rounded-md focus:outline-none  focus:border-2 focus:border-blue-500  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div className="mb-6">
                                    <label for="email" className="block mb-1 text-sm text-gray-600 dark:text-gray-400">ایمیل یا شماره تماس</label>
                                    <input type="email" name="email" id="email" placeholder="ایمیل یا شماره تماس" required className="w-full px-3 py-2 text-sm placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none  focus:border-4 focus:border-blue-500  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div className="mb-6">
                                    <label for="message" className="block mb-1 text-sm text-gray-600 dark:text-gray-400">پیغام شما</label>

                                    <textarea rows="5" name="message" id="message" placeholder="پیغام شما" className="focus:border-2 focus:border-blue-500 w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none   dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                </div>
                                <div className="mb-6">
                                    <button type="submit" className="w-full px-3 py-4  border-2 border-blue-500 text-indigo-500 focus:text-white  rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                                </div>
                                <p className="text-base text-center text-gray-400" id="result">
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
