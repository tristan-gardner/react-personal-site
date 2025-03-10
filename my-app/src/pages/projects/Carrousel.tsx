import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Modal from "@material-ui/core/Modal"
import { ChevronLeft, ChevronRight, Close } from "@material-ui/icons"
import React, { useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from "@mui/material/styles";

const StyledChevronButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  backgroundColor: theme.palette.common.black,
  borderRadius: "50%",
  padding: theme.spacing(1),
  color: theme.palette.common.white,
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
}));

export interface CarrouselContent {
    source: string,
    isVideo: boolean
}

interface CarrouselProps {
    modalOpen: boolean
    closeModal: () => void
    showPreviousImage: () => void
    showNextImage: () => void
    modalImages: CarrouselContent[]
    modalIndex: number
}

const Content = (
    modalImages: CarrouselContent[],
    modalIndex: number,
    loading: boolean,
    setLoading: (load: boolean) => void
): JSX.Element => {
    const handleLoaded = () => {
        setLoading(false)
        console.log("loaded source")
    }

    return (<>
        {modalImages.length > 0 ? modalImages[modalIndex].isVideo ? 
            <video 
                controls src={modalImages[modalIndex].source} 
                style={{
                    maxWidth: "60vw",
                    maxHeight: "60vh",
                    display: loading ? 'none' : "block",
                    margin: "0 auto",
                    position: "relative",
                    top: "50%",
                    transform: "translateY(10%)",
                }}
                onLoad={handleLoaded}
            />
        : <img 
            src={modalImages[modalIndex].source} 
            style={{
                maxWidth: "60vw",
                maxHeight: "60vh",
                display: loading ? 'none' : "block",
                margin: "0 auto",
                position: "relative",
                top: "50%",
                transform: "translateY(10%)",
            }}
            onLoad={handleLoaded} 
        /> :<></>}
        {loading &&
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                    width: "100%",
                }}
            >
                <CircularProgress />
            </Box>
        }
    </>)
}

export const Carrousel = ({
    modalOpen,
    closeModal,
    showNextImage,
    showPreviousImage,
    modalImages,
    modalIndex,
}: CarrouselProps) => {
    const [loading, setLoading] = useState(true)
    
    return (
        <Modal open={modalOpen} onClose={closeModal}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
        >
          <Box position="relative">
            <IconButton
              style={{ position: "absolute", top: "8px", right: "8px", zIndex: 1 }}
              onClick={closeModal}
            >
              <Close fontSize="large" />
            </IconButton>
            <Box display="flex" alignItems="center" position="relative">
              <StyledChevronButton onClick={showPreviousImage} style={{ left: "8px",position: "absolute" }}>
                <ChevronLeft fontSize="large" />
              </StyledChevronButton>
              {Content(modalImages, modalIndex, loading, setLoading)}
              <StyledChevronButton onClick={showNextImage} style={{ right: "8px",position: "absolute" }}>
                <ChevronRight fontSize="large" />
              </StyledChevronButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };