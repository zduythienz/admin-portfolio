import React, { Component } from "react";
import TextField from "material-ui/TextField";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text"
        />
      </div>
    );
  }
}

export default LoginForm;
