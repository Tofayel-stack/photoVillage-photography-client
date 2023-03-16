
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceInHome = () => {
    const [services,setServices] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/limitService`)
        .then(res => res.json())
        .then(data => setServices(data))
           
    },[])


    return (
      
        <div className='bg-[url("https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] py-28 '>
            <span className='text-base text-white font-semibold mb-3'>Our Services</span>
            <h1 className='text-white text-5xl mb-8'>Browse Our Services Categories</h1>
           <div className='flex flex-wrap m-auto justify-center items-end'>
            {
             services?.map(service =><ServiceCard
                serviceData={service}
             ></ServiceCard>
             )
            }
            <Link to='/service' className='text-red-600 btn btn-ghost animate-bounce'>Browse More &nbsp;<FaArrowAltCircleRight className='inline '></FaArrowAltCircleRight></Link>
           </div>
        </div>
       
    );
};

export default ServiceInHome;