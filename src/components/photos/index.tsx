import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';
import BackgroundImg from '../../assets/images/dark.jpg';
import SwipeToSlide from '../carousel';
import MainSearch from '../main_search/index';
import SignIn from '../sign-in/index';
import GalleryIV from '../gallery/galleryImg';
import { imgData } from '../gallery/galleryData';

export default function PhotosComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Div>
      <Background>
        <img src={BackgroundImg} alt='' />
        <Navbar active='/photos' token={true}/>
        <MainSearch search_text='Image' />
      </Background>
      <SignIn isOpen={isOpen} close={() => setOpen(false)} signUpModel={undefined} />
      <SwipeToSlide />
      <GalleryIV />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;
  z-index: 100;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background: maroon;
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
