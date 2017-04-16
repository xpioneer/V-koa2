import React, { Component } from 'react'
const style = {
  color: '#6b6464',
  fontSize: '66px',
  height: '200px',
  lineHeight: '200px',
  backgroundColor: '#ffecec',
  textAlign: 'center'
}

export default class NotFound extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    // alert('404 NOT FOUND')
    // this.context.router.replace('/')
  }

  render () {
    // 非实体组件需显式返回 null
    // return null
    return <div style={style}>404</div>
  }
}
