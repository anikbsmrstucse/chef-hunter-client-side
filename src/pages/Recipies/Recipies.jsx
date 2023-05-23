import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const Recipies = () => {
    const chef = useLoaderData()
    console.log(chef);
    
    return (
        <div className='bg-light'>
            <ChefDetails key={chef.id} ChefDetails={chef}></ChefDetails>
        </div>
    );
};

export default Recipies;