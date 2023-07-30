import React, { useRef } from 'react';
import image1 from "../../assets/14.png"
import image2 from "../../assets/2.png"
import image3 from "../../assets/3.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const SwiperCompo = () => {


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



  return (
    <div className='container m-auto py-10 '>
      
    <h1 className='text-white text-center text-2xl hover:text-white cursor-default py-14'>All schedule and details will be available soon...  </h1>
    <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        
      >
        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}}    >
            <img src={image1} alt='p' style={{width:"300px"}} ></img>
        </SwiperSlide>

        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <img src={image2} alt='p' style={{width:"300px"}}></img>
        </SwiperSlide>

        <SwiperSlide style={{display:'flex',alignItems:"center",justifyContent:"center"}} >
            <img src={image3} alt='p' style={{width:"300px"}}></img>
        </SwiperSlide>

        

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} style={{display:"none"}}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} style={{display:"none"}}></span>
        </div>


      </Swiper>



    </div>
  );
}

export default SwiperCompo;
