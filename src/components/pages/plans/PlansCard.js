import React from 'react';
import './PlanCardStyle.css';
import { GiCheckMark } from 'react-icons/gi';

const PlansCard = ({cardtext}) => {
    return (
        <div>
               <div className="card rounded-none lg:mx-6 w-96 bg-stone-800 shadow-xl hover:translate-y-1.5 transition duration-500 hover:border-b-2 border-red-600">
                
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
                                <button>Purchase Now</button>
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