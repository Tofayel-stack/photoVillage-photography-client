import React, { useEffect } from 'react';
import './PlanCardStyle.css';
import { GiCheckMark } from 'react-icons/gi';


// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';



const PlansCard = ({cardtext,setModalInfo}) => {


    // Aos
    
        useEffect(()=>{
            AOS.init({
                duration: 7000,
                easing: 'linear',
            })
        },[]) 
    

// make the button fancy by modal
    const modalFun =()=>{
      return  setModalInfo(cardtext)
    }




    return (
        <div>
               <div className="card rounded-none m-auto mb-4 lg:mb-0 lg:mx-6 w-full lg:w-96 bg-stone-800 shadow-xl hover:translate-y-1.5 transition duration-500 hover:border-b-2 border-red-600" data-aos='fade-up'  data-aos-delay={cardtext.animationDelay}>
                
                <div className="p-12 text-white text-start">
                    <h2 className="card-title mb-8">{cardtext.title}</h2>
                   <span>$ <b className='text-4xl'>{cardtext.price}</b> <span className='text-red-800 text-base font-semibold'>/month</span></span>

                    <ul className='leading-10 text-base text-zinc-400 my-8 '>
                        <li><GiCheckMark className='inline text-red-600'></GiCheckMark> {cardtext.session} Hour Session</li>
                        <hr />
                        <li><GiCheckMark className='inline text-red-600'></GiCheckMark> {cardtext.imageCount} Still Photo</li>
                        <hr />
                        <li ><GiCheckMark className='inline text-red-600'></GiCheckMark> {cardtext.storage}</li>
                        <hr />
                        <li><GiCheckMark className='inline text-red-600'></GiCheckMark>  {cardtext.photographer} Photographer</li>

                       

                    </ul>
                    {/* hover button */}
                        <nav>
                            <ul>
                                <li>
                                <button onClick={modalFun}  ><label htmlFor="my-modal" className='px-12 py-8'>Purchase Now</label></button>
                                <span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </nav>
                        
                </div>
                </div>
        </div>
    );
};

export default PlansCard;