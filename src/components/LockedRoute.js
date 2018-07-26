import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";

export default ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
