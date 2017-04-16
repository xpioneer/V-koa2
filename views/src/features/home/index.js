import React, {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Paper from 'MATERIALUI/Paper'
import FlatButton from 'MATERIALUI/FlatButton'

import ArticleList from 'COMPONENTS/article'

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
    textAlign: 'center'
  },
  moretxt: {
    background: 'red',
    color: '#ffffff',
    borderRadius: '4px',
    padding: '2px 4px'
  }
}

@connect(
  ({home})=>({home}),
  require('./redux/action').default
)
export default class Home extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props)
    this.props.fetchList();
  }

  readMore = (id) => {
    console.log(id, 888)
    browserHistory.push(`articledetail/${id}`)
  }

  render() {
    const { home: { articleList } } = this.props;
    return (<ArticleList list={articleList} viewMore={this.readMore}/>)
  }
}

