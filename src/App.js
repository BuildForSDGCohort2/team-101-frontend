import React from 'react';
import Contributor from "./components/contributor";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import "./App.css";



function App() {
  return (
    <div className="App">
        <Router>
             <Switch>
            	  <Route path ="/" exact>
            	     <Contributor/>
            	  </Route>
      	 
              	
            </Switch>
        </Router>   
    </div>
  );
}

export default App;
