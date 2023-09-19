import React from 'react'
import IntroImage from '../assets/images/introImage.png'
import { fontData } from '../constant/Dummy'


function Frame() {
    return (
        <div className='w-full md:w-auto pb-32 '>
            <div className='flex flex-col p-10 justify-center items-center text-center  text-white '>
                <p className=' text-2xl font-semibold md:text-4xl md:font-bold'>Master The <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'>AI Powered Strategies </span> </p>
                <p className='text-2xl font-semibold md:text-4xl md:font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'>To Skyrocket Your LinkedIn</p>
                <p className='text-2xl font-semibold md:text-4xl md:font-bold'>In Just 5 Days!</p>
                <p className='text-sm font-medium md:text-2xl'>Unlock the potential of <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'>AI</span> to boost your LinkedIn Growth and learn the same</p>
                <p className='text-sm font-medium md:text-2xl'>strategies that won me over <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'>400K+ followers</span>, and<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'> 1000’s of leads</span> for FREE bringing</p>
                <p className='text-sm font-medium md:text-2xl'>in<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'>400K+ followers</span>, and<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1bd18e] to-[#01aeae]'> thousands of dollars</span> on a monthly basis from Linkedin.</p>
            </div>
            <div className='flex flex-col items-center md:flex md:flex-row-reverse justify-center  '>
                <div className='p-5  flex flex-col w-auto'>
                    <video width="100%" height="100%" controls className='rounded-3xl w-full h-64 md:w-[30rem]'>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    </video>
                    <div className=' flex flex-col   md:flex-col-reverse '>
                        <div className='w-full md:w-[30rem] h-20 flex  mt-5 rounded-3xl bg-gradient-to-r from-[#1bd18e] to-[#01aeae] justify-center text-white font-bold text-xl '>
                            <button >Reserve Seat for ₹499</button>
                        </div>
                        <div className='flex justify-center text-white h-auto w-auto '>
                            <p className='text-center p-5 md:text-xl '>
                                Reserve a seat before September 16, 2023<span className='lg:block'> to unlock Bonuses worth ₹45,000
                                </span></p>
                        </div>
                    </div>
                </div>
                <div className=' p-5 flex flex-col justify-center items-center bg-[#12242c] w-auto mx-4 rounded-2xl  md:w-[30rem] '>
                    <div className='grid grid-cols-2 gap-5'>
                        {fontData.map((item) => (
                            <div className='bg-stone-950 h-20 w-auto  md:w-auto md:h-auto flex justify-center items-center rounded-2xl text-center'>
                                <p className='text-white p-5  text-xs font-semibold '>{item.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <img src={IntroImage} alt="" className='h-40 w-40 md:h-40 md:w-40' />
                        </div>
                        <div className='text-white text-sm '>
                            <p className="text-2xl font-semibold">Vaibhav Sisinty</p>
                            <p>LinkedIn Growth Expert,</p>
                            <p>Growth Hacker,</p>
                            <p>Ex- Uber & Klook</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div>
                            <img src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e95f01e9004a53d63d9e_Frame%201274.svg" alt="" />
                        </div>
                        <div>
                            <img src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e95f01e9004a53d63d9e_Frame%201274.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Frame