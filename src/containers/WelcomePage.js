import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { logIn } from "../actions/authActions";
import LoginForm from "../components/LoginForm";

class WelcomePage extends Component {
  state = {
    isRedirect: false,
  };

  handleSubmit = credentials => {
    this.props.logIn(credentials, () => this.setState({ isRedirect: true }));
  };

  render() {
    const { isLoggedIn, message } = this.props;

    if (this.state.isRedirect) {
      return <Redirect to="/chat" />;
    }

    return (
      <section className="welcome">
        <div className="container">
          <h1>React chat app</h1>
          {!isLoggedIn ? (
            <LoginForm onSubmit={this.handleSubmit} message={message} />
          ) : (
            <Link to="/chat"> Перейти в чат </Link>
          )}
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    message: state.auth.message,
    isLoggedIn: state.auth.isLoggedIn,
  }),
  { logIn },
)(WelcomePage);
