import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from '../navbar/Navbar';
import BackgroundImg from '../../assets/images/dark.jpg';
import SwipeToSlide from '../carousel';

export default function PhotosComponent() {
  return (
    <Div>
      <Global />
      <Background>
        <img src={BackgroundImg} alt='' />
        <Navbar />
      </Background>
      <SwipeToSlide />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;
`;

const Background = styled.div`
  position: relative;

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  }
`;

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
