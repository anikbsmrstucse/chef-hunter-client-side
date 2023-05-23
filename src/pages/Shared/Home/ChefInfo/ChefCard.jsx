import { Button } from "react-bootstrap";
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, experience, number_of_recipes, image, likes} = chef;
  return (
    <>
      <div className="col">
        <div className="card my-3 shadow">
          <img
            src={image}
            style={{ width: "100%", height: "220px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div>
              <span className="card-text">Experiences:{experience}</span> <br />
              <span className="card-text">Total Recipies:{number_of_recipes}</span>
            </div>
          </div>
          <div className="card-footer d-flex">
            <div className="d-flex flex-grow-1 align-items-center fw-medium" style={{fontSize:"1.2rem",cursor:"default"}}><FaThumbsUp className="text-warning fs-5 me-2"></FaThumbsUp>{likes}</div>
            <div className=""><Link to={`/recipies/${id}`}><Button className="fw-semibold text-end" variant="warning">View Recipies</Button></Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
