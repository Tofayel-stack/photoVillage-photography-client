import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

//photoview from card
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';



const ServiceCard = ({serviceData}) => {
    //  console.log(serviceData._id);


    // aos init
    useEffect(()=>{
        AOS.init({
            
            duration: 1000,
        })
    },[])



    return (
        
        <div>

          
            <div className="card lg:w-96 w-full bg-base-100 shadow-xl lg:m-4 m-0" data-aos="zoom-in"> 
                <figure className='h-72'>
                        <PhotoProvider 
                            speed={() => 800}
                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                        >
                            <div className="foo">
                                
                                <PhotoView src={serviceData.img}>
                                <img className='object-cover h-80 w-96' src={serviceData.img} alt="Shoes" srcSet=""/>
                                </PhotoView>
                                
                            </div>
                        </PhotoProvider>

                    

                </figure>
                
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