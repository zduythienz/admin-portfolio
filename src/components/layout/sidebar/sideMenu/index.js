import React, { Component } from "react";

class SideMenu extends Component {
  render() {
    return (
      <ul className="navigation">
        <li className="navigation__active">
          <a href="index.html">
            <i className="zmdi zmdi-home" /> Home
          </a>
        </li>

        <li className="navigation__sub @@variantsactive">
          <a href="#">
            <i className="zmdi zmdi-view-week" /> Variants
          </a>

          <ul>
            <li className="@@sidebaractive">
              <a href="hidden-sidebar.html">Hidden Sidebar</a>
            </li>
            <li className="@@boxedactive">
              <a href="boxed-layout.html">Boxed Layout</a>
            </li>
            <li className="@@hiddensidebarboxedactive">
              <a href="hidden-sidebar-boxed-layout.html">
                Boxed Layout with Hidden Sidebar
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default SideMenu;
