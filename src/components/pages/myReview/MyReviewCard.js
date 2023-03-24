import React from 'react';

import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const MyReviewCard = ({review,handleDltReview,handleEditReview}) => {
    // console.log(review);
    return (
        <div className='w-1/2'>
               <div className='p-4 bordered bg-zinc-200 m-4 rounded text-start'>
            <span className='font-extrabold text-lg'>{review.reviewTitle}</span>
            <p className='mb-4'>{review.reviewDetails}</p>

            <div className='flex justify-between'>
                   <div>
                        <div className="avatar">
                                <div className="w-8 rounded-full ring">
                                <img src="https://picsum.photos/200" alt='userpic'/>
                                </div>
                            </div>

                        <span className='font-bold text-green-400 ml-4 mr-10'>{review.reviewerName}</span>
                                <p>
                                    <BsStarFill className='inline'/>
                                    <BsStarFill className='inline'/>
                                    <BsStarHalf className='inline'/>
                                    &nbsp; : {review.rating}
                                </p>
                   </div>

                   <div>
                        <span onClick={()=>handleDltReview(review._id)}><RiDeleteBin6Line className='inline text-xl text-red-700 mx-2 hover:scale-125 transition duration-200 active:text-black'></RiDeleteBin6Line></span> 

                        <span onClick={handleEditReview}><FaEdit className='inline text-xl text-green-600 mx-2 hover:scale-125 transition duration-200 active:text-black'></FaEdit></span>
                   </div>
            </div>
        </div>
        </div>
    );
};

export default MyReviewCard;