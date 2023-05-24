import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <Container fluid>
        <Row className="mt-3">
          <Col md={6} className="text-center text-md-start">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-decoration-none" href="#">Terms of Service</a></li>
              <li className="list-inline-item"><a className="text-decoration-none" href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a className="text-decoration-none" href="#">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
