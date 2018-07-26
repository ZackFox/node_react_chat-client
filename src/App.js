import React, { Component } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import WelcomePage from "./containers/WelcomePage";
import LobbyPage from "./containers/LobbyPage";
import SignUpPage from "./containers/SignUpPage";

import ProtectedRoute from "./components/ProtectedRoute";
import LockedRoute from "./components/LockedRoute";

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="page">
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <LockedRoute
              path="/signup"
              isAuth={this.props.isLoggedIn}
              component={SignUpPage}
            />
            <ProtectedRoute
              path="/lobby"
              isAuth={this.props.isLoggedIn}
              component={LobbyPage}
            />
          </Switch>
        </main>
        <footer className="footer">
          <div className="container">
            <Link to="/">Главная</Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      isLoggedIn: state.auth.isLoggedIn,
    }),
    null,
  )(App),
);
