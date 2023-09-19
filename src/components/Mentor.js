import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import mentor from '../assets/images/mentor.png'
import JoinCard from './shared/JoinCard';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { cardData, followerData, questionData } from '../constant/Dummy';
function Mentor() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleBox = () => {
        setIsExpanded(!isExpanded);
    };
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 3;

    const nextSlide = () => {
        const newIndex = startIndex + cardsPerPage;
        if (newIndex < cardData.length) {
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
        <div className='flex flex-col justify-center w-full'>
            <div className='bg-[#02131b] flex flex-col justify-center items-center w-auto pb-10'>
                <p className="text-2xl md:4xl font-bold p-5 mt-10 bg-gradient-to-r from-[#00bf72]  to-[#00acb4] text-transparent bg-clip-text">Meet Your Mentor</p>
                <div className="flex items-center justify-center">
                    <div className="relative ">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-lg w-auto md:w-[45rem] h-12 pl-10 bg-[#112934] text-white outline-none"
                        />
                    </div>
                </div>

                <div className="md:flex justify-center items-center mt-10  ">
                    <div className='flex justify-center'>
                        <img src={mentor} alt="" className='h-auto md:h-56 w-72 ' />
                    </div>
                    <div className='flex gap-1 md:gap-4 p-5'>
                        {
                            followerData.map((item) => (
                                <div className=" h-20 w-16 md:h-40 md:w-44  bg-[#112934]   rounded-lg md:p-3">
                                    <p className='text-white text-sm md:text-3xl  font-semibold text-center pt-2'>{item.number}<span className='text-[#00bf72]'>+</span></p>
                                    <p className='text-white text-xs text-center md:text-xl pt-1 md:pt-3'>{item.quote}</p>
                                    <div className=' h-auto w-auto flex justify-center items-center  text-center pt-2'>
                                        <img src={item.icon} alt='' className='h-4 w-4 md:h-9 md:w-9 md:mt-2' />
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>

                <div className='flex  flex-col justify-center items-center text-white  '>
                    <p className='text-lg w-auto md:w-[45rem] lg:w-[65rem] p-5'>Hi, I am Vaibhav Sisinty, I turn startups into profitable businesses, growth consult for brands and help them use the internet to increase profitability and their overall bottom lines.</p>
                    <div className='flex flex-col md:flex md:flex-row-reverse w-auto lg:w-[65rem]'>
                        <div className=''>
                            <video width="100%" height="100%" controls className='rounded-3xl w-auto h-auto p-5'>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='text-lg pl-5 '>
                            <p>In 2012 (at age 19) I moved from running Discovery Android to founding <span className='text-[#00bf72]'>an award winning digital media company, CrazyHeads.</span> Within 3 years, CrazyHead helped 100+ clients over the world grow their businesses using internet.</p>
                            <p className='mt-5'>After working at Uber ( India and Latin America ) for 4.5 years, I joined Klook to lead marketing for India and the Middle East where I scaled the business to over $27M in a year.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <div className='flex flex-col text-center p-3 md:w-[45rem] lg:w-[65rem] mt-10'>
                        <JoinCard />
                    </div>
                </div>
            </div>
            <div className=' justify-center pt-10'>
                <p className="text-4xl font-bold text-center">Frequently Asked Questions</p>
                <p className="text-4xl font-bold text-center" >( FAQ )</p>
                <p className='pt-5 text-xl text-center'>I’ve tried my best to answer all frequently asked questions. For further queries, please email</p>
                <p className=' text-xl text-center'>me at: support@sisinty.com. My amazing support team will reply within 12 hours. 🙂</p>
                <div className='pt-10 grid justify-center '>
                    {
                        questionData.map((item) => (
                            <div className="md:w-[45rem] lg:w-[65rem] p-4 border bg-gray-100 rounded cursor-pointer m-2">
                                <div className="flex justify-between items-center " onClick={toggleBox}>
                                    <div className="font-semibold text-lg">{item.question}</div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            rotation={isExpanded ? 180 : 0}
                                        />
                                    </div>
                                </div>
                                {isExpanded && (
                                    <div className="mt-2 p-2 space-y-2">
                                        <p>{item.para1}</p>
                                        <p>{item.para2}</p>
                                        <p>{item.Para3}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
                <div className='mt-16 p-5'>
                    <p className='text-center text-green-500 font-bold text-4xl pt-10'>Still Not Convinced?</p>
                    <p className='text-center text-2xl pt-5'>Go to google and type my name, “Vaibhav Sisinty”</p>
                    <p className='text-center text-2xl pt-3' >Go to my Facebook page or Trustpilot and check my reviews</p>
                    <p className='text-center text-2xl pt-3' >Go to my LinkedIn and check my endorsements and recommendations</p>
                    <p className='text-center text-2xl pt-3' >Go to my Instagram and check my highlights</p>
                    <p className='text-center text-2xl pt-3' >I’m sure you’ll have no problem getting value from me. 🙂</p>
                </div>
                <div className="flex justify-center ">
                    <div className='flex flex-col text-center p-3 md:w-[45rem] lg:w-[65rem] mt-10'>
                        <JoinCard />
                    </div>
                </div>
                <p className='text-center text-xl'>
                    PS : This is the last call to action. See you again in the retargeting ads 😅
                </p>
            </div>

        </div>
    )
}

export default Mentor