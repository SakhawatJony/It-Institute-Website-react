import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faMapMarkedAlt,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';

const ContactUs = () => {

    

    return (
        <div className="container text-center">
            <h4 className="fw-bold mt-3 pt-3 pb-5">Contact Us</h4>
            <Row className="text-left">
          <Col xs={6} md={6} className="" >
              <h3>Get Intouch</h3>
           <p>Have a question or just want to say hi? We'd love to hear from you.</p>
           <div className="container justify-content-start align-items-start">
               <Row>
              <Col>  <input type="text" placeholder="Your Name"  className="d-flex mt-3 bg-light"/></Col>
              <Col>  <input type="email" placeholder="Your Email" className=" d-flex mt-3 bg-light rounded" /></Col>
              </Row>
           <input type="text" placeholder="Subject" className="w-100 mt-3 bg-light" />
           <textarea rows="8"  placeholder="Message" className="w-100 mt-3 bg-light rounded" required></textarea>
           <button type="submit" className="d-flex bg-lightgrey rounded "> Send Message</button>
           </div>
   
       
          </Col>
          <Col  xs={6} md={6} className="shadow-lg p-5 mb-5 bg-light rounded" >
           
           <div className="d-flex">
           
           <i className="m-2"><FontAwesomeIcon icon={faMapMarkedAlt} /></i>
         <span>
    <h5>XYZ Road, ABC Building</h5>
    <p>Feni,Dhaka, Bangladesh</p>
         </span>
    </div>
<div className="d-flex" >
<i className="m-2"><FontAwesomeIcon icon={faPhone} /></i>
     <span>
<h5>+88 01927415399</h5>
<p>Monday to Saturday, 10AM to 6PM</p>

     </span>
</div>
<div className="d-flex">
<i className="m-2"><FontAwesomeIcon icon={faEnvelope} /></i>
     <span>
<h5> sakhawathosen320@gmail.com</h5>
<p>Email us your query</p>

     </span>
     </div>
          </Col>
        </Row>
        </div>
    );
};

export default ContactUs;