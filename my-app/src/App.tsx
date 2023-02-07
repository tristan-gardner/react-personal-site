import React from 'react';
import './App.css';
import ProfilePage from './profile';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './compnents/navbar';
import About from './pages/about';
import { Grid, Link, Box } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Resume } from './pages/resume';


const BASE_URL = '/react-personal-site'

const App = (): JSX.Element => {
  return (<>
    <Router>
    <Navbar />
    <Routes>
        <Route path={`${BASE_URL}/`} element={<ProfilePage />} />
        <Route path={`${BASE_URL}/about`} element={<About/>} />
        <Route path={`${BASE_URL}/resume`} element={<Resume />} />
    </Routes>
    </Router>
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{
        padding: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Link href="https://github.com/tristan-gardner">
          <GitHubIcon />
      </Link>
      <Box style={{width:'10px'}}/>
      <Link href="https://www.linkedin.com/in/tristan-gardner-1677b8131/">
          <LinkedInIcon />
      </Link>
    </Grid>
  </>);
}

export default App;
