import React from 'react';

const DetaisCard = ({cardData}) => {

    console.log(cardData);
    const {pic,ques,details}=cardData;
    return (
        <div className='bg-zinc-800 m-4 text-white p-8'>
            <img className='object-cover h-48 w-96 mx-auto mb-4' src={pic} alt="pic" />
            <p className='text-2xl '>{ques}</p>
            <p className='my-3'>{details}</p>
        </div>
    );
};

export default DetaisCard;