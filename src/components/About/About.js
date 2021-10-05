import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const About = () => {

    const [teames, setTeames] = useState([]);
    useEffect(()=>{
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setTeames(data))



    }, [])
    return (

        <div className="container text-center">
            <h4 className="fw-bold pt-3 pb-5">About Us</h4>
            <Row className="">
          <Col xs={6} md={6}>
              <h3>  WE Are The Worlds Largest ICT</h3>
           <p>Sakhawat Online It Institute, also known as Technical Career Institutes, offers a variety of programs in categories such as Fundamental of Computer, Computer/Laptop Servicing & Networking, Graphics Design, Web Design & Development , Apps Development, Outsourcing & Freelancing And More.</p>
            <Button className="bg-info text-white p-2 fw-bold rounded-pill"size="lg">
Expoler Now 
    </Button>
          </Col>
          <Col  xs={6} md={6}><Image src="https://media.istockphoto.com/photos/busy-working-day-picture-id641193644?s=612x612" thumbnail />
          </Col>
        </Row>

        <Container className="">
                <h4 className="text-center pt-5 pb-5 fw-bold">OUR TEAM MEMBER</h4>
            <Row xs={1} md={4} className="g-4 caed-container">
                
               {

teames.map(team =><Team team={team}
     ></Team> )
               }
           </Row>
            </Container>



        </div>
    );
};

export default About;