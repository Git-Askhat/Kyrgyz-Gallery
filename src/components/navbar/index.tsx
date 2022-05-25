import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';

import SvgLogo from '../../assets/svg/Logo';
import SvgLanguage from '../../assets/svg/Language';
import SvgOptions from '../../assets/svg/Options';
import Dropdown from '../dropdown/dropdown';
import LanguageDropdown from '../dropdown/languageDropdown';
import MainSearch from '../main_search/nav_search';

import SignIn from '../sign-in/index';
import SvgProfile from '../../assets/svg/Profile';
import SignUp from '../sign-up';

import { actionCreators, State } from '../../redux/index';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

interface ActiveUrl {
  activeUrl?: string;
  aUrl?: string;
}

interface changeBackground {
  scroll: boolean;
  isTransparent?: boolean;
}

export default function Navbar(props: {
  active?: string;
  token?: boolean;
  isTransparent?: boolean;
}) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownLang, setDropdownLang] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const lang = useSelector((state: State) => state.lang);
  const { t } = useTranslation();
  // i18n.changeLanguage(lang);
  console.log('current language: ' + lang);

  const backgroundChange = () => {
    if (window.scrollY >= 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', backgroundChange);

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Nav scroll={scrolled} isTransparent={props.isTransparent}>
        <NavSml scroll={scrolled} isTransparent={props.isTransparent}>
          <Div>
            <Link to='/'>
              <Logo>
                <SvgLogo />
              </Logo>
            </Link>
            <Menu1 scroll={scrolled}>
              <NavbarLink to='/photos' activeUrl='photos' aUrl={props.active}>
                {t('photos')}
              </NavbarLink>
              <NavbarLink to='/videos' activeUrl='videos' aUrl={props.active}>
                {t('videos')}
              </NavbarLink>
              <NavbarLink to='/vectors' activeUrl='vectors' aUrl={props.active}>
                {t('vectors')}
              </NavbarLink>
              <NavbarLink to='/models' activeUrl='models' aUrl={props.active}>
                {t('3d-models')}
              </NavbarLink>
            </Menu1>
            <Search scroll={scrolled} isTransparent={props.isTransparent}>
              <MainSearch search_text={t('search_text')} aUrl='photos' />
            </Search>
          </Div>
          <Menu>
            {/* <NavbarLink to='discover'><Main_Dropdown /></NavbarLink> */}
            {/* {props.token ? ( */}
            {/* <Link to='/profile'> */}
            <>
              <LanguageDiv
                onMouseEnter={() => setDropdownLang(true)}
                onMouseLeave={() => setDropdownLang(false)}>
                <SvgLanguage className='profile'/>
                {dropdownLang && <LanguageDropdown />}
              </LanguageDiv>
              <DropdownDiv
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                <SvgProfile className='profile'></SvgProfile>
                {dropdown && <Dropdown />}
              </DropdownDiv>
            </>

            {/* ) : (
                </Link>
               <Options onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                 <SvgOptions />
                 {dropdown && <Dropdown dropdown={dropdown}/>}
               </Options>
             )} */}
            <Sign onClick={modalOpen}>{t('sign-in')}</Sign>
          </Menu>
        </NavSml>
      </Nav>
      <SignIn
        isOpen={isOpen}
        close={() => setOpen(false)}
        signUpModel={() => setOpen2(true)}
      />
      <SignUp
        isOpen2={isOpen2}
        close2={() => setOpen2(false)}
        signInModel={() => setOpen(true)}
      />
    </Container>
  );
}

const DropdownDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 10vh;
`;

const LanguageDiv = styled.div`
 display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 10vh;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  /* height: 150px;   //Have to change later, make clean code */
  position: relative;
  display: flex;
`;

const Nav = styled.div<changeBackground>`
  display: flex;
  width: 100%;
  height: 150px;
  background: ${(props) =>
    props.scroll || props.isTransparent
      ? null
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
  background: ${(props) =>
    props.scroll || props.isTransparent ? '#10161E' : null};
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

  .profile {
    margin-left: 40px;
    cursor: pointer;

  }
  /* .nav__submenu {
    display: none;
  }

  .profile:hover .nav__submenu {
        display: block;
        z-index: 100;   
    } */
  
  }
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
