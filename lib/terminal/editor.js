class VimEditor {
  constructor(path) {
    //this.file = fs.open(path, () => console.log('Setup file'))
    this.codemirror = this.codemirror.bind(this)
  }
  codemirror() {
      //<CodeMirror vim={true}/>
      return "hello world"
  }
} 

module.exports = VimEditor;
