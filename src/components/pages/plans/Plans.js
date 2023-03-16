import React from 'react';
import PlansCard from './PlansCard';

const Plans = () => {


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
                     ></PlansCard> )
            }


           



           </div>

        </div>
    );
};

export default Plans;