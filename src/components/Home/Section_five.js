import React from 'react'

import two from '../../assets/Image/two.png'
export default function Section_five() {
    return (
        <>
            <section>
                <div className=" bground-two py-12 rounded-lg">
                    <div className="lg:mx-32 md:mx-24 mx-12  box-shadow -lg bg-white lg:flex md:flex block rounded-lg">
                        <div className="lg:order-1 md:order-1 order-2   lg:w-1/2 md:w-1/2 w-full">
                            <img src={two} className="mt-5 wow animate__animated animate__jello mx-auto" />
                        </div>
                        <div className="lg:p-12 md:p-12 p-4 lg:w-1/2 md:w-1/2 w-full">
                            <h3 className=" text-blue-500 font-bold my-4 border-r-4  px-3 border-green-400 ">درباره درمانیتو</h3>
                            <p className="my-4 text-gray-700 text-sm leading-relaxed">درمانیتو یک سوپر اپلیکیشن هست که سعی داره با سرویس های متفاوتش روند درمان شمارو سریع تر کنه؛شما با درمانیتو میتونید نسخه خودتون رو برای تمام داروخانه های اطراف خودتون بفرستید</p>
                            <div className="relative lg:block  hidden">
                                <input type="text"
                                    placeholder="09124433443شماره همراه خود را وارد کنید"
                                    className=" focus:outline-none p-3 w-full my-8 bg-green-50 rounded-lg text-xs focus:ring focus:border-blue-300" />
                                <button className="absolute left-1 top-9 bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>
                            </div>
                            <div className="relative lg:hidden   block">
                                <input type="text"
                                    placeholder="شماره همراه خود را وارد کنید"
                                    className="  focus:outline-none p-3 w-full my-8 bg-green-50 rounded-lg text-xs focus:ring focus:border-blue-300" />
                                <button className="absolute left-1 top-9 bg-blue-500 text-white p-2 rounded-lg focus:outline-black text-xs ">ثبت نام سریع</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
