import React from 'react';
import logo from '../../../images/img1.png'
import logo2 from '../../../images/emg2.png'

const Extra2Session = () => {
    return (
        <div className='product-container mt-10 mb-10'>
            <div>
                <img className='ml-10' src={logo} alt="" />
            </div>
            <div className='text-center mt-24 '>
                <h1 className='text-4xl text-orange-600 text-semibold'>We sell wholesale perfumes!!!
                </h1>
                <p className='mt-2 text-xl'>SAVE UP TO 60%</p>
            </div>
            <div>
                <img src={logo2} alt="" />
            </div>

        </div>
    );
};

export default Extra2Session;