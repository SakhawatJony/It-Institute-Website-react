import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Team = (props) => {
    const {tainer,images,age,title} = props.team;
    return (
      <Container>
        <Col>
      <Card className="bg-light card-title border border-warning rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img className="card-img" src={images}/>
        <Card.Body className="text-left">
          <Card.Title><h6><span className="fw-bold">Tainer Name:</span>{tainer}</h6></Card.Title>

          <Card.Text>
          <p className="fw-bold">Age:{age}</p>
          <p className="">Category:{title}</p>
          </Card.Text>
          
          <Button variant="lightgrey" className="rounded fw-bold text-dark bg-warning ">View Details</Button>
        </Card.Body>
      </Card>
    </Col>
        </Container>
    );
};

export default Team;