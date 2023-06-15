import { withStyles } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Modal from "@material-ui/core/Modal"
import { ChevronLeft, ChevronRight, Close } from "@material-ui/icons"
import React from "react"

const StyledChevronButton = withStyles((theme) => ({
    root: {
      position: "absolute",
      top: "50%",
      zIndex: 1,
      backgroundColor: theme.palette.common.black,
      borderRadius: "50%",
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      opacity: 0.8,
      "&:hover": {
        opacity: 1,
      },
    },
  }))(IconButton);

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

export const Carrousel = ({
    modalOpen,
    closeModal,
    showNextImage,
    showPreviousImage,
    modalImages,
    modalIndex,
}: CarrouselProps) => {
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
              <StyledChevronButton onClick={showPreviousImage} style={{ left: "8px" }}>
                <ChevronLeft fontSize="large" />
              </StyledChevronButton>
              {modalImages.length > 0 ? modalImages[modalIndex].isVideo ? 
                <video controls src={modalImages[modalIndex].source} style={{
                    maxWidth: "80vw",
                    maxHeight: "80vh",
                    display: "block",
                    margin: "0 auto",
                    position: "relative",
                    top: "50%",
                    transform: "translateY(10%)",
                }} />
              : <img src={modalImages[modalIndex].source} style={{
                    maxWidth: "80vw",
                    maxHeight: "80vh",
                    display: "block",
                    margin: "0 auto",
                    position: "relative",
                    top: "50%",
                    transform: "translateY(10%)",
                }} /> :<></>}
              <StyledChevronButton onClick={showNextImage} style={{ right: "8px" }}>
                <ChevronRight fontSize="large" />
              </StyledChevronButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };