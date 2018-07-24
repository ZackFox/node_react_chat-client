import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logIn } from "../actions/authActions";
import LoginForm from "../components/LoginForm";

const WelcomePage = ({ logIn, message }) => {
  const submitHandler = credentials => {
    logIn(credentials);
  };

  return (
    <div className="App">
      <LoginForm onSubmit={submitHandler} message={message} />
      <Link to="/signup">Регистрация</Link>
    </div>
  );
};

export default connect(
  state => ({
    message: state.auth.message,
  }),
  { logIn },
)(WelcomePage);
