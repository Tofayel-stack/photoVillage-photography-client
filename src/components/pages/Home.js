import React from 'react';
import PhotoSlider from '../component/SliderBanner/PhotoSlider';
import About from './About/About';
import Plans from './plans/Plans';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <>
            <PhotoSlider></PhotoSlider>
            <About></About>
            <Plans></Plans>
            <Testimonials></Testimonials>
            
        </>
    );
};

export default Home;