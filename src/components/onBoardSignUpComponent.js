import React from "react";
import {Container} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function OnBoardSignUp (props){
	return(
<Container className ="onboard-bottom-margin">
  <Row>
    <Col><h1>Become a contributor</h1></Col>
    
  </Row>
  <Row>
    <Col  className = "onboard-top-margin"><Form className="center-a-form">
    <Form.Group controlId="formBasicFullName" >
    <Form.Label srOnly> Full Name</Form.Label>
    <Form.Control className ="form-input-box" size="lg"  type="text" placeholder="Full Name"   />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label srOnly>Email Address</Form.Label>
    <Form.Control size="lg" type="email" placeholder="Email Address" className = "onboard-top-margin"  />
    
  </Form.Group>


<Form.Group controlId="formBasicUserName" > 
    <Form.Label srOnly> Username </Form.Label>
    <Form.Control  size="lg" type="text" placeholder="Username" className = "onboard-top-margin"  />
    
  </Form.Group>
  <Form.Group controlId="formBasicPassword" >
  <Form.Label srOnly> Password </Form.Label>
    <Form.Control size="lg" type="password" placeholder="Password" className = "onboard-top-margin "/>
  </Form.Group>

  <Form.Group controlId="formBasicConfirmPassword" >
  <Form.Label srOnly> Confirm Password</Form.Label>
    <Form.Control size="lg" type="password" placeholder="Confirm Password" className = "onboard-top-margin" />
  </Form.Group>
  
  <Button variant="secondary" size="lg" block className ="primary" type="submit" className ="onboard-top-margin">
    Register
  </Button>
</Form>

</Col>
    
    <Col><img src ="./images/Data_Trends_bro_1.svg" /></Col>
  </Row>
</Container>

  )
}