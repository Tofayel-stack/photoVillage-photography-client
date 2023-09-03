import React from 'react';
import { Link } from 'react-router-dom';

// type writeer effect 
import Typewriter from 'typewriter-effect';

const BannerTitle = () => {
    return (
        
        <div className="absolute top-1/3 lg:left-20 left-5 z-10 text-white text-start">
        <span className='lg:text-base text-sm lg:font-bold'>Professional Photo & videographer Service</span>


        {/* herer should be typewrite effect */}

      
        <h1 className='tracking-tighter lg:text-8xl text-2xl font-bold font-mono'>
                <Typewriter
                                      onInit={(typewriter) => {
                                        typewriter.typeString(` Capture Your Memories <br /> For Ever `)
                                          .pauseFor(2500)
                                          .start();
                                          
                                      }}
                                      options={{
                                        autoStart: true,
                                        loop: true,
                                        cursor: "_"
                                      }}
                                    />
          
         </h1>
        <p className='lg:block hidden lg:text-xl'>
        Our Photographer has been a trusted for over 20 years. <br /> And you can make your memeri with us.
        </p>


        <Link className='lg:btn btn btn-xs mt-4' to='/plans'>Book Now</Link>
      </div>
    );
};

export default BannerTitle;