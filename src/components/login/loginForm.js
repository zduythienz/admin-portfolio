import React, { Component } from "react";
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

const recentsIcon = <i class="zmdi zmdi-lock"></i>;
class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <input className="input-OS " placeholder="Name"/>
        <br/>
        
        <div>
          <input className="input-OS margin-top-s" placeholder="Enter Password"/>
          <i class="zmdi zmdi-caret-right-circle zmdi-hc-2x"></i>
        </div>
        
        <br/>
        <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
          />
      </div>
    );
  }
}

export default LoginForm;
