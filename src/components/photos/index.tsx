import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from '../navbar/Navbar'
import BackgroundImg from '../../assets/images/dark.jpg';
import SwipeToSlide from '../carousel';

export default function PhotosComponent() {
    return (
        <div>
            <Background>
                <img src={BackgroundImg} alt="" />
                <Navbar />
                <SwipeToSlide />
            </Background>
            
        </div>
    )
}

const Background = styled.div`
    position: relative;
    background: #000002;

    img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
    }
`

