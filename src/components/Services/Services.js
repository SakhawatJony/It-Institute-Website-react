import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setServices(data))



    }, [])
    return (
        <div className="">
            <Container className="">
                <h4 className="text-center pt-5 pb-5 fw-bold">My Services</h4>
            <Row xs={1} md={4} className="g-4 caed-container">
                
               {

                   services.map(service => <Service service={
                       service
                   }></Service>)
               }
           </Row>
            </Container>
        </div>
    );
};

export default Services;