import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Container>
      
        
      <Row className="m-3">
        <Col xs={6} md={6} className="pt-7 bg-light">
           <div className="pt-2">
           <h1>Welcome To My</h1>
            <h3 className="fw-bold">Launch MY <br />
           <span className="text-info"> SAKHAWAT  Online IT</span> Institute Platform</h3>
         <p>Meet It Institute,and online institutions, who'll share their experience.</p>
          <Button className="bg-info text-white p-2 fw-bold rounded-pill"size="lg">
Learn More 
  </Button>
           </div>
        </Col>
        <Col  xs={6} md={6}><Image src="https://media.istockphoto.com/photos/business-professionals-working-at-new-office-desk-picture-id1271153817" thumbnail />
        </Col>
      </Row>
    </Container>
    <Services></Services>
    <About></About>
    <ContactUs></ContactUs>
        </div>
    );
};

export default Home;