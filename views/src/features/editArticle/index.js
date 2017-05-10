import React, {Component} from 'react'
import { browserHistory } from 'react-router'

import QuillEditor from 'COMPONENTS/editor'


let _id = null;

export default class ArticleDetail extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props, '9999999999999999')
    _id = this.props.params.id;
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.params.id;//其他文章
    if(_id !== id){
      _id = id;
    }
  }

  componentWillUpdate(nextProps, nextState){
    // console.log(nextProps, nextState, 'componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, 'componentDidUpdate')
  }

  render() {
    return (
      <div style={{height: '200px'}}>
        <QuillEditor/>
      </div>)
  }
}