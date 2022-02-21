import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

import NavbarItems from './NavbarItems';
import SvgLogo from '../../assets/svg/Logo';
import SvgOptions from '../../assets/svg/Options';
import Dropdown from '../dropdown/index';
import MainSearch from '../main_search/nav_search';

import SignIn from '../sign-in/index';

interface ActiveUrl {
  activeUrl?: string;
  aUrl?: string;
}

interface changeBackground {
  scroll: boolean;
}

export default function Navbar(props: { active: string }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const backgroundChange = () => {
    if (window.scrollY >= 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', backgroundChange);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const mouseClick = () => {
    setDropdown(!dropdown);
  };

  const onMouseMove = () => {
    setDropdown(true);
  };

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Nav scroll={scrolled}>
        <NavSml scroll={scrolled}>
          <Div>
            <Logo>
              <SvgLogo />
            </Logo>
            <Menu1 scroll={scrolled}>
              {NavbarItems.map((item, index) => {
                return (
                  <NavbarLink
                    to={item.url}
                    activeUrl={item.url}
                    aUrl={props.active}>
                    {item.title}
                  </NavbarLink>
                );
              })}
            </Menu1>
            <Search scroll={scrolled}>
              <MainSearch search_text='photos' />
            </Search>
          </Div>
          <Menu>
            <NavbarLink to='discover'>Discover</NavbarLink>
            <Options onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <SvgOptions />
              {dropdown && <Dropdown />}
            </Options>
            <Sign onClick={modalOpen}>Sign In</Sign>
          </Menu>
        </NavSml>
      </Nav>
      <SignIn isOpen={isOpen} close={() => setOpen(false)} />
    </>
  );
}

const Nav = styled.div<changeBackground>`
  display: flex;
  width: 100%;
  height: 150px;
  background: ${(props) =>
    props.scroll
      ? ''
      : 'linear-gradient(180deg, #202020 0%, rgba(0, 0, 0, 0) 100%)'};
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const NavSml = styled.div<changeBackground>`
  width: 100%;
  height: 102px;
  padding: 0 25px 0 51px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => (props.scroll ? '#10161E' : '')};
`;

const Logo = styled(SvgLogo)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Menu1 = styled.div<changeBackground>`
  display: ${(props) => (props.scroll ? 'none' : 'flex')};
  border-spacing: 0;
  align-items: center;
`;

const Search = styled.div<changeBackground>`
  display: ${(props) => (props.scroll ? 'flex' : 'none')};
  align-items: center;
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
  border-bottom: ${(props) =>
    props.activeUrl === props.aUrl && props.activeUrl ? '3px solid' : 0};
`;

const Sign = styled.a`
  margin-left: 40px;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 22px;
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
