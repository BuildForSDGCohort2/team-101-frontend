import React from "react";

export default function ContributorMenuBar() {
return (

<React.Fragment>
        <div className="header">
            
                    
                  
<nav className="navbar navbar-expand-lg nav-bg ">

  <a 
    className="navbar-brand" 
    href ="/hoome">
  <img src="images/onboard_menu_icon.svg" alt ="onboard_menu_icon"/>
                    <span className ="brandAfriData">Open Data</span>
         
  </a>
  <button 
      className="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto nav-items nav-bg   ">
    
    <li className="nav-item ">
        <a className="nav-link noDecorationMenu" href="/catalog">Catalog <span className="sr-only">(current)</span></a>
      </li>
     

     <li className="nav-item">
        <a className="nav-link noDecorationMenu" href="/developer">Developer</a>
      </li>
      
      <li className="nav-item ">
        <a className="nav-link noDecorationMenu" href ="/discover">
          Discover
        </a>
        
      </li>
    
     <li className="nav-item">
        <a className="nav-link noDecorationMenu" href="/datasets">Datasets</a>
      </li>
      
           
       <li className ="list-no-style"> <a className="nav-link noDecorationMenu "
        href="/login">
        Login
        </a></li>
            

     <li className ="list-no-style afriDataButton"><a className="nav-link noDecorationContributor"
      href="/signup-to-contribute">
     Become a Contributor </a></li>
     
    </ul>
    
  </div>
</nav>

</div>
</React.Fragment>
  );
}