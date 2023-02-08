import React from "react";
import { Card } from "./projects/Card";
import { Box } from "@material-ui/core";


export const Projects = (): JSX.Element => {
    return <>
        <Card summary="The Santa Cruz Speaker" image={require("./pics/project/speaker/speaker.png")}> 
            <p>Using a {" "}
                <a color="white" href="https://www.parts-express.com/Dayton-Audio-DAEX25FHE-4-Framed-High-Efficiency-25mm-Exciter-295-224?quantity=1">Dayton autio exciter</a>,{" "} 
                <a style={{
                    color: "white"
                }} href="https://www.parts-express.com/PE3W-BT-Rechargeable-Portable-3W-Bluetooth-Amplifier-320-630?quantity=1">a bluethooth amplifier</a>, 
                and some fasteners, I turned my old snowboard into a speaker!
            </p>
            <p>This is an extention of DML speakers - there's lots to be found about these online.  But some snowboards are made of a carbon fiber honeycomb material which is suppossed to great for projecting sound</p>
            <Box style={{
                flexDirection: 'row',
                alignContent: 'space-between'
            }}>
                <img width="20%" src={require('./pics/project/speaker/exciter.png')} />
                <img width="20%" src={require('./pics/project/speaker/board.png')} />
                <img width="20%" src={require('./pics/project/speaker/fasteners.png')} />
                <img width="20%" src={require('./pics/project/speaker/amp.png')} />
            </Box>
        </Card>
    </>
}