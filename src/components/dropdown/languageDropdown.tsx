import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { actionCreators, State } from '../../redux';

import './dropdown.scss';

export default function LanguageDropdown() {
  const dispatch = useDispatch();
  const { englishLanguage, kyrgyzLanguage, russianLanguage } =
    bindActionCreators(actionCreators, dispatch);
  const lang = useSelector((state: State) => state.lang);

  const [dropdown, setDropdown] = useState(false);

  const { i18n } = useTranslation();

  const engChange = () => {
    englishLanguage('en');
    i18n.changeLanguage(lang);
    setDropdown(false);
  };

  const kyrChange = () => {
    kyrgyzLanguage('kg');
    i18n.changeLanguage(lang);
    setDropdown(false);
  };

  const rusChange = () => {
    russianLanguage('ru');
    i18n.changeLanguage(lang);
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


