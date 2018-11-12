import React, { Component } from "react";

class Notifications extends Component {
  render() {
    return (
      <li className="dropdown hidden-xs-down">
        <a href="#" data-toggle="dropdown">
          <i className="zmdi zmdi-more-vert" />
        </a>

        <div className="dropdown-menu dropdown-menu-right">
          <a href="#" className="dropdown-item">
            Fullscreen
          </a>
          <a href="#" className="dropdown-item">
            Clear Local Storage
          </a>
          <a href="#" className="dropdown-item">
            Settings
          </a>
        </div>
      </li>
    );
  }
}

export default Notifications;
