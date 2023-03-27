import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const ServiceCard = ({serviceData}) => {
    //  console.log(serviceData._id);
    useEffect(()=>{
        AOS.init({
            
            duration: 1000,
        })
    },[])



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-4" data-aos="zoom-in">
                <figure className='h-72'><img className='object-cover h-80 w-96' src={serviceData.img} alt="Shoes" srcSet=""/></figure>
                
                <div className="card-body ">
                    <h2 className="card-title">
                    {serviceData.serviceName}
                    
                    </h2>
                    <p className='text-justify text-slate-500'>{serviceData.serviceDetails}</p>
                    <div className="card-actions justify-end text-orange-500">
                        <p><BsStarFill className='inline'/>
                        <BsStarFill className='inline'/>
                        <BsStarHalf className='inline'/>
                        &nbsp; :{serviceData.rating}
                        </p>
                    <p className='text-green-600'>price :{serviceData.price}</p>
                    <Link to={`/servDetails/${serviceData._id}`}  className='btn btn-xs bg-zinc-700 border-0'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;