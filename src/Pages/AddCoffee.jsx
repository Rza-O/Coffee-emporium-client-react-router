import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import AddForm from '../Components/AddForm';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    return (
        <div className='min-h-screen bg-addCoffee bg-cover px-10 py-5'>
            <div className='flex items-center gap-3'>
                <Link to='/'>
                    <FaArrowLeft />
                    <h2 className='font-rancho text-2xl'>Back To Home</h2>
                </Link>
            </div>
            <div>
                <AddForm></AddForm>
            </div>
        </div>
    );
};

export default AddCoffee;