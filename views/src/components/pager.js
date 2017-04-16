import React, {Component} from 'react'
import FlatButton from 'MATERIALUI/FlatButton'
import ChevronLeft from 'MATERIALUI/svg-icons/navigation/chevron-left'
import ChevronRight from 'MATERIALUI/svg-icons/navigation/chevron-right'

import Paper from 'MATERIALUI/Paper'

const style = {
  wrap:{
    padding: '0px 30px 30px'
  },
  flex:{
    display: 'flex'
  },
  pager:{
    flex: 1,
    textAlign: 'center'
  }
}

export default class Pager extends Component {

  constructor(props) {
    super(props);
  }

  // handleToggle = () => this.setState({open: !this.state.open});

  // handleClose = () => this.setState({open: false});

  render() {
    // console.log(this.props)
    return (
      <div style={style.wrap}>
        <div style={style.flex}>
          <div style={style.pager}>
            <FlatButton label="上一页" hoverColor="#ff8800" icon={<ChevronLeft/>} />
          </div>
          <div style={style.pager}>
            <FlatButton label="下一页" hoverColor="#ff8800" labelPosition="before" icon={<ChevronRight/>} />
          </div>
        </div>
      </div>)
  }
}