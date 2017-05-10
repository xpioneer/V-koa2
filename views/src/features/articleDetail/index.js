import React, {Component} from 'react'
import { browserHistory } from 'react-router'

import ArticleDetailComponent from 'COMPONENTS/articleDetail'
import Comment from 'COMPONENTS/comment'
import CommentList from 'COMPONENTS/commentList'

let _id = null;

export default class ArticleDetail extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // console.log(this.props, '9999999999999999')
    _id = this.props.params.id;
    this.props.fetchArticle(this.props.params.id)
    this.props.fetchComment(this.props.params.id)
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.params.id;//其他文章
    if(_id !== id){
      _id = id;
      this.props.fetchArticle(id)
      this.props.fetchComment(id)
    }
  }

  componentWillUpdate(nextProps, nextState){
    // console.log(nextProps, nextState, 'componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, 'componentDidUpdate')
  }

  onSubmit = (value)=>{
    if(value.length > 0 && value.trim().length > 0){
      this.props.submitComment(this.props.params.id, value)
    }
  }

  render() {
    let { articleDetail:{ article, comment, commentDone, commentList }, setComment } = this.props;
    if(commentDone.msg == '评论成功'){
      this.props.fetchComment(this.props.params.id)
    }
    return (
      <div>
        <ArticleDetailComponent article={article}/>
        <Comment onSubmit={this.onSubmit} value={comment} setValue={setComment} commentSuccess={commentDone}/>
        <CommentList list={commentList}/>
      </div>)
  }
}