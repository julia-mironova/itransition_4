import React from "react";
import { Header } from "./header/Header.jsx";
import { Main } from "./main/Main.jsx";
import { Footer } from "./footer/Footer.jsx";
import { Login } from "./login/Login.jsx";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  render() {
    return (
    <div className="App">
      <Header />
        {this.state.isLogin && <Main />}
        {!this.state.isLogin && <Login />}
      <Footer />
    </div>
  );
  }
  
}

export default App;
