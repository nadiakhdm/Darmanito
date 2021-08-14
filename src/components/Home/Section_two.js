import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import seven from "../../assets/Image/seven.png"
import video from '../../assets/Video/video.mp4'
import six from "../../assets/Image/six.png"
import five from "../../assets/Image/five.png"
import eight from "../../assets/Image/eight.png"
import vvv from '../../assets/Image/vvv.png'
import player from '../../assets/Image/player.png'
export default function Section_two() {
  const [Play, setPlay] = useState(false)

  const handlePlay = () => {
    setPlay(true)
  }
  return (
    <>
      <section>
        <div className="container mx-auto relative">
          <div className="lg:flex md:flex block">
            <div id="responsiveVideoWrapper" className="relative  w-full h-100 rounded-lg    mt-4 ">
              <div className={Play ? "relative featur-img w-80  hidden " : "relative featur-img w-80  lg:mx-32 md:mx-4 mx-auto "}>
                <img src={vvv} className="mx-auto" />
                <img src={player} className="player absolute  cursor-pointer"
                  onClick={handlePlay}
                />
              </div>
            </div>
            <div className="mt-12  w-full lg:pl-32 md:px-0 px-12">
              <h3 className="my-4  border-r-4 ml-0 px-3  text-blue-500 font-bold border-green-400 ">درباره درمانیتو</h3>
              <p className="my-4 text-xs leading-loose md:pl-12 lg:pl-4 ">
                درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است</p>
              <div className="lg:flex mt-12 md:flex  w-full mx-auto hidden" >

                <Link className=" block text-center text-xs lg:mx-4 md:mx-1">
                  <img className=" Rectangle-1832 my-2 " src={six}></img>
                  راحت
                </Link>
                <Link className=" block  text-center  text-xs lg:mx-4 md:mx-1 ">
                  <img className="Rectangle-1832 my-2" src={six}></img>
                  راحت
                </Link>


                <Link className="block  text-center text-xs lg:mx-4 md:mx-1">
                  <img className="Rectangle-1832 my-2" src={seven}></img>
                  به صرفه
                </Link>
                <Link className="block  text-center text-xs lg:mx-4 md:mx-1">
                  <img className=" Rectangle-1832 my-2" src={five}></img>
                  جستجوی سرریع
                </Link>



              </div>
            </div>
          </div>
          <div className={Play ? "w-3/4    absolute video-pleyer" : "w-3/4    absolute video-pleyer hidden"}>
            <h4
              onClick={e => { setPlay(false) }}
              className="rounded-full bg-green-100 text-gray-700 w-6 my-3 cursor-pointer px-2">X</h4>
            <video controls className=" rounded-lg  mx-auto w-full">
              <source src="mov_bbb.mp4" type="video/mp4" className=" rounded-lg" />
            </video>

          </div>

        </div>

      </section>

    </>
  )
}
