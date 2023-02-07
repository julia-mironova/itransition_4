import React from "react";
import { Header } from "../header/Header.jsx";
import { Login } from "../login/Login.jsx";
import { Footer } from "../footer/Footer.jsx";
import '../App.css';

class LoginPage extends React.Component{
  
  render() {      
      return (
         <div className="App">
          <Header />
          <Login isLogin={this.props.isLogin} />       
          <Footer />
        </div>
    );
  }  
}

export default LoginPage;
