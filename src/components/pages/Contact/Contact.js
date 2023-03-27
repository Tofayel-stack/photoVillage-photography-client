import React from 'react';
import contactModel from '../../../Assets/contact/c1.jpg';
import contactPhotographer from '../../../Assets/contact/contactBody.jpg';
import { TbArrowBigRightLines } from 'react-icons/tb';



    // import AOS
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { useEffect } from 'react';
    


const Contact = () => {


    useEffect(()=>{
        AOS.init({
            
            duration: 1000,
        })
    },[])






    return (
       <div className='py-28'>
            <div className='lg:flex sm:block justify-center'>
                    <div className='text-6xl text-neutral-400 m-auto '>Get in Touch !!</div>
                    <div className='m-auto flex items-baseline relative'>
                        <img className='object-cover h-48 w-96 rounded-lg  border-8 border-white rounded-lg' src={contactModel} alt="pic" data-aos='fade-right'/>
                        <img className='w-48 rounded-lg' src={contactPhotographer} alt="pic" data-aos='fade-down' />
                    </div>
            </div>
            <div data-aos='slide-up'>
                <p className='text-4xl'>still have question ??  </p>
                
                <br />

                <input type="text" placeholder="Full Name " className="input input-bordered input-error w-full max-w-xs my-2" /><br />
                <input type="email" placeholder="Email Address" className="input input-bordered input-error w-full max-w-xs my-2" /><br />
                <input type="text" placeholder="Subject" className="input input-bordered input-error w-full max-w-xs my-2" /><br />


                <textarea className="textarea textarea-error  w-full max-w-xs " placeholder="write your Message"></textarea> <br />
                <button className="btn btn-wide bg-stone-500">submit &nbsp; <TbArrowBigRightLines className='text-xl'></TbArrowBigRightLines></button> 
            </div>
       </div>
    );
};

export default Contact;