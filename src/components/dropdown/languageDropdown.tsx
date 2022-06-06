import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import './dropdown.scss';

export default function LanguageDropdown() {
  
  const [dropdown, setDropdown] = useState(false);

  const { i18n } = useTranslation();

  const engChange = () => {
    i18n.changeLanguage('en');
    setDropdown(false);
  };

  const kyrChange = () => {
    i18n.changeLanguage('kg');
    setDropdown(false);
  };

  const rusChange = () => {
    i18n.changeLanguage('ru');
    setDropdown(false);
  };

  return (
    <>
      <ul
        className={dropdown ? 'services-submenu clicked' : 'services-submenu'}
        onClick={() => setDropdown(!dropdown)}>
        <li>
          <StyledButton onClick={engChange}>English</StyledButton>
        </li>
        <li>
          <StyledButton onClick={kyrChange}>Kyrgyz</StyledButton>
        </li>
        <li>
          <StyledButton onClick={rusChange}>Russian</StyledButton>
        </li>
      </ul>
    </>
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
