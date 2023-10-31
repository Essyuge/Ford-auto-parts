import  { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
border: 3px solid red;
background-size: contain;
  display: flex;
  overflow: hidden;
  max-height: 800px;
max-width: 100%;
width: 100%;
height: 800px;
  margin: 0 auto;
 
`;

const Slide = styled.div`
  min-width: 100%;
  flex: 1;
  transition: transform 0.3s ease-in-out;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  background-size: 10%;
  
`;

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = (currentIndex + 1) % images.length;
    const interval = setInterval(() => {
      setCurrentIndex(nextSlide);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [currentIndex, images]);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <SlideImage src={image} alt={`Slide ${index + 1}`} />
        </Slide>
      ))}
    </SliderContainer>
  );
};

export default Slider;

