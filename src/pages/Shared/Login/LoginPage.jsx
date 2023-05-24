import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Container className="login-res">
          <legend className="mt-4 text-center fw-semibold">Login</legend>
        <Form className="mt-5 mb-5 border rounded p-3 shadow-lg">
          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button className="w-100 mt-2 mb-3" variant="warning" type="submit">
            Login
          </Button>
         <small>Don't have an account? <Link to='/register'>Register</Link> </small>
         <div className="w-100">
        <h5 className="text-center mb-3 mt-3">Continue with:</h5>
         <button type="button" class="btn ms-2 btn-width btn-outline-info"><FaGoogle/> Google</button>
         <button type="button" class="btn btn-width ms-2 btn-outline-danger"><FaGithub/> Github</button>
         </div>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
