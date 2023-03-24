import React from 'react';
import notFoundPic from '../../../Assets/error404.jpg'

const Error404 = () => {
    return (
        <div>
            <img className='w-full' src={notFoundPic} alt="notfoundPic" />
        </div>
    );
};

export default Error404;