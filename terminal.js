"use strict";

require('./lib');

let options  = {
  shell: "bash",
  editor: "vim",
  file_tree: "",
  commands: "",
}

let terminal = new Terminal();

console.log(CLI.config)

class Terminal {
  constructor(options) {
  }
  
  openVim() {
    console.log("OPENVIM")
  } 

  closeVim() {
    console.log("CLOSEVIM")
  }

  vimTest() {
    this.vim.codemirror
  }
}

module.exports =  Terminal
// @util show(component) -- toggles visibility for component

