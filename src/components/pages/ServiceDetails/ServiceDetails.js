import React from 'react';
import {useLoaderData } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {

    const singleServiceDetailsData = useLoaderData()
    console.log(singleServiceDetailsData);

    const handleCancelBtn=()=>{
        let review = document.getElementById('inputfield');
        review.value = ''
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }



    return (
        <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='object-fill h-1/2 w-1/2 rounded-lg shadow-xl' src={singleServiceDetailsData.img} alt='service pic' />
                        <div>
                            <h1 className="text-5xl font-bold">{singleServiceDetailsData.serviceName}</h1>
                            <div className="flex justify-center text-orange-500">
                                <p><BsStarFill className='inline'/>
                                <BsStarFill className='inline'/>
                                <BsStarHalf className='inline'/>
                                &nbsp; :{singleServiceDetailsData.rating}
                                </p>
                                <p className='text-green-600 ml-4'>price :{singleServiceDetailsData.price}</p>
                            
                            </div>
                            <p className="py-6">{singleServiceDetailsData.serviceDetails}</p>
                        </div>
                    </div>
                </div>

                {/* show review here */}

                <ReviewCard></ReviewCard>

                {/*submit review section */}
                <div className='m-10'>
                    <span className='text-left block font-bold'>Write Your Review</span>
                    <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-3/12" />
                            <input type="text" placeholder="Write review Title" className="input input-bordered w-3/4" />
                            
                            <textarea name='reviewField' id='inputfield' className="border-2 rounded textarea-lg w-full mt-3" placeholder="write your detail review here ."></textarea>

                            <div className='text-right'>
                            <button onClick={handleCancelBtn} className=' btn bg-white text-black mr-4'>Clear</button>
                            <button className='btn'>Submit</button>
                            </div>
                    </form>
                </div>
        </div>
    );
};

export default ServiceDetails;