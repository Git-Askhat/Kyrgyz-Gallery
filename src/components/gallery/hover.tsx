import React from 'react'
import styled from 'styled-components';

export default function Hover() {
  return (
    <Container>Hover</Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background: #424242;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
`

