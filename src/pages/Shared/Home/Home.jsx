import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner';

const Home = () => {
    return (
      <div>
        <Container className='d-lg-flex align-items-center gap-5 w-100 mt-5 text-align'> 
        <Banner></Banner>
        </Container>
      </div>
        
    );
};

export default Home;