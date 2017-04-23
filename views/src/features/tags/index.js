import React, {Component} from 'react'
import Chip from 'MATERIALUI/Chip'
import Paper from 'MATERIALUI/Paper'
import FlatButton from 'MATERIALUI/FlatButton'

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
  button: {
    height:'',
    width: '100%',
    textAlign: 'left',
    borderBottom: '1px solid rgb(235, 235, 235)'
  },
  time:{
    color: '#aaaaaa'
  }
}

export default class Tags extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log(this.props)
  }

  render() {
    const {
      tagList, recentList, hotList,
      tagGroup, viewArticle
    } = this.props;
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
          {
            tagList.map((m, index)=><Chip key={index} style={style.chip} onTouchTap={()=>tagGroup(m.name)}>{m.name}</Chip>)
          }
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
        {
          recentList.map((m, index)=>{
            return <FlatButton key={index} style={style.button} onTouchTap={()=>viewArticle(m.id)}>
              <div>{m.title} <span style={style.time}>{m.created_at}</span></div>
            </FlatButton>
          })
        }
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
        {
          hotList.map((m, index)=>{
            return <FlatButton key={index} style={style.button} onTouchTap={()=>viewArticle(m.id)}>
              <div>{m.title} <span style={style.time}>{m.created_at}</span></div>
            </FlatButton>
          })
        }
      </div>
    </Paper>
    
    </div>)
  }
}