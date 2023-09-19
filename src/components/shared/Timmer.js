import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here (e.g., September 30, 2023)
    const targetDate = new Date('2023-09-30T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        // Timer has reached its end
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex flex-col  w-auto mt-10'>
      <p className='text-center  text-sm font-bold md:text-3xl'>
        Time Is Running Out. Grab Your Spot Fast!
      </p>
      <div className=' text-xs flex justify-center md:text-2xl mt-5 md:mt-20'>
    
  <div className=' flex-wrap grid md:text-6xl text-lg font-bold md:h-48 h-16 md:w-48 w-16 text-white bg-[#012e46] rounded-xl  justify-center items-center m-2'>
    <div className='countdown-item'>{timeLeft.days}
   <br/> <span className='md:text-xl text-xs  font-normal pt-2 text-center flex justify-center'>Days</span>
    </div>
  </div>
  <div className=' flex-wrap grid md:text-6xl text-lg font-bold md:h-48 h-16 md:w-48 w-16 text-white bg-[#012e46] rounded-xl  justify-center items-center m-2'>
    <div className='countdown-item'>{timeLeft.hours}
    <br/> <span className='md:text-xl text-xs  font-normal pt-2 text-center flex justify-center'>Hrs</span> </div>
  </div>
  <div className=' flex-wrap grid md:text-6xl text-lg font-bold md:h-48 h-16 md:w-48 w-16 text-white bg-[#012e46] rounded-xl  justify-center items-center m-2'>
    <div className='countdown-item'>{timeLeft.minutes}
    <br/> <span className='md:text-xl text-xs font-normal pt-2 text-center flex justify-center'>Mins</span>{' '}</div>
  </div>
  <div className=' flex-wrap grid md:text-6xl text-lg font-bold md:h-48 h-16 md:w-48 w-16 text-white bg-[#012e46] rounded-xl  justify-center items-center m-2'>
    <div className='countdown-item'>{timeLeft.seconds}
    <br/> <span className='md:text-xl text-xs  font-normal pt-2 text-center flex justify-center'>Sec</span></div>
  </div>
</div>
    </div>
  );
};

export default Timer;
