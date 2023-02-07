import React from "react";
import { Header } from "../header/Header.jsx";
import { Main } from "../main/Main.jsx";
import { Footer } from "../footer/Footer.jsx";
import '../App.css';

class UsersPage extends React.Component{
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main isLogin={ this.props.isLogin } />
        <Footer />
      </div>
    );
  }  
}

export default UsersPage;
