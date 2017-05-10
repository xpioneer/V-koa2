import React, {Component} from 'react'

import Paper from 'MATERIALUI/Paper'

import Quill from 'quill'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

const style = {
  wrap:{
    height: '100%'
  },
  text:{
    width: '100%',
    height: '100%'
  }
};

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['link', 'image'],

  ['clean']                                         // remove formatting button
];
console.log(navigator.userAgent)
export default class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentDidMount(){
    console.log(this.refs.quillEditor)
    const QuillEditor = new Quill(this.refs.quillEditor, {
      placeholder: '请输入您要写的内容...',
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      }
    });
  }

  render() {
    return (
        <Paper
          style={style.wrap}
          rounded={false}
          zDepth={1}>
          <div style={style.text} ref="quillEditor"></div>
        </Paper>
    );
  }
}