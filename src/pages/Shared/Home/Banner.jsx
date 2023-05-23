import React from 'react';
import bannerimg1 from "../../../assets/banner_image2.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <>
           <img src={bannerimg1} className='rounded img-res' alt="" />
           <div className='w-75 text-align margin-left'>
              <h1>Introduction to <br /> <span className='text-warning fw-bold'>Bangladeshi Cousine</span></h1>
              <p className='font-size'>Bangladeshi cuisine is a treasure trove of flavors, textures, and culinary traditions that reflects the country's rich history, diverse cultural influences, and abundant natural resources. It is a delightful fusion of indigenous ingredients, regional variations, and international influences.</p>
           </div>
        </>
       
    );
};

export default Banner;