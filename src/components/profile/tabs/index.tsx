import React, { useState } from 'react';
import styled from 'styled-components';

import GalleryImg from '../../gallery/galleryImg';
import { CategoryTab, CategoryTabs } from './tabs';

export default function MediaTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e: any, value: any) => {
    setActiveTab(value);
  };
  
  return (
    <Media>
      <CategoryTabs selectedTab={activeTab} onChange={handleChange}>
        <CategoryTab label='Photos' value={1}></CategoryTab>
        <CategoryTab label='Videos' value={2}></CategoryTab>
        <CategoryTab label='Vectors' value={3}></CategoryTab>
        <CategoryTab label='3D Models' value={4}></CategoryTab>
      </CategoryTabs>
      <div className='line-categ' />
      <Popularity>
        <div className='recent'>
          <div className='title'>
            <p>Recent</p>
          </div>
          <div className='line'>
            <div />
          </div>
        </div>
        <div className='popular'>
          <div className='title'>
            <p>Popular</p>
          </div>
          <div className='line'>
            <div />
          </div>
        </div>
      </Popularity>
      <GalleryImg />
    </Media>
  );
}

const Media = styled.div`
  margin-top: 80px;
  .line-categ {
    position: relative;
    width: 100%;
    border: 1px solid #000000;
  }
`;

const Categories = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 100px;
  margin-bottom: -1px;
  z-index: 100;

  font-family: 'Quicksand' 'san-serif';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;

  p {
    margin-left: 43px;
    padding-bottom: 20px;
    border-bottom: 3px solid #000;
    cursor: pointer;
  }
`;

const Popularity = styled.div`
  margin-top: 18px;
  display: grid;
  height: 40px;
  grid-template-columns: 3fr 1fr;

  .recent {
    cursor: pointer;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      font-family: 'Quicksand' 'san-serif';
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
    }
    .line {
      display: flex;
      justify-content: center;

      div {
        width: 90%;
        border: 2px solid #000000;
      }
    }
  }

  .popular {
    cursor: pointer;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;

      font-family: 'Quicksand' 'san-serif';
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
    }
    .line {
      display: flex;
      justify-content: center;

      div {
        width: 90%;
        border: 1px solid #000000;
      }
    }
  }
`;
