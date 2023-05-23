import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./ChefDetails.css";
import RecipiesDetails from "./RecipiesDetails";

const ChefDetails = ({ ChefDetails }) => {
  const {
    id,
    name,
    experience,
    number_of_recipes,
    image,
    likes,
    recipes,
    short_bio,
  } = ChefDetails;
  console.log(ChefDetails);
  return (
    <div>
      <div className="d-md-flex w-100 p-5 align-items-center">
        <div className="chef-img">
          <img className="w-100 rounded" src={image} alt="" />
        </div>
        <div className="chef-info ps-5">
          <h1>{name}</h1>
          <p>{short_bio}</p>
          <div>
            <div>
              <h5>Total Experiences: {experience} years</h5>
              <h5>Total Recipies: {number_of_recipes} recipes</h5>
            </div>
            <div
              className="d-flex flex-grow-1 align-items-center fw-medium"
              style={{ fontSize: "1.2rem", cursor: "default" }}
            >
              <FaThumbsUp className="text-warning fs-5 me-2"></FaThumbsUp>
              {likes}
            </div>
          </div>
        </div>
      </div>
      <div>
        {recipes.map((recipe,index) => <RecipiesDetails key={index} recipe={recipe}></RecipiesDetails>)}
      </div>
    </div>
  );
};

export default ChefDetails;
