import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, NavLink, Route} from 'react-router-dom';
import './App.css';
import main from './pages/main/main';
import Courses from './pages/courses/courses';
import  '@mui/material';

export class App extends Component {
  render() {
    return (
        <Container>
          <Router>
           <Box sx={{display:'flex'}}>
            <AppBar position="static" sx={{backgroundColor: '#343148FF'}}>
              <Toolbar>
              <Typography variant="h4" className="logoTxt">
                    Coursaty
                </Typography>
              <NavLink to='/' style={{textDecoration:'none'}}> 
                <Typography  className="navlinks">
                    Home
                </Typography>
                </NavLink>
                <NavLink to='/Courses' style={{textDecoration:'none'}}> 
                <Typography  className="navlinks">
                    courses
                </Typography>
                </NavLink>

              </Toolbar>
            </AppBar>
          </Box>
            <Switch>
              <Route path="/" component={main} exact/>
              <Route path="/Courses" component={Courses} exact/>
            </Switch>
          </Router>
        </Container>
        
    )
  }
}

export default App
