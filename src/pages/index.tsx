import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import Photos from './photos/index';
import './index.scss';

export default function App() {
  return (
    <div>
      <Global />
      <Photos />
      <h1>Hello World</h1>
    </div>
  );
}

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
