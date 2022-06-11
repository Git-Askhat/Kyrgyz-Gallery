import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import '../../i18n';

import PhotosComponent from '../../components/photos/index';
import { auth } from '../../firebase/firebase.utils'

type CurrentUser = {
  currentUser: null | string;
}

class Photos extends React.Component<CurrentUser> {
  state: CurrentUser = {
    currentUser: null
  }

  // unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log("Auth user: ", user);
    })
  }

  componentWillUnmound() {
    // this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <PhotosComponent />
        </Suspense>
      </Provider>
    );
  }
}

export default Photos;
