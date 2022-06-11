import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';

import ModelsComponent from '../../components/models';

export default function Models() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <ModelsComponent />
      </Suspense>
    </Provider>
  );
}
