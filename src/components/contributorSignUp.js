import React, {useState} from "react";
import {Container} from "react-bootstrap";
import { Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {Redirect} from "react-router-dom";



const schema = yup.object({
  first_name: yup.string().required().min(2,"minimium of 2 characters").max(20,"maximum of 20 characters"),
  last_name: yup.string().required().min(2,"minimium of 2 characters").max(20,"maximum of 20 characters"),
  email: yup.string().email().required(),
  username: yup.string().required(),
  password1: yup.string().required().min(8,"minimium of 8 characters"),
  password2: yup.string().oneOf([yup.ref('password1'), null],'password must match'),
  town_city: yup.string().required().min(2,"minimium of 2 characters").max(20,"maximum of 20 characters"),
  state: yup.string().required().min(2,"minimium of 2 characters").max(20,"maximum of 20 characters"),
});



export default function ContributorSignUp (props){
  const [isRegistered, setRegistered] = useState(false); 

  if(isRegistered){
    return <Redirect push to = {{pathname:"/login"}} />;
  }
 else
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

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)};

        const corsUrl = "https://secure-ravine-92476.herokuapp.com/";
        const url   = "https://afrida.herokuapp.com/api/auth/registration/";

         setTimeout(() => {
           fetch(corsUrl +url , requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

          return data; 
        }).then(data =>{setRegistered(true);})
        .catch(error => {
            
            console.error('There was an error!', error);
        });
           setSubmitting(false);
         }, 10000);
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
     <Form.Group controlId="formBasicFirstName" >
        <Form.Label srOnly> First Name</Form.Label>
        <Form.Control 
            className ="form-input-box" 
            size="lg"  
            type="text" 
            name ="first_name"
            placeholder="First Name" 
            value={values.first_name}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.first_name && !errors.first_name}  />
            {errors.first_name && touched.first_name && errors.first_name}
          <Form.Control.Feedback></Form.Control.Feedback>
        
      </Form.Group>




      <Form.Group controlId="formBasicLstName" >
        <Form.Label srOnly> Last Name</Form.Label>
        <Form.Control 
            className ="form-input-box" 
            size="lg"  
            type="text" 
            name ="last_name"
            placeholder="Last Name" 
            value={values.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.last_name && !errors.last_name}  />
            {errors.last_name && touched.last_name && errors.last_name}
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
            name ="password1" 
            placeholder="Password" 
            className = "onboard-top-margin "
            value={values.password1}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.password1 && !errors.password1}/>
             {errors.password1 && touched.password1 && errors.password1}
          <Form.Control.Feedback></Form.Control.Feedback>
      </Form.Group>



      <Form.Group controlId="formBasicConfirmPassword" >
      <Form.Label srOnly> Confirm Password</Form.Label>
        <Form.Control 
            size="lg" 
            type="password" 
            name ="password2"
            placeholder="Confirm Password" 
            className = "onboard-top-margin" 
            value ={values.password2}
            onBlur ={handleBlur}
            onChange ={handleChange}/>
             {errors.password2 && (<div>{errors.password2}</div>)}
      </Form.Group>



      <Form.Group controlId="formBasicCity" >
        <Form.Label srOnly>City/Town</Form.Label>
        <Form.Control 
            className ="form-input-box" 
            size="lg"  
            type="text" 
            name ="town_city"
            placeholder="City or Town" 
            value={values.town_city}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.town_city && !errors.town_city}  />
            {errors.town_city && touched.town_city && errors.town_city}
          <Form.Control.Feedback></Form.Control.Feedback>
        
      </Form.Group>


      <Form.Group controlId="formBasicState" >
        <Form.Label srOnly>State</Form.Label>
        <Form.Control 
            className ="form-input-box" 
            size="lg"  
            type="text" 
            name ="state"
            placeholder="State" 
            value={values.state}
            onBlur={handleBlur}
            onChange={handleChange}
            isValid={touched.state && !errors.state}  />
            {errors.state && touched.state && errors.state}
          <Form.Control.Feedback></Form.Control.Feedback>
        
      </Form.Group>


       <Form.Group controlId="formBasicCountry" >
        <Form.Label srOnly>State</Form.Label>
      <select
        name="country"
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
        <option value="" label="Select a country" />
        
<option value="algeria" label="Algeria"/>
<option value="angola" label="Angola"/>
<option value="benin" label="Benin"/>
<option value="botswana" label="Botswana"/>
<option value="burkina Faso" label="Burkina Faso"/>
<option value="burundi" label="Burundi"/>
<option value="cameroon" label="Cameroon"/>
<option value="cape-verde" label="Cape Verde"/>
<option value="central-african-republic" label="Central African Republic"/>
<option value="chad" label="Chad"/>
<option value="comoros" label="Comoros"/>
<option value="congo-brazzaville" label="Congo - Brazzaville"/>
<option value="congo-kinshasa" label="Congo - Kinshasa"/>
<option value="ivory-coast" label="Côte d’Ivoire"/>
<option value="djibouti" label="Djibouti"/>
<option value="egypt" label="Egypt"/>
<option value="equatorial-guinea" label="Equatorial Guinea"/>
<option value="eritrea" label="Eritrea"/>
<option value="ethiopia" label="Ethiopia"/>
<option value="gabon" label="Gabon"/>
<option value="gambia" label="Gambia"/>
<option value="ghana" label="Ghana"/>
<option value="guinea" label="Guinea"/>
<option value="guinea-bissau" label="Guinea-Bissau"/>
<option value="kenya" label="Kenya"/>
<option value="lesotho" label="Lesotho"/>
<option value="liberia" label="Liberia"/>
<option value="libya" label="Libya"/>
<option value="madagascar" label="Madagascar"/>
<option value="malawi" label="Malawi"/>
<option value="mali" label="Mali"/>
<option value="mauritania" label="Mauritania"/>
<option value="mauritius" label="Mauritius"/>
<option value="mayotte" label="Mayotte"/>
<option value="morocco" label="Morocco"/>
<option value="mozambique" label="Mozambique"/>
<option value="namibia" label="Namibia"/>
<option value="niger" label="Niger"/>
<option value="nigeria" label="Nigeria"/>
<option value="rwanda" label="Rwanda"/>
<option value="reunion" label="Réunion"/>
<option value="saint-helena" label="Saint Helena"/>
<option value="senegal" label="Senegal"/>
<option value="seychelles" label="Seychelles"/>
<option value="sierra-leone" label="Sierra Leone"/>
<option value="somalia" label="Somalia"/>
<option value="south-africa" label="South Africa"/>
<option value="sudan" label="Sudan"/>
<option value="south-sudan" label="Sudan"/>
<option value="swaziland" label="Swaziland"/>
<option value="Sao-tome-príncipe" label="São Tomé and Príncipe"/>
<option value="tanzania"label="Tanzania"/>
<option value="togo"  label="Togo"/>
<option value="tunisia" label="Tunisia"/>
<option value="uganda" label="Uganda"/>
<option value="western-sahara" label="Western Sahara"/>
<option value="zambia" label="Zambia"/>
<option value="zimbabwe" label="Zimbabwe"/>


      </select>
      {errors.country &&
        touched.country &&
        <div className="input-feedback">
          {errors.country}
        </div>}

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