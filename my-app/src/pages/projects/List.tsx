import Box from "@material-ui/core/Box"
import React from "react"
import { Card } from "./Card"
import { nobotContent, speakerContent, watererContent } from "./content"


interface ProjectListProps {
    openModal: (images: any[], index: number) => void
}

const Spacer = (): JSX.Element => {
    return <Box style={{height: "25px"}}/>
}


export const ProjectList = ({
    openModal
}: ProjectListProps) => {
    const setNobotProject = () => {
        openModal(nobotContent, 0)
    }

    const setSpeakerProject = () => {
        openModal(speakerContent, 0)
    }

    const setWatererProject = () => {
        openModal(watererContent, 0)
    }

    return <>
        <Card 
            summary="Automatic Plant Waterer" 
            image={"https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787569/final_setup_go7pek.jpg"}
            onClick={setWatererProject}
        >
            <p>
                This was my first project getting into robotics.  
                It uses an arduino controller to read inputs from two soil moisture sensors.  
                When it decides the soil is dry for a given plant, it moves the hose into positions and pumps water.
            </p>
            <p>
                The movement is achieved using a stepper motor and a timing belt.  
                I made a small gate out of carboard to tie the movement of the hose with that of the belt.
            </p>
            <p>
                The wiring diagram comes from tinker CAD which does not have every hardware piece so some substitutions are made e.g. the pump is shown as a DC motor.  
                The full diagram can be found <a target="_blank" href={"https://www.tinkercad.com/things/iUfKlWaL1I4?sharecode=uOX0T7HsVTXXm5GdxWj3Niw0dW8fV_me2L-ZcklGWy0"}>
                    here.</a>
            </p>
            <p> 
                Extensions - I think an obvious next step is to 3d print a better chasis for this project and get away from the carboard rig, it was great for making a low-fi set up, but wont last over time.
                Also more plants!
            </p>
        </Card>
        <Spacer />
        <Card 
            summary="Nobot Ai Detection" 
            image={require("../pics/project/nobot/logo.png")}
            onClick={setNobotProject}
        >
            <p>
                Nobot was an attempt to build a service which detected AI generated content in student submission.  Educators were meant to connect their google classrooms and send assignments to be scored.  The service would then return a score for each student and a breakdown of the submissions.
            </p>
            <p>
                The tool was built using python, react, typescript, and deployed on Azure.  It used an AI model to detect AI content.
            </p>
            <p> Unfortunatly turnitin.com an already established player beat us to the punch </p>
        </Card>
        <Spacer />
        <Card 
            summary="The Santa Cruz Speaker" 
            image={"https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789590/speaker_ymnldv.png"}
            onClick={setSpeakerProject}
        > 
            <p>Using a {" "}
                <a style={{color: 'black'}} href="https://www.parts-express.com/Dayton-Audio-DAEX25FHE-4-Framed-High-Efficiency-25mm-Exciter-295-224?quantity=1">Dayton autio exciter</a>,{" "} 
                <a style={{
                    color: "black"
                }} href="https://www.parts-express.com/PE3W-BT-Rechargeable-Portable-3W-Bluetooth-Amplifier-320-630?quantity=1">a bluethooth amplifier</a>, 
                and some fasteners, I turned my old snowboard into a speaker!
            </p>
            <p>This is an extention of DML speakers - there's lots to be found about these online, but to cut to the chase, some snowboards are made of a carbon fiber material with a honeycomb pattern which is suppossed to great for projecting sound.  Below you can see the materials needed as well as a video showing it in action.</p>
            <p>Extensions - I love this speaker but of course there is more to do.  I hope to make a 3d printed casing to house the companents and allow it to be screwed on and off using the binding holes.  I'd also like to experiment with different exciters and using multiple to see if I can get the sound to be cleaner and louder</p>
        </Card>
        <Spacer />
        <Card summary="Slackronym" image={require("../pics/project/slackronym/slack.png")}> 
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
                    <img width="90%" src={require('../pics/project/slackronym/slack_message.png')} />
                </Box>
            </Box>
        </Card>
        <Spacer />
        <Card summary="This Website" image={require("../pics/project/site/site.jpeg")}> 
            <p>This site is built using typescript, react, and material-ui.  It's hosted as a github site.</p>
            <p>Extensions - continue to add projects, photos, etc. Clean up the video in the snowboard speaker project card.  Figure out how to allow pdf or png downloading of a locally saved file.</p>
        </Card>
    </>
}