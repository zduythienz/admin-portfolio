import React, { Component } from "react";
import Message from "./message/message";
import Notifications from "./notifications/notifications";
import HeaderSetting from "./headerSetting/headerSetting";

class Header extends Component {
  render() {
    return (
      <header className="header ">
        <div className="navigation-trigger hidden-xl-up">
          <i className="zmdi zmdi-menu" />
        </div>

        <div className="logo hidden-sm-down">
          <h1>
            <a href="index.html">PORTFOLIO ADMIN</a>
          </h1>
        </div>

        <ul className="top-nav">
          <Message />
          <Notifications />
          <HeaderSetting />
        </ul>
      </header>
    );
  }
}

export default Header;
