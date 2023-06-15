import React, { useState } from "react";
import { Carrousel, CarrouselContent } from "./projects/Carrousel";
import { ProjectList } from "./projects/List";


export const Projects = (): JSX.Element => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState<CarrouselContent[]>([]);
    const [modalIndex, setModalIndex] = useState(0);

    const openModal = (images: CarrouselContent[], index: number) => {
        setModalImages(images);
        setModalIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const showPreviousImage = () => {
        setModalIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : modalImages.length - 1));
    };

    const showNextImage = () => {
        setModalIndex((prevIndex) => (prevIndex < modalImages.length - 1 ? prevIndex + 1 : 0));
    };

    return <>
        <Carrousel 
            modalImages={modalImages} 
            modalOpen={modalOpen} 
            modalIndex={modalIndex}
            showNextImage={showNextImage}
            showPreviousImage={showPreviousImage}
            closeModal={closeModal}
        />
        <ProjectList openModal={openModal}/>
    </>
}