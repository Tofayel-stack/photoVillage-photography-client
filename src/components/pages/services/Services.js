import React from 'react';
import ServiceCard from './ServiceCard';
import {  useLoaderData } from 'react-router-dom';

const Services = () => {

const serviceDatas = useLoaderData()
// console.log(serviceDatas);



    return (
        <div className='bg-[url("https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] py-28 '>
            <span className='text-base text-white font-semibold mb-3'>Our Services</span>
            <h1 className='text-white text-5xl mb-8'>Browse Our Services Categories</h1>
           <div className='flex flex-wrap m-auto justify-center items-end'>
            {
                serviceDatas?.map(sData => <ServiceCard 
                    serviceData={sData}
                    key={sData._id}
                    >  
                    </ServiceCard>
                )
            }
       
           </div>
        </div>
    );
};

export default Services;