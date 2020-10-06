import React, {useState} from "react";
import {Container} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

const schema = yup.object({
  
  email: yup.string().email().required(),
  
  password: yup.string().required(),
 });


export default function ContributorLogin (props){

  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();


        if(isLoggedIn){

          return <Redirect push to={{ pathname: '/dashboard'}} />
        }

      else
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
         
          
         const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)};

        const corsUrl = "https://secure-ravine-92476.herokuapp.com/";
        const url   = "https://afrida.herokuapp.com/api/auth/login/";



    fetch(corsUrl +url, requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                setIsError(true);
                return Promise.reject(error);
            }
            return data;
            
        }).then(data =>{
            
             setAuthTokens(data.access_token);
              }).then(data => { setLoggedIn(true);})
        .catch(error => {
            console.error('There was an error!', error);
        });
        setSubmitting(false);











           
         
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
        placeholder="Email Address" 
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

   {isError && (<span className ="error-color">Email or password is incorrect</span>)}
  <Button 
      variant="secondary " size="lg" block 
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
