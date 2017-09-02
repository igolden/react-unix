class VimEditor {
  constructor(path) {
    //this.file = fs.open(path, () => console.log('Setup file'))
    this.codeMirror = codeMirror.this.bind(this)
  }
  codemirror() {
      //<CodeMirror vim={true}/>
      return "hello world"
  }
} 

module.exports = VimEditor;
