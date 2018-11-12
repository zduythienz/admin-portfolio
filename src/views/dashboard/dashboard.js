import React, { Component } from "react";
import Header from "../../components/layout/header/header";
import SideBar from "../../components/layout/sidebar/sidebar";
import "../../assets/css/admin-layout.css";

class DashBoard extends Component {
  render() {
    return (
      <div className="body_admin">
        <main className="main">
          <Header />
          <SideBar />
          <section className="content" />
        </main>
      </div>
    );
  }
}

export default DashBoard;
