import React from 'react';
import styled from 'styled-components';

const BoxSlide = styled.div`
    width: 100%;
    height: 39vh;
    /* margin-left: 50px; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1%;
    /* border-left: solid red 1px; */
    transition: 500ms all ease-in-out;
    z-index: 2;
`

const DisplayImage = ({
    images = [],
}) => {

  return <>
        <BoxSlide style={{backgroundImage:`url(${images})`}}/>   
  </>;
};

export default DisplayImage;
