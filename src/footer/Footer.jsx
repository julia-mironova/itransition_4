import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return <footer className={styles.footer}>        
        <p>To Itransition</p>
      </footer>
  }
}

export { Footer }