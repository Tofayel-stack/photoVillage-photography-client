
import {useLoaderData } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import ReviewCard from './ReviewCard';


// rating 
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from 'react';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/Context';


 




const ServiceDetails = () => {

// main servidce data load here
    const singleServiceDetailsData = useLoaderData()
    const [rating,setRating] = useState()
    const {user} = useContext(AuthContext)

    // active clear button
    const handleCancelBtn=()=>{
        let review = document.getElementById('inputfield');
        review.value = ''
    }

    // rating function
    const ratingChanged = (newRating) => {setRating(newRating)};

    // toast
    const toastifyAlert = () => toast("Review successfully posted",{
        position: "top-center",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


        // load previous review from databse to show in UI
        const [reviews,setReviews] = useState()
        useEffect(()=>{
            fetch(`http://localhost:5000/serviceReview/${singleServiceDetailsData._id}`)
            .then(res=> res.json())
            .then(data => setReviews(data))
        },[singleServiceDetailsData._id])







    // handle submit and POST method create 
    const handleSubmit = (event) => {
        event.preventDefault()

        const reviewerName = event.target.reviewerName.value;
        const reviewTitle = event.target.reviewTitle.value;
        const reviewerEmail = event.target.reviewerEmail.value;
        const reviewDetails = event.target.reviewDetailsField.value;
       
        const reviewObj = {
            serviceId: singleServiceDetailsData._id ,
            reviewerName,
            reviewerEmail,
            reviewTitle,
            reviewDetails,
            rating
        }
   
            fetch('http://localhost:5000/serviceReview',{
                method:'POST',
                headers:{"content-type":"application/json"},
                body:JSON.stringify(reviewObj)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toastifyAlert()
                    event.target.reset()
                }
            })
            .catch(error=>{
                console.error(error)
                alert('you got an error')
            })     
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

                <h1 className='text-xl mt-12 text-orange-400 bg-gradient-to-r from-gray-400 via-zinc-500 to-gray-400'>People says about our services</h1>
                {
                    reviews?.map( review => <ReviewCard
                        review = {review}
                        key = {review._id}
                    >  
                    </ReviewCard>
                    )
                }
               

                {/*submit review section */}
                <div className='m-10'>
                    <span className='text-left block font-bold text-2xl underline underline-offset-4'>Write Your Own Review</span>


                    {/* give Your rating  */}
                    <div className='flex mt-4'>
                    <span className='mr-4 text-amber-500'>give your rating(out of 5)</span> 
                    <ReactStars
                    classNames='inline'
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            
                        /> 
                    </div>


                    <form action="" onSubmit={handleSubmit}>
                            <input name='reviewerName' type="text" placeholder="Your Name" className="input input-bordered w-3/12" required />
                            <input name='reviewerEmail' type="text" placeholder="email" className="input input-bordered w-3/12" defaultValue={user?.email} required readOnly/>

                            <input name='reviewTitle' type="text" placeholder="Write review Title" className="input input-bordered w-2/4"required />

                           
                            <textarea name='reviewDetailsField' id='inputfield' className="border-2 rounded textarea-lg w-full mt-3" placeholder="write your detail review here" required></textarea>

                            <div className='text-right'>
                            <p onClick={handleCancelBtn} className=' btn bg-white text-black mr-4'>Clear</p>
                            <button value='submit' className='btn'>Submit</button>
                            </div>
                    </form>
                </div>
                <ToastContainer />
        </div>
       
    );
};

export default ServiceDetails;