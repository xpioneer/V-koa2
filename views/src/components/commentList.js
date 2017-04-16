import React, {Component} from 'react'

import Paper from 'MATERIALUI/Paper'
import TextField from 'MATERIALUI/TextField'
import FlatButton from 'MATERIALUI/FlatButton'

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
      {
        list.map((c, index)=>
          <p key={index} style={style.comment}>{c.content}</p>
        )
      }
      </Paper>)
  }
}