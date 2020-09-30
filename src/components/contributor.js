import React from 'react';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import ContributorMenuBar from './contributorMenuBar';
import ContributorLogin from "./contributorLogin";
import ContributorSignUp from './contributorSignUp';
import contributorDashboard from "./contributorDashboard";
 HomeScreenBranche
import HomeScreenComponent from "./HomeScreenComponent";

import ResetPassword from "./forgotPassword";
import Footer from "./footer";


export default function Contributor(props){

	return(
		<Router>
			<ContributorMenuBar/>
			
				<Route path ="/login">
					<ContributorLogin/>
				</Route>
				<Route path ="/signup-to-contribute">
					<ContributorSignUp/>
				</Route>
				<Route path ="/reset-password">
					<ResetPassword/>
      HomeScreenBranche

				</Route>
				<Route path ="/dashboard" component={contributorDashboard}>
					

				</Route>
 HomeScreenBranche
				<Route path ="/dashboard" component={contributorDashboard}>
					
				</Route>
				<Route path="/" component={HomeScreenComponent}></Route>

				
				
				


			
			<Footer/>
		</Router>
		);
}