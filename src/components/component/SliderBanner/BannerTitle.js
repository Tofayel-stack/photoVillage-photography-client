import React from 'react';
import { Link } from 'react-router-dom';

const BannerTitle = () => {
    return (
        
        <div className="absolute top-1/3 left-20 z-10 text-white text-start">
        <span className='lg:text-base font-bold'>Professional Photo & videographer Service</span>
        <h1 className='tracking-tighter lg:text-8xl font-bold font-mono'>Capture Your Memories <br /> For Ever </h1>
        <p className='text-xl'>
        Our Photographer has been a trusted for over 20 years. <br /> And you can make your memeri with us.
        </p>


        <Link className='btn mt-4' to='/plans'>Book Now</Link>
      </div>
    );
};

export default BannerTitle;