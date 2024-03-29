import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contextAPI/Context';
import MyReviewCard from './MyReviewCard';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// confirem box 
import { confirm } from "react-confirm-box";
const options = {
    labels: {
    confirmable: "Confirm",
    cancellable: "Cancel"
    }
}
//end confirm


const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myReview,setMyReview] = useState([])


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
            fetch(`https://photo-grapher-server.vercel.app/myreview/${user?.email}`,{
                headers:{
                    authorization : `Bearer ${localStorage.getItem('JWT-token')}`
                }
            })
            .then(res=>res.json())
            .then(data =>
                 setMyReview(data)
                 ) 
    },[user?.email])

// console.log(myReview);

    // delete operation connected to mongodb

    const handleDltReview =async (reviewID) => {
      const deleteConfirmed =await confirm("Please confirm deleting ...", options);
      if (deleteConfirmed) {
            fetch(`https://photo-grapher-server.vercel.app/myreview/${reviewID}`,{
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
    }




    const handleEditReview = ()=>{
        alert('coming soon')  
    }


    if(myReview?.message === 'forbidden access'){
        return <div className='text-2xl h-96 flex items-center'><marquee>Forbidden Access</marquee></div>
    }

    if(myReview?.length === 0 ){
        return <div className='text-2xl h-96 flex items-center'><marquee>no review yet !!</marquee></div>
    }else{
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
    }

};

export default MyReview;