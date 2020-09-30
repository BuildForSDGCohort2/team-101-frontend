import React from "react";
import {Container} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {Link } from "react-router-dom";

const schema = yup.object({
  
  email: yup.string().email().required(),
  
  password: yup.string().required(),
 });

export default function ContributorLogin (props){
	return(
<Container className ="onboard-bottom-margin">
  <Row>
    <Col><h1>Login</h1></Col>
    <Col> </Col>
    
  </Row>
  


  <Row>
   
 <Col>
    <Formik
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
      initialValues={{
        
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (

    <Form className="center-a-form" onSubmit={handleSubmit}>
      
  <Form.Group controlId="formBasicEmail" >
    <Form.Label srOnly>Username/Email Address</Form.Label>
    <Form.Control 
        size="lg" 
        type="email" 
        placeholder="Username/Email Address" 
        className = "onboard-top-margin"
        name ="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        isValid={touched.email && !errors.email}/>
            
        {errors.email && touched.email && errors.email }



          <Form.Control.Feedback></Form.Control.Feedback>

    
  </Form.Group>


  <Form.Group controlId="formBasicPassword" >
  <Form.Label srOnly> Password </Form.Label>
    <Form.Control 
        size="lg" 
        type="password" 
        placeholder="Password" 
        name ="password"
        className = "onboard-top-margin "
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        isValid={touched.password && !errors.password}/>
        {errors.password && touched.password && errors.password}
    <Form.Control.Feedback></Form.Control.Feedback>
  </Form.Group>

  
  <Button 
      variant="secondary afriDataButton" size="lg" block 
       type="submit" className ="onboard-top-margin"
        disabled={isSubmitting}>
    Login
  </Button>
  <Link to ="/reset-password"><a href ="/reset-password"> Forgot your password?</a>
</Link></Form>
)}
    </Formik>
</Col>
    
    <Col><img src ="./images/visual_data_bro.svg" alt ="login data trend"/></Col>
  </Row>
</Container>
);
}
