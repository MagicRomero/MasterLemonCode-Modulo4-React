import React from "react";
import { Link, generatePath } from "react-router-dom";

const NotFound: React.FC = (): JSX.Element => {
  return (
    <p>
      <pre title="invalid route">
        {window.location.host}
        <span>{window.location.pathname}</span>
      </pre>{" "}
      The route above you've put in the address bar
      <strong> does not exist within this web page</strong>. I leave a button
      here below so you can return to main page.
      <Link to={generatePath("/")}>Back</Link>
    </p>
  );
};

export default NotFound;
