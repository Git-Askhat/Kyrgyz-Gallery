import React from 'react';
import styled from 'styled-components';

import SvgLike from '../../assets/svg/Like';
import profile from '../../assets/images/profile/profile.jpg';
import SvgDownload from '../../assets/svg/Download';
import SvgShare from '../../assets/svg/Share';
// import Google from '../../assets/svg/Google';

export default function DetailHeader() {
  return (
    <Header>
      <DivLeft>
        <ProfileDiv>
          <img src={profile} alt='' className='image-prof' />
          <div className='user-info'>
            <p className='user'>Askhat Shailoobekov</p>
            <p className='user'>132 followers</p>
          </div>
        </ProfileDiv>
        <FollowButton>Follow</FollowButton>
        <CoffeeButton>Coffee</CoffeeButton>
      </DivLeft>
      <DivRight>
        <ShareButton>
          <SvgShare />
        </ShareButton>
        <LikeButton>
          <SvgLike className='like' /> Like
        </LikeButton>
        <SaveButton>Save</SaveButton>
        <DownloadContainer>
          <DownloadButton>Free Download</DownloadButton>
          <Resolution>
            <SvgDownload />
          </Resolution>
        </DownloadContainer>
      </DivRight>
    </Header>
  );
}

const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  border-bottom: 2px solid #c4c4c4;
`;

const DivLeft = styled.div`
  display: flex;
  margin-left: 10px;
`;

const DivRight = styled.div`
  display: flex;
  margin-right: 10px;
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;

  .image-prof {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-size: cover;
    object-fit: cover;
    z-index: 100;
    padding: 0;
  }

  .user-info {
    display: block;
    align-items: center;
    margin-left: 12px;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #000000;
    }
  }
`;

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.7rem 2rem;
  border: none;
  cursor: pointer;

  font-family: 'Quicksand' 'san-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
`;

const FollowButton = styled(StyledButton)`
  background: #5b5b5b;
  color: #ffffff;
  margin-left: 18px;
`;

const CoffeeButton = styled(StyledButton)`
  border: 2px solid #6f4e37;
  color: #6f4e37;
  background: transparent;
  margin-left: 10px;
`;

const LikeButton = styled(StyledButton)`
  background: transparent;
  border: 1px solid #000000;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  .like {
    margin-right: 10px;
  }
`;

const SaveButton = styled(StyledButton)`
  background: transparent;
  border: 1px solid #000000;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const DownloadButton = styled(StyledButton)`
  background: #5b5b5b;
  margin-left: 10px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px 0 0 3px;
  border-right: 1px solid #000000;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const ShareButton = styled(StyledButton)`
  background: transparent;
  border: 1px solid #000000;
  margin-right: 10px;
  justify-content: center;
`;

const Resolution = styled(StyledButton)`
  background: #5b5b5b;
  color: #ffffff;
  display: flex;
  padding: 0.7rem 0.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 0 3px 3px 0;
`;

const DownloadContainer = styled.div`
  display: flex;
`;
