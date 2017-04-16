import React, { Component } from 'react';

const style = {
  // minHeight: '400px'
}

// const Body = () => <div style={style}>{this.props.children}</div>

// export default Body;


export default class MainContent extends Component {

  // static propTypes = {
  //   children: React.PropTypes.any,
  // };

  render() {
    return (
      <div id="main-content" style={style}>
        {this.props.children}
      </div>
    );
  }
}