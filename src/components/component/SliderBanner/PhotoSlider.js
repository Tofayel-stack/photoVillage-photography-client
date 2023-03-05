// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination,Autoplay } from "swiper";

//photo import
import img1 from '../../../Assets/B1.jpg'
import img2 from '../../../Assets/B2.jpg'
import img3 from '../../../Assets/B3.jpg'
import BannerTitle from "./BannerTitle";






const PhotoSlider = () => {
    return (
        <>
        <Swiper
          pagination={{ dynamicBullets: true,}}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}

        modules={[Pagination,Autoplay]}
        className="mySwiper "
        >



          <div className="relative">
          <SwiperSlide><img src={img1} alt="bannerPhoto" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="bannerPhoto" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="bannerPhoto" /></SwiperSlide>
          </div>

          <BannerTitle></BannerTitle>

        </Swiper>



      </>
    );
};

export default PhotoSlider;