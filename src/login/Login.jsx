import React from "react";
import { ButtonComponent } from "../controllers/button/ButtonComponent.jsx";
import styles from "./Login.module.css";

class Login extends React.Component {
  
  render() {
    return <main className={styles.login}>        
      <ButtonComponent text="To users page!" link={"/users"} isLogin={ this.props.isLogin } />
      <p>Login page after backend express+db</p>
    </main>
  }
}

export { Login }