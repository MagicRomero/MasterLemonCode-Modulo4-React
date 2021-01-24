import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import NotFound from "@components/NotFound/NotFound";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/RouteGuards/PrivateRoute";
import Home from "./components/Home/Home";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/">
          <Home/>>
        </PrivateRoute>
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
