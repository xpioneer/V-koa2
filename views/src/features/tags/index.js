import React, {Component} from 'react'
import Chip from 'MATERIALUI/Chip'
import Paper from 'MATERIALUI/Paper'

const style = {
  paper: {
    marginBottom: '40px'
  },
  chip: {
    margin: 4,
  },
  flex: {
    padding: '0 20px 20px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    paddingLeft: '20px',
    lineHeight: '40px',
    position: 'relative'
  },
  line: {
    display: 'block',
    position: 'absolute',
    width: '80px',
    height: '2px',
    backgroundColor: '#03a9f4',
    bottom: '2px'
  },
}

export default class Tags extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log(this.props)
  }

  handleTouchTap = (e) =>{
    console.log('你点击了...', e)
  }

  render() {
    // console.log(this)
    return (<div>
      <Paper
        style={style.paper}
        rounded={false}
        zDepth={1}>
        <div style={style.title}>
          标签
          <i style={style.line}></i>
        </div>
        <div style={style.flex}>
          <Chip style={style.chip} onTouchTap={this.handleTouchTap}>React</Chip>
          <Chip style={style.chip} onTouchTap={this.handleTouchTap}>Vue2.0</Chip>
          <Chip style={style.chip}>Angular1</Chip>
          <Chip style={style.chip}>jQuery</Chip>
        </div>
      </Paper>

    <Paper
      style={style.paper}
      rounded={false}
      zDepth={1}>
      <div style={style.title}>
        最新
        <i style={style.line}></i>
      </div>
      <div style={style.flex}>
        <Chip style={style.chip} onTouchTap={()=>this.handleTouchTap(123)}>React</Chip>
        <Chip style={style.chip} onTouchTap={this.handleTouchTap}>Vue2.0</Chip>
        <Chip style={style.chip}>Angular1</Chip>
        <Chip style={style.chip}>jQuery</Chip>
      </div>
    </Paper>
    
    <Paper
      style={style.paper}
      rounded={false}
      zDepth={1}>
      <div style={style.title}>
        热门
        <i style={style.line}></i>
      </div>
      <div style={style.flex}>
        <Chip style={style.chip} onTouchTap={this.handleTouchTap}>React</Chip>
        <Chip style={style.chip} onTouchTap={this.handleTouchTap}>Vue2.0</Chip>
        <Chip style={style.chip}>Angular1</Chip>
        <Chip style={style.chip}>jQuery</Chip>
      </div>
    </Paper>
    
    </div>)
  }
}