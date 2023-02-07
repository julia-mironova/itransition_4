import React from "react";
import { ButtonComponent } from "../controllers/button/ButtonComponent.jsx";
import styles from "./Main.module.css";

class Main extends React.Component {
  render() {
    return <main className={styles.main}>
        <ButtonComponent text="To login page!" link={ "/" } isLogin={ this.props.isLogin }/>
        <p>There are all users in table</p>
      </main>
  }
}

export { Main }