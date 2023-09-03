import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./TestimonialStyle.css";
// import required modules
import { FreeMode, Pagination ,Autoplay} from "swiper";


// import all clint photo
import clint1 from '../../../Assets/clints/c1.jpg';
import clint2 from '../../../Assets/clints/c2.jpg';
import clint3 from '../../../Assets/clints/c3.jpg';
import clint4 from '../../../Assets/clints/c4.jpg';
import clint5 from '../../../Assets/clints/c5.jpg';
import clint6 from '../../../Assets/clints/c6.jpg';
import ClintCard from "./ClintCard";

const reviewData = [
    {
        id:1,
        img:clint1,
        review:'Photography is a powerful tool for capturing moments and telling stories. With the right equipment and skills, photographers can create stunning images',
        name:'Presley Baker'
    },
    {   
        id:2,
        img:clint2,
        review:'photography allows you to express your creativity and explore the world in a unique way. However, mastering the art of photography takes time and dedication,',
        name:'Margot Peterson'
    },
    {
        id:3,
        img:clint3,
        review:'Therefore, he may not be the best person to provide a comprehensive review of photography. However, he has directed',
        name:'Jackson Sanders'
    },
    {
        id:4,
        img:clint4,
        review:'At its core, photography is about capturing light and telling a story. A great photograph not only captures a moment in time, ',
        name:'Kayden Fortin'
    },
    {
        id:5,
        img:clint5,
        review:'In short, photography is a powerful medium that has the ability to inspire, inform, and delight. Whether youre looking to capture a family portrait,',
        name:'Sophia     Ross'
    },
    {   
        id:6,
        img:clint6,
        review:'simply someone who enjoys taking photos, there are endless opportunities to explore and experiment with this medium. From landscapes to portraits,',
        name:'Charlie King'
    },
]






const Testimonials = () => {
    return (
     <div  className="bg-zinc-800 py-36">
        <div className="container mx-auto">
            <div>
                <span className='text-base text-white font-semibold'>Our Testimonials</span>
                <h1 className='my-8  text-white text-5xl'>What Our Client Says</h1>
            </div>
           
                <>
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}

                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400:{
                          slidesPerView:1,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        865:{
                          slidesPerView:2
                        },
                        1000:{
                          slidesPerView:3
                        },
                        1500:{
                          slidesPerView:3
                        },
                      
                      }}



                    autoplay={{delay: 1000}}

                    modules={[FreeMode, Pagination,Autoplay]}
                    className="mySwiper "
                    >



                        {
                        reviewData.map(clintSay => <SwiperSlide><ClintCard 
                            clintSays={clintSay}
                            key={clintSay.id}
                            >
                            </ClintCard></SwiperSlide> ) 
                        }
                    
                    
                    </Swiper>
                </>
           
        </div>
     </div>
    );
};

export default Testimonials;