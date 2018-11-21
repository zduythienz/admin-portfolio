import React, { Component } from "react";

class LoginForm extends Component {
  _handleKeyPress = e => {
    if (e.charCode === 13) {
      console.log("====================================");
      console.log("enter");
      console.log("====================================");
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          className="input-OS margin-bottom-s"
          placeholder="Name"
          onKeyPress={this._handleKeyPress}
        />
        <br />
        <input
          type="text"
          className="input-OS "
          placeholder="Enter Password"
          onKeyPress={this._handleKeyPress}
        />
      </div>
    );
  }
}

export default LoginForm;
