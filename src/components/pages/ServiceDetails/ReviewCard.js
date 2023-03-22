import React from 'react';

import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const ReviewCard = ({review}) => {
    // console.log(review)
    return (
        <div className='p-4 bordered bg-zinc-200 m-4 rounded text-start'>
            <span className='font-extrabold text-lg'>{review.reviewTitle}</span>
            <p className='mb-4'>{review.reviewDetails}</p>

            <div className='flex'>
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
        </div>
    );
};

export default ReviewCard;