import { Link } from "gatsby";
import React, { Component } from "react";
import Slider from "react-slick";
import styled, { createGlobalStyle } from "styled-components";

import { carouselData } from './data'

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index: any) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <>
      {/* <Div> */}
        <Slide {...settings}>
          {carouselData.map((item, index) => {
            return (
              
              <Link to={`${item.link}`}>
              <div>
              <Small>
                <div>
                  <h3>{item.title}</h3>
                </div>
                <img src={item.img} alt="" />
              </Small>
              </div>
              </Link>
             
            )
          })}
        </Slide>
      {/* </Div> */}
      </>
    );
  }
}

// const Div = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// `

const Slide = styled(Slider)`

  display: flex;
  width: 100%;
  padding: 25px 20px;
  justify-content: center;
  align-items: center;
`

const Small = styled.div`
  display: flex;
  position: relative;
  width: 240px;
  height: 95px;
  margin-left: 25px;
  align-items: center; 
  justify-content: center;

  img { 
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    border-radius: 4px;
  }

  div { 
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(9, 14, 27, 0.5);
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }

  h3 {
    color: white;
  }
}
`
