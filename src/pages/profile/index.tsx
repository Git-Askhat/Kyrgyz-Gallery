import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';

import ProfileComponent from '../../components/profile/index';

export default function Profile() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileComponent />
      </Suspense>
    </Provider>
  );
}
