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

@connect(
  ({body})=>({body}),
  require('./redux/action').default
)
export default class MainContent extends Component {

  componentDidMount(){
    console.log(this.props, 'body componentDidMount')
    this.props.fetchRecentList();
    this.props.fetchHotList();
    this.props.fetchTagList();
  }

  tagGroup = tag =>{
    console.log(tag)
    browserHistory.replace(`/tag/${encodeURIComponent(tag)}`)
  }

  viewArticle = id =>{
    browserHistory.replace(`/articledetail/${id}`)
  }

  render() {
    const { body:{ tagList, articleRecent, articleHot } } = this.props;
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
            <Tags
              tagList={tagList} hotList={articleHot} recentList={articleRecent}
              tagGroup={this.tagGroup} viewArticle={this.viewArticle}/>
          </div>
          <div id="rightContent">
            {this.props.children}
          </div>
        </div>
      </Paper>
    );
  }
}