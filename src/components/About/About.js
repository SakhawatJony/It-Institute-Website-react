import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const About = () => {
    return (

        <div className="container text-center">
            <h4 className="fw-bold pt-3 pb-5">About Us</h4>
            <Row className="">
          <Col xs={6} md={6}>
              <h3>we are the worlds largest ict</h3>
           <p>LEDP It Institute, also known as Technical Career Institutes, offers a variety of programs in categories such as Fundamental of Computer, Computer/Laptop Servicing & Networking, Graphics Design, Web Design & Development , Apps Development, Outsourcing & Freelancing And More.</p>
            <Button className="bg-info text-white p-2 fw-bold rounded-pill"size="lg">
Expoler Now 
    </Button>
          </Col>
          <Col  xs={6} md={6}><Image src="https://media.istockphoto.com/photos/busy-working-day-picture-id641193644?s=612x612" thumbnail />
          </Col>
        </Row>
        </div>
    );
};

export default About;