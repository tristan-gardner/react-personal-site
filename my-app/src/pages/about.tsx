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
            <p style={{fontSize: "26px"}}>I am a traveler, an avid hiker, an improving snowboarder, an on-and-off reader, a bingewatcher, a huge Niners fan, a competent cook, and sarcasm expert.  I like to build, tinker with, break, and fix things, though not always in that order.</p>
            <p style={{fontSize: "26px"}}>I was raised in Oakland, California, and went on to receive my education at Colgate University. After graduation, I began my career in the tech industry as a software engineer at Bird Rides. I later moved on to work as a software engineer at Flowcode and most recently, I have been a senior software engineer at Roots Automation. With a strong background in software development and a desire for new challenges, I am always looking for ways to expand my skills and take on new projects.</p>
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