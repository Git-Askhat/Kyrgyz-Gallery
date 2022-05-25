import React, { Suspense } from 'react';

import VideosComponent from '../../components/videos';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';

export default function Videos() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <VideosComponent />
      </Suspense>
    </Provider>
  );
}
