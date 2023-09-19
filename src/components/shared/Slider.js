import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from '../../constant/Dummy';

const Slider = () => {
  return (
    <div className=' flex justify-center items-center'>
    <div className="md:w-[40rem] lg:[60rem] w-full ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        interval={3000} 
        stopOnHover={false}
      >
        {images.map((image, index) => (
          <div key={index} className="flex">
            {images.slice(index, index + 3).map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.images}
                alt=""
                className="md:w-24 w-6 h-72 md:h-[26rem]"
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
    </div>

  );
};

export default Slider;

