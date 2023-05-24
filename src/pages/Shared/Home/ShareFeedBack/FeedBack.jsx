import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import feedback from '../../../../assets/feedback.jpg';

const FeedBack = () => {
    const handleFeedbaack = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.value;
        const name = form.value;
        const feedback = form.value;
        console.log(name,email,feedback);
        toast("Submit Successfully");
        form.reset();
        
    }
  return (
    <section className="pt-3 pb-3">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Share Your FeedBack</h2>
            <Form onSubmit={handleFeedbaack}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="feedback"
                />
              </Form.Group>
              <Button className="mt-2" variant="primary" type="submit">
                Submit
              </Button>
              <ToastContainer></ToastContainer>
            </Form>
          </Col>
          <Col md={6}>
            <img src={feedback} alt="Contact" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeedBack;
