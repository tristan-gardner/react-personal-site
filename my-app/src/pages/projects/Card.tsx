import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";


export interface CardProps {
    image: string
    summary: string
    children: JSX.Element[]
    onClick?: () => void
}

interface ButtonsProps {
    onClick?: () => void
    open: boolean
    setOpen: (open: boolean) => void 
}

const Buttons = ({
    onClick,
    open,
    setOpen
}: ButtonsProps): JSX.Element => {
    if (onClick === undefined) {
        return (
        <Button style={{
            border: '1px solid #eeeeee',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            backgroundColor: '#ffffff'
        }} onClick={() => setOpen(!open)}>
            {open ? "Read less" : "Read more"}
        </Button>)
    }
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
        }}>
            <Button style={{
                    border: '1px solid #eeeeee',
                    borderBottomLeftRadius: '10px',
                    backgroundColor: '#ffffff',
                    width: '50%',
                }} onClick={() => setOpen(!open)}>
                {open ? "Read less" : "Read more"}
            </Button>
            <Button style={{
                    border: '1px solid #eeeeee',
                    borderBottomRightRadius: '10px',
                    backgroundColor: '#ffffff',
                    width: '50%',
                }} onClick={onClick}>
                See more
            </Button>
        </Box>
    )
}

export const Card = ({
    image, 
    summary, 
    children,
    onClick,
}: CardProps): JSX.Element => {
    const [open, setOpen] = useState(false)
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
        }}>
            <Box style={{width: "250px"}}/>
            <Box style={{
                height: '100%',
                display: 'flex',
                borderRadius: '10px',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: '#eeeeee',
            }}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <Box style={{width: '10px'}} />
                    <Box style={{width: '60%'}}>
                        <Typography variant="h3"> {summary} </Typography>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: '40%'
                    }}>
                        <img src={image} 
                            height="100px"
                            style={{borderRadius: "20px"}}
                        />
                    </Box>
                    <Box style={{width: '10px'}} />
                </Box>

                {open ? <Box style={{padding: "10px"}}>
                    {children}
                </Box>: <></>
                }
                <Buttons 
                    open={open}
                    setOpen={setOpen}
                    onClick={onClick}
                />
            </Box>
            <Box style={{width: "250px"}}/>
        </Box>
    )
}