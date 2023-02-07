import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { Grid, Icon, Link } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ImageFader, { useTimeIndexIncrementer } from './imageFader';


const avatarStyles = {
    width: '200px',
    height: '200px',
    display: 'block',
    borderRadius: '50%',
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    intro: {
      textAlign: 'center',
    },
    footer: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
  })
);

const images = [
    require("./profile_pics/helmet.jpg"),
    require("./profile_pics/boat.jpg"),
    require("./profile_pics/costa.jpg"),
    require("./profile_pics/hiking.jpg"),
]

const backgroundColors = [
    "#B9CDE4",
    "#9EB9DC",
    "#9BA6A9",
    "#EAB193"
]

const fontColors = [
    "#4D6690",
    "#343135",
    "#413932",
    "#1B1837"
]

const ProfilePage = (): JSX.Element => {
    const classes = useStyles();
    const interval = 5000

    const currentIndex = useTimeIndexIncrementer(images.length, interval)

    return <Box className={classes.root} style={{
        backgroundColor: backgroundColors[currentIndex],
        transition: 'background-color 0.5s ease-in-out',
    }}>
        <ImageFader currentIndex={currentIndex} images={images} alt="profile"/>
        <Box className={classes.intro} style={{
            paddingLeft: '100px',
            paddingRight: '100px',
        }}>
            <Typography variant="h3">
                {"Welcome to my portfolio!"}
            </Typography>
            <Box style={{height:"10px"}}/>
            <Typography variant="h5" style={{
                color: fontColors[currentIndex],
                transition: 'color 0.5s ease-in-out',
            }}>
                Here you can find my resume, information about past projects, important links, and maybe even photos/doodles if I ever post them
            </Typography>
        </Box>
        <Grid container justifyContent="center" alignItems="center" className={classes.footer}>
            <Link href="#">
                <GitHubIcon />
            </Link>
            <Box style={{width:'10px'}}/>
            <Link href="#">
                <LinkedInIcon />
            </Link>
         </Grid>
    </Box>
} 

export default ProfilePage;

