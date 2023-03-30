import React from 'react';

import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';


    // import AOS
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { useEffect } from 'react';
    


const ReviewCard = ({review}) => {
    // console.log(review)
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        })
    },[])




    return (
        <div className='p-4 bordered bg-zinc-200 m-4 rounded text-start' data-aos='flip-down'>
            <span className='font-extrabold text-lg'>{review.reviewTitle}</span>
            <p className='mb-4'>{review.reviewDetails}</p>

            <div className='flex'>
                    <div className="avatar">
                        <div className="w-8 rounded-full ring">
                        <img src="https://picsum.photos/200" alt='userpic'/>
                        
                        </div>
                        <span className='font-bold text-green-400 ml-4 mr-10'>{review.reviewerName}</span>
                    </div>

              
                    <div>
                        <p>
                            <BsStarFill className='inline'/>
                            <BsStarFill className='inline'/>
                            <BsStarHalf className='inline'/>
                            &nbsp; : {review.rating}
                        </p>

                        
                    </div> &nbsp;&nbsp;&nbsp;
                    <span>date: <b className='text-yellow-600'>{review.date}</b></span> &nbsp; &nbsp;
                    <span> at: <b className='text-yellow-500'>{review.time}</b></span>
            </div>
        </div>
    );
};

export default ReviewCard;