import React from 'react';
import { Provider } from 'react-redux'

import Photos from './photos/index';
import store from '../redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Photos />
    </Provider>
  );
}
