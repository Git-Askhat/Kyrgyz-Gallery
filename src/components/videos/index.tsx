import React from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';
import video from '../../assets/videos/night-sky.mp4';
import SwipeToSlide from '../carousel';
import '../../styles/global.scss';

export default function VideosComponent() {
  return (
    <Div>
      <Background>
        <Navbar active='/videos' />
        <Video autoPlay loop muted>
          <source src={video} type='video/mp4' />
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
`;

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
`;

const Video = styled.video`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
`;
