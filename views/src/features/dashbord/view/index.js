import React, {Component} from 'react';
import { connect } from 'react-redux'
import Paper from 'MATERIALUI/Paper';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';

import Aside from 'COMPONENTS/aside'
import ArticleList from 'COMPONENTS/articleList1'
import Pager from 'COMPONENTS/pager'

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
    // lineHeight: '40px',
    color: '#ffffff',
  },

  mainContent:{
    display: 'flex'
  },
  left:{
    flex: 1
  },
  right:{
    flex: 2
  }
};
const iconStyle = {
  color: 'red',
  width: '44px',
  height: '44px'
}

@connect( // 功能同 UTIL/createContainer
  ({dashbord}) => ({dashbord}),
  require('../redux/action').default
)
export default class Dashbord extends Component {

  constructor(props) {
    super(props);
  }

  // handleToggle = () => this.setState({open: !this.state.open});

  // handleClose = () => this.setState({open: false});

  render() {
    let {dashbord, likeAction, notLikeAction, loading} = this.props;
    console.log(this.props, 'dashbord')
    return (
        <Paper
          rounded={false}
          zDepth={1}>
          <div style={style.banner}>
            <h1 style={style.title}>WEB DESIGNER</h1>
            <h2 style={style.subtitle}>keep moving</h2>
            <div style={{textAlign:'center'}}>
              <IconButton
                onClick={dashbord.like?notLikeAction:likeAction}
                iconStyle={iconStyle}
                style={{width:'68px',height:'68px'}}>
                <Favorite style={iconStyle} color={dashbord.like?'red':'#ffffff'}/>
              </IconButton>
            </div>
          </div>
          <div style={style.mainContent}>
            <div style={style.left}>
              <Aside/>
            </div>
            <div style={style.right}>
              <ArticleList/>
              <Pager/>
            </div>
          </div>
        </Paper>
    );
  }
}