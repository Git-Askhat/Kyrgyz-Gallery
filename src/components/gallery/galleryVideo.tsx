import React, { useState } from 'react';

import { mp4Data } from './galleryData';
import './galleryVideo.scss';

export default function GalleryVideo() {
  return (
    <div className='gallery'>
      {mp4Data.map((item, index) => {
        return <SingleVideo mp4Src={item.mp4Src} id={item.id} />;
      })}
    </div>
  );
}

interface VideoProps {
  mp4Src: string;
  id: any;
}

const SingleVideo = ({ mp4Src, id }: VideoProps) => {
  const [isPlay, setPlay] = useState<boolean>(false);

  const onMouseEnter = (item: any) => {
    console.log('enter', item);
    setPlay(true);
  };

  const onMouseLeave = (item: any) => {
    console.log('leave', item);
    setPlay(false);
  };

  return (
    <div className='pics'>
      <video
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave(id)}
        // onMouseOver={(event) => event.target.play()}
        // onMouseOut={(event) => event.target.pause()}
        autoPlay={isPlay} 
        loop={isPlay}
        muted={isPlay}
        style={{ width: '100%' }}>
        <source src={mp4Src} type='video/mp4' />
      </video>
      {/* <img src={item.mp4Src} style={{width: '100%'}} /> */}
    </div>
  );
};
