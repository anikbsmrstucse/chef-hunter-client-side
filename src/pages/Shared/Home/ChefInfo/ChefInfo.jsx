import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefInfo = () => {

    const [chefs,setChef] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/allchef")
        .then(res => res.json())
        .then(data => setChef(data))
    },[])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 me-2 ms-2 p-1">
            {chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
        </div>
    );
};

export default ChefInfo;