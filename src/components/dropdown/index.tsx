import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

import { DropdownItems } from './dropdownItems';
import SignIn from '../sign-in/index';
import './dropdown.scss';

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {DropdownItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Container = styled.div``;
