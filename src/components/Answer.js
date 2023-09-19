import React, { useEffect, useState } from 'react'
import JoinCard from './shared/JoinCard'

import {data, imageData, questionsData, learnData, workshopData} from '../constant/Dummy'
import Slider from './shared/Slider'
import WorkshopCard from './shared/WorkshopCard';


function Answer() {
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 3;
  
    const nextSlide = () => {
      const newIndex = startIndex + cardsPerPage;
      if (newIndex < data.length) {
        setStartIndex(newIndex);
      } else {
        setStartIndex(0);
      }
    };
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => {
        clearInterval(slideInterval);
      };
    },);
    useEffect(() => {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => {
        clearInterval(slideInterval);
      };
    },);
    return (
        <div className='w-full md:w-auto flex flex-col mt-[-6rem] '>
            <div className='flex flex-col justify-center items-center text-center p-3 bg-[#02131b] md:bg-transparent'>
                <div className='bg-[#1a4033] w-full  md:w-32 p-2 rounded-t-xl text-white text-sm'>
                    <p>Feature In</p>
                </div>
                <div className='md:bg-[#12242c] bg-[#02131b]   grid grid-cols-2 w-auto sm:auto md:w-[48rem] lg:w-[60rem] md:grid md:grid-cols-5 justify-center rounded-xl '>
                    {Object.keys(imageData).map((key, index) => (
                        <div key={index} className='bg-[#12242c] rounded-xl m-2 md:p-2' >
                            <img src={imageData[key]} alt='' />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-20 w-auto'>
                <div className='flex flex-col  md:grid grid-cols-3 gap-4 md:p-3 '>
                    {data.map((item) => (
                        <div className="relative flex justify-center">
  <div className='flex flex-col items-center text-center relative'>
    <p className='text-[15px] font-semi-bold absolute top-8 left-[-4rem] w-full text-center'>{item.heading}</p>
    <p className='text-[50px] font-bold text-[#41ab88] font-sans-serif absolute top-1/2 left-[-3rem] w-full transform -translate-y-1/2 text-center'>{item.title}</p>
    <img src={item.image} alt='' className='h-40 w-80 rounded-2xl bg-[#B8F3EC80]' />
  </div>
</div>

                    ))}
                </div>
            </div>
            <div className='flex flex-col justify-center mt-20'>
                <div className='flex flex-col text-center p-3 md:hidden'>
                    <p>Reserve a seat before September 17, 2023 to <br /> unlock Bonuses worth ₹45,000</p>
                    <JoinCard />
                </div>
                <p className='text-xl md:text-4xl  font-bold text-center'>Please Check All Boxes</p>
                <p className='text-xl md:text-4xl font-bold text-center'>Where Your Answer Is YES!</p>
                <div className='flex justify-center mt-10'>
                    <div className="flex flex-col justify-center p-5 gap-5 md:w-[65rem] md:grid md:grid-cols-2 ">
                        {
                            questionsData.map((item) => (
                                <div className=' bg-gray-100 rounded-lg flex p-3'>
                                    <span className='pr-5 flex justify-center'><input type='checkbox' /></span>
                                    <p className='font-semibold p-2 md:text-lg'>{item.question}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className=" text-center p-5 md:text-xl text-base font-semibold">
                <p >If you checked ANY of the boxes above, then you’re invited to join<span className="text-orange-400"> The 5 Day Transformative</span></p>
                <p ><span className="text-orange-400">LinkedIn Workshop.</span> If you don’t believe me, just look at the kind of results my students have</p>
                <p >been getting:</p>
            </div>
           
           <Slider />
           
            <div className="flex justify-center ">
                <div className='flex flex-col text-center p-3 md:w-[65rem]'>
                    <JoinCard />
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className='md:text-4xl text-lg font-bold bg-gradient-to-r from-[#00bf72] via-[#00bf72] to-[#00acb4] text-transparent bg-clip-text text-center p-5 break-words'>
                    Still wondering if this workshop is for you?
                </h1>
                <p className="text-center md:text-2xl text-sm pt-5 break-words ">
                    First of all - No, LinkedIn is not only for people looking for jobs 😑 LinkedIn is a mecca when it
                </p>
                <p className='text-center md:text-2xl text-sm break-words'>
                    comes to lead generation organically.
                </p>
            </div>
           


            <div className='md:flex flex justify-center pt-16 md:w-full w-5/6'>
        <div className="relative md:w-[60rem] w-60 overflow-hidden bg-slate-50  ">
          <div className="flex  transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${startIndex * (100 / cardsPerPage)}%)` }}>
            {workshopData.map((item, index) => (
              <div key={index} className="w-full sm:w-[calc(33.33% - 1rem)]">
                <WorkshopCard item={item} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            {Array.from({ length: Math.ceil(data.length / cardsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * cardsPerPage)}
                className={`w-3 h-3 mx-1 rounded-full ${index * cardsPerPage === startIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>



            <div className='mt-20 flex flex-col justify-center'>
                <h1 className='md:text-4xl text-lg font-bold bg-gradient-to-r from-[#00bf72] via-[#00bf72] to-[#00acb4] text-transparent bg-clip-text text-center p-5 break-words'>
                    What You Will Learn Over 5 Value Packed Days
                </h1>
                <div className='flex justify-center '>
                    <div className='flex flex-col justify-center  w-full md:w-[60rem] p-5 gap-5 md:grid md:grid-cols-2 '>
                        {
                            learnData.map((item) => (

                                <div className='bg-gray-100 flex justify-between p-3 rounded-md md:h-64 '>
                                    <div className='flex flex-col w-96 break-words p-2 items-center'>
                                        <p className='text-xl font-bold '>{item.title}</p>
                                        <div className='flex flex-col mt-5 w-auto  gap-5'>
                                            <div className='flex gap-2'>
                                                <span className='text-green-500 font-bold md:pr-2   md:text-xl text-sm'>✓</span>
                                                <p className='text-sm font-semibold'>{item.para1}</p>
                                            </div>
                                            <div className='flex gap-2'>
                                                <span className='text-green-500 font-bold md:pr-2   md:text-xl text-sm'>🔥</span>
                                                <p className='text-sm font-semibold'>{item.para2}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-32 w-32 flex justify-end'>
                                        <img src={item.icon} alt="" className='h-12 w-16 ' />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className='flex flex-col text-center p-3 md:w-[65rem]'>
                    <JoinCard />
                </div>
            </div>

        </div>
    )
}

export default Answer