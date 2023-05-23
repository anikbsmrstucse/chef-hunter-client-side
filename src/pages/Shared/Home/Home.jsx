import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import ChefInfo from "./ChefInfo/ChefInfo";

const Home = () => {
  return (
    <div>
      <Container className="d-lg-flex align-items-center gap-5 w-100 mt-5 text-align">
        <Banner></Banner>
      </Container>
      <div className="bg-light mt-5">
        <h2 className="text-center pt-2">Explore Our <span className="fw-bold text-warning">Chefs</span></h2>
        <ChefInfo></ChefInfo>
      </div>
    </div>
  );
};

export default Home;
