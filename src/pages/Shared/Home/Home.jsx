import React from "react";
import { Container } from "react-bootstrap";
import Newsletter from "../NewsLetter/Newsletter";
import Banner from "./Banner";
import ChefInfo from "./ChefInfo/ChefInfo";
import FeedBack from "./ShareFeedBack/FeedBack";

const Home = () => {
  return (
    <div>
      <Container className="d-lg-flex align-items-center gap-5 w-100 mt-5 text-align">
        <Banner></Banner>
      </Container>
      <div className="bg-light mt-5">
        <h2 className="text-center pt-2">Explore Our <span className="fw-bold text-warning">Chefs</span></h2>
        <ChefInfo></ChefInfo>
        <Newsletter></Newsletter>
        <FeedBack></FeedBack>
      </div>
    </div>
  );
};

export default Home;
