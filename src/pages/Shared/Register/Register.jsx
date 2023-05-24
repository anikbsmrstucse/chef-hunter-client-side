import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProvider";

const Register = () => {

    const [acc,setAcc] = useState(false);

    const {userRegister} = useContext(AuthContext);

    const handleAccepted = (event) => {
        console.log(event.target.checked);
        setAcc(event.target.checked);
    }

    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);
      if(email,password){
        userRegister(email,password)
        .then((result)=>{
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((error)=> {
          console.log(error.message);
        })
      }
  
    }

  return (
    <div>
      <Container className="login-res">
        <legend className="mt-4 text-center fw-semibold">Register</legend>
        <Form onSubmit={handleRegister} className="mt-5 mb-5 border rounded p-3 shadow-lg">
          <Form.Group controlId="formName" className="mb-2">
            <Form.Label className="mb-0">Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formPhotourl" className="mb-2">
            <Form.Label className="mb-0">PhotoURL</Form.Label>
            <Form.Control type="text" placeholder="Enter your url" name='photourl' />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Enter your password" />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-2">
            <Form.Label className="mb-0">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>
          
          <Form.Group controlId="formchechox" className="mb-1">
            <Form.Check style={{fontSize:"0.8rem"}}
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label="Accept Terms and Conditions"
            />
          </Form.Group>
          <Button className="w-100 mt-2 mb-2" disabled={!acc} variant="warning" type="submit">
            Register
          </Button>
          <small className="mb-0 mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
