import React from "react";
import HomePageTop from "./homePageTopComponent";
import HomePageBody from "./homePageBodyComponent";
import HomePageLeftComponent from "./homePageLeftComponent";
import "../stylesheets/homePage.css"

function HomePageComponent() {
  return (
    <div className="row">
      <HomePageLeftComponent />
      <div className="col-9">
        <div className="container">
          <HomePageTop />
          <HomePageBody />
        </div>
      </div>
    </div>
  );
}

export default HomePageComponent;
