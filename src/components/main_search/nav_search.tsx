import React from 'react';
import styled from 'styled-components';

import Search from '../../assets/svg/search';
import Down from '../../assets/svg/Down';

export default function MainSearch(props: { search_text: string }) {
  return (
    <SearchContainer>
      <IconButton>
        <Search />
      </IconButton>
      <SearchInput placeholder='Search images, videos and 3D models' />
      <DropDwon>
        <a>{props.search_text}</a>
        <Down className='down' />
      </DropDwon>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  margin-left: 40px;
  position: absolute;
  width: 675px;
  height: 42px;
  background: #f6f6f6;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;
  border-radius: 10px;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const SearchInput = styled.input`
  padding-left: 48px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;

  &:hover {
    color: white;
    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000;
    transition: 0.2s ease;
    transform: scale(0.6);
    opacity: 0;
  }
`;

const DropDwon = styled.div`
  right: 30px;
  width: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:  flex-end;

  a {
    font-size: 20px;
    color: #5B5B5B;
  }

  .down {
    margin-left: 10px;
  }
  
  }
`;
