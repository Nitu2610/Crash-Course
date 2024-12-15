import React, { useState, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg } from './images';
import '../../../styles/slideshow.css'

const autoPlayTime = 3000;
const imageSrc = [firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg];

{/* 
const SlidingShow = () => {
   {/* const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayTime);
        return () => clearInterval(interval);
    }, []); // Run only once on mount

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
    };

    const getVisibleImages = () => {
        const totalImages = imageSrc.length;
        return [
            imageSrc[currentIndex % totalImages],
            imageSrc[(currentIndex + 1) % totalImages],
            imageSrc[(currentIndex + 2) % totalImages],
        ];
    };

    return (
        <Box
            position="relative"
            width="100%"
            maxWidth="900px"
            mx="auto"
            overflow="hidden"
        >
            <Flex
                transition="all 0.5s ease"
                transform={`translateX(-${(currentIndex % imageSrc.length) * 100}%)`} // Dynamic translation for sliding effect
                width="100%"
            >
                {getVisibleImages().map((image, index) => (
                    <Box key={index} flex="none" width="33.33%">
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            objectFit="cover"
                            width="100%"
                            height="300px"
                        />
                    </Box>
                ))}
            </Flex>


        </Box>
    );
};*/ }

const SlidingShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, autoPlayTime);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
    };
  
    const getVisibleImages = () => {
      const totalImages = imageSrc.length;
      return [
        imageSrc[currentIndex % totalImages],
        imageSrc[(currentIndex + 1) % totalImages],
        imageSrc[(currentIndex + 2) % totalImages],
      ];
    };
  
    return (
      <div className="slideshow-container">
        <div className="slideshow">
          {getVisibleImages().map((image, index) => (
            <div className="slide" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export { SlidingShow };
