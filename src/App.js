import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import cookies from "react-cookies";

// import HomeContainer from "./containers/HomeContainer";
import { withRouter } from "react-router-dom";
import WelcomePage from "./containers/WelcomePage";
import LobbyPage from "./containers/LobbyPage";
import SignUpPage from "./containers/SignUpPage";
import Loader from "./components/Loader";
import { getAuthenticatedUser } from "./actions/authActions";

class App extends Component {
  componentDidMount = () => {
    const token = cookies.load("token");
    if (token) {
      this.props.getAuthenticatedUser();
    }
  };

  render() {
    const { isFetching, isLoggedIn } = this.props;
    if (isFetching) return <Loader />;

    return (
      <Switch>
        <Route
          path="/"
          exact
          component={!isLoggedIn ? WelcomePage : LobbyPage}
        />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      isFetching: state.auth.isFetching,
      isLoggedIn: state.auth.isLoggedIn,
    }),
    { getAuthenticatedUser },
  )(App),
);
