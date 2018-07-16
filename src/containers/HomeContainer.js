import React, { Component } from "react";
import { connect } from "react-redux";

import WelcomePage from "./WelcomePage";
import LobbyPage from "./LobbyPage";

const HomeContainer = ({ isLoggedIn }) => {
  return !isLoggedIn ? <WelcomePage /> : <LobbyPage />;
};

export default connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
  }),
  null,
)(HomeContainer);
