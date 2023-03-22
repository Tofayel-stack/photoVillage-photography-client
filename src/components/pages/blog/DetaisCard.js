import React from 'react';

const DetaisCard = ({cardData}) => {

    // console.log(cardData);
    const {pic,ques,details}=cardData;
    return (
        <div className='bg-zinc-800 m-4 text-white p-8 duration-1000 hover:scale-105 hover:border-4 '>
            <img className='object-cover h-48 w-96 mx-auto mb-4 ' src={pic} alt="pic" />
            <p className='text-2xl text-amber-600'>{ques}</p>
            <p className='my-3'>{details}</p>
        </div>
    );
};

export default DetaisCard;