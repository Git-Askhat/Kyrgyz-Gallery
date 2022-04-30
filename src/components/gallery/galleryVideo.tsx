import React, { useState, useRef, useEffect } from 'react';

import { mp4Data } from './galleryData';
import styled from 'styled-components';
// import './galleryVideo.scss';

export default function GalleryVideo() {
  return (
    <GalleryContainer>
      {mp4Data.map((item, index) => {
        return <SingleVideo mp4Src={item.mp4Src} id={item.id} />;
      })}
    </GalleryContainer>
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

  // const ref = useRef(null);
  // const [focus, setFocus] = useState(false);

  // const loop = () => {
  //   ref.current.play();
  // };

  // const onEndedLoop = () => {
  //   if (focus) loop(); // when ended check if its focused then loop
  // };

  // useEffect(() => {
  //   if (focus) loop(); // when focused then loop
  // }, [focus]);

  return (
    <div>
      <video
        // onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave(id)}
        // onMouseOver={(event) => event.target.play()}
        // onMouseOut={(event) => event.target.pause()}
        style={{ width: '100%' }}
        autoPlay={isPlay}
        loop={isPlay}
        muted={isPlay}
        onMouseEnter={onMouseEnter}
        // id={id}
        // ref={ref}
        // style={{ width: "300px" }}
        // autoPlay
        // onMouseOver={() => setFocus(true)}
        // onMouseOut={() => setFocus(false)}
        // muted={true}
        // // src={testVideo}
        // onEnded={onEndedLoop}
        >
        <source src={mp4Src} type='video/mp4' />
      </video>
      {/* <img src={item.mp4Src} style={{width: '100%'}} /> */}
    </div>
  );
};

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
`;

// const VideoContainer = styled.div`
//   cursor: pointer;
//   margin-bottom: 12px;

//   :hover {
//     ${onMouseEnter}
//   }
// `;
