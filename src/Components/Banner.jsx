import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-[800px] bg-banner text-white bg-cover  flex justify-end items-center relative'>
            <div className='w-2/3 space-y-4 p-6 absolute bottom-40 '>
                <h2 className='font-rancho text-5xl'>Would you like a Cup of Delicious Coffee?</h2>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;