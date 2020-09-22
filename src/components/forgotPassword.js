import React from "react";
import {Container} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ResetPassword (props){
	return(
<Container className ="onboard-bottom-margin">
  <Row>
    <Col><h1>Reset Password</h1></Col>
    <Col> </Col>
    
  </Row>
  


  <Row>
   
 <Col>
 <Form>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label srOnly>Username/Email Address</Form.Label>
    <Form.Control size="lg" type="email" placeholder="Username/Email Address" className = "onboard-top-margin"  />
    
  </Form.Group>
  <Button variant="secondary afriDataButton" size="lg" block 
           type="submit" className ="onboard-top-margin">
          Reset Password
  </Button>
  <Link to ="/login"><a href ="/login"> Back to Login</a></Link>
</Form>

</Col>
    
    <Col><img src ="./images/visual_data_bro.svg" alt ="login data trend"/></Col>
  </Row>
</Container>
);
}
