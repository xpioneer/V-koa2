import React, {Component} from 'react';
import Paper from 'MATERIALUI/Paper';

const style = {
  list:{
    padding: '30px 30px 0'
  },
  wrap:{
    marginBottom: '30px',
    padding: '30px'
  },
  title:{
    fontSize: '24px'
  },
  body:{
    lineHeight: '24px'
  },
  footer:{
    lineHeight: '24px'
  }
}
const articleList = [{
  title: 'React Application',
  content: 'React Application1React Application1React Application111111111111111111111111111'
},{
  title: 'React 4312432143214',
  content: 'React Applicati5433reu59403qurdpeuwopqfeq0u598043u89re98qutr9037q5894037890329438'
},{
  title: '894380298403284-NODE3',
  content: 'React ApplicatifjdsaieouwqpeHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
},{
  title: 'React 4312432143214',
  content: 'React Applicati5433reu59403qurdpeuwopqfeq0u598043u89re98qutr9037q5894037890329438'
},{
  title: '894380298403284-NODE3',
  content: 'React ApplicatifjdsaieouwqpeHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
}]

export default class ArticleList extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props)
  }

  // handleToggle = () => this.setState({open: !this.state.open});

  // handleClose = () => this.setState({open: false});

  render() {
    // console.log(this.props)
    return (<div style={style.list}>
      {
        articleList.map((item, index)=>
          <Paper
            key={index}
            style={style.wrap}
            rounded={false}
            zDepth={1}>
            <div style={style.title}>{item.title}</div>
            <div style={style.body}>{item.content}</div>
            <div style={style.footer}>this is footer</div>
          </Paper>)
      }
    </div>)
  }
}