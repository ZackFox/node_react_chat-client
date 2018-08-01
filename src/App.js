import React, { Component } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import WelcomePage from "./containers/WelcomePage";
import chatContainer from "./containers/chatContainer";
import SignUpPage from "./containers/SignUpPage";

import ProtectedRoute from "./hoc/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="page">
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <ProtectedRoute
              path="/signup"
              isAuth={this.props.isLoggedIn}
              isLock={true}
              component={SignUpPage}
            />
            <ProtectedRoute
              path="/chat"
              isAuth={this.props.isLoggedIn}
              component={chatContainer}
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
