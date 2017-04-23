import React, {Component} from 'react';

import Paper from 'MATERIALUI/Paper';

const style = {
  wrap:{
    paddingTop: '20px',
    height: '160px',
    backgroundColor: '#24292e'
  },
  txt:{
    textAlign: 'center',
    fontSize: '14px',
    color: '#eee',
    marginTop: '20px'
  },
  link:{
    padding: '0 8px',
    color: '#ffffff',
    textDecoration: 'none'
  }
};


export default class SiderBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
        <Paper
          style={style.wrap}
          rounded={false}
          zDepth={1}>
          <div style={style.txt}>
            <a href="javascript:;" style={style.link}>网站简介</a>
            <a href="javascript:;" style={style.link}>使用说明</a>
          </div>
          <p style={style.txt}>Copyright © 2017 VisualTec，Technology Support By Keefe</p>
          <p style={style.txt}>Email：qinfengwangyi@163.com</p>
        </Paper>
    );
  }
}