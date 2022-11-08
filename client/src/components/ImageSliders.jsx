import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: solid 3px red;
  height: 75vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`

const Slide = styled.div`
  width:100%;
  height:100%;
  background-size:cover;
  background-position: center;
  flex-shrink: 0;
  transition: 750ms all ease-in-out;
`

// const DotSlide = styled.div`
//   width: 12px;
//   height: 12px;
//   border-radius: 50;
//   margin-left: 5px;
//   color: #e65b5b;
//   position: absolute;
//   right: 15px;
//   bottom: 15px;
// `


const ImageSliders = ({
    images = [], 
    // autoPlay = true,
    // autoPlayTime = 3000,
    ...props
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  function countImages() {
    const newImages = currentImage >= images.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newImages)
    return newImages;
  }

  useEffect(() => {
    const timer = setTimeout (() => {
      countImages()
    }, 3000);

    return () => clearTimeout(timer);

  }, [currentImage])

  return (
    <>
      <Wrapper {...props}>
        { 
          images.map((imageSlide, index)=> (
            <Slide key={index} style={{backgroundImage:`url(${imageSlide})`, marginLeft: index === 0 ? `-${currentImage * 100}%` : 0,}} />
          ))
        }
      </Wrapper>
    </>
  )
    
};

export default ImageSliders;
