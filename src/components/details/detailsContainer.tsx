import React from 'react';
import styled, { css } from 'styled-components';

interface Visibility {
  visible: boolean;
}

export const DetailsContainer = (props: { visible: any; children: any }) => {
  return <Container visible={props.visible}>{props.children}</Container>;
};

const Container = styled.div<Visibility>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.4s ease, visibility 0.4s ease,
    transform 0.5s ease-in-out;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: 0;
  transform: scale(0);
  overflow: hidden;
  z-index: 999;

  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    `}

  /* img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  } */

  /* svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 3rem;
    height: 3rem;
    padding: 5px;
    cursor: pointer;
  } */
`;
