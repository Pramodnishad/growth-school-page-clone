import React from 'react'
import Timer from './shared/Timmer'
import JoinCard from './shared/JoinCard'
import { bonasData,iconData, videoData } from '../constant/Dummy'
import Slider from './shared/Slider'

function Register() {
    return (
        <div className='w-auto flex flex-col  mt-10 p-2'>
            <div className='flex flex-col justify-center text-center font-bold text-2xl md:text-4xl gap-8 p-2'>
                <p className='flex justify-center text-center'>Register before midnight of   September 18, 2023</p>

                <p className='text-base bg-gradient-to-r from-[#00bf72] via-[#00bf72] to-[#00acb4] text-transparent bg-clip-text'>To Unlock the bonuses worth Rs 45,000/-</p>
            </div>
            <div className='flex justify-center  w-full'>
                <div className='flex flex-col justify-center items-center md:grid md:grid-cols-3  gap-5 w-auto '>
                    {
                        bonasData.map((item) => (
                            <div className='h-80 w-80  md:h-[25rem] md:w-60 lg:w-80 flex flex-col'>
                                <div className='flex justify-around h-32 bg-[#12242c] rounded-t-2xl'>
                                    <div className="flex ">
                                        <p className='text-white pt-3 md:text-base text-xs '>{item.bonas}</p>
                                    </div>
                                    <div className='flex  items-center '>
                                        <img src={item.icon} alt='' className='h-12 w-12' />
                                    </div>
                                </div>
                                <div className=" bg-cyan-50 h-72 rounded-b-2xl flex flex-col justify-around pl-5">
                                    <div>
                                        <p className='font-bold text-xl'>{item.title}</p>
                                    </div>
                                    <div className='text-base text-green-600'>
                                        <p>{item.subtitle}</p>
                                        <p className='text-xl line-through'>{item.value}</p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <Timer />
                <div className="flex justify-center ">
                <div className='flex flex-col text-center p-3 md:w-[65rem] mt-10'>
                    <JoinCard />
                </div>
            </div>
            </div>
            <div className='flex flex-col justify-center  pt-5 md:mt-16'>
                    <div className='flex flex-col justify-center items-center text-center  text-sm'>
                        <p className="md:text-4xl text-sm font-bold bg-gradient-to-r from-[#00bf72] via-[#00bf72] to-[#00acb4] text-transparent bg-clip-text text-center" >You are not the first to attend the LinkedIn Workshop</p>
                        <p className='pt-5 md:text-2xl '><span className="text-green-600">40,000+ people</span> people from top global brands and startups have taken the workshop and
                            <br /><span className=' flex justify-center'>transformed their LinkedIn game 😁</span></p>
                    </div>

<div className='  justify-center  p-2 grid grid-cols-4 w-auto md:flex'>
                        {
                            iconData.map((item) => (
                                <img src={item.icon} alt=""  />
                            ))
                        }
                    </div>

                </div>
<div className="flex p-2 justify-center  gap-2">
    {videoData.map((item)=>(
         <video width="100%" height="100%" controls className='rounded-xl w-24 h-32 md:w-64 md:h-72'>
         <source src={item.videoUrl} type="video/mp4" />
     </video>
    ))}
</div>
<Slider />
<div className='flex p-2  justify-center gap-2  w-auto '>
    {videoData.map((item)=>(
         <video width="100%" height="100%" controls className='rounded-xl w-24 h-32 md:w-64 md:h-72'>
         <source src={item.videoUrl} type="video/mp4" />
     </video>
    ))}
</div>
<div className='flex justify-center mt-5 '>
    <div className=" border border-black p-3 rounded-xl  ">
        <button className='font-semibold px-3'>Load More</button>
    </div>

</div>
 </div>
    )
}

export default Register