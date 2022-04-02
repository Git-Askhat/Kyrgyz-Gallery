import React from 'react';
import styled from 'styled-components';

export function DetailImg(props: { children: any }) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  width: 90%;
  height: 100%;
  background: #F6F6F6;
`;
