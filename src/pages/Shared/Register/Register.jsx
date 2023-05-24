import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Container className="login-res">
        <legend className="mt-4 text-center fw-semibold">Register</legend>
        <Form className="mt-5 mb-5 border rounded p-3 shadow-lg">
          <Form.Group controlId="formName" className="mb-2">
            <Form.Label className="mb-0">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formName" className="mb-2">
            <Form.Label className="mb-0">PhotoURL</Form.Label>
            <Form.Control type="text" placeholder="Enter your url" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-2">
            <Form.Label className="mb-0">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>
          <Button className="w-100 mt-2 mb-2" variant="warning" type="submit">
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
