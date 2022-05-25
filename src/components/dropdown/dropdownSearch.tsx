import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { actionCreators, State } from '../../redux';

export default function SearchDropdown() {
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(false);

  const { i18n } = useTranslation();

  return (
    <Container>
      <ul
        className={dropdown ? 'services-submenu clicked' : 'services-submenu'}
        onClick={() => setDropdown(!dropdown)}>
        <li>
          <StyledButton onClick={() => setDropdown(!dropdown)}>
            English
          </StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => setDropdown(!dropdown)}>
            Kyrgyz
          </StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => setDropdown(!dropdown)}>
            Russian
          </StyledButton>
        </li>
      </ul>
    </Container>
  );
}

const StyledButton = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  padding: 0.3rem 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const Container = styled.div`
  .services-submenu {
    width: 10rem;
    position: absolute;
    top: 10px;
    list-style: none;
    text-align: start;
  }

  .services-submenu li {
    background: #ffffff;
    cursor: pointer;
    text-decoration: none;
  }

  .services-submenu li a:hover {
    background: rgb(0, 175, 175);
  }

  .services-submenu.clicked {
    display: none;
  }

  .submenu-item {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    padding: 16px;
  }
`;
