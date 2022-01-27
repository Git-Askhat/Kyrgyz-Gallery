import React from 'react'
import styled from 'styled-components'

import Navbar from '../navbar/Navbar'
import BackgroundImg from '../../assets/images/dark.jpg';
import Carousel from '../carousel';

export default function PhotosComponent() {
    return (
        <div>
            <Background>
                <img src={BackgroundImg} alt="" />
                <Navbar />
                <Carousel />
            </Background>
            
        </div>
    )
}

const Background = styled.div`
    position: relative;

    img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
    }
`

