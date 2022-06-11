import React, { Suspense } from 'react';
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';

import EditProfileComponent from '../../components/edit-profile/index';

export default function EditProfile() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <EditProfileComponent />
      </Suspense>
    </Provider>
  );
}
