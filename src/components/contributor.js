import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContributorMenuBar from './contributorMenuBar';
import ContributorLogin from "./contributorLogin";
import ContributorSignUp from './contributorSignUp';
import contributorDashboard from "./contributorDashboard";
import { AuthContext } from "../context/auth";
import PrivateRoute from "../privateroute";
 //HomeScreenBranche
import HomeScreenComponent from "./HomeScreenComponent";
import ResetPassword from "./forgotPassword";
import Footer from "./footer";


export default function Contributor(props){

 //const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

	return(
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
		<Router>
			
			<ContributorMenuBar/>
			   
				<Route exact path ="/login">
					<ContributorLogin/>
				</Route>
				<Route exact path ="/signup-to-contribute">
					<ContributorSignUp/>
				</Route>
				<Route exact path ="/reset-password">
					<ResetPassword/>
               

				</Route>
				
				<PrivateRoute  path ="/dashboard"  component={contributorDashboard}/>
					
				
				<Route exact path="/contributors" component={HomeScreenComponent}></Route>

				
				
				


			
			<Footer/>

		</Router>
		</AuthContext.Provider>
		);
}
