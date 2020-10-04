import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";



function HomePageTop() {
    return (
      <header class="d-flex justify-content-between px-0 pt-3">
            <div>
              <Link class="nav-left nav-link text-white" to ="/dashboard/uploads">
                <i class="fas fa-upload mr-2"></i>Upload Dataset
              </Link>
            </div>
            <ul class="nav-right d-flex navbar-nav flex-row">
              <li class="nav-item px-3">
                <i class="far fa-bell"></i> 2
              </li>
              <li>
                <a
                  className="border-dark btn btn-outline-light text-dark px-4 py-0"
                  href="/"
                >
                  Level 1
                </a>
              </li>
  
              <li class="nav-item px-3">
                <a href="/" class="nav-link py-0">
                  <img
                    class="img-fluid rounded-circle"
                    width="20"
                    height="10"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRMdVmNPFIXw0viVx_1ikpgYWNaEvKVPdKcg&usqp=CAU"/>
  
              <li class="nav-item pl-3 pr-1">
                <a href="/" class="nav-link text-dark py-0">
                  <img
                    class="img-fluid rounded-circle pr-2"
                    width="30"
                    height="30"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUwjB_JQ42cHVQHw6eWFp882_4okQmwCJxPA&usqp=CAU"
  
                    alt=""
                  />
                  Johnvibe104
                </a>
              </li>
  
  
              <li class="dropdown show nav-item px-3">
                <a
                  class="dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></a>
  
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
  
              <li class="nav-item pr-3">
                <div class="dropdown mr-1">
                  <button
                    type="button"
                    class="dropdown-toggle border-0 bg-transparent"
                    id="dropdownMenuOffset"
                    data-toggle="dropdown"
                    data-offset="10,20"
                  >
                    
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <a class="dropdown-item" href="/">
                      Log in
                    </a>
                    <a class="dropdown-item" href="/">
                      Sign Up
                    </a>
                  </div>
  
                </div>
              </li>
            </div> </li></a> </li></ul>
          </header>
    )
  }


  export default HomePageTop;