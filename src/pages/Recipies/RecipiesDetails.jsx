import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IngridentList from "./IngridentList";
import './RecipieDetails.css';

const RecipiesDetails = ({ recipe }) => {
    const [disable,setDisabel] = useState(false)
    const addToFavorites = () => {
        setDisabel(true);
        toast("Added to Favorites");

    }
  console.log(recipe);
  const { ingredients, method, name, rating } = recipe;
  return (
    <div className="col">
      <div className="card card-new mb-4 shadow" >
        <div className="p-3">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">
            <span className="fw-bold">Method:</span>
            {method}
          </p>
        </div>
        <div>
        <h4 className="fw-bold ms-3">Ingredients</h4>
          <div className="row row-cols-2 p-0">
            {ingredients.map((i, index) => (
              <IngridentList key={index} index={index} i={i}></IngridentList>
            ))}
          </div>
        </div>
        <div className="card-footer d-flex align-items-center" style={{position:"absolute" ,bottom:'0',width:"100%"}}>
        
        <span className="flex-grow-1 d-flex align-items-center"> <Rating style={{width:"100px"}} value={(rating)} readOnly></Rating> <span className='mt-1 ms-1'>{rating}</span></span>
          <Button onClick={addToFavorites} disabled={disable} variant="warning">
           <FaHeart className='text-danger' style={{fontSize:"1.2rem"}}></FaHeart> Add to Favorites
          </Button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default RecipiesDetails;

