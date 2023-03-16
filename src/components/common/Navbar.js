import React from 'react';
import { Link } from 'react-router-dom';
import camLogo from '../../Assets/CamLogo.jpg'

const Navbar = () => {
    return (
       
        <div className="navbar bg-zinc-900 text-white sticky top-0 z-50">

                <div className='container m-auto'>
                <div className="navbar-start">
                    
                    <div className="dropdown text-red-800">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/' className='hover:underline underline-offset-4'>Home</Link></li>
                                <li><Link to='/service'>Service</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/plans'>Plans</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
    
                            
                            </ul>
                    </div>
    
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-14' src={camLogo} alt="logo" srcset="" /> PhotoVillage</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
    
    
                        <ul className="menu menu-horizontal px-1">
    
    
    
                            <li><Link to='/'  className='hover:underline underline-offset-4 hover:text-red-500'>Home</Link></li>
                            <li><Link to='/service' className='hover:underline underline-offset-4 hover:text-red-500'>Service</Link></li>
                            <li><Link to='/about' className='hover:underline underline-offset-4 hover:text-red-500 '>About Us</Link></li>
                            <li><Link to='/plans' className='hover:underline underline-offset-4 hover:text-red-500'>Plans</Link></li>
                            <li><Link to='/blog' className='hover:underline underline-offset-4 hover:text-red-500'>Blog</Link></li>
                            <li><Link to='/contact' className='hover:underline underline-offset-4 hover:text-red-500'>Contact</Link></li>
                        
    
                        </ul>
    
    
                </div>    
    
    
                        
                <div className="navbar-end">
                    <a href='/#' className="btn">Book Now</a>
                </div>
    
                </div>
        </div>
                
                    
       
    )
};

export default Navbar;