import React from "react";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";

export default ({ isAuth, component: Component, isLock, ...rest }) => {
  return (
    <Route {...rest}>
      {props => {
        if (!isLock) {
          return isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        } else {
          return isAuth ? (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          ) : (
            <Component {...props} />
          );
        }
      }}
    </Route>
  );
};
