import React, { Component } from "react";
import LoginForm from "../../components/login/loginForm";

class Login extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="img-container" />
        <div className="blur" />
        <div className="body_guest">
          <p className="center-ele">
            <LoginForm />
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
