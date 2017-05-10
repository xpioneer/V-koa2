import React, {Component} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'MATERIALUI/Card'
import FlatButton from 'MATERIALUI/FlatButton'
// import FlatButton from 'MATERIALUI/Action/StarRate'
import Stars from 'MATERIALUI/svg-icons/action/stars'

const style={
  conent: {
    overflow: 'auto',
    width: '100%'
  },
  original:{
    padding: '16px',
    fontSize: '14px',
    color: 'rgba(33, 150, 243, 1)'
  }
}

export default class ArticleDetail extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // console.log(this.props)
  }

  render() {
    let { article } = this.props;
    return (<Card>
      {
        // <CardMedia
        //       overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        //     >
        //       <img src="images/nature-600-337.jpg" />
        //     </CardMedia>
      }
      <CardTitle title={article.title} subtitle={article.created_username} />
      <CardText>
        <div style={style.conent} dangerouslySetInnerHTML={{__html: article.content}}/>
      </CardText>
      {article.is_original?<div style={style.original}>作者原创，转载请指明地址！</div>:''}
    </Card>)
  }
}