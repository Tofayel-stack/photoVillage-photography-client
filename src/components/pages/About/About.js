import React, { useEffect } from 'react';
import img1 from '../../../Assets/about/about1.jpg';
import img2 from '../../../Assets/about/about2.jpg';
import spinnerImg from '../../../Assets/about/aboutSpinner.png';
import './About.css'


// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//aos
const About = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
            easing: 'ease',
        })
    },[])

    
    return (
        <div id='about' className=' py-36 bg-zinc-800'>
            <div className='lg:flex lg:flex-row flex flex-col justify-center container m-auto'>

                {/* imgae section */}
                <div className='lg:w-full ml-12  relative' data-aos="fade-right" >
                    
                    <img className='w-1/3 rounded-lg z-40' src={img1} alt="pic" />
                    <img className='w-1/3 rounded-lg absolute lg:left-64 left-28 lg:top-28 top-12 z-10'src={img2} 
                    alt="pic" />
                    <img  className='customeAnimate w-2/4 absolute lg:left-64 left-28  bottom-12 z-0' src={spinnerImg} alt="spinnerPic" />
                </div>

                {/* about meta section */}
                <div className='text-start w-3/4 lg:mt-0 mt-16 lg:mx-0 mx-12'>
                    <span className='text-base text-white font-semibold'>About Us</span>
                    <h1 className='text-white lg:text-5xl text-2xl my-8'>We are gonna make your memories immortal.Let's do</h1>
                    <p className='text-gray-400 text-base leading-10 text-justify'>Our team is made up of talented individuals who share a love for photography and a commitment to providing our clients with the best possible experience. Each member of our team brings their unique perspective and skill set to the table, making us a well-rounded and versatile group. <br />
                    
                    Our team consists of photographers, editors, and assistants who all work together seamlessly to ensure that every shoot is a success. We understand that each client has their own unique vision and we strive to bring that vision life through our photography.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;