import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
//import AccountCircle from "@material-ui/icons/AccountCircle";
//import Switch from "@material-ui/core/Switch";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormGroup from "@material-ui/core/FormGroup";
//import MenuItem from "@material-ui/core/MenuItem";
//import Menu from "@material-ui/core/Menu";
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

export default function MenuAppBar() {
return (
    <div className="odamenubar">
      
      <AppBar position="static" >
        <Toolbar className="odamenubar">
          <div className="flexthisdiv right-margin">
          <img src="images/onboard_menu_icon.svg" alt ="onboard_menu_icon"/>
          <p className ="open-data">
            Open Data
          </p>
          </div>
          <Typography  className="odaFlexGrow">
           Catalog
          </Typography>
          <Typography  className="odaFlexGrow">
            Developers
          </Typography>
          <Typography  className="odaFlexGrow">
            Discover
          </Typography>
          <Typography  className="odaFlexGrow">
            Datasets
          </Typography>
         
          <Typography  className="odaFlexGrow">
            Login
          </Typography>
          
          <Typography  className ="onboardButton">
           Become a contributor
          </Typography>
         
        </Toolbar>
      </AppBar>
     
    </div>
  );
}