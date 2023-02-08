import React, { useState, useEffect } from 'react';

interface Props {
  currentIndex: number
  images: string[];
  alt?: string
}

export const useTimeIndexIncrementer = (
    maxIndex: number,
    interval: number
): number => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % maxIndex);
        }, interval);

        return () => {
        clearInterval(intervalId);
        };
    }, [currentIndex, maxIndex]);

    return currentIndex
}

const avatarStyles = {
    width: '200px',
    height: '200px',
    display: 'block',
    borderRadius: '50%',
  }

const ImageFader: React.FC<Props> = ({ currentIndex, images, alt="" }) => {

  return (
    <div style={{position: "relative"}}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          style={{
            ...avatarStyles,
            position: 'absolute',
            left: '-100px',
            top: '-200px',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
          alt={alt}
        />
      ))}
    </div>
  );
};

export default ImageFader;