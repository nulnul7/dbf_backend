import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import gambar from '../assets/defaultImages.jpeg'
import { Context } from '../context'


const FrameImage = styled.div`
      width: 80vw;
      height: 67vh;
      margin: 75px auto 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
`
const DotWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    padding-left: 30px;
    width: 50%;
    justify-content: center;
`
const Dot = styled.div`
    width: 18px;
    height: 6px;
    border-radius: 15%;
    background-color: ${(props) => props.activeDot ? 'greenyellow' : 'darkgray'};
    z-index: 10;
    margin-top: 20px;
    margin-right: 10px;
    transition: all 500ms ease-in-out;
    cursor: pointer;
`
const Title = styled.h4`
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top: 30px;
    font-size: 1.1em;
    color: black;
`
const BoxDisplay = styled.img.attrs(props => ({
  src: props.image || gambar
}))`
    height: 80%;
    background-color: green;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
`

// BoxDisplay.defaultProps = {
//   src: gambar,
// }

const Children = styled.div`
    width: 70%;
    font-size: 0.8em;
    font-weight: 400;
    color: darkgray;
`

const PortfolioRendered = ({
  activeDot,
  textData,
  ...props
}) => {


  const context = useContext(Context)

  const { slideStartNumber, categorySlide } = context;
  const [current, setCurrent] = useState(slideStartNumber)

  const slideLength = categorySlide.length

  useEffect(() => {
    const setTimer = setTimeout(() => {
      current < slideLength - 1 ? setCurrent(current + 1) : setCurrent(0);
    }, 7000)
    setTimer();
    return () => clearTimeout(setTimer)
  }, [current])

  let imageSlide = `http://localhost:5000/${categorySlide[current].images}`;
  let titleSlide = categorySlide[current].title;
  let descriptionSlide = categorySlide[current].description;

  return (
    <>

      <FrameImage>
        <BoxDisplay image={imageSlide} />
        <Children>
          <Title>{titleSlide}</Title>
          {descriptionSlide}
        </Children>
      </FrameImage>

      <DotWrapper>
        {
          categorySlide.map((_, i) => (
            <Dot
              key={i}
              activeDot={current === i}
              onClick={() => setCurrent(i)}
            />
          ))
        }
      </DotWrapper>
    </>
  )

};

export default PortfolioRendered;
