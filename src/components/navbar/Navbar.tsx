import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import NavbarItems from './NavbarItems';
import SvgLogo from '../../assets/svg/Logo';
import SvgOptions from '../../assets/svg/Options';

export default function Navbar() {
  return (
    <Nav>
        <NavSml>
            <Div>
                <Logo>
                    <SvgLogo />
                </Logo>
                <Menu>
                    {NavbarItems.map((item, index) => {
                        return (
                            <NavbarLink to={item.url}>
                                {item.title}
                            </NavbarLink>
                        )
                    })}
                </Menu>
            </Div>
            <Menu>
                <NavbarLink to="discover">Discover</NavbarLink>
                <Options><SvgOptions /></Options>
                <NavbarLink to="sign-in">Sign in</NavbarLink>
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
`

const NavSml = styled.div`
    width: 100%;
    height: 102px;    
    padding: 0 25px 0 51px;
    display: flex;
    justify-content: space-between;
`

const Logo = styled(SvgLogo)`
    display: flex;
    align-items: center;
    margin-top: 10px;  
`

const Menu = styled.div`
    display: flex;
    align-items: center;
`

const NavbarLink = styled(Link)`
    margin-left: 40px;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 22px;
    border-bottom: 3px solid;

    /* ::before {
        content: "";
        position: absolute;
        bottom: 80px;
        width: 30px;
        height: 4px;
        background: linear-gradient(90deg, #001C81 0%, #883280 72.14%, #BC3A80 100%);

    } */
`

const Options = styled.div`
    align-items: center;
    margin-left: 40px;
    cursor: pointer;
`

const Div = styled.div`
    display: flex;
    align-items: center;
`