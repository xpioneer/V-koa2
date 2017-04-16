'use strict'
import React, {Component} from 'react'
import { Link } from 'react-router'

import Drawer from 'MATERIALUI/Drawer';
import MenuItem from 'MATERIALUI/MenuItem';
import RaisedButton from 'MATERIALUI/RaisedButton';

export default class SiderBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}/>
        <Drawer
          containerClassName="siderbar-wrap"
          docked={false}
          width={220}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem><Link to="/dashbord">DashBord</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}>首页</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>简介</MenuItem>
          <MenuItem><Link to="/home">Home</Link></MenuItem>
          <MenuItem><Link to="/vue">Vue</Link></MenuItem>
          <MenuItem><Link to="/404">404</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}