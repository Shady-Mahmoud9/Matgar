import React from 'react'
import { GoArrowRight } from "react-icons/go";

import dish from '../images/dish2.png'
import greenbg from '../images/bggreen.jpg'


function Sect2() {
  return (
    <div>
      <div className='mt-52 w-full flex flex-col md:flex-row items-center'>
      <div div className='w-2/3 flex  bg-no-repeat bg-cover md:ml-20  lg:ml-40' style={{ backgroundImage: `url(${greenbg})` }}>
          <img src={dish} className='w-full animate-rotate-infinite '  alt="" />
      </div>
      <div className="flex w-full flex-col md:flex-row justify-start md:mt-3 mt-10 p-10 md:Pt-32 md:pb-52 md:px-32 h-full  items-center  ">
          <div data-aos="zoom-in" data-aos-duration="1400" className="flex flex-col gap-5 cursor-pointer">
            <h1 className=' text-green-500 font-semibold text-2xl'>About US</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black">We are Shady $ Abo Elkaram</h1>
            <h1 className="text-sm md:text-md lg:text-xl xl:text-2xl font-semibold text-zinc-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptate sit, maiores eum molestias totam perspiciatis tempora quos unde voluptatum? Natus doloribus voluptates voluptatem, beatae obcaecati unde nihil sed error reprehenderit nobis, corporis ipsa provident quo amet, possimus placeat harum?</h1>
            <div className="flex flex-col md:flex-row justify-center  md:justify-start   gap-7 mt-5">
            <a href='#!' className='text-white bg-orange-500 flex justify-between p-1 items-center  text-sm  md:text-lg  hover:bg-orange-400 w-[150px]  md:w-[250px] h-[60px] rounded-full font-semibold pl-5'>Shop Now <GoArrowRight className='text-black hover:bg-slate-200 bg-white rounded-full p-2 text-5xl'/></a>
            </div>
          </div>
      </div>

    </div>
    </div>
  )
}

export default Sect2
