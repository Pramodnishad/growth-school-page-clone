// import React from 'react'

// function WorkshopCard({item}) {
    
//     return (
//         <div className='flex justify-center m-2'>
//         <div className='h-[30rem] w-80 bg-slate-100 grid text-center flex-wrap '>
//                <div className='flex items-center justify-center'>
//         <img src={item.icon} alt='' className=' h-16 w-16 rounded-full' />
//       </div>
//             <p className='text-xl font-semibold'>{item.title}</p>
//             <p ><span className="text-green-500 font-bold pr-3">✓</span>{item.para1}</p>
//             <p><span className="text-green-500 font-bold pr-3">✓</span>{item.para2}</p>
//             <p><span className="text-green-500 font-bold pr-3">✓</span>{item.para3}</p>
//             <p><span className="text-green-500 font-bold pr-3">✓</span>{item.para4}</p>


//             <div className='flex justify-center'>
//                 <div className='h-20 w-72 flex justify-between border border-green-500 '>
//                     <div className='grid pl-2 pt-2 text-start'>
//                         <p className=' text-base font-semibold'>{item.name}</p>
//                         <p className='text-sm '>{item.post}</p>
//                     </div>
//                     <div className=" rounded-3xl overflow-hidden p-2">
//             <video
//               src={item.video}
//               className='h-16 w-16'
//               controls
//             ></video>
//           </div>
//                 </div>
//             </div>




//         </div>
//         </div>
//     )
// }

// export default WorkshopCard

import React from 'react';

function WorkshopCard({ item }) {
  
  return (
    <div className='flex justify-center md:ml-2 ml-2 md:mr-4 mr-2 bg-white'>
      <div className='md:h-[30rem] h-96 md:w-[18.5rem] w-64 grid text-center flex-wrap '>
        <div className='flex items-center justify-center'>
          <img src={item.icon} alt='' className='md:h-16 h-12 md:w-16 w-12 rounded-full' />
        </div>
        <p className='md:text-xl text-lg font-semibold'>{item.title}</p>
        <div className='text-left pl-5'>
          <p className='flex items-center'>
            <span className='text-green-500 font-bold md:pr-2  md:text-xl text-base'>✓</span>
            <span className='flex-shrink break-words pl-2 md:text-lg text-sm'>{item.para1}</span>
          </p>
          <p className='flex items-center'>
            <span className='text-green-500 font-bold md:pr-2 md:text-xl text-base'>✓</span>
            <span className='flex-shrink break-words pl-2 md:text-lg text-sm'>{item.para2}</span>
          </p>
          <p className='flex items-center'>
            <span className='text-green-500 font-bold md:pr-2 md:text-xl text-base'>✓</span>
            <span className='flex-shrink break-words pl-2 md:text-lg text-sm'>{item.para3}</span>
          </p>
          <p className='flex items-center'>
            <span className='text-green-500 font-bold md:pr-2 md:text-xl text-base'>✓</span>
            <span className='flex-shrink break-words pl-2 md:text-lg text-sm'>{item.para4}</span>
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='md:h-20 h-12 md:w-72 w-48 flex justify-between border border-green-500 '>
            <div className=' pl-2 text-start md:pt-4'>
              <p className='md:text-base text-[12px] font-semibold'>{item.name}</p>
              <p className=' md:text-xs text-[9px]'>{item.post}</p>
            </div>
            <div className='rounded-3xl overflow-hidden md:p-2 p-2'>
              <video src={item.video} className='md:h-16 h-6  md:w-16 w-6' controls></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
