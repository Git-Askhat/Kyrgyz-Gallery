import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

import { DropdownItems } from './dropdownItems';
import SignIn from '../sign-in/index';
import './dropdown.scss';

interface AttrDropdown {
  dropdown: boolean;
}

export default function Dropdown(props: {dropdown: boolean}) {
  
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <Container dropdown={props.dropdown}>
    <ul className='nav__submenu' onClick={() => setDropdown(!dropdown)}>
      <li className='nav__submenu-item ' onClick={() => setDropdown(false)}>
        <a>Our Company</a>
      </li>
      <li className='nav__submenu-item '>
        <a>Our Team</a>
      </li>
      <li className='nav__submenu-item '>
        <a>Our Portfolio</a>
      </li>
    </ul>
    </Container>
  );
}

const Container = styled.div<AttrDropdown>`
  
  .nav__submenu {
    /* display: ${(props) => (props.dropdown ? 'none' : 'none')}; */
    display: none;
    width: 300px;
    position: absolute;
    background: #F6F6F6;
    padding: 0;


    .nav__submenu-item {
      width: 100%;
      list-style: none;
      padding: 4px 10px;
    }

    .nav__submenu-item:hover {
      /* background: #f6f6f6df; */
      background: green;
    }
  }

`;
