
import {useLoaderData } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import ReviewCard from './ReviewCard';



// rating 

import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
 




 







const ServiceDetails = () => {
    const singleServiceDetailsData = useLoaderData()
    // console.log(singleServiceDetailsData);
    const [rating,setRating] = useState()

    const handleCancelBtn=()=>{
        let review = document.getElementById('inputfield');
        review.value = ''
    }
    const ratingChanged = (newRating) => {setRating(newRating)};

    const handleSubmit = (event) => {
        event.preventDefault()

        const reviewerName = event.target.reviewerName.value;
        const reviewTitle = event.target.reviewTitle.value;
        const reviewDetails = event.target.reviewDetailsField.value;
       
        const reviewObj = {
            serviceId: singleServiceDetailsData._id ,
            reviewerName,
            reviewTitle,
            reviewDetails,
            rating
        }
        //  console.log(reviewObj);


            fetch('http://localhost:5000/serviceReview',{
                method:'POST',
                headers:{"content-type":"application/json"},
                body:JSON.stringify(reviewObj)
            })
            .then(res => res.json())
            .then(data => console.log(data))

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


                    {/* give Your rating  */}
                    <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />,


                    <form action="" onSubmit={handleSubmit}>
                            <input name='reviewerName' type="text" placeholder="Your Name" className="input input-bordered w-3/12" />
                            <input name='reviewTitle' type="text" placeholder="Write review Title" className="input input-bordered w-3/4" />
                            <textarea name='reviewDetailsField' id='inputfield' className="border-2 rounded textarea-lg w-full mt-3" placeholder="write your detail review here ."></textarea>

                            <div className='text-right'>
                            <p onClick={handleCancelBtn} className=' btn bg-white text-black mr-4'>Clear</p>
                            <button value='submit' className='btn'>Submit</button>
                            </div>
                    </form>
                </div>
        </div>
    );
};

export default ServiceDetails;