import React, { useState } from 'react'

import ten from "../../assets/Image/ten.png"
import twoe from "../../assets/Image/twoe.png"
import eleven from "../../assets/Image/eleven.png"
import nine from "../../assets/Image/nine.png"




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
        <div className="bg-blue-500 text-center">
          <h1 className="py-6 text-center font-bold  text-white text-3xl">سوالات متداول  </h1>
        </div>

        <div className="container mx-auto lg:px-14 md:px-14 px-2">
          
          <div className=" border-r-4 border-green-400 mx-8 my-8">
            <h3 className=" text-blue-500 font-bold px-3 my-12">سوال شما درباره کدوم سرویس هست؟</h3>
          </div>
          <div className="lg:flex w-full mx-auto md:flex  " >

            <div className="flex mr-auto ">
              <a
                onClick={() => taggleTab(1)}
                className="block mx-4  my-6 relative text-blue-500 text-center box-shadow -lg hover:box-shadow -md rounded-lg  w-1/2 lg:p-12 p-3 "  >
                <img className={taggl === 1 ? "mx-auto img-active lg:w-full w-12" : "mx-auto lg:w-full `img-deactive` w-12"} src={nine}></img>
                <span className={taggl === 1 ? "mx-auto hover:text-blue-500" : "mx-auto text-gray-800"}>وزیت آنلاین</span>
              </a>
              <a
                onClick={() => taggleTab(2)}
                className="block mx-4  my-6 relative text-blue-500 text-center box-shadow -lg hover:box-shadow -md rounded-lg  w-1/2 lg:p-12 p-3 "  >
                <img className={taggl === 2 ? "mx-auto img-active lg:w-full w-12" : "mx-auto lg:w-full img-deactive w-12"} src={ten}></img>
                <span className={taggl === 2 ? "mx-auto hover:text-blue-500" : "mx-auto text-gray-800"}>وزیت آنلاین</span>
              </a>
            </div>
            <div className="flex  ml-auto ">
              <a
                onClick={() => taggleTab(3)}
                className="block mx-4  my-6 relative text-blue-500 text-center box-shadow -lg hover:box-shadow -md rounded-lg  w-1/2 lg:p-12 p-3 "  >
                <img className={taggl === 3 ? "mx-auto img-active lg:w-full w-12" : "mx-auto lg:w-full img-deactive w-12"} src={eleven}></img>
                <span className={taggl === 3 ? "mx-auto hover:text-blue-500" : "mx-auto text-gray-800"}>وزیت آنلاین</span>
                <span className='absolute lg:top-2 md:top-2 top-4 lg:left-2 md:left-2 left-4 rounded-lg bg-gray-400 text-white text-xs p-1'>به زودی</span>
              </a>
              <a
                onClick={() => taggleTab(4)}
                className="block mx-4  my-6 relative text-blue-500 text-center box-shadow -lg hover:box-shadow -md rounded-lg  w-1/2 lg:p-12 p-3 "  >
                <img className={taggl === 4 ? "mx-auto img-active lg:w-full w-12" : "mx-auto lg:w-full img-deactive w-12"} src={twoe}></img>
                <span className={taggl === 4 ? "mx-auto hover:text-blue-500" : "mx-auto text-gray-800"}>وزیت آنلاین</span>
                <span className='absolute lg:top-2 md:top-2 top-4 lg:left-2 md:left-2 left-4 rounded-lg bg-gray-400 text-white text-xs p-1'>به زودی</span>
              </a>
            </div>




          </div>

        </div>

      </section>

      <section>
        <div className={taggl === 1 ? "content-active my-16 lg:px-0 md:px-0 px-2" : "content-deactive my-16 lg:px-0 md:px-0 px-2"}>
          <div className="container mx-auto lg:px-32 md:px-32 px-12 ">
            <section className="box-shadow  ">
              <article className="border-t border-b cursor-pointer ">
                {!show ? <div
                  onClick={handleclick}
                  className="border-2 border-transparent">
                  <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                      <div className=" border-r-4 border-green-400 mx-12">
                        <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
                : ""}

            </section>

          </div>

          {/* <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
          <section className="box-shadow  ">
            <article className="border-t border-b cursor-pointer ">
              {!show ? <div
                onClick={handleclick}
                className="border-2 border-transparent">
                <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                    <div className=" border-r-4 border-green-400 mx-12">
                      <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              : ""}
              
          </section>

        </div> */}

        </div>
        <div className={taggl === 2 ? "content-active my-24" : "content-deactive my-24"}>
          <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
            <section className="box-shadow  ">
              <article className="border-t border-b cursor-pointer ">
                {!show ? <div
                  onClick={handleclick}
                  className="border-2 border-transparent">
                  <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
                    <span className="text-grey-darkest font-thin text-xl flex mx-3 text-blue-500">
                      +
                  </span>
                    <p className="text-blue-500 text-xs font-bold mt-1">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنهdffffffffffffffffffffffffffffffffffffffffffffffff؟</p>

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
                      <div className=" border-r-4 border-green-400 mx-12">
                        <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
                : ""}

            </section>

          </div>

          {/* <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
          <section className="box-shadow  ">
            <article className="border-t border-b cursor-pointer ">
              {!show ? <div
                onClick={handleclick}
                className="border-2 border-transparent">
                <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                    <div className=" border-r-4 border-green-400 mx-12">
                      <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              : ""}
              
          </section>

        </div> */}

        </div>

        <div className={taggl === 3 ? "content-active my-24" : "content-deactive my-24"}>
          <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
            <section className="box-shadow  ">
              <article className="border-t border-b cursor-pointer ">
                {!show ? <div
                  onClick={handleclick}
                  className="border-2 border-transparent">
                  <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                      <div className=" border-r-4 border-green-400 mx-12">
                        <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
                : ""}

            </section>

          </div>

          {/* <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
          <section className="box-shadow  ">
            <article className="border-t border-b cursor-pointer ">
              {!show ? <div
                onClick={handleclick}
                className="border-2 border-transparent">
                <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                    <div className=" border-r-4 border-green-400 mx-12">
                      <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              : ""}
              
          </section>

        </div> */}

        </div>

        <div className={taggl === 4 ? "content-active my-24" : "content-deactive my-24"}>
          <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
            <section className="box-shadow  ">
              <article className="border-t border-b cursor-pointer ">
                {!show ? <div
                  onClick={handleclick}
                  className="border-2 border-transparent">
                  <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                      <div className=" border-r-4 border-green-400 mx-12">
                        <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
                : ""}

            </section>

          </div>

          {/* <div className="container mx-auto lg:px-32 md:px-32 px-2 ">
          <section className="box-shadow  ">
            <article className="border-t border-b cursor-pointer ">
              {!show ? <div
                onClick={handleclick}
                className="border-2 border-transparent">
                <header className="flex p-5 pl-8 pr-8 cursor-pointer select-none">
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
                    <div className=" border-r-4 border-green-400 mx-12">
                      <p className="text-xs px-3 my-8">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
              : ""}
              
          </section>

        </div> */}

        </div>

      </section>

    </>
  )
}
