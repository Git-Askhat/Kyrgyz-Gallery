import React from 'react';
import styled from 'styled-components';

import NavbarwithSearch from '../navbar/navbar.with.search';
import SvgUploadImage from '../../assets/svg/upload_image';
import SvgUploadVideo from '../../assets/svg/upload_video';
import SvgUploadVector from '../../assets/svg/upload_vector';
import SvgUploadModel from '../../assets/svg/upload_model';

export default function UploadComponent() {
  return (
    <div>
      <NavbarwithSearch />
      <Container>
        <Description>
          <div className=''>
            <h3 className='title'>Videos</h3>
            <p className='text'>
              MPEG, MOV, and AVI videos up to 300 MB and a minimum resolution of
              1920x800 pixels. Clips should be no longer than 60 seconds.
            </p>
          </div>
          <div className='media-div'>
            <h3 className='title'>Photos/Vectors</h3>
            <p className='text'>
              JPG, PNG, PSD, AI, and SVG images up to 40 MB with at least 3000
              pixels along one side. Image Quality Guidelines...
            </p>
          </div>
          <div className='media-div'>
            <h3 className='title'>3D Models</h3>
            <p className='text'>We support FBX, OBJ, DBLEND, STL, and others</p>
          </div>
        </Description>
        <UploadWrapper>
          <UploadFiles>
            <UplaodFile>
              <UploadButton>
                <SvgUploadImage />
                <span className='upload-type'>Image</span>
              </UploadButton>
              <UploadButton>
                <SvgUploadVideo />
                <span className='upload-type'>Video</span>
              </UploadButton>
              <UploadButton>
                <SvgUploadVector />
                <span className='upload-type'>Vector</span>
              </UploadButton>
              <UploadButton>
                <SvgUploadModel />
                <span className='upload-type'>3D Model</span>
              </UploadButton>
            </UplaodFile>
            <div className='browse-text'>
              <BrowseButton>Browse</BrowseButton>
              <span>or Drag & Drop</span>
            </div>
          </UploadFiles>
        </UploadWrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  margin-top: 120px;
`;

const Description = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  /* background: gray; */

  .media-div {
    margin-top: 50px;
  }

  .title {
    font-size: 18px;
  }

  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
`;

const UploadWrapper = styled.div`
  width: 100%;
  /* background: #424242; */
  padding: 0 30px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  position: relative;
`;

const UploadFiles = styled.div`
  /* width: 100%;
  height: 350px; */
  /* border: 1px dashed #000000; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 353px;
  box-sizing: border-box;

  background: transparent;
  border: 2px dashed #5b5b5b;

  .browse-text {
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
  }
`;

const UplaodFile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  .upload-type {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    color: #000000;
  }
`;

const UploadButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 40px;
  cursor: pointer;
`;

const BrowseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #0c24a4;
`;
 