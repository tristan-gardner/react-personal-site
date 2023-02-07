import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import ImageFader, { useTimeIndexIncrementer } from './imageFader';


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
  })
);

const pageDetails: {
    image: string,
    backgroundColor: string,
    fontColor: string
}[] = [
    {
        image: require("./profile_pics/helmet.jpg"),
        backgroundColor: "#B9CDE4",
        fontColor: "#4D6690",
    },
    {
        image: require("./profile_pics/costa.jpg"),
        backgroundColor: "#9BA6A9",
        fontColor: "#413932",
    },
    {
        image: require("./profile_pics/boat.jpg"),
        backgroundColor: "#9EB9DC",
        fontColor: "#343135",
    },
    {
        image: require("./profile_pics/hiking.jpg"),
        backgroundColor: "#EAB193",
        fontColor: "#1B1837",
    }
]


const ProfilePage = (): JSX.Element => {
    const classes = useStyles();
    const interval = 5000
    const images = pageDetails.map(pd => pd.image)

    const currentIndex = useTimeIndexIncrementer(images.length, interval)

    return <Box className={classes.root} style={{
        backgroundColor: pageDetails[currentIndex].backgroundColor,
        transition: 'background-color 0.5s ease-in-out',
    }}>
        <ImageFader currentIndex={currentIndex} images={images} alt="profile"/>
        <Box className={classes.intro} style={{
            paddingLeft: '100px',
            paddingRight: '100px',
        }}>
            <Typography variant="h3" style={{
                color: pageDetails[currentIndex].fontColor,
                transition: 'color 0.5s ease-in-out',
            }}>
                {"Welcome to my portfolio!"}
            </Typography>
            <Box style={{height:"10px"}}/>
            <Typography variant="h5" style={{
                color: pageDetails[currentIndex].fontColor,
                transition: 'color 0.5s ease-in-out',
            }}>
                Here you can find my resume, information about past projects, important links, and maybe even photos/doodles if I ever post them
            </Typography>
        </Box>
    </Box>
} 

export default ProfilePage;

