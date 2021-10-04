import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';


const Service = (props) => {
    const {title,img,description,price} = props.service;
    return (
      <Container>
        <Col className="">
      <Card className="bg-light card-title border border-warning rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img src={img}/>
        <Card.Body className="text-center">
          <Card.Title> <span>Crouse Name:{title}</span> </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <p className="fw-bold">Price:${price}</p>
          <Button variant="light" className="rounded fw-bold">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
        </Container>
    );
};

export default Service;