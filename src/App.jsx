import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }

  render() {
    return (
     <BrowserRouter>
      <Routes>
          {this.state.isLogin && <Route path='/users' element={<UsersPage isLogin={this.state.isLogin} />} />}
          <Route path='/' element={<LoginPage isLogin={this.state.isLogin} />} />
          <Route path='*' element={<LoginPage isLogin={this.state.isLogin} />} />
      </Routes>
    </BrowserRouter>
    );
  }
  
}

export default App;
