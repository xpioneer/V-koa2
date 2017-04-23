import React, {Component} from 'react'
import { browserHistory } from 'react-router'

import ArticleDetailComponent from 'COMPONENTS/articleDetail'
import Comment from 'COMPONENTS/comment'
import CommentList from 'COMPONENTS/commentList'


const list = [
  {
    title: 'hehe1',
    content: 'r439t938tureqpro34u'
  },
  {
    title: 'hehe2',
    content: 'riopewgiofjdsaiofhioefdsvds'
  },
  {
    title: 'hehe3',
    content: 'jlkfgdajflkdjsa;ure9qwuprewqopirue9iwjadfckldslkfjdshiagfidlsj'
  },
  {
    title: 'hehe4',
    content: '43254654w35urewiqoorjewq54354332'
  },
]

let _id = null;

export default class ArticleDetail extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // console.log(this.props, 'articleDetail')
    _id = this.props.params.id;
    this.props.fetchArticle(this.props.params.id)
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log(nextProps, nextState, 'shouldUpdate')
    return true;
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.params.id;
    // console.log(id, 'componentWillReceiveProps')
    if(_id !== id){
      _id = id;
      this.props.fetchArticle(id)
    }
  }

  componentWillUpdate(nextProps, nextState){
    // console.log(nextProps, nextState, 'componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, 'componentDidUpdate')
  }

  render() {
    let { articleDetail:{ article } } = this.props;
    return (
      <div>
        <ArticleDetailComponent article={article}/>
        <Comment/>
        <CommentList list={list}/>
      </div>)
  }
}