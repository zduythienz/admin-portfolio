import React, { Component } from "react";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
const recentsIcon = <i class="fa fa-user-o fa-2x" aria-hidden="true" />;
const settingIcon = <i class="fa fa-whatsapp fa-2x" aria-hidden="true" />;
const forgotIcon = (
  <i class="fa fa-question-circle-o fa-2x" aria-hidden="true" />
);
function BottomGuest() {
  return (
    <div className="bottom-div">
      <div className="col-md-12">
        <BottomNavigationItem
          className="white"
          label="Register"
          icon={recentsIcon}
          style={{ color: "white" }}
        />
        <BottomNavigationItem
          className="white"
          label="Forgot"
          icon={forgotIcon}
        />
        <BottomNavigationItem
          className="white"
          label="Setting"
          icon={settingIcon}
        />
      </div>
    </div>
  );
}

export default BottomGuest;
