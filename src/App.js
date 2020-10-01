import React from 'react';
import Contributor from "./components/contributor";
import LandingPage from "./components/landingpage";
import {BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import "./App.css";



function App() {
  return (
    <div className="App">
        <Router>
             <Switch>
            	  <Route exact path ="/" >
                   <Redirect to ="/home" />
            	    
            	  </Route>
                <Route exact path ="/home"><LandingPage/></Route>
      	 
               <Route exact path ="/contributors"> <Contributor/> </Route>

            </Switch>
        </Router>   
    </div>
  );
}

export default App;
