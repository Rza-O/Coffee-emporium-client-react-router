import React from 'react';
import SingleCoffeeCard from './SingleCoffeeCard';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoffeeCards = ({coffees}) => {
    console.log(coffees);
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col justify-center items-center space-y-3 my-3'>
                <p className='font-railway'>--- Sip & Savor ---</p>
                <h2 className='font-rancho text-4xl'>Our Popular Products</h2>
                <Link to='/addCoffee' rel="stylesheet" href=""><button className='flex items-center btn bg-[#e2b477] text-white font-rancho text-lg'>Add Coffee<FaCoffee /></button></Link>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    coffees.map(coffee=> <SingleCoffeeCard coffee={coffee} key={coffee._id}></SingleCoffeeCard>)
                }
            </div>
        </div>
    );
};

export default CoffeeCards;