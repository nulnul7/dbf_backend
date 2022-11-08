import React from 'react';
import LoadingPict from '../assets/LoadingBunny.gif' 
import styled from 'styled-components'

const LoadingInfo = styled.h3`
    color: gray;
    font-weight: 400;
    margin-top: 70px;
`
const ImageLoading = styled.img`
    width: 300px;
    margin-top: 20px;
`
const LoadingWrap = styled.div`
    width: 30vw;
    margin: 0 auto;
    display: block;
    text-align: center;
`

const Loading = () => {
  return <LoadingWrap>
      <LoadingInfo>please wait, data is on the way...</LoadingInfo>
      <ImageLoading src={LoadingPict}/>
  </LoadingWrap>;
};

export default Loading;
