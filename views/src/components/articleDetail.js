import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'MATERIALUI/Card'
import FlatButton from 'MATERIALUI/FlatButton'


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
        <div dangerouslySetInnerHTML={{__html: article.content}}/>
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>)
  }
}