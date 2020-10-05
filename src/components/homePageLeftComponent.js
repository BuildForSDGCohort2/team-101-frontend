import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../stylesheets/homePage.css";
import HomePageTopComponent from "./homePageTopComponent";
import HomePageBodyComponent from "./homePageBodyComponent";

function AsideNav() {
  return (
    <nav className="asideNav col-3 px-5 pt-3" style={{ background: "#344127" }}>
      <div className="container text-left">
        <a className="h2 text-white Aside-title" href="/">
          <img src="images/onboard_menu_icon.svg" alt="" /> Open Data
        </a>

        <ul className="navbar-nav mt-5 ">
          <li className="nav-item active">
            <Link to="/dashboard" className="nav-link h4">
              <i className="fas fa-home mr-2"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/stats" className="nav-link h4">
              <i className="fas fa-chart-line mr-2"></i> Activity
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/information" className="nav-link h4">
              <i className="fas fa-info-circle mr-2"></i> Notebooks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/uploads" className="nav-link h4">
              <i className="fas fa-cloud-upload-alt mr-2"></i> Datasets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/contactus" className="nav-link h4">
              <i className="far fa-comment-alt mr-2"></i> Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Activity() {
  return (
    <div className="col-9">
      <div className="container">
        <HomePageTopComponent />
        <main className="mt-5">
          <h1>Activity</h1>
        </main>
      </div>
    </div>
  );
}

function NoteBooks() {
  return (
    <div className="col-9">
      <div className="container">
        <HomePageTopComponent />
        <main className="mt-5">
          <h1>NoteBooks</h1>
        </main>
      </div>
    </div>
  );
}

function Datasets() {
  return (
    <div className="col-9">
      <div className="container">
        <HomePageTopComponent />
        <main className="mt-5">
          <h1>Datasets</h1>
        </main>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="col-9">
      <div className="container">
        <HomePageTopComponent />
        <main className="mt-5">
          <h1>Contact Us</h1>
        </main>
      </div>
    </div>
  );
}

function homePageLeftComponent() {
  return (
    <div className="row">
      <Router>
        <AsideNav />
        <Switch>
          <Route exact path="/homepage">
            <HomePageBodyComponent />
          </Route>
          <Route exact path="/homepage/activity">
            <Activity />
          </Route>
          <Route path="/homepage/notebooks">
            <NoteBooks />
          </Route>
          <Route path="/homepage/datasets">
            <Datasets />
          </Route>
          <Route exact path="hompage/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default homePageLeftComponent;
