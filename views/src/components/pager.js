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

  render() {
    const {
      pager:{
        count,        //当前页数条数
        current_page, //当前页(默认1)
        per_page,     //每页条数(默认1)
        total,        //总数
        total_page    //总页数
      },
      flip
    } = this.props;
    return (
      <div style={style.wrap}>
        <div style={style.flex}>
          <div style={style.pager}>
            <FlatButton
              disabled={current_page == 1}
              onTouchTap={()=>flip('prev')}
              label="上一页"
              hoverColor="#ff8800"
              icon={<ChevronLeft/>} />
          </div>
          <div style={style.pager}>
            <FlatButton
              disabled={total == 0 || current_page*per_page >= total}
              onTouchTap={()=>flip('next')}
              label="下一页"
              hoverColor="#ff8800"
              labelPosition="before"
              icon={<ChevronRight/>} />
          </div>
        </div>
      </div>)
  }
}