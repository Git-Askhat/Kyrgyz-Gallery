import React, { useState } from 'react';
import styled from 'styled-components';

import { vecData } from './galleryData';
import SvgClose from '../../assets/svg/close';
import Hover from './hover';

// import './galleryImg.scss';


export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc: any) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
    {/* <div className={model ? "model open" : "model"}>
      <img src={tempImgSrc} alt="" />
      <SvgClose onClick={() => setModel(false)}/>
    </div> */}
    
    <GalleryContainer>
      {vecData.map((item, index) => {
        return (
          <div className='pics' key={index} onClick={() => getImg(item.src)}>
            <img src={item.src} style={{ width: '100%' }} />
            <Hover />
          </div>
        );
      })}
    </GalleryContainer>
    </>
  );
}


const GalleryContainer = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media screen and (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }

  .pics {
    // -webkit-transition: all 350ms ease;
    // transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
    position: relative;

    /* .img-hover {
      display: flex;
    } */
  }

  /* .pics:hover {
    filter: opacity(0.8);
  } */

  .pics:hover .img-hover {
    display: flex;
  }
`;
