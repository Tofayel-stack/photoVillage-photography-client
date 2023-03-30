import React from 'react';
import { Link } from 'react-router-dom';
import camLogo from '../../Assets/CamLogo.jpg'
import { FaLocationArrow } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer m-auto p-10 bg-neutral text-neutral-content">
          
          <div>
          <Link to='/#' className="btn btn-ghost normal-case text-xl text-red-700 font-extrabold text-2xl"><img className='w-14 rounded-full ' src={camLogo} alt="logo" srcSet='' />&nbsp; &nbsp;  PhotoVillage</Link>
            <span className='text-slate-300 text-base text-start m-4 mb-8'>Subscribe to our newsletter for discounts <br/> and more latest offer.</span>
          <div className='flex content-center mb-8'>
          <input type="text" placeholder="Write Your Email" className="text-black input input-bordered input-accent max-w-xs rounded-r-none" /><button className="btn bg-red-700	rounded-l-none">Subscribe</button>
          </div>
          </div> 
          <div>
            <span className="footer-title">Quick Link</span> 
                        
                <li><Link to='/' className='hover:underline underline-offset-4 hover:text-red-600'>Home</Link></li>
                <li><Link to='/service' className='hover:underline underline-offset-4 hover:text-red-600'>Service</Link></li>
                <li><Link to='/about' className='hover:underline underline-offset-4 hover:text-red-600'>About Us</Link></li>
                <li><Link to='/blog' className='hover:underline underline-offset-4 hover:text-red-600'>Blog</Link></li>
                <li><Link to='/contact' className='hover:underline underline-offset-4 hover:text-red-600'>Contact</Link></li>

          </div> 
          <div>
            <span className="footer-title">Contact Us</span> 
            <h1><FaLocationArrow className='inline text-red-600'></FaLocationArrow> 14 Griffin Terrace Maine 01902 <br /> United States . </h1>
            <h1><IoIosCall className='inline text-red-600'></IoIosCall> (781) 598-5977 <br /> 530-99-2535</h1>
            <h1><AiOutlineMail className='inline text-red-600'></AiOutlineMail> webep38003@wireps.com</h1>
          </div>
         
        </footer>
    );
};

export default Footer;