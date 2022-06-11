import React from "react";
import { Provider } from 'react-redux'
import { store } from '../../redux/store';

import '../../i18n';

import DiscoverComponent from "../../components/discover";
import Navbar from '../../components/navbar/index'

export default function Discover() {
  return (
    <div>
      <DiscoverComponent />
      <Navbar active=""/>
    </div>
  );
}