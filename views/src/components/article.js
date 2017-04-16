import React, {Component} from 'react'
import Paper from 'MATERIALUI/Paper'
import FlatButton from 'MATERIALUI/FlatButton'

const style = {
  button:{
    height:'', width: '100%', marginBottom: '30px',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    textAlign: 'left'
  },
  wrap:{
    // marginBottom: '30px',
    padding: '30px 30px 10px'
  },
  title:{
    fontSize: '24px',
    // textAlign: 'center'
  },
  body:{
    lineHeight: '24px',
    padding: '10px 0'
  },
  footer:{
    borderTop: '1px solid #ebebeb',
    display: 'flex',
    alignItems: 'center'
  },
  desc: {
    flex: 3,
    fontSize: '14px'
  },
  desctxt: {
    marginRight: '8px',
    color: '#999999'
  },
  more: {
    flex: 1,
    fontSize: '14px',
    textAlign: 'center',
    color: '#f80'
  }
}

export default class Article extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // console.log(this.props)
  }

  render() {
    let { list, viewMore } = this.props;
    return (<div>
      {
        list.map((article, index)=>
          <FlatButton key={index} style={style.button} onTouchTap={()=>viewMore(article.id)}>
            <Paper
              style={style.wrap}
              rounded={false}
              zDepth={1}>
              <div style={style.title}>{article.title}</div>
              <div style={style.body}>{article.content}</div>
              <div style={style.footer}>
                <div style={style.desc}>
                  <span style={style.desctxt}>作者:{article.created_by}</span>
                  <span style={style.desctxt}>时间:{article.created_at}</span>
                  <span style={style.desctxt}>浏览量:{article.view_count}</span>
                </div>
                <div style={style.more}>点击查看更多</div>
              </div>
            </Paper>
          </FlatButton>)
        }
      </div>)
  }
}