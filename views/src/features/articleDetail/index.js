import React, {Component} from 'react'

import ArticleDetailComponent from 'COMPONENTS/articleDetail'
import Comment from 'COMPONENTS/comment'
import CommentList from 'COMPONENTS/commentList'

const articleList = [{
  id: 'ab432b324b32c1321',
  title: 'React Application',
  content: 'React Application1React Application1React Application111111111111111111111111111',
  created_username: 'qinfeng1',
  view_count: '99'
},{
  id: '4321rewq432rre21',
  title: 'React 4312432143214',
  content: 'React Applicati5433reu59403qurdpeuwopqfeq0u598043u89re98qutr9037q5894037890329438',
  created_username: 'qinfeng1',
  view_count: '399'
},{
  id: '5432rewqr32c1321',
  title: '894380298403284-NODE3',
  content: 'React ApplicatifjdsaieouwqpeHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH5555555555heheh呵呵呵呵呵呵',
  created_username: 'qinfeng1',
  view_count: '99'
},{
  id: '4rewfewfq2b324b32c1321',
  title: 'React 4312432143214',
  content: 'React Applicati5433reu59403qurdpeuwopqfeq0u598043u89re98qutr9037q5894037890329438',
  created_username: 'qinfeng1',
  view_count: '199'
},{
  id: 'ab432b324b3r21343243',
  title: '894380298403284-NODE3',
  content: 'React ApplicatifjdsaieouwqpeHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
  created_username: 'qinfeng1',
  view_count: '99'
}]


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

export default class ArticleDetail extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props, 'articleDetail')
    this.props.fetchArticle(this.props.params.id)
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