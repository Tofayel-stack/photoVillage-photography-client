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
            photographer:'1'
        },
        {
            title:'Premium Package',
            price:'50.00',
            session:'2',
            imageCount:'20',
            storage:'Online Gallery',
            photographer:'2'
        },
        {
            title:'Professional Package',
            price:'100.00',
            session:'3',
            imageCount:'50',
            storage:'Online Gallery',
            photographer:'5'
        },
    ]
    return (
        <div className='bg-gray-800 py-36'>
           <>
           <h1 className='text-white text-5xl'>Make Your Plan</h1>
           <p className='text-gray-400 text-base leading-6'>We are going to offer you variety of options to cater to different budgets, preferences, and needs 

            just pick a plan <br /> which one you feel comfort and let us know , we will always ready to help you
           </p>
           </>
           <div className='flex justify-center mt-12'>

            {
                cardData.map(cardtext => <PlansCard cardtext={cardtext}></PlansCard> )
            }


           



           </div>

        </div>
    );
};

export default Plans;