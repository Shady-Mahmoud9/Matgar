import React from 'react'
import { GoArrowRight } from "react-icons/go";
import {FaArrowRight} from "react-icons/fa"
import img from "../images/apple.png";
import man from "../images/man.png";
import tomato from "../images/tomato.png";
import juice from "../images/juice.png";

// import { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Categories() {


    const data =[
        
        {
            id: 1,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 2,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 3,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 4,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 5,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 6,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 7,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 8,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 9,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
        {
            id: 10,
            title:"Fruits",
            image:img,
            itemsnumber:"20",
        },
    ]
    
  return (
    <div>
    <div data-aos="zoom-in" data-aos-duration="1400" className="lg:flex hidden  flex-col md:flex-row items-center justify-between  gap-5 cursor-pointer mt-52 p-32">
    <div className='w-2/3'>
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black">Browse Our Best 10</h1>
    <h1 className=' text-lime-500 font-semibold text-5xl'>Categories</h1>
    </div>
    <div className="flex w-4/5 md:w-1/6 flex-col md:flex-row justify-center md:justify-start gap-7 mt-5">
    <a href='#!' className='text-white bg-green-500 flex justify-between p-1 items-center  text-sm  md:text-lg  hover:bg-green-400 w-[150px]  md:w-[250px] h-[60px] rounded-full font-semibold pl-5'>Shop Now <GoArrowRight className='text-black hover:bg-slate-200 bg-white rounded-full p-2 text-5xl'/></a>
    </div>
  </div>


  <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={(data.length)-8.5} visibleSlides={1} step={2} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full  h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full  flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                   {
                                    data.map((slide,indexx)=>(
                                    <Slide index={slide.id}>
                                        <div className={`flex flex-col p-5 ${indexx % 2 === 0  ? 'bg-red-100 hover:bg-red-200' : 'bg-lime-200 hover:bg-lime-300'} rounded-md items-center  justify-center flex-shrink-0  w-full sm:w-auto`}>
                                            <img src={slide.image} alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className=" top-1/2 bg-opacity-30  w-full h-full p-6">
                                                <div className=" h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-bold leading-5 lg:leading-6 text-black text-center">{slide.title}</h3>
                                                     <h2 className="lg:text-xl font-bold leading-4 text-base lg:leading-5 text-gray-500 text-center" >({slide.itemsnumber} items)</h2>
                                                </div>

                                            </div>
                                            <FaArrowRight className={`${indexx % 2 === 0  ? 'bg-lime-500' : 'bg-orange-500'}  cursor-pointer opacity-10 hover:opacity-100  rounded-full text-white p-3 text-5xl rounded-full' `}/>
                                        </div>
                                    </Slide>
                                        
                                    ))
                                   }
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                
                
            </div>
        </div>



        <div data-aos="fade-up" data-aos-duration="1400" className='w-full flex gap-10 justify-center items-center flex-col lg:flex-row mt-32'>
      <div  className='bg-lime-500 items-center  md:items-center rounded-lg w-4/5 md:w-1/3 lg:w-1/4 md:h-[400px] flex  mt-10 '>
      <div className='w-1/2 flex flex-col  p-6 '>
      <h1 className='text-lg font-bold opacity-75 text-white text-center md:text-start'>UUP TO 20% OFF</h1>
      <h1 className='text-2xl md:text-3xl font-semibold text-white'>Collected <br /> From <br />Gardens</h1>
      <button className='bg-white hover:bg-slate-200 px-2 lg:px-10 py-1 lg:py-4 text-xl font-semibold w-[150px] rounded-full mt-4 md:mt-10'>See All</button>
      </div>
      <div className='w-2/3'>
        <img src={man} className='w-full' alt="" />
      </div>
      </div>

      <div  className='bg-lime-300 items-center  md:items-center rounded-lg w-4/5 md:w-1/3 lg:w-1/4 md:h-[400px] flex  mt-10 '>
      <div className='w-1/2 flex flex-col  p-6 '>
      <h1 className='text-lg font-bold opacity-75 text-black text-center md:text-start'>UUP TO 20% OFF</h1>
      <h1 className='text-2xl md:text-3xl font-semibold text-black'>Change <br /> Your <br />Diet Plan</h1>
      <button className='bg-white hover:bg-slate-200 px-2 lg:px-10 py-1 lg:py-4 text-xl font-semibold w-[150px] rounded-full mt-4 md:mt-10'>See All</button>
      </div>
      <div className='w-2/3 flex justify-end'>
        <img src={tomato} className='w-2/3' alt="" />
      </div>
      </div>

      <div  className='bg-orange-500 items-center  md:items-center rounded-lg w-4/5 md:w-1/3 lg:w-1/4 md:h-[400px] flex  mt-10 '>
      <div className='w-1/2 flex flex-col  p-6 '>
      <h1 className='text-lg font-bold opacity-75 text-white text-center md:text-start'>Nutural Fresh</h1>
      <h1 className='text-2xl md:text-3xl font-semibold text-white'>Vegetables <br /> 100% <br />Organic</h1>
      <button className='bg-white hover:bg-slate-200 px-2 lg:px-10 py-1 lg:py-4 text-xl font-semibold w-[150px] rounded-full mt-4 md:mt-10'>See All</button>
      </div>
      <div className='w-2/3 flex justify-end'>
        <img src={juice} className='w-2/3' alt="" />
      </div>
      </div>
      </div>

        
    </div>
  )
}

export default Categories
