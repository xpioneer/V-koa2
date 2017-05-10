import React, { Component } from 'react'

import Paper from 'MATERIALUI/Paper'

const welcomBanner = require('ASSETS/images/welcome.jpg')
// console.log(welcomBanner)
const style = {
  banner:{
    height: '460px',
    background: 'url('+welcomBanner+') center center #505458 no-repeat'
  },
  title:{
    paddingTop: '160px',
    textAlign: 'center',
    fontSize: '40px',
    // color: '#ffffff',
    color: '#001f4b'
  },
  subtitle:{
    textAlign: 'center',
    fontSize: '18px',
    // color: '#ffffff',
    color: '#001f4b'
  }
};


export default class AdminContent extends Component {

  componentDidMount(){
    // this.props.fetchRecentList();
  }


  render() {
    // const { body:{ tagList, articleRecent, articleHot } } = this.props;
    return (
      <Paper
        rounded={false}
        zDepth={1}>
        <div id="banner" style={style.banner}>
          <h2 id="title" style={style.title}>WEB DESIGNER</h2>
          <h3 style={style.subtitle}>keep moving</h3>
        </div>
        呵呵哒1111
      </Paper>
    );
  }
}