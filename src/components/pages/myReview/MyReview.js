import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contextAPI/Context';
import MyReviewCard from './MyReviewCard';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myReview,setMyReview] = useState()

    // toast
    const toastifyAlert = () => toast("successfully deleted",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


    


    // load review data based on user  email 
    useEffect(()=>{
            fetch(`http://localhost:5000/myreview/${user?.email}`)
            .then(res=>res.json())
            .then(data => setMyReview(data))

    },[user?.email])


    // delete oparation connected to mongodb
    const handleDltReview = (reviewID) => {

            fetch(`http://localhost:5000/myreview/${reviewID}`,{
                method:'DELETE',
                headers:{'Content-type':'application/json'}
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.deletedCount !== 0){
                    return toastifyAlert()
                }
            })
             
    }

    const handleEditReview = ()=>{
        alert('coming soon')
    }



    return (
        <div className='flex flex-wrap'>
            {
                myReview?.map(review=>
                <MyReviewCard
                    review={review}
                    key={review._id}
                    handleDltReview = {handleDltReview}
                    handleEditReview ={handleEditReview}
                >
                </MyReviewCard>
                )
            }
            <ToastContainer />
        </div>
    );
};

export default MyReview;