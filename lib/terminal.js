"use strict";

class Terminal {
  constructor(options) {
    this.vim = new VimEditor()
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
// @util show(component) -- toggles visibility for component

