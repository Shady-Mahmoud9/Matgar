import React from 'react'
import { GoArrowRight } from "react-icons/go";
import dish from '../images/dish.png'
import orangebg from '../images/orange bg.jpg'
import cup from '../images/cup.png'
function Carousel() {

const data =[
    {
    image:cup ,
    title:"Product from organic farm"
    },
    {
    image: cup,
    title:"Product from organic farm"
    },
    {
    image:cup ,
    title:"Product from organic farm"
    },
    {
    image: cup,
    title:"Product from organic farm"
    },
]


  return (
    <>
    <div className='mt-52 flex flex-col md:flex-row items-center'>
    <div className="flex w-full flex-col md:flex-row  md:mt-3 mt-10 p-10 md:Pt-32 md:pb-52 md:px-32 h-full  items-center  ">
  <div data-aos="zoom-in" data-aos-duration="1400" className="flex flex-col gap-5 cursor-pointer">
    
    <h1 className=' text-green-500 font-semibold text-2xl'>We Are Shady's company</h1>
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black">Stay Connected  <br /> To The World OF <br /> Metaverse</h1>
    <div className="flex flex-col md:flex-row justify-center  md:justify-start   gap-7 mt-5">
    <a href='#!' className='text-white bg-green-500 flex justify-between p-1 items-center  text-sm  md:text-lg  hover:bg-green-400 w-[150px]  md:w-[250px] h-[60px] rounded-full font-semibold pl-5'>Shop Now <GoArrowRight className='text-black hover:bg-slate-200 bg-white rounded-full p-2 text-5xl'/></a>
    </div>
  </div>
</div>
<div className='w-2/3 flex justify-center bg-no-repeat bg-cover md:mr-20 lg:mr-60' style={{ backgroundImage: `url(${orangebg})` }}>
<img src={dish} className='animate-rotate-infinite' alt="" />

</div>

    </div>

    <div data-aos="zoom-in" data-aos-duration={1300} className="flex flex-col gap-10">
  <div className="w-full flex flex-col lg:flex-row mt-20 justify-center gap-10 items-center">
    {
        data.map((item)=>(
        <div data-aos="fade-right" data-aos-duration={1300} className=" flex lg:w-[15%] md:w-1/2 w-2/3 text-center rounded-md bg-white gap-5 justify-center items-center">
        <img className="w-1/5 h-[40px]" src={item.image} alt="" />
        <h1 className="cursor-pointer w-4/5 pb-4 font-bold text-2xl relative hover:opacity-80 opacity-50  overflow-hidden group">
  {item.title}
  <span className="absolute inset-x-0 bottom-0 h-1 bg-green-500 origin-left  transform scale-x-0 transition-transform duration-1000 ease-in-out group-hover:scale-x-100"></span>
</h1>


      </div>))
    }
    
  </div>
  
</div>

    </>
  )
}

export default Carousel
