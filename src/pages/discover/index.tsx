import React from "react";

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