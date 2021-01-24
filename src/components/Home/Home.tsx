import React from "react";
import Auth from "@lib/auth";
import { useHistory } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const history = useHistory();

  return (
    <div>
      home
      {Auth.isAuthenticated() ? (
        <button
          onClick={(event) => {
            Auth.logout(() => history.push("/"));
          }}
        >
          sign out
        </button>
      ) : (
        <p>no estas logeado hermano</p>
      )}
    </div>
  );
};

export default Home;
