                  
import React from "react";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";


 const slider = (
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div data-src="images/A.jpg" />
    <div data-src="images/A.jpg" />
    <div data-src="images/B.mp4" />
  </AwesomeSlider>
);
export default function LandingPage()
{

  return(

    <div className ="landingpage-bg">
          <nav className="navbar navbar-expand-lg navbar-dark landingpage-nav-bg ">
            <Link to ="/">
                <a 
                 className="navbar-brand" 
                  href ="/">
                      <img src="images/onboard_menu_icon.svg" alt ="onboard_menu_icon"/>
                    <span className ="brandAfriData">Open Data</span>
         
                </a>
            </Link>
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
          <ul className="navbar-nav mr-auto nav-items   ">

                 
                 
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
                   
                   <Link to ="/historicaldata">
                   <li className ="list-no-style"> <a className="nav-link noDecorationMenu "
                    href="/historicaldata">
                    Historical Data
                    </a></li>
                    </Link>

                     <Link to ="/contributors">
                   <li className ="list-no-style"> <a className="nav-link noDecorationMenu "
                    href="/">
                    Contributors
                    </a></li>
                    </Link>
                   
                        
                     <Link to ="/orgarnistions">
                   <li className ="list-no-style"> <a className="nav-link noDecorationMenu "
                    href="/Orgarnistions">
                    Orgarnistions
                    </a></li>
                    </Link>
              
                   <Link to ="/developer">
                 <li className="nav-item">

                    <a className="nav-link noDecorationMenu" href="/developer">Developer</a>
                  </li>
                  </Link>
                  
     
          </ul>
    
        </div>
        </nav>
      <div className ="row">
      <div className ="col-sm-2 "> </div>
          <div className ="col-sm-9"> 
              <span className =" landingpage-textone">
                  Vast resources pool on datasets by africans for africa
                </span>
          </div>
      </div>
     <div className ="row center-a-form">
     <div className ="col-sm-3 "> </div>
            <div className ="col-sm-6 "> 
              <span className =" landingpage-texttwo"> 
                Explore, access and contribute to in-demand information and data thtat spans various 
               categories and fields such as banking and finance,housing, healthcare, accommodation, hospitability and many more 
              </span>
             </div>
      </div>

<div className ="row"> 


      <div className ="col-sm-4"> </div>
       <div className ="col-sm-4" >{slider}</div> 
       <div className =" col-sm-4 innercontainer justify-content-end">
       <div>
    

      <p><a className ="socialIcon" href ="twitter.com"> <img src ="images/twitter-icon.png" alt ="our-twitter-handle"/></a></p>
         <p> <a className ="socialIcon" href ="facebook.com"><img src ="images/fb-icon.png" alt ="fb-icon"/></a> </p>
         <p> <a className ="socialIcon" href ="instagram.com"><img src ="images/insta-icon.png" alt ="insta-icon"/></a></p>
         <p> <a className ="socialIcon" href ="youtube.com"><img src ="images/youtube-icon.png" alt ="youtube-icon"/></a></p>
      </div> 
      </div>


</div>

</div>

);}