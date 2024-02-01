import React from 'react'
import { FaPlus} from "react-icons/fa";
import fruits from '../images/fruits.png'


function Customer() {
    const data =[
        {
        name: "people-group" ,
        number:'1,800' ,
        title:"Sastisfied Clients"
        },
        {
        name: "hands-holding",
        number:'362' ,
        title:"Active Product "
        },
        {
        name: "leaf" ,
        number:'30' ,
        title:"Food Categories"
        },
        {
        name: "award",
        number:'1,800' ,
        title:"Award Winin"
        },
    ]
  return (
    <>    
    <div className="bg-black mt-32 p-32 relative">
         <div  div data-aos="zoom-in" data-aos-duration={1300} className="flex flex-col gap-10">
            <img src={fruits} className='absolute bottom-0 left-0' alt="" />
            <img src={fruits} className='absolute top-0 right-0' alt="" />
            <div className="w-full flex flex-col lg:flex-row  justify-center gap-10 items-center">
                {
                    data.map((item)=>(
                    <div data-aos="fade-right" data-aos-duration={1300} className=" flex lg:w-[15%] md:w-1/2 w-2/3 text-center rounded-md  gap-5 justify-center items-center">
                    <i class={`fa-solid text-5xl text-green-500 fa-${item.name}`}></i>
                    <div className='flex flex-col items-start'>
                    <div className='flex items-center text-3xl'><h1 className="cursor-pointer   font-bold text-4xl  text-white  overflow-hidden group">{item.number}</h1><FaPlus className='text-orange-500' /></div>
                    <h1 className=' cursor-pointer   font-bold text-lg  text-white  overflow-hidden group'>{item.title}</h1>
                    </div>

                </div>))
                }
                
            </div>
  
        </div>
    </div>


    
    </>

  )
}

export default Customer
