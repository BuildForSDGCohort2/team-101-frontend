import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color:{
      backgroundColor: '#ffffff',

  },
    onboardButton:{
    flexGrow: 1,
    backgroundColor: '#344127',
    padding: 5,
    color:'#ffffff',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //if user is logged in set auth to true
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Typography  className={classes.title}>
           Catalog
          </Typography>
          <Typography  className={classes.title}>
            Developers
          </Typography>
          <Typography  className={classes.title}>
            Discover
          </Typography>
          <Typography  className={classes.title}>
            Datasets
          </Typography>
         
          <Typography  className={classes.title}>
            Login
          </Typography>
          
          <Typography  className={classes.onboardButton}>
           Become a contributor
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
     
    </div>
  );
}