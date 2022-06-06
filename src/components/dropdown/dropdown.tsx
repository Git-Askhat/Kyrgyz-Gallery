import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { DropdownItems } from './dropdownItems';
import './dropdown.scss';
import { useTranslation } from 'react-i18next';
import { auth } from '../../firebase/firebase.utils';

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();

  const signOutHandler = () => {
    auth.signOut();
    setDropdown(false);
  }
  return (
    <>
      <ul
        className={dropdown ? 'services-submenu clicked' : 'services-submenu'}
        onClick={() => setDropdown(!dropdown)}>
        {/* {DropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <StyledButton className={item.cName} onClick={() => setDropdown(false)}>
                {item.title}
              </StyledButton>
            </li>
          );
        })} */}
        <li>
          <StyledButton
            className='dropdown-link'
            onClick={signOutHandler}>
            {t('sign-out')}
          </StyledButton>
        </li>
        <li>
          <StyledButton
            className='dropdown-link'
            onClick={() => setDropdown(false)}>
            {t('sign-up')}
          </StyledButton>
        </li>
        <li>
          <StyledButton
            className='dropdown-link'
            onClick={() => setDropdown(false)}>
            {t('sign-in')}
          </StyledButton>
        </li>
        <li>
          <StyledButton
            className='dropdown-link'
            onClick={() => setDropdown(false)}>
            {t('fqa')}
          </StyledButton>
        </li>
        <li>
          <StyledButton
            className='dropdown-link'
            onClick={() => setDropdown(false)}>
            {t('about-us')}
          </StyledButton>
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
