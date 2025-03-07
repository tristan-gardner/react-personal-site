import React from "react";
import { Box, Typography } from "@material-ui/core";
  
const About = () => {
  return (
    <Box style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        backgroundColor: '#f0fafc',
    }}>
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            width: '70%'
        }}>
            <Typography variant="h3">Tristan Gardner</Typography>
            <p style={{fontSize: "26px"}}>I am a traveler, an avid climber, an improving snowboarder, an on-and-off reader, a bingewatcher, a huge Niners fan, and a competent cook.  I like to build, tinker with, break, and fix things, though not always in that order.</p>
            <p style={{fontSize: "26px"}}>
            I was raised in Oakland, California, and got a Bachelors in Computer Science from Colgate University. 
            After graduation, I began my career in the tech industry. I worked as a software engineer at <a href={"https://www.bird.co/"}>Bird</a>, <a href={"https://www.flowcode.com/"}>Flowcode</a>, and <a href={"https://www.academia.edu/"}>Academia.edu</a>, 
            with a stint as an engineering manager at <a href={"https://www.rootsautomation.com/"}>Roots automation</a> in the middle.
            Now I am working my way through Masters in Mechanical Engineering from UC Berkeley, with an expected graduation date of May 2025.
            </p>
        </Box>
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            width: '30%'
        }}>
            <img height={'40%'} src={require('./pics/about/juice.png')}/>
            <Box style={{height: '5%'}}/>
            <img height={'40%'} src={require('./pics/about/helmet.JPG')}/>
        </Box>
    </Box>
  );
};
  
export default About;