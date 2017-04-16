import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'MATERIALUI/AppBar';

import IconButton from 'MATERIALUI/IconButton';
import Menu from 'MATERIALUI/svg-icons/Navigation/menu';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
@connect(
  ({ isOpen }) => ({ isOpen }),
  require('FEATURES/siderbar/redux/action').default
)
class Header extends Component{
  render(){
    let {isOpenAction, isCloseAction} = this.props;
    return(
      <AppBar
        title="Title"
        iconElementLeft={
          <IconButton onClick={()=>isOpenAction()}>
            <Menu />
          </IconButton>
        }
        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    )
  }
}

export default Header