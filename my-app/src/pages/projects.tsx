import React from "react";
import { Card } from "./projects/Card";
import { Box } from "@material-ui/core";


export const Projects = (): JSX.Element => {
    return <>
        <Card summary="Nobot Ai detection" image={require("./pics/project/nobot/logo.png")}>
            <p>
                Nobot was an attempt to build a service which detected AI generated content in student submission.  Educators were meant to connect their google classrooms and send assignments to be scored.  The service would then return a score for each student and a breakdown of the submissions.
            </p>
            <p>
                The tool was built using python, react, typescript, and deployed on Azure.  It used an AI model to detect AI content.
            </p>
            <p> Unfortunatly turnitin.com an already established player beat us to the punch </p>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <img width="40%" src={require('./pics/project/nobot/homepage.png')} />
                    <img width="40%" src={require('./pics/project/nobot/email.png')} />
                </Box>
            </Box>
        </Card>
        <Box style={{height: "10px"}}/>
        <Card summary="The Santa Cruz Speaker" image={require("./pics/project/speaker/speaker.png")}> 
            <p>Using a {" "}
                <a style={{color: 'black'}} href="https://www.parts-express.com/Dayton-Audio-DAEX25FHE-4-Framed-High-Efficiency-25mm-Exciter-295-224?quantity=1">Dayton autio exciter</a>,{" "} 
                <a style={{
                    color: "black"
                }} href="https://www.parts-express.com/PE3W-BT-Rechargeable-Portable-3W-Bluetooth-Amplifier-320-630?quantity=1">a bluethooth amplifier</a>, 
                and some fasteners, I turned my old snowboard into a speaker!
            </p>
            <p>This is an extention of DML speakers - there's lots to be found about these online, but to cut to the chase, some snowboards are made of a carbon fiber material with a honeycomb pattern which is suppossed to great for projecting sound.  Below you can see the materials needed as well as a video showing it in action.</p>
            <p>Extensions - I love this speaker but of course there is more to do.  I hope to make a 3d printed casing to house the companents and allow it to be screwed on and off using the binding holes.  I'd also like to experiment with different exciters and using multiple to see if I can get the sound to be cleaner and louder</p>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <img width="20%" src={require('./pics/project/speaker/exciter.png')} />
                    <img width="20%" src={require('./pics/project/speaker/board.png')} />
                    <img width="20%" src={require('./pics/project/speaker/fasteners.png')} />
                    <img width="20%" src={require('./pics/project/speaker/amp.png')} />
                </Box>
                <Box style={{ width: "30%", marginTop: "10px" }}>
                    <video controls src={require('./speaker.mov')} style={{ width: "100%" }} />
                </Box>
            </Box>
        </Card>
        <Box style={{height: "10px"}}/>
        <Card summary="Slackronym" image={require("./pics/project/slackronym/slack.png")}> 
            <p>
            I built a {" "}
            <a href="https://github.com/tristan-gardner/slackronym"
                style={{color: "black"}}
            >custom slack</a> {" "}
            bot that helps define and lookup company specific lingo.  Similar bots exist on the market, but if they store the data its in there system, which many companies are not ok with given they may use it to store info about core features or upcoming products. </p>
            <p>The backend is built with python django and is intended to be hosted as a deployed Azure function.  Below is an example of recalling a predefined term ARR</p>
            <p>Extensions - make a constantly hosted version (slack has a hard 3 second limit for bot calls, so if the severless function needs to start up it fails).  Allow alias definitions so that you do not have to add definitions for two terms that mean the same thing.</p>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <img width="90%" src={require('./pics/project/slackronym/slack_message.png')} />
                </Box>
            </Box>
        </Card>
        <Card summary="This Website" image={require("./pics/project/site/site.jpeg")}> 
            <p>This site is built using typescript, react, and material-ui.  It's hosted as a github site.</p>
            <p>Extensions - continue to add projects, photos, etc. Clean up the video in the snowboard speaker project card.  Figure out how to allow pdf or png downloading of a locally saved file.</p>
        </Card>
    </>
}