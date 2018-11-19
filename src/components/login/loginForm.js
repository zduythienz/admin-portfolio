import React, { Component } from "react";

import FontIcon from "material-ui/FontIcon";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <input className="input-OS margin-bottom-s" placeholder="Name" />
          <br />
          <div>
            <input className="input-OS " placeholder="Enter Password" />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default LoginForm;
