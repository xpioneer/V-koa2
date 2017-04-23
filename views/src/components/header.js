import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'MATERIALUI/AppBar';

import IconButton from 'MATERIALUI/IconButton';
import Menu from 'MATERIALUI/svg-icons/Navigation/menu';


@connect(
  ({ isOpen }) => ({ isOpen }),
  require('FEATURES/siderbar/redux/action').default
)
class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      opacity: 0,
      textColor: 'rgba(0, 31, 75, 1)'
    }
  }

  componentDidMount(){
    console.log(this.props, 'header componentDidMount')
    window.addEventListener('scroll', ()=>{
      let h = document.documentElement.scrollTop || document.body.scrollTop;
      let o = h/400;
      o = o>=1 ? 1 : o;
      if(o <= 1){
        this.setState({ opacity: o })
        this.setState({ textColor: 'rgba('
          + Math.ceil(255*o) +','
          + Math.ceil((255-31)*o + 31) +','
          + Math.ceil((255-75)*o + 75) +','
          +'1)'})
      }
      console.log(this.state)
    }, !1)
  }
  render(){
    let {isOpenAction, isCloseAction} = this.props;
    return(
      <AppBar
        style={{
          position: 'fixed',
          backgroundColor: 'rgba(0, 31, 75, '+this.state.opacity+')',
        }}
        titleStyle={{
          color: this.state.textColor
        }}
        title="前端汇聚网"
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