import React, { Component } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./assets/css/layout.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <MuiThemeProvider>
            <Routes />
          </MuiThemeProvider>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
