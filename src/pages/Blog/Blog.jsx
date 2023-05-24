import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";


const Blog = () => {

    const pdfRef = useRef();

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4', true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = ((pdfWidth - imgWidth) * ratio) / 400;
          const imgY = 20;
          pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
          pdf.save('blog.pdf');
        });
      };
      

  return (
    <div className="mx-5 my-3" ref={pdfRef}>
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>
                Q1: Tell us the differences between uncontrolled and controlled
                components?
              </Card.Title>
              <Card.Text>
                In React, controlled components refer to components that have
                their state and behavior controlled by the parent component.
                These components rely on props passed down from the parent
                component to update their state and behavior. Uncontrolled
                components refer to components that manage their own state
                internally.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Q2.Tell us difference between Node.js and Express.js?</Card.Title>
              <Card.Text style={{fontSize:"0.9rem"}}>
                Node.js and Express.js are both integral parts of the JavaScript
                ecosystem for server-side development, but they serve different
                purposes. Node.js is a JavaScript runtime environment that
                allows executing JavaScript on the server-side and provides a
                wide range of core functionalities and APIs. On the other hand,
                Express.js is a minimalist web application framework built on
                top of Node.js, offering a higher-level abstraction for building
                web applications and APIs. While Node.js provides the foundation
                for server-side JavaScript execution, Express.js extends it by
                simplifying common web development tasks like routing,
                request/response handling, and middleware management. Express.js
                offers a robust routing system and middleware functionality out
                of the box, making it easier to build scalable and efficient web
                applications. Furthermore, Express.js has a vast ecosystem of
                middleware packages that can be seamlessly integrated, allowing
                developers to add additional features and functionalities.
                Overall, Node.js provides the runtime environment, while
                Express.js builds upon it to streamline web development and
                provide a more convenient and intuitive experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Q3.How to validate React props using PropTypes?</Card.Title>
              <Card.Text>Props and PropTypes are important mechanisms for passing read-only attributes between React components. React has a built-in package called PropTypes that allows you to validate the props that are passed to your components. This package provides a set of validators that can check the type of the props, whether the props are required, and even whether the props should match a certain pattern.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Q4.What is a custom hook, and why will you create a custom hook?</Card.Title>
              <Card.Text>A custom hook is a JavaScript function that allows you to extract and reuse logic from a React functional component. Custom hooks are a powerful feature of React that allows you to share functionality across multiple components in a clean and efficient way. By encapsulating a specific piece of logic into a custom hook, you can reuse that logic in multiple components and avoid duplicating code. Custom hooks can be created to extract logic and state management from React components, making them reusable across multiple components. They allow us to separate concerns and keep our code organized, reducing the amount of code repetition and making it easier to maintain.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <button onClick={downloadPDF} className="btn btn-primary">Generate PDF</button>
    </div>
  );
};

export default Blog;
