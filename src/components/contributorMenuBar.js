import React from "react";
import { Link } from "react-router-dom";


export default function ContributorMenuBar() {
return (

<React.Fragment>
        <div className="header">
            
                    
                  
<nav className="navbar navbar-expand-lg nav-bg  ">
 <Link to ="/home"
   
    className="navbar-brand" 
    >
  <img src="images/onboard_menu_icon.svg" alt ="onboard_menu_icon"/>
                    <span className ="brandAfriData">Open Data</span>
         
 </Link>
  <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon btn-secondary">
            <i className="fas fa-bars mobile-menu-bg"></i></span>
      </button>

  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto nav-items nav-bg   ">

     <Link className ="#" to ="/contributors">
    <li className="nav-item ">
        <a className="nav-link noDecorationMenu" href="/catalog">Contribute<span className="sr-only">(current)</span></a>
      </li></Link>
     

     <Link className ="#" to ="/catalog">
    <li className="nav-item ">
        <a className="nav-link noDecorationMenu" href="/catalog">Catalog <span className="sr-only">(current)</span></a>
      </li></Link>
     
       <Link to ="/developer">
     <li className="nav-item">

        <a className="nav-link noDecorationMenu" href="/developer">Developer</a>
      </li>
      </Link>
      
       <Link to ="/discover">
      <li className="nav-item ">
        <a className="nav-link noDecorationMenu" href ="/discover">
          Discover
        </a>
        
      </li>
      </Link>
        
       <Link to ="/datasets"> 
     <li className="nav-item">
        <a className="nav-link noDecorationMenu" href="/datasets">Datasets</a>
      </li>
      </Link>
       <Link to ="/dashboard"> 
     <li className="nav-item">
        <a className="nav-link noDecorationMenu" href="/datasets">Dashboard</a>
      </li>
      </Link>
       
       <Link to ="/login">
       <li className ="list-no-style"> <a className="nav-link noDecorationMenu "
        href="/login">
        Login
        </a></li>
        </Link>
       
            
       <Link to ="signup-to-contribute">
     <li className ="list-no-style afriDataButton"><a className="nav-link noDecorationContributor"
      href="/signup-to-contribute">
     Become a Contributor </a></li> 
     </Link>

     
    </ul>
    
  </div>
</nav>

</div>
</React.Fragment>
  );
}