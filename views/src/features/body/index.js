import React, { Component } from 'react'

import Paper from 'MATERIALUI/Paper'

import Body from 'COMPONENTS/body'
import Tags from 'FEATURES/tags'
// import Recent from 'FEATURES/recent'

const welcomBanner = require('./welcom.jpg')
// console.log(welcomBanner)
const style = {
  banner:{
    height: '400px',
    background: 'url('+welcomBanner+') center center #505458 no-repeat'
  },
  title:{
    paddingTop: '100px',
    textAlign: 'center',
    fontSize: '40px',
    color: '#ffffff',
  },
  subtitle:{
    textAlign: 'center',
    fontSize: '16px',
    color: '#ffffff',
  },

  mainContent:{
    display: 'flex',
    maxWidth: '1240px',
    minWidth: '600px',
    margin: '0 auto'
  },
  left:{
    flex: 1,
    padding: '30px'
  },
  right:{
    flex: 2,
    padding: '30px 30px 0 0'
  }
};
const iconStyle = {
  color: 'red',
  width: '44px',
  height: '44px'
}

export default class MainContent extends Component {

  render() {
    return (
      <Paper
        rounded={false}
        zDepth={1}>
        <div style={style.banner}>
          <h1 style={style.title}>WEB DESIGNER</h1>
          <h2 style={style.subtitle}>keep moving</h2>
        </div>
        <div id="mainContent">
          <div id="leftContent">
            <Tags/>
          </div>
          <div id="rightContent">
            {this.props.children}
          </div>
        </div>
      </Paper>
    );
  }
}