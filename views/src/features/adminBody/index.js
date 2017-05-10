import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Paper from 'MATERIALUI/Paper'

import Body from 'COMPONENTS/body'
import Tags from 'FEATURES/tags'
// import Recent from 'FEATURES/recent'

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

  // viewArticle = id =>{
  //   browserHistory.replace(`/articledetail/${id}`)
  // }

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
        <div id="mainContent">
          <div id="leftContent">
          </div>
          <div id="rightContent">
            {this.props.children}
          </div>
        </div>
      </Paper>
    );
  }
}