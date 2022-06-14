import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';
import video from '../../assets/videos/night-sky.mp4';
import SwipeToSlide from '../carousel';
import MainSearch from '../main_search/index';
import GalleryVideo from '../gallery/galleryVideo';
import '../../styles/global.scss';
import { useTranslation } from 'react-i18next';
import { collection, getDocs } from 'firebase/firestore';

export default function VideosComponent() {
  const { t } = useTranslation();

  const [posts, setPosts] = useState([]);
  const [vid, setVid] = useState('');
  // const postsCollectionRef = collection(db, "posts");
  // const videoColl = collection(db, "videos");

  useEffect(() => {
    const getPosts = async () => {
      // const data = await getDocs(postsCollectionRef);
      // const video = await getDocs(collection(db, `videos/${data.video_id}`));
      // setVid(video);
      // setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      // console.log("Fetched: ", data);
    };

    getPosts();
  }, [])

  return (
    <Div>
      <Background>
        <Nav active='/videos' />
        <Video autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </Video>
        <MainSearch search_text={t('search_text')} aUrl="Image" />
      </Background>
      <SwipeToSlide />
      <GalleryVideo />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;
`;

const Nav = styled(Navbar)`
  position: absolute;
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

const Video = styled.video`
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;
`;
