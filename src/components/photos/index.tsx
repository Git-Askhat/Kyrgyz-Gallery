import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';
import BackgroundImg from '../../assets/images/dark.jpg';
import SwipeToSlide from '../carousel';
import MainSearch from '../main_search/index';
import SignIn from '../sign-in/index';
import GalleryIV from '../gallery/galleryImg';
import { imgData } from '../gallery/galleryData';
import { useTranslation } from 'react-i18next';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase/firebase.utils';

export default function PhotosComponent() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [vid, setVid] = useState('');
  const postsCollectionRef = collection(db, "posts");
  const videoColl = collection(db, "videos");


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      // const video = await getDocs(collection(db, `videos/${data.video_id}`));
      // setVid(video);
      // setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      // console.log("Fetched: ", data);
    };

    getPosts();
  }, [])

  let lang = {chuy: '', naryn: '', issyk_kul: '', jalal_abad: '', osh: '', batken: '', talas: ''};

  // Object.keys(lang).forEach(key => {
  //   lang[key] = t(`${key}`)
  // });

  // console.log("Data", posts);

  return (
    <Div>
      <Background>
        <img src={BackgroundImg} alt='' />
        <Navbar active='/photos'/>
        <MainSearch search_text={t('search_text')} aUrl="Image" />
      </Background>
      {/* <SignIn isOpen={isOpen} close={() => setOpen(false)} signUpModel={undefined} /> */}
      <SwipeToSlide />
      <GalleryIV />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  overflow: hidden;
  background: #000002;
  z-index: 100;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background: maroon;
`;

const Background = styled.div`
  position: relative;
  /* justify-content: center; */

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  }

  .main-search {
  }
`;
