import React from "react";
import styles from "./MainLayout.module.css";

const MainLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <main className={styles.wrapper}>
      <h1>El layout</h1>
      {children}
    </main>
  );
};

export default MainLayout;
