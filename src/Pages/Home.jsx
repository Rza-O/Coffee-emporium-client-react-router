import React from 'react';
import Banner from '../Components/Banner';
import Testimonial from '../Components/Testimonial';
import { useLoaderData } from 'react-router-dom';
import CoffeeCards from '../Components/CoffeeCards';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Testimonial></Testimonial>
            <CoffeeCards coffees={coffees}></CoffeeCards>
        </div>
    );
};

export default Home;