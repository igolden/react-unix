// Entrypoint

"use strict";

const lib = require('./terminal')

class Terminal {
  constructor(options) {
    this.editor      = new lib.editor()
    this.shell       = new lib.shell()
    this.user        = new lib.user()
    this.interpreter = new lib.interpreter()
    this.bindings    = lib.bindings
  }
  
  openVim() {
    console.log("OPENVIM")
  } 

  closeVim() {
    console.log("CLOSEVIM")
  }

  vimTest() {
    this.vim.codemirror()
  }
}

module.exports =  Terminal
