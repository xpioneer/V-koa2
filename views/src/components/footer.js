import React, {Component} from 'react';

import Paper from 'MATERIALUI/Paper';

const style = {
  height: 200,
  textAlign: 'center',
  fontSize: '18px',
  lineHeight: '100px',
  color: '#ffffff',
  backgroundColor: '#24292e'
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
          style={style}
          rounded={false}
          zDepth={1}>
          Welcome to VisualTech
        </Paper>
    );
  }
}