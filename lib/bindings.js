"use strict";

const Bindings = {
  ctrl_c: () => {
    console.log("Binds to <C-c>")
  },

  esc: () => {
    console.log("Binds to <Esc>")
  },
}

module.exports = Bindings;
