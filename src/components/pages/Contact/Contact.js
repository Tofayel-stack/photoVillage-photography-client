import React, { useContext } from 'react';
import contactModel from '../../../Assets/contact/c1.jpg';
import contactPhotographer from '../../../Assets/contact/contactBody.jpg';
import { TbArrowBigRightLines } from 'react-icons/tb';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthContext } from '../../../contextAPI/Context';

// react toastfy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Contact = () => {


    // Aos animation
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        })
    },[])

    // toastfy 
    const notify = () =>{
        toast("thank you for your feedback ")
    }


    const {user} = useContext(AuthContext)



return (
       <div className='lg:py-28'>
            <div className='lg:flex sm:block justify-center'>
                    <div className='lg:text-6xl text-neutral-400 m-auto '>Get in Touch !!</div>
                    <div className='m-auto lg:flex  items-baseline relative'>
                        <img className='object-cover h-48 w-96 rounded-lg  border-8 border-white rounded-lg' src={contactModel} alt="pic" data-aos='fade-right'/>
                        <img className='w-48 rounded-lg' src={contactPhotographer} alt="pic" data-aos='fade-down' />
                    </div>
            </div>
            <div data-aos='slide-up'>
                <p className='text-4xl'>still have question ??  </p>
                
                <br />

                <input type="text" placeholder="Full Name " className="input input-bordered input-error w-full max-w-xs my-2" /><br />
                <input type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered input-error w-full max-w-xs my-2"  readOnly/><br />
                <input type="text" placeholder="Subject" className="input input-bordered input-error w-full max-w-xs my-2" /><br />


                <textarea className="textarea textarea-error  w-full max-w-xs " placeholder="write your Message"></textarea> <br />
                <button className="btn btn-wide bg-stone-500" onClick={notify}>submit &nbsp; <TbArrowBigRightLines className='text-xl'></TbArrowBigRightLines></button> 
            </div>
            <ToastContainer></ToastContainer>
       </div>
    );
};

export default Contact;