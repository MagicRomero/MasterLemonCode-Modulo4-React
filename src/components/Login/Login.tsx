import React, { useState } from "react";
import Auth from "@lib/auth";
import styles from "./Login.module.css";
import { Redirect, useLocation } from "react-router-dom";
import { CustomInput } from "../Common";

interface LocationState {
  from: {
    pathname: string;
  };
}

const Login: React.FC = (): JSX.Element => {
  const { state } = useLocation<LocationState>();

  const [redirectToReferrer, setRedirectToReferrer] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    Auth.login({ ...formValues }, () => {
      setRedirectToReferrer(true);
    });
  };

  return redirectToReferrer ? (
    <Redirect to={state?.from || "/"} />
  ) : (
    <form onSubmit={handleSubmit} className={styles.FormWrapper}>
      <CustomInput
        onChange={onChange}
        type="email"
        placeholder="example@email.com"
        name="email"
        value={formValues.email}
      />
      <CustomInput
        onChange={onChange}
        type="password"
        placeholder="*******"
        name="password"
        value={formValues.password}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
