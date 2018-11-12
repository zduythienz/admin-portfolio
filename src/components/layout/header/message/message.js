import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <li className="dropdown">
        <a href="#" data-toggle="dropdown" className="top-nav__notify">
          <i className="zmdi zmdi-email" />
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu--block">
          <div className="dropdown-header">
            Messages
            <div className="actions">
              <a
                href="messages.html"
                className="actions__item zmdi zmdi-plus"
              />
            </div>
          </div>

          <div className="listview listview--hover">
            <a href="#" className="listview__item">
              <img
                src="demo/img/profile-pics/1.jpg"
                className="listview__img"
                alt=""
              />

              <div className="listview__content">
                <div className="listview__heading">
                  David Belle <small>12:01 PM</small>
                </div>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes
                </p>
              </div>
            </a>

            <a href="#" className="listview__item">
              <img
                src="demo/img/profile-pics/2.jpg"
                className="listview__img"
                alt=""
              />

              <div className="listview__content">
                <div className="listview__heading">
                  Jonathan Morris
                  <small>02:45 PM</small>
                </div>
                <p>
                  Nunc quis diam diamurabitur at dolor elementum, dictum turpis
                  vel
                </p>
              </div>
            </a>

            <a href="#" className="listview__item">
              <img
                src="demo/img/profile-pics/3.jpg"
                className="listview__img"
                alt=""
              />

              <div className="listview__content">
                <div className="listview__heading">
                  Fredric Mitchell Jr.
                  <small>08:21 PM</small>
                </div>
                <p>
                  Phasellus a ante et est ornare accumsan at vel magnauis
                  blandit turpis at augue ultricies
                </p>
              </div>
            </a>

            <a href="#" className="listview__item">
              <img
                src="demo/img/profile-pics/4.jpg"
                className="listview__img"
                alt=""
              />

              <div className="listview__content">
                <div className="listview__heading">
                  Glenn Jecobs
                  <small>08:43 PM</small>
                </div>
                <p>
                  Ut vitae lacus sem ellentesque maximus, nunc sit amet varius
                  dignissim, dui est consectetur neque
                </p>
              </div>
            </a>

            <a href="#" className="listview__item">
              <img
                src="demo/img/profile-pics/5.jpg"
                className="listview__img"
                alt=""
              />

              <div className="listview__content">
                <div className="listview__heading">
                  Bill Phillips
                  <small>11:32 PM</small>
                </div>
                <p>
                  Proin laoreet commodo eros id faucibus. Donec ligula quam,
                  imperdiet vel ante placerat
                </p>
              </div>
            </a>

            <a href="#" className="view-more">
              View all messages
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default Message;
