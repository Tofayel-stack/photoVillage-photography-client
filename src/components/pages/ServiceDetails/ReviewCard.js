import React from 'react';

import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const ReviewCard = () => {
    return (
        <div className='p-4 bordered bg-zinc-200 m-4 rounded text-start'>
            <span className='font-extrabold text-lg'>sit amet consectetur adipisicing</span>
            <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime nam quaerat non iste vero alias temporibus impedit quam porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minima?.</p>

            <div className='flex'>
                
                    <div className="avatar">
                        <div className="w-8 rounded-full ring">
                        <img src="https://picsum.photos/200" alt='userpic'/>
                        </div>
                    </div>

                <span className='font-bold text-green-400 ml-4 mr-10'> Anamul islam</span>
                        <p>
                            <BsStarFill className='inline'/>
                            <BsStarFill className='inline'/>
                            <BsStarHalf className='inline'/>
                            &nbsp; : 3.0
                        </p>
            </div>
        </div>
    );
};

export default ReviewCard;