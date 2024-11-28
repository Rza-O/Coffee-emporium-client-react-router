import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-full bg-[#eceae3] flex px-40 space-x-14 py-14 justify-between'>
            <div className='space-y-2'>
                <img src="/public/icons/1.png" alt="" />
                <h4 className='font-rancho text-3xl'>Awesome Aroma</h4>
                <p className='font-railway text-sm'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-4'>
                <img src="/public/icons/2.png" alt="" />
                <h4 className='font-rancho text-3xl'>High Quality</h4>
                <p className='font-railway text-sm'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-4'>
                <img src="/public/icons/3.png" alt="" />
                <h4 className='font-rancho text-3xl'>Pure Grades</h4>
                <p className='font-railway text-sm'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-4'>
                <img src="/public/icons/4.png" alt="" />
                <h4 className='font-rancho text-3xl'>Proper Roasting</h4>
                <p className='font-railway text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Testimonial;