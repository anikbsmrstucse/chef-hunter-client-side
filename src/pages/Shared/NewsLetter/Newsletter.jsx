import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [disable,setDisabel] = useState(false)
    const handleLetter = () => {
        setDisabel(true);
        toast("Subscribe");

    }
  return (
    <div id="call-to-action" className="bg-primary text-white text-center py-5 mt-3 mb-5">
      <div className="container">
        <h2 className="display-5">Join our culinary adventure!</h2>
        <p className="lead">
          Explore the flavors of Bangladeshi cuisine and discover a world of
          taste sensations.
        </p>
        <Button onClick={handleLetter} disabled={disable} className="btn btn-light btn-lg">
          Subscribe to our newsletter
        </Button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Newsletter;
