import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import cookies from "react-cookies";

import HomeContainer from "./containers/HomeContainer";
import SignUpPage from "./containers/SignUpPage";
import { getAuthenticatedUser } from "./actions/authActions";

class App extends Component {
  componentDidMount = () => {
    const token = cookies.load("token");
    if (token) {
      this.props.getAuthenticatedUser();
    }
  };

  render() {
    if (this.props.isFetching) {
      return <div>...Loading</div>;
    }

    return (
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    );
  }
}

export default connect(
  state => ({
    isFetching: state.auth.isFetching,
  }),
  { getAuthenticatedUser },
)(App);
