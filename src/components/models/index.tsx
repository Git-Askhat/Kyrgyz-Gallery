import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/navbar/index';
import bgVideo from '../../assets/videos/snow.mp4';
import SwipeToSlide from '../carousel/index';
import MainSearch from '../main_search/';
import '../../styles/global.scss';
import { useTranslation } from 'react-i18next';

export default function ModelsComponent() {
  const { t } = useTranslation();
  
  return (
    <Div>
      <Background>
        <Navbar active='/models' />
        <Video autoPlay loop muted>
          <source src={bgVideo} type='video/mp4' />
        </Video>
        <MainSearch search_text={t('search_text')} aUrl="Image" />
      </Background>
      <SwipeToSlide />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  background: white;
  overflow: hidden;
`;

const Background = styled.div`
  position: relative;
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  /* height: 100vh; */
`;
