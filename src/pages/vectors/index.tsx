import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';
import VectorsComponent from '../../components/vectors/index';

export default function Vectors() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <VectorsComponent />
      </Suspense>
    </Provider>
  );
}
