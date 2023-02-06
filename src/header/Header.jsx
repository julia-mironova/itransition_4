import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return <header className={styles.header}>        
        <span>
          My contacts:&nbsp; 
        </span>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/mironava-julia-72a70845/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
  }
}

export { Header }