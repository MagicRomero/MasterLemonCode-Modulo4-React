import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

React.Component;
const PrivateRoute: React.FC<RouteComponentProps> = ({
  children,
  ...restProps
}): JSX.Element => {
  return (
    <Route
      {...restProps}
      render={() => {
        const isAuth = true;
        if (isAuth) {
          return children;
        }

        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
