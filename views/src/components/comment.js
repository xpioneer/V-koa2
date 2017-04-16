import React, {Component} from 'react'

import Paper from 'MATERIALUI/Paper'
import TextField from 'MATERIALUI/TextField'
import FlatButton from 'MATERIALUI/FlatButton'

const style = {
  wrap: {
    margin: '30px 0px',
    padding: '10px'
  },
  txt:{
    fontSize: '14px'
  }
}

export default class Comment extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // console.log(this.props)

          // floatingLabelStyle={style.txt}
          // textareaStyle={style.txt}
          // hintStyle={style.txt}
  }

  render() {
    return (
      <Paper style={style.wrap}>
        <TextField
          multiLine={true}
          rowsMax={3}
          floatingLabelText="留言"
          hintText="说啥都是对作者的鼓励和鞭策^_^"
          fullWidth={true}/>
      </Paper>)
  }
}