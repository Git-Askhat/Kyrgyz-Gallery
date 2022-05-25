import React, { Suspense } from 'react';

import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n'; 

import PhotosComponent from '../../components/photos/index';

export default function Photos() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <PhotosComponent />
      </Suspense>
    </Provider>
  );
}
