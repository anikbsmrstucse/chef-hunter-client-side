import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../AuthProviders/AuthProvider";
import "./LoginPage.css";

const LoginPage = () => {
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if(email,password){
      userLogin(email,password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Sucessfully");
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
    else{
      return toast('Enter Valid Email and password')
    }
    form.reset();
  };

  const handleGoole = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Sucessfully");
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithub = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Sucessfully");
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Container className="login-res">
        <legend className="mt-4 text-center fw-semibold">Login</legend>
        <Form onSubmit={handleLogin} className="mt-5 mb-5 border rounded p-3 shadow-lg">
          <Form.Group controlId="formEmail" className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Label className="mb-0">Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Enter your password" />
          </Form.Group>
          <Button className="w-100 mt-2 mb-3" variant="warning" type="submit">
            Login
          </Button>
          <small>
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </small>
          <div className="w-100">
            <h5 className="text-center mb-3 mt-3">Continue with:</h5>
            <button
              type="button"
              onClick={handleGoole}
              className="btn ms-2 btn-width btn-outline-info"
            >
              <FaGoogle /> Google
            </button>
            <button
              type="button"
              onClick={handleGithub}
              className="btn btn-width ms-2 btn-outline-danger"
            >
              <FaGithub /> Github
            </button>
          </div>

          <p className="text-sucess"></p>
          <p className="text-danger"></p>
        </Form>
        <ToastContainer></ToastContainer>
      </Container>
    </>
  );
};

export default LoginPage;
