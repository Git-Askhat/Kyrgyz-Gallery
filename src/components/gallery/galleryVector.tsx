import React, { useState } from 'react';

import { vecData } from './galleryData';
import SvgClose from '../../assets/svg/close';
import './galleryImg.scss';


export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc: any) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
    <div className={model ? "model open" : "model"}>
      <img src={tempImgSrc} alt="" />
      <SvgClose onClick={() => setModel(false)}/>
    </div>
    <div className='gallery'>
      {vecData.map((item, index) => {
        return (
          <div className='pics' key={index} onClick={() => getImg(item.src)}>
            <img src={item.src} style={{ width: '100%' }} />
          </div>
        );
      })}
    </div>
    </>
  );
}
