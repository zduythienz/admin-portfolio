import React, { Component } from "react";
import SideMenu from "./sideMenu";
class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar ">
        <div className="scrollbar-inner">
          <div className="user">
            <div className="user__info" data-toggle="dropdown">
              <img
                className="user__img"
                src="demo/img/profile-pics/8.jpg"
                alt=""
              />

              <div>
                <div className="user__name">Malinda Hollaway</div>
                <div className="user__email">malinda-h@gmail.com</div>
              </div>
            </div>

            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                View Profile
              </a>
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>

          <SideMenu />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
