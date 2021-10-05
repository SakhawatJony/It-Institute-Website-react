import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Servicessss.css'


const Service = (props) => {
    const {title,img,price} = props.service;
    return (
      <Container>
        <Col className="">
      <Card className="bg-light card-title border border-warning rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img className="card-img" src={img}/>
        <Card.Body className="text-center">
          <Card.Title><h6><span className="fw-bold">Crouse Name:</span>{title}</h6></Card.Title>
          <p className="fw-bold">Crouse Free:${price}</p>
          <Button variant="light" className="rounded fw-bold">Enroll Now</Button>
        </Card.Body>
      </Card>
    </Col>
        </Container>
    );
};

export default Service;