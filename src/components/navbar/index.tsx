import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

import NavbarItems from './NavbarItems';
import SvgLogo from '../../assets/svg/Logo';
import SvgOptions from '../../assets/svg/Options';
import Dropdown from '../dropdown/index';

interface ActiveUrl {
  activeUrl?: string;
  aUrl?: string,
}

export default function Navbar(props: { active: string; }) {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  const mouseClick = () => {
    setDropdown(!dropdown);
  }

  const onMouseMove = () => {
    setDropdown(true);
  }

  return (
    <Nav onClick={mouseClick}>
      <NavSml>
        <Div>
          <Logo>
            <SvgLogo />
          </Logo>
          <Menu>
            {NavbarItems.map((item, index) => {
              return <NavbarLink to={item.url} activeUrl={item.url} aUrl={props.active}>{item.title}</NavbarLink>;
            })}
          </Menu>
        </Div>
        <Menu>
          <NavbarLink to='discover'>Discover</NavbarLink>
          <Options onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <SvgOptions />
            {dropdown && <Dropdown />}
          </Options>
          <NavbarLink to='sign-in'>Sign in</NavbarLink>
        </Menu>
      </NavSml>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  background: linear-gradient(180deg, #202020 0%, rgba(0, 0, 0, 0) 100%);
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 100%;
`;

const NavSml = styled.div`
  width: 100%;
  height: 102px;
  padding: 0 25px 0 51px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(SvgLogo)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled(Link)<ActiveUrl>`
  margin-left: 40px;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 22px;
  border-bottom: ${props => (props.activeUrl===props.aUrl && props.activeUrl) ? "3px solid" : 0}  
`;

const Options = styled.div`
  align-items: center;
  margin-left: 40px;
  cursor: pointer;

  .SvgOptions {
    padding: 50px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;
