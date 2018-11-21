import React, { Component } from "react";
import LoginForm from "../../components/login/loginForm";
import BottomGuest from "../../components/login/bottom-guest";

class Login extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="img-container" />
        <div className="blur" />
        <div className="body_guest">
          <div className="center-ele">
            <LoginForm />
          </div>
        </div>
        <BottomGuest />
      </div>
    );
  }
}

export default Login;
