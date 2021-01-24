import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import Auth from "@lib/auth";

const PrivateRoute: React.FC<RouteComponentProps> = ({
  children,
  ...restProps
}): JSX.Element => {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        const isAuth = true;
        if (Auth.isAuthenticated()) {
          return children;
        }

        return (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
