import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";

import discount from '../images/discount.png';
import tomat from '../images/tomat.png';
import honey from '../images/honey.png';
import meat from '../images/meat.png';
import orange from '../images/orange.png';
import heart from '../images/heart.png';
import redheart from '../images/redheart.png';

const Cardswipper = () => {

  const ServiceData = [
    {
      icon: discount,
      title: "Development",
      price: 100,
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: tomat,
    },
    {
      icon: discount,
      title: "Branding",
      price: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: meat,
    },
    {
      icon: discount,
      title: "Design",
      price: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: honey,
    },
    {
      icon: discount,
      title: "Seo",
      price: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: orange,
    },
    {
      icon: discount,
      title: "Management",
      price: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: tomat,
    },
    {
      icon: discount,
      title: "Production",
      price: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: meat,
    },
  
  ];
  const plus = (index) => {
    setCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += 1;
      return updatedCounts;
    });
  };

  const minus = (index) => {
    setCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] = Math.max(updatedCounts[index] - 1, 1);
      return updatedCounts;
    });
  };

  const [counts, setCounts] = useState(Array(ServiceData.length).fill(1));
  const [heartClicked, setHeartClicked] = useState(Array(ServiceData.length).fill(false));

  const toggleHeart = (index) => {
    setHeartClicked((prevHeartClicked) => {
      const updatedHeartClicked = [...prevHeartClicked];
      updatedHeartClicked[index] = !updatedHeartClicked[index];
      return updatedHeartClicked;
    });
  };

  return (
     
    <div className="flex items-center justify-center flex-col ml-10 h-[500px] bg-[#ffffff] mt-32" >
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className="max-w-[90%] lg:max-w-[80%]"
      >
      {ServiceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-6 bg-slate-200 group relative shadow-lg text-black rounded-xl px-6 py-8  w-[90%] h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-no-repeat bg-center h-1/2 bg-contain"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            />
            <div className="absolute inset-0  " />
            <div className="relative w-full justify-between flex gap-3">
              <img
                src={item.icon}
                alt={item.title}
                className="text-blue-600 hover:text-blue-400 w-[50px] h-[50px]"
                />
              <img
                src={heartClicked[index] ? redheart : heart}
                onClick={() => toggleHeart(index)}
                className="w-[35px] h-[35px] cursor-pointer"
                alt="" />
            </div>
            <div className="mt-24">
              <h1 className="text-xl lg:text-2xl">{item.title}</h1>
              <p className="lg:text-[18px]">{item.content}</p>
            </div>
            <div className="flex absolute  bottom-5 left-5 w-full justify-around">
              <div className="flex justify-center items-center gap-7">
                <FaPlus
                  onClick={() => plus(index)}
                  className="w-[15px] md:w-[25px] h-[15px] md:h-[25px] text-black hover:text-slate-400 duration-100"
                  />
                <h1 className="text-4xl">{counts[index]}</h1>
                <FaMinus
                  onClick={() => minus(index)}
                  className="w-[15px] md:w-[25px] h-[15px] md:h-[25px] text-black hover:text-slate-400 duration-100"
                  />
              </div>
              <div className="">
                <AiOutlineMedicineBox className= "w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-white bg-green-500 mr-5 rounded-full p-2 text-5xl hover:text-slate-400 duration-100" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>


  </div>




    
                    
  );
};

export default Cardswipper;





