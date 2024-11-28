import React from 'react';
import { FaEye } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const SingleCoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, image } = coffee;
    console.log(coffee);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    className=''
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body font-railway">
                <h2 className="card-title font-rancho text-3xl">{name}</h2>
                <p className='text-sm'>{details}</p>
                <p className='font-bold'>{category}</p>
                <p className='font-bold'>{taste}</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 mr-3'>
                <div className="card-actions justify-end rounded-lg p-3 bg-[#d2b48c]">
                    <FaEye className='text-white' />
                </div>
                <div className="card-actions justify-end p-3 rounded-lg bg-[#3c393b]">
                    <IoPencil className='text-white' />
                </div>
                <div className="card-actions justify-end p-3 bg-red-700 rounded-lg">
                    <MdDelete className='text-white' />
                </div>
            </div>
        </div>
    );
};

export default SingleCoffeeCard;