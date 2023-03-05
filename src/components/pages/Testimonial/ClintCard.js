import React from 'react';

const ClintCard = ({clintSays}) => {
    console.log(clintSays);
    return (
        <div className='bg-slate-800 text-white px-4'>
            <div className="avatar offline">
                <div className="w-24 rounded-full">
                    <img src={clintSays.img} alt='pic'/>
                </div>
            </div>

            <p className='mb-6'>
               {clintSays.review}
            </p>

            <span className='text-orange-700'>{clintSays.name}</span>
        </div>
    );
};

export default ClintCard;