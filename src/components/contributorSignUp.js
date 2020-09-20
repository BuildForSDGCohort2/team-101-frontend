import React from "react";
import {Container} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";



const schema = yup.object({
  fullName: yup.string().required().min(2,"minimium of 2 characters").max(20,"maximum of 20 characters"),
  
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null],'password must match'),
});

export default function ContributorSignUp (props){
	return(
<Container className ="onboard-bottom-margin">
  <Row>
    <Col><h1>Become a contributor</h1></Col>
    <Col> </Col>
    
  </Row>
  <Row>
    <Col  className = "onboard-top-margin">


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
        <Form.Group controlId="formBasicFullName" >
        <Form.Label srOnly> Full Name</Form.Label>
        <Form.Control 
            className ="form-input-box" 
            size="lg"  
            type="text" 
            name ="fullName"
            placeholder="Full Name" 
            value={values.fullName}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.fullName && !errors.fullName}  />
            {errors.fullName && touched.fullName && errors.fullName}
          <Form.Control.Feedback></Form.Control.Feedback>
        
      </Form.Group>
      <Form.Group controlId="formBasicEmail" >
        <Form.Label srOnly>Email Address</Form.Label>
        <Form.Control 
            size="lg" 
            type="email" 
            name="email"
            placeholder="Email Address" 
            className = "onboard-top-margin" 
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.email && !errors.email}/>
            
            {errors.email && touched.email && errors.email }

          <Form.Control.Feedback></Form.Control.Feedback>
        
      </Form.Group>


    <Form.Group controlId="formBasicUserName" > 
        <Form.Label srOnly> Username </Form.Label>
        <Form.Control  
            size="lg" 
            type="text" 
            name="username"
            placeholder="Username" 
            className = "onboard-top-margin" 
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.username && !errors.username} />
         {errors.username && touched.username && errors.username}
          <Form.Control.Feedback></Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicPassword" >
      <Form.Label srOnly> Password </Form.Label>
        <Form.Control 
            size="lg" 
            type="password"
            name ="password" 
            placeholder="Password" 
            className = "onboard-top-margin "
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.password && !errors.password}/>
             {errors.password && touched.password && errors.password}
          <Form.Control.Feedback></Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword" >
      <Form.Label srOnly> Confirm Password</Form.Label>
        <Form.Control 
            size="lg" 
            type="password" 
            name ="confirmPassword"
            placeholder="Confirm Password" 
            className = "onboard-top-margin" 
            value ={values.confirmPassword}
            onBlur ={handleBlur}
            onChange ={handleChange}/>
             {errors.confirmPassword && (<div>{errors.confirmPassword}</div>)}
      </Form.Group>
      
      <Button 
      variant="secondary afriDataButton " 
      size="lg" block  
      type="submit" 
      className ="onboard-top-margin"
      disabled={isSubmitting}>
        Register
      </Button>
</Form>
)}
    </Formik>

</Col>
    
    <Col><img src ="./images/Data_Trends_bro_1.svg" alt ="data trend"/></Col>
  </Row>
</Container>
);
}
