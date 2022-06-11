import React, { Suspense } from 'react';
import { Provider } from 'react-redux'

import Photos from './photos/index';
import {store} from '../redux/store'

import '../i18n';

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>

      <Photos />
      </Suspense>
    </Provider>
  );
}
