import React, {Component} from 'react'

import Paper from 'MATERIALUI/Paper'
import TextField from 'MATERIALUI/TextField'
import FlatButton from 'MATERIALUI/FlatButton'
import Snackbar from 'MATERIALUI/Snackbar'

const style = {
  wrap: {
    margin: '30px 0px',
    padding: '10px',
    position: 'relative'
  },
  txt:{
    fontSize: '14px'
  },
  tip:{
    position: 'absolute',
    width: '50%',
    top: '10px'
  }
}

export default class Comment extends Component {
  // propTypes = {
  //   title: React.PropTypes.string.isRequired
  // }

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
    const { value, onSubmit, setValue, commentSuccess } = this.props;
    return (
      <Paper style={style.wrap}>
        <Snackbar
          style={style.tip}
          open={commentSuccess.done}
          message={commentSuccess.msg}
          autoHideDuration={2000}/>
        <TextField
          multiLine={true}
          rowsMax={3}
          value={value}
          onChange={(e, newValue)=>{setValue(newValue)}}
          floatingLabelText="留言"
          hintText="说啥都是对作者的鼓励和鞭策^_^"
          fullWidth={true}/>
        <FlatButton
          primary={true}
          label="发表评论"
          onTouchTap={()=>onSubmit(value)}/>
      </Paper>)
  }
}