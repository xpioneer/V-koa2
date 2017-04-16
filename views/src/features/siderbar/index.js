import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import Drawer from 'MATERIALUI/Drawer'
import Menu from 'MATERIALUI/Menu'
import MenuItem from 'MATERIALUI/MenuItem'
import Divider from 'MATERIALUI/Divider'

const logo = require('./logo.jpg')

const style = {
  logo:{
    display: 'flex',
    flexDirection: 'row-reverse',
    height: '120px',
    // background: 'url('+logo+') center no-repeat/cover'
    background: 'linear-gradient(45deg, #00bcd4, #001f4b)'
  },
  keefe:{
    width: '60px',
    height: '60px',
    fontSize: '40px',
    lineHeight: '60px',
    borderRadius: '100%',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#001f4b',
    margin: '20px 20px 0 0'
  },
  menu: {
    color: '#666'
  }
}

@connect(
  ({siderbar}) => ({siderbar}),
  require('./redux/action').default
)
class SiderBar extends Component {

  constructor(props) {
    super(props);
  }

  handleGo = (url) => {
    let {isCloseAction} = this.props;
    // isCloseAction();
    browserHistory.push(url)
  }

  render() {
    let {siderbar, isOpenAction, isCloseAction} = this.props;
    return (
      <div>
        <Drawer
          containerClassName="siderbar-wrap"
          docked={false}
          width={220}
          open={siderbar.isOpen}
          onRequestChange={() => isCloseAction()}>
          <div style={style.logo}>
            <span style={style.keefe}>K</span>
          </div>
          <MenuItem style={style.menu} onTouchTap={()=>this.handleGo('/home')}>首页</MenuItem>
          <Divider />
          <MenuItem style={style.menu} onTouchTap={()=>this.handleGo('/web')}>前端</MenuItem>
          <Divider />
          <MenuItem style={style.menu} onTouchTap={()=>this.handleGo('/server')}>服务端</MenuItem>
          <Divider />
          <MenuItem style={style.menu} onTouchTap={()=>this.handleGo('/essay')}>随笔</MenuItem>
          <Divider />
          <MenuItem style={style.menu} onTouchTap={()=>this.handleGo('/vue')} >Vue</MenuItem>
          <Divider />
          <MenuItem onTouchTap={()=>this.handleGo('/404')}>
            <Link to="/404"
              style={{display:'block', textDecoration:'none', color: '#666'}}
              activeStyle={{color: '#f80'}}>404</Link>
          </MenuItem>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default SiderBar