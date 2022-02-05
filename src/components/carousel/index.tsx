import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { carouselData } from './data';
import '../../styles/global.scss';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index: any) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <>
        <Slide {...settings}>
          {carouselData.map((item, index) => {
            return (
              // <a href={item.link}>
              <div>
                <Small>
                  {/* <a href={item.link}> */}
                  <div>
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                    <img src={item.img} alt='' />
                  </div>
                  {/* </a> */}
                </Small>
              </div>
              // </a>
            );
          })}
        </Slide>
      </>
    );
  }
}

const Slide = styled(Slider)`
  display: flex;
  width: 100%;
  padding: 25px 20px;
  justify-content: center;
  align-items: center;
`;

const Small = styled.div`
  display: flex;
  position: relative;
  width: 240px;
  height: 95px;
  margin-left: 25px;
  align-items: center; 
  justify-content: center;

  a {
    position: absolute;
  }

  img { 
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    border-radius: 16px;
  }

  div { 
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(9, 14, 27, 0.5);
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }

  h3 {
    color: white;
  }
}
`;
