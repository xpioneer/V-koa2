import React, {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Paper from 'MATERIALUI/Paper'
import FlatButton from 'MATERIALUI/FlatButton'

import ArticleList from 'COMPONENTS/article'
import Pager from 'COMPONENTS/pager'

let _tag = null;

@connect(
  ({home})=>({home}),
  require('./redux/action').default
)
export default class Home extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props, 'componentDidMount')
    this.getArticlePage(this.props.params.tag);
  }

  componentWillReceiveProps(nextProps) {
    const tag = nextProps.params.tag;
    // console.log(tag, 'componentWillReceiveProps')
    this.getArticlePage(tag);
  }

  shouldComponentUpdate(nextProps){
    // console.log(nextProps, nextProps.params, 'shouldComponentUpdate')
    return 1;
  }

  getArticlePage(tag){
    let conditions = {
      current_page: 1,
      per_page: 10,
      orderBy:[{column: 'created_at', dir: 'desc'}]
    }
    
    if(tag && tag.length > 0){
      conditions.columnFilter = [{column: 'tag', exp: 'like', value: tag}];
    }
    // console.log(_tag, tag);
    if(_tag !== tag){//如果不同则发送请求
      _tag = tag;
      // console.log('请求')
      this.props.fetchList(conditions);
    }
  }

  readMore = id => {
    browserHistory.push(`/articledetail/${id}`)
  }

  flip = direct => {
    direct === 'prev'
      ? this.props.fetchList({current_page: this.props.home.articlePager.current_page-1, per_page: 10})
      : this.props.fetchList({current_page: this.props.home.articlePager.current_page+1, per_page: 10})
    console.log(direct)
  }

  render() {
    const { home: { articleList, articlePager } } = this.props;
    return (<div>
        <ArticleList list={articleList} viewMore={this.readMore}/>
        <Pager pager={articlePager} flip={this.flip}/>
      </div>)
  }
}

