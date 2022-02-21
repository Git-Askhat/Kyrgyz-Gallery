import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/navbar/index';
import SwipeToSlide from '../carousel/index';
import MainSearch from '../main_search/index'
import Gallery from '../gallery/galleryVector';
import '../../styles/global.scss';

export default function VectorsComponent() {
  return (
    <Div>
      <Container>
        <Navbar active='/vectors' />
        <img src='./vector.svg' alt='' />
        <MainSearch search_text="videos"/>
      </Container>
      <SwipeToSlide />
      <Gallery />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;

  h1 {
    color: white;
  }
`;

const Container = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100vh;
  overflow: hidden;

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  }
`;