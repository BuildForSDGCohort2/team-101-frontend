import React from "react";


export default function Footer(props){
	return(
	 <React.Fragment>
		<div className ="row footerPadding">
		<div className ="col-sm-6  "> <a  className ="noDecoration" href="/home">
  <img src="images/onboard_menu_icon.svg" alt ="onboard_menu_icon"/>
                    <span className ="brandAfriData">Open Data</span>
         </a></div>
		<div className ="col-sm-6 d-flex">
				<div>
					<ul className ="noStyleListFooter">
					<li><a className ="noDecorationFooter" href="/home">Home</a></li>
					<li><a className ="noDecorationFooter" href="/catalog">Catalog</a></li>
					<li><a className ="noDecorationFooter" href="discover">Disccover</a></li>
					<li><a className ="noDecorationFooter" href="developers">Developers</a></li>
					</ul>
					
				</div>

				 <div>
				 	<ul  className ="noStyleListFooter">
				 	<li><a className ="noDecorationFooter" href="/policy"> Policy</a></li>
					<li><a className ="noDecorationFooter" href="contact">Contact Us</a></li>
					<li><a className ="noDecorationFooter" href="/legal">Legal</a></li>
					<li><a className ="noDecorationFooter" href="/signup-to-contribute">Become a contributor</a></li>
					</ul>
					
				 </div>

		</div>
		
		</div>
		<div className ="row copyright">
			<div className ="col-sm-4"> 
					<span > Copyright 2020 Build for SDG</span>
			 </div>
			<div className ="col-sm-4 d-flex">

					<a className ="socialIcon" href ="twitter.com"> <img src ="images/twitter-icon.png" alt ="our-twitter-handle"/></a>
					<a className ="socialIcon" href ="facebook.com"><img src ="images/fb-icon.png" alt ="fb-icon"/></a> 
					<a className ="socialIcon" href ="instagram.com"><img src ="images/insta-icon.png" alt ="insta-icon"/></a>
					<a className ="socialIcon" href ="youtube.com"><img src ="images/youtube-icon.png" alt ="youtube-icon"/></a>
			</div>

	    </div>
		</React.Fragment>
		);
}