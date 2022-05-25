import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';

import UploadComponent from '../../components/upload/upload.component'


export default function Upload() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <UploadComponent />
      </Suspense>
    </Provider>
  )
}
