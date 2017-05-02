import React, {Component} from 'react'

import Paper from 'MATERIALUI/Paper'
import TextField from 'MATERIALUI/TextField'
import FlatButton from 'MATERIALUI/FlatButton'
import {List, ListItem} from 'MATERIALUI/List'
import Subheader from 'MATERIALUI/Subheader'

const style = {
  comment: {
    margin: '10px'
  }
}

export default class CommentList extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // console.log(this.props)
  }

  render() {
    const { list } = this.props;
    return (
      <Paper>
        <List>
        <Subheader>评论列表</Subheader>
        {
          list.length > 0
            ? list.map((c, index)=>
              <ListItem
                key={index}
                primaryText={c.content}
                secondaryText={c.created_at}/>)
            : <ListItem
                primaryText='暂无评论'
                secondaryText='期待你的留言~'/>
        }
        </List>
      </Paper>)
  }
}