import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const RecipiesLayout = () => {
    return (
        <div>
            <Header></Header>
            <hr className='m-0'/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipiesLayout;