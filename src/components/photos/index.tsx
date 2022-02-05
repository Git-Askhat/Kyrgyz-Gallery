import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';
import BackgroundImg from '../../assets/images/dark.jpg';
import SwipeToSlide from '../carousel';

export default function PhotosComponent() {
  return (
    <Div>
      <Background>
        <img src={BackgroundImg} alt='' />
        <Navbar active='/photos' />
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
