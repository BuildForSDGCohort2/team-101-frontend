import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ContributorMenuBar from './contributorMenuBar';
import ContributorLogin from "./contributorLogin";
import ContributorSignUp from './contributorSignUp';
import contributorDashboard from "./contributorDashboard";
 //HomeScreenBranche
import HomeScreenComponent from "./HomeScreenComponent";
import LandingPage from "./landingpage";
import HomePageComponent from "./homePageComponent";
import ResetPassword from "./forgotPassword";
import Footer from "./footer";


export default function Contributor(props){

	return(
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
                {/* //HomeScreenBranche */}

				</Route>
				
				<Route exact path ="/dashboard"  component={contributorDashboard}>
					
				</Route>

				<Route exact path="/homepage"  component={HomePageComponent} >
				</Route>

				<Route exact path="/contributors" component={HomeScreenComponent}></Route>

				
				
				


			
			<Footer/>

		</Router>
		);
}
