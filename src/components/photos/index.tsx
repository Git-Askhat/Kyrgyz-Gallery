import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';
import BackgroundImg from '../../assets/images/dark.jpg';
import SwipeToSlide from '../carousel';
import MainSearch from '../main_search/index';

export default function PhotosComponent() {
  return (
    <Div>
      <Background>
        <img src={BackgroundImg} alt='' />
        <Navbar active='/photos' />
        <MainSearch search_text='Image' />
      </Background>
      <SwipeToSlide />
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
      <h1>*</h1>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;
  z-index: 100;
`;

const Background = styled.div`
  position: relative;
  /* justify-content: center; */

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  }

  .main-search {
  }
`;
