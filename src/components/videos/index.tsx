import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Navbar from '../navbar/Navbar'
import video from '../../assets/videos/night-sky.mp4';
import SwipeToSlide from '../carousel';

export default function VideosComponent() {
  return (
    <Div>
      <Global />
      <Background>
        <Nav />
        <Video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </Video>
      </Background>
      <SwipeToSlide />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;
`

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Nav = styled(Navbar)`
  position: absolute;
  z-index: 2;
`

const Video = styled.video`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
`

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
