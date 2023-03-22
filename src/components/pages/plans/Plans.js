import React, { useState } from 'react';
import PlansCard from './PlansCard';

const Plans = () => {

const [modalInfo,setModalInfo] = useState()

    const cardData = [
        {   
            
            title:'Basic Package',
            price:'35.00',
            session:'1',
            imageCount:'10',
            storage:'Online Gallery',
            photographer:'1',
            _id:'01'
        },
        {
            title:'Premium Package',
            price:'50.00',
            session:'2',
            imageCount:'20',
            storage:'Online Gallery',
            photographer:'2',
            _id:'02'
        },
        {
            title:'Professional Package',
            price:'100.00',
            session:'3',
            imageCount:'50',
            storage:'Online Gallery',
            photographer:'5',
            _id:'03'
        },
    ]
    return (
        <div id='plan' className='bg-gray-800 py-36'>
           <>
           <h1 className='text-white text-5xl'>Make Your Plan</h1>
           <p className='text-gray-400 text-base leading-6'>We are going to offer you variety of options to cater to different budgets, preferences, and needs 

            just pick a plan <br /> which one you feel comfort and let us know , we will always ready to help you
           </p>
           </>
           <div className='lg:flex justify-center mt-12'>

            {
                cardData.map(cardtext => <PlansCard
                     cardtext={cardtext}
                     key={cardtext._id}
                     setModalInfo= {setModalInfo}
                     ></PlansCard> )
            }
           </div>



                {/* this section is for modal */}

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Congratulations as a paid member 	&#128578;</h3>
                            <p className="py-4">You've been selected for <span className='text-orange-400'>{modalInfo?.title}</span> of subscription to get our services price is <span className='text-orange-400'>$ {modalInfo?.price}</span> we are working on that . will provide you updates very soon  !</p>
                            <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Yaap</label>
                            </div>
                        </div>
                        </div>

        </div>
    );
};

export default Plans;