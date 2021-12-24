import React from "react";

// assets
import Logo from "../../public/assets/images/logo.svg";

// styles
import styles from "../styles/index.module.css";

const Index: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <Logo className={styles["app-logo"]} alt={"Logo"} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles["app-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Index;
