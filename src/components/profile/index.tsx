import React, { useState } from 'react';
import styled from 'styled-components';

import NavbarwithSearch from '../navbar/navbar.with.search';
import profile from '../../assets/images/profile/profile.jpg';
import Instagram from '../../assets/svg/Instagram';
import Telegram from '../../assets/svg/Telegram';
import SvgLink from '../../assets/svg/Link';
import '../../styles/global.scss';
import MediaTabs from './tabs/index'
import PhotosTab from './tabs/photos/index'


interface Info {
  following: number;
  followers: number;
  totalViews: number;
  instagram: string;
  telegram: string;
  link: string;
}

// const Props;
// {
//   following: 0;
//   followers: 0;
//   totalViews: 0;
//   instagram: '';
//   telegram: '';
//   link: '';
// }
// [];

export default function ProfileComponent() {
  /*props: {
  following: number;
  followers: number;
  totalViews: number;
  instagram: string;
  telegram: string;
  link: string;
}*/

const [activeTab, setActiveTab] = useState(1);

const handleChange = (e: any, value: any) => {
  setActiveTab(value);
};
  return (
    <>
      <NavbarwithSearch />
      <ProfileWrapper>
        <Line />
        <ProfileContainer>
          <div className='div1'>
            <img src={profile} alt='' />
          </div>
          <div className='div2'>
            <div className='follows'>
              <p>132 following</p>
              <p className='followers'>934 followers</p>
              <p className='total-views'>1146 Total views</p>
            </div>
            <div className='buttons'>
              <ButtonFollow>Follow</ButtonFollow>
              <ButtonMessage>Message</ButtonMessage>
              <Coffee>Coffee</Coffee>
            </div>
            <div className='info'>
              <InstagramDiv>
                <Instagram />
                <p>shailoobekov_19</p>
              </InstagramDiv>
              <TelegramDiv>
                <Telegram />
                <p>t.me/wallpaper4k_Picture</p>
              </TelegramDiv>
              <LinkDiv>
                <SvgLink />
                <p>https://www.pexels.com/@askhat-shailoobekov-113472172</p>
              </LinkDiv>
              <Description>
                <p>📸 Photographer </p>
                <p>💻 Programmer & designer</p>
              </Description>
            </div>
          </div>
        </ProfileContainer>
      </ProfileWrapper>
      <MediaTabs />
      {/* <PhotosTab /> */}
    </>
  );
}

const Line = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid#000000;
  margin-top: 80px;
`;

const ProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  /* background: gray; */

  img {
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
  }
`;

const ProfileContainer = styled.div`
  margin-top: -45px;
  display: grid;
  height: auto;
  grid-template-columns: 2fr 3fr;

  .div1 {
    display: flex;
    justify-content: center;
  }

  .div2 {
    margin-top: 16px;
    .follows {
      display: flex;
      font-family: 'Quicksand' 'san-serif';
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;

      .followers {
        margin-left: 40px;
      }

      .total-views {
        margin-left: 40px;
      }
    }

    .buttons {
      margin-top: 35px;
    }

    .info {
      margin-top: 30px;
    }
  }
`;

const ButtonFollow = styled.button`
  background: #0c24a4;
  border-radius: 3px;
  cursor: pointer;

  font-family: 'Quicksand' 'san-serif';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  border: none;
  color: #ffffff;
  padding: 12px 30px;
`;

const ButtonMessage = styled(ButtonFollow)`
  margin-left: 35px;
`;

const Coffee = styled(ButtonFollow)`
  background: #ffffff;
  border: 2px solid #0c24a4;
  font-weight: normal;
  box-sizing: border-box;
  color: #0c24a4;
  margin-left: 35px;
  padding: 10px 28px;
`;

const InstagramDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Quicksand' 'san-serif';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;

  p {
    margin-left: 3px;
    overflow: hidden;
    max-width: 36ch;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const TelegramDiv = styled(InstagramDiv)`
  color: #01124e;
  margin-top: 10px;
`;

const LinkDiv = styled(TelegramDiv)``;

const Description = styled.div`
  margin-top: 20px;

  p {
    margin-top: 5px;
    font-size: 20px;
  }
`;

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
