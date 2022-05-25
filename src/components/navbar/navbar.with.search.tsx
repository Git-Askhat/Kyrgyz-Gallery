import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

import SvgLogo from '../../assets/svg/Logo';
import SvgOptions from '../../assets/svg/Options';
import Dropdown from '../dropdown/index';
import MainSearch from '../main_search/nav_search';

import SignIn from '../sign-in/index';
import SvgProfile from '../../assets/svg/Profile';

export default function NavbarwithSearch(props: { token?: boolean }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [isOpen, setOpen] = useState(false);


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
      <Nav>
        <Div>
          <Link to='/'>
            <Logo>
              <SvgLogo />
            </Logo>
          </Link>
          <Search>
            <MainSearch search_text='photos' aUrl="photos" />
          </Search>
        </Div>
        <Menu>
          <NavbarLink to='discover'>Discover</NavbarLink>
          <SvgProfile className='Profile' />
          {/* <Options onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
               <SvgOptions />
               {dropdown && <Dropdown />}
             </Options> */}
          <Sign onClick={modalOpen}>Sign In</Sign>
        </Menu>
      </Nav>
      {/* <SignIn isOpen={isOpen} close={() => setOpen(false)} /> */}
    </>
  );
}

// const Nav = styled.div`
//   display: flex;
//   width: 100%;
//   height: 150px;
//   background: ${(props) =>
//     props.scroll
//       ? null
//       : 'linear-gradient(180deg, #202020 0%, rgba(0, 0, 0, 0) 100%)'};
//   flex-wrap: wrap;
//   position: fixed;
//   top: 0;
//   z-index: 100;
// `;

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 102px;
  justify-content: space-between;
  background: #10161e;
`;

const Logo = styled(SvgLogo)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px; //Need to change here

  .Profile {
    margin-left: 40px;
  }
`;

const NavbarLink = styled(Link)`
  margin-left: 40px;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 22px;
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
  width: auto;
`;
